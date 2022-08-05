/**
 * @license
 * Copyright © 2022 IOTIC LABS LTD. info@iotics.com
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://github.com/Iotic-Labs/iotics-grpc-client-ts/blob/main/LICENSE
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * SPDX-License-Identifier: Apache-2.0
 */

import { grpc } from '@improbable-eng/grpc-web';
import {
    DescribeTwinResponse,
    DescribeTwinRequest,
    UpsertTwinRequest,
    UpsertTwinResponse,
    UpdateTwinRequest,
    UpdateTwinResponse,
    VisibilityUpdate,
    GeoLocationUpdate,
    DeleteTwinResponse,
    DeleteTwinRequest,
} from './client/iotics/api/twin_pb';
import { GeoLocation, Headers, HostID, Property, PropertyUpdate, TwinID } from './client/iotics/api/common_pb';
import { UpsertFeedWithMeta } from './client/iotics/api/feed_pb';
import { TwinAPIClient } from './client/iotics/api/twin_pb_service';
import { getShortUUID } from './helpers';

/**
 * Scope is a request parameter used to apply a scope to a given request.
 * GLOBAL - go over the network/target the public Twin.
 * LOCAL - restrain the request to the local host.
 * @export
 * @enum {number}
 */
export enum Scope {
    GLOBAL = 0,
    LOCAL = 1,
}

/**
 * Visibility defines who a twin is visible to.
 * PRIVATE - the twin is only visible in a LOCAL scope.
 * PUBLIC - the twin is visible in any scope.
 * @export
 * @enum {string}
 */
export enum Visibility {
    Private = 0,
    Public = 1,
}

export const describeTwinApi = async (
    hostAddress: string,
    accessToken: string,
    clientRef: string,
    clientAppId: string,
    twinId: string,
    remoteHostId?: string,
    transactionRef?: string,
) => {
    return new Promise<DescribeTwinResponse.Payload>((resolve, reject) => {
        const client = new TwinAPIClient(hostAddress);
        const metadata = new grpc.Metadata();
        metadata.set('authorization', `bearer ${accessToken}`);
        const request = new DescribeTwinRequest();
        const headers = new Headers();
        headers.setClientappid(clientAppId);
        headers.setClientref(clientRef);
        if (transactionRef || remoteHostId) {
            // transaction ref needs to be set if querying a remote host
            headers.setTransactionrefList([transactionRef ?? getShortUUID()]);
        }
        request.setHeaders(headers);
        const twin = new TwinID();
        twin.setValue(twinId);
        const args = new DescribeTwinRequest.Arguments();
        args.setTwinid(twin);

        if (remoteHostId) {
            const host = new HostID();
            host.setValue(remoteHostId);
            args.setRemotehostid(host);
        }

        request.setArgs(args);
        client.describeTwin(request, metadata, (error, responseMessage) => {
            if (error) {
                // eslint-disable-next-line no-console
                console.warn('describeTwinApi:', error);
                reject(error);
                return;
            }
            if (responseMessage == null) {
                const msg = 'describeTwinApi: Response message is null.';
                // eslint-disable-next-line no-console
                console.warn(msg);
                reject(new Error(msg));
                return;
            }
            const payload = responseMessage.getPayload();
            if (!payload) {
                const msg = 'describeTwinApi: Payload is empty.';
                // eslint-disable-next-line no-console
                console.warn(msg);
                reject(new Error(msg));
                return;
            }
            resolve(payload);
        });
    });
};

export const upsertTwinApi = async (
    hostAddress: string,
    accessToken: string,
    clientRef: string,
    clientAppId: string,
    twinId: string,
    visibility: Visibility,
    properties: Array<Property>,
    feedsList: Array<UpsertFeedWithMeta>,
    geoLocation: GeoLocation | undefined,
    transactionRef?: string,
) => {
    return new Promise<UpsertTwinResponse.Payload>((resolve, reject) => {
        const client = new TwinAPIClient(hostAddress);
        const metadata = new grpc.Metadata();
        metadata.set('authorization', `bearer ${accessToken}`);
        const request = new UpsertTwinRequest();
        const headers = new Headers();
        headers.setClientappid(clientAppId);
        headers.setClientref(clientRef);
        if (transactionRef) {
            headers.setTransactionrefList([transactionRef]);
        }
        request.setHeaders(headers);

        const twin = new TwinID();
        twin.setValue(twinId);
        const payload = new UpsertTwinRequest.Payload();
        payload.setTwinid(twin.getValue());

        payload.setVisibility(visibility);
        payload.setLocation(geoLocation);
        payload.setPropertiesList(properties);
        payload.setFeedsList(feedsList);

        request.setPayload(payload);
        client.upsertTwin(request, metadata, (error, responseMessage) => {
            if (error) {
                // eslint-disable-next-line no-console
                console.warn('upsertTwinApi:', error);
                reject(error);
                return;
            }
            if (responseMessage == null) {
                const msg = 'upsertTwinApi: Response message is null.';
                // eslint-disable-next-line no-console
                console.warn(msg);
                reject(new Error(msg));
                return;
            }
            const responsePayload = responseMessage.getPayload();
            if (!responsePayload) {
                const msg = 'upsertTwinApi: Payload is empty.';
                // eslint-disable-next-line no-console
                console.warn(msg);
                reject(new Error(msg));
                return;
            }
            resolve(responsePayload);
        });
    });
};

