import { grpc } from "@improbable-eng/grpc-web";
import { END, eventChannel } from "redux-saga";
import { ListAllTwinsRequest, ListAllTwinsResponse } from ".";
import {
    TwinAPIClient,
    ServiceError,
} from "./client/iotics/api/twin_pb_service";
import { Headers, Range, Limit, Offset } from "./client/iotics/api/common_pb";
import { getShortUUID } from "./helpers";

const PAGE_LENGTH = 100;
const STATUS_OK = "OK";

export interface IListResult {
    status: string;
    results?: ListAllTwinsResponse.Payload;
}

const listResult: IListResult = { status: "INIT" };

const requestListAllTwins = (
    client: TwinAPIClient,
    clientAppId: string,
    metadata: grpc.Metadata,
    page: number,
    callback: any
) => {
    const request = new ListAllTwinsRequest();
    const headers = new Headers();
    const range = new Range();
    const limit = new Limit();
    const offset = new Offset();
    clientAppId = getShortUUID();

    headers.setClientappid(clientAppId);
    headers.setClientref(`${clientAppId}_page${page}`);
    headers.setTransactionrefList([clientAppId]);
    limit.setValue(PAGE_LENGTH);
    offset.setValue(PAGE_LENGTH * page);
    range.setLimit(limit);
    range.setOffset(offset);
    request.setRange(range);
    request.setHeaders(headers);

    client.listAllTwins(request, metadata, callback);
};

const callBackListAllTwins = (
    emit: (input: unknown) => void,
    client: TwinAPIClient,
    clientAppId: string,
    metadata: grpc.Metadata
) => {
    const listCallback = (
        error: ServiceError | null,
        responseMessage: ListAllTwinsResponse | null
    ) => {
        const headers = responseMessage?.getHeaders();
        const clientRef = headers?.getClientref();
        const page = parseInt(clientRef!.split("_page")[1], 10);
        const payload = responseMessage?.getPayload();
        const twins = payload?.getTwinsList();

        if (error) {
            // eslint-disable-next-line no-console
            console.warn("listAllTwinsApi:", error);
            listResult.status = `ERROR ${error.message}`;
            listResult.results = undefined;
            emit(listResult);
            emit(END);
            return;
        }
        if (responseMessage == null) {
            const msg = "ERROR: Response message is null.";
            // eslint-disable-next-line no-console
            console.warn(msg);
            listResult.status = msg;
            listResult.results = undefined;
            emit(listResult);
            emit(END);
            return;
        }

        if (!payload) {
            const msg = "listAllTwinsApi: Payload is empty.";
            // eslint-disable-next-line no-console
            console.warn(msg);
            listResult.status = msg;
            listResult.results = undefined;
            emit(listResult);
            emit(END);
            return;
        }

        listResult.status = STATUS_OK;
        listResult.results = payload;
        emit(listResult);

        if (twins && twins.length >= PAGE_LENGTH) {
            requestListAllTwins(
                client,
                clientAppId,
                metadata,
                page + 1,
                listCallback
            );
        }
    };
    return listCallback;
};

export const listAllTwins = (hostAddress: string, accessToken: string) => {
    const client = new TwinAPIClient(hostAddress);
    const metadata = new grpc.Metadata();
    const clientAppId = getShortUUID();
    metadata.set("authorization", `bearer ${accessToken}`);

    return eventChannel((emit) => {
        requestListAllTwins(
            client,
            clientAppId,
            metadata,
            0,
            callBackListAllTwins(emit, client, clientAppId.toString(), metadata)
        );
        return () => {
            // the subscriber must return an unsubscribe function
            // https://redux-saga.js.org/docs/advanced/Channels/
            // In this case nothing to be done here
        };
    });
};
