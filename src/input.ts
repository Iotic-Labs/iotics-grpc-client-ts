import { grpc } from '@improbable-eng/grpc-web';
import { END, eventChannel } from 'redux-saga';

import * as pbCommonModel from './client/iotics/api/common_pb';
import * as pbInput from './client/iotics/api/input_pb';
import {
    DeleteInputRequest,
    DeleteInputResponse,
    DescribeInputRequest,
    DescribeInputResponse,
    ReceiveInputMessageRequest,
    ReceiveInputMessageResponse,
} from './client/iotics/api/input_pb';
import { getShortUUID, Status, TOKEN_EXPIRED_STATUS_CODE } from './helpers';
import { InputAPIClient } from './client/iotics/api/input_pb_service';

export interface IInputResult {
    status: string;
    results?: ReceiveInputMessageResponse.Payload;
}

export const describeInput = async (
    grpcUrl: string,
    accessToken: string,
    twinId: string,
    inputId: string,
    remoteHostId?: string,
) => {
    return new Promise<DescribeInputResponse>((resolve, reject) => {
        const client = new InputAPIClient(grpcUrl);
        const clientAppId = getShortUUID();
        const metadata = new grpc.Metadata();
        metadata.set('authorization', `bearer ${accessToken}`);

        const requestMessage = new DescribeInputRequest();
        const headers = new pbCommonModel.Headers();
        headers.setClientappid(clientAppId);
        headers.setTransactionrefList([clientAppId]);
        requestMessage.setHeaders(headers);

        const input = new pbInput.InputID();
        input.setId(inputId);
        input.setTwinid(twinId);
        if (remoteHostId) {
            input.setHostid(remoteHostId);
        }

        const args = new DescribeInputRequest.Arguments();
        args.setInputid(input);

        requestMessage.setArgs(args);

        client.describeInput(requestMessage, metadata, (err, response) => {
            if (err || !response) {
                reject(err ?? new Error('Empty response'));
            } else {
                resolve(response);
            }
        });
    });
};

export const deleteInput = async (grpcUrl: string, accessToken: string, twinId: string, inputId: string) => {
    return new Promise<DeleteInputResponse>((resolve, reject) => {
        const client = new InputAPIClient(grpcUrl);
        const clientAppId = getShortUUID();
        const metadata = new grpc.Metadata();
        metadata.set('authorization', `bearer ${accessToken}`);

        const requestMessage = new DeleteInputRequest();
        const headers = new pbCommonModel.Headers();
        headers.setClientappid(clientAppId);
        headers.setTransactionrefList([clientAppId]);
        requestMessage.setHeaders(headers);

        const input = new pbInput.InputID();
        input.setId(inputId);
        input.setTwinid(twinId);

        const args = new DeleteInputRequest.Arguments();
        args.setInputid(input);

        requestMessage.setArgs(args);

        client.deleteInput(requestMessage, metadata, (err, response) => {
            if (err || !response) {
                reject(err ?? new Error('Empty response'));
            } else {
                resolve(response!);
            }
        });
    });
};

/**
 * Start listening for input messages and emit them into a channel
 * @param twinId the DID of the twin with the input
 * @param inputId the name of the input
 * @returns a channel that emits input messages
 */
export const receiveInputMessages = (grpcUrl: string, accessToken: string, twinId: string, inputId: string) => {
    return eventChannel<ReceiveInputMessageResponse.Payload | IInputResult>((emit) => {
        const inputAPIClient = new InputAPIClient(grpcUrl);

        const metadata = new grpc.Metadata();
        metadata.set('authorization', `bearer ${accessToken}`);

        const input = new pbInput.InputID();
        input.setId(inputId);
        input.setTwinid(twinId);

        const requestMessage = new ReceiveInputMessageRequest();

        const args = new ReceiveInputMessageRequest.Arguments();
        args.setInputid(input);
        requestMessage.setArgs(args);

        const headers = new pbCommonModel.Headers();
        const clientAppId = getShortUUID();
        headers.setClientappid(clientAppId);
        headers.setTransactionrefList([clientAppId]);
        requestMessage.setHeaders(headers);

        const respStream = inputAPIClient.receiveInputMessages(requestMessage, metadata);

        respStream.on('data', (handler) => {
            const responsePayload = handler.getPayload();
            if (!responsePayload) {
                // eslint-disable-next-line no-console
                console.warn('grpc::ReceiveInputMessageResponse empty payload.');
                emit({ status: Status.ERROR } as IInputResult);
                emit(END);
                return;
            }

            emit({
                status: Status.OK,
                results: responsePayload,
            } as IInputResult);
        });

        respStream.on('end', (status) => {
            // emit the token expired message so that the client
            // can restart the recieve
            if (status?.code === TOKEN_EXPIRED_STATUS_CODE) {
                emit({
                    status: Status.TOKEN_EXPIRED,
                });
            }

            emit(END);
        });

        return () => {
            respStream.cancel();
        };
    });
};