export const updateTwinApi = async (
    hostAddress: string,
    accessToken: string,
    clientRef: string,
    clientAppId: string,
    twinId: string,
    visibilityUpdate?: VisibilityUpdate,
    propertyUpdate?: PropertyUpdate,
    geoLocationUpdate?: GeoLocationUpdate,
    transactionRef?: string,
) => {
    return new Promise<UpdateTwinResponse.Payload>((resolve, reject) => {
        const client = new TwinAPIClient(hostAddress);
        const metadata = new grpc.Metadata();
        metadata.set('authorization', `bearer ${accessToken}`);
        const request = new UpdateTwinRequest();
        const headers = new Headers();
        headers.setClientappid(clientAppId);
        headers.setClientref(clientRef);
        if (transactionRef) {
            headers.setTransactionrefList([transactionRef]);
        }
        request.setHeaders(headers);

        const payload = new UpdateTwinRequest.Payload();

        if (visibilityUpdate !== undefined) {
            payload.setNewvisibility(visibilityUpdate);
        }
        if (geoLocationUpdate !== undefined) {
            payload.setLocation(geoLocationUpdate);
        }
        if (propertyUpdate !== undefined) {
            payload.setProperties(propertyUpdate);
        }

        const twin = new TwinID();
        twin.setValue(twinId);
        const args = new UpdateTwinRequest.Arguments();
        args.setTwinid(twin);
        request.setArgs(args);
        request.setPayload(payload);
        client.updateTwin(request, metadata, (error, responseMessage) => {
            if (error) {
                // eslint-disable-next-line no-console
                console.warn('updateTwinApi:', error);
                reject(error);
                return;
            }
            if (responseMessage == null) {
                const msg = 'updateTwinApi: Response message is null.';
                // eslint-disable-next-line no-console
                console.warn(msg);
                reject(new Error(msg));
                return;
            }
            const responsePayload = responseMessage.getPayload();
            if (!responsePayload) {
                const msg = 'updateTwinApi: Payload is empty.';
                // eslint-disable-next-line no-console
                console.warn(msg);
                reject(new Error(msg));
                return;
            }
            resolve(responsePayload);
        });
    });
};

export const deleteTwinApi = async (
    hostAddress: string,
    accessToken: string,
    clientRef: string,
    clientAppId: string,
    twinId: string,
    transactionRef?: string,
) => {
    return new Promise<DeleteTwinResponse.Payload>((resolve, reject) => {
        const client = new TwinAPIClient(hostAddress);
        const metadata = new grpc.Metadata();
        metadata.set('authorization', `bearer ${accessToken}`);
        const request = new DeleteTwinRequest();
        const headers = new Headers();
        headers.setClientappid(clientAppId);
        headers.setClientref(clientRef);
        if (transactionRef) {
            headers.setTransactionrefList([transactionRef]);
        }
        request.setHeaders(headers);

        const twin = new TwinID();
        twin.setValue(twinId);
        const args = new DeleteTwinRequest.Arguments();
        args.setTwinid(twin);
        request.setArgs(args);

        client.deleteTwin(request, metadata, (error, responseMessage) => {
            if (error) {
                // eslint-disable-next-line no-console
                console.warn('deleteTwinApi:', error);
                reject(error);
                return;
            }
            if (responseMessage == null) {
                const msg = 'deleteTwinApi: Response message is null.';
                // eslint-disable-next-line no-console
                console.warn(msg);
                reject(new Error(msg));
                return;
            }
            const responsePayload = responseMessage.getPayload();
            if (!responsePayload) {
                const msg = 'deleteTwinApi: Payload is empty.';
                // eslint-disable-next-line no-console
                console.warn(msg);
                reject(new Error(msg));
                return;
            }
            resolve(responsePayload);
        });
    });
};
