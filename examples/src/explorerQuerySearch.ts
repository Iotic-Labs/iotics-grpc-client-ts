import { NodeHttpTransport } from "@improbable-eng/grpc-web-node-http-transport";
import { END, EventChannel } from "redux-saga";

import {
    grpc,
    explorerQuery,
    GRPCStatusCodes,
    IQueryResult,
    Scope,
    SparqlResultType,
} from "../../src";

const DEFAULT_TIMEOUT = 20;
// Enable the use of gRPC-Web in NodeJS.
grpc.setDefaultTransport(NodeHttpTransport());

function* search(channel: EventChannel<IQueryResult>) {
    let result: IQueryResult|END;
    try {
        try {
            while (true) {
                console.info("Wait for a message...");
                channel?.take((message: IQueryResult | END) => {
                    const msg = message as IQueryResult;
                    result = message;
                    // if (message !== END) {
                    //     console.info(
                    //         "Message received with status:",
                    //         msg.status
                    //         );
                    //     if (msg.status.message === "OK" && msg?.results) {
                    //         console.info("Query results:");
                    //         console.info(msg?.results.data);
                            
                    //     } else {
                    //         if (
                    //             msg?.status?.code ===
                    //             GRPCStatusCodes.UNAUTHENTICATED
                    //         ) {
                    //             console.warn(
                    //                 "The GRPC_TOKEN has expired please set another one."
                    //             );
                    //         } else if (
                    //             msg?.status?.code !==
                    //             GRPCStatusCodes.DEADLINE_EXCEEDED
                    //         ) {
                    //             // if not context deadline exceeded messages
                    //             console.warn("Query error:", msg?.status);
                    //         }
                    //     }
                    // } else {
                    //     console.log("Message ended");
                    // }
                });
                yield result
            }
        } catch (error) {
            console.warn("Unhandled explorerQueryResultsWatcher error:", error);
        }
    } finally {
        channel.close();
        console.info("Channel closed.");
    }
}

export const runExplorerQuerySearch = (keyword: string) => {
    // Get values from environment variables:
    const url = process.env.GRPC_URL;
    const token = process.env.GRPC_TOKEN;
    const timeoutInS = parseFloat(
        process.env.GRPC_TIMEOUT ?? DEFAULT_TIMEOUT.toString()
    );

    if (!url) {
        console.error('Required "GRPC_URL" environment variable is not set!');
        process.exit(1);
    }
    if (!token) {
        console.error('Required "GRPC_TOKEN" environment variable is not set!');
        process.exit(1);
    }

    console.info(`Query for twin models in "${url}".`);
    const channel: EventChannel<IQueryResult> = explorerQuery(
        token,
        url,
        keyword,
        Scope.GLOBAL,
        SparqlResultType.RDF_TURTLE,
        timeoutInS
    ) as EventChannel<IQueryResult>;
    const searchGenerator = search(channel);
    let it = searchGenerator.next();
    console.info("Query results:");
    console.info("XXX", it);
    // for (const message of searchGenerator) {
    //     console.log(message);
    // }
    // while (!value.done) {
    // console.info(value.value);
    // value = searchGenerator.next();
    // }
};
