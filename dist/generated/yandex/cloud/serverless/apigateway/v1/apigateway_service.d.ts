/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { Connectivity, LogOptions, Canary, VariableInput, ApiGateway } from "../../../../../yandex/cloud/serverless/apigateway/v1/apigateway";
import { FieldMask } from "../../../../../google/protobuf/field_mask";
import { Operation } from "../../../../../yandex/cloud/operation/operation";
import { ListAccessBindingsRequest, ListAccessBindingsResponse, SetAccessBindingsRequest, UpdateAccessBindingsRequest } from "../../../../../yandex/cloud/access/access";
export declare const protobufPackage = "yandex.cloud.serverless.apigateway.v1";
export interface GetApiGatewayRequest {
    $type: "yandex.cloud.serverless.apigateway.v1.GetApiGatewayRequest";
    /**
     * ID of the API gateway to return.
     *
     * To get a API gateway ID make a [ApiGatewayService.List] request.
     */
    apiGatewayId: string;
}
export interface ListApiGatewayRequest {
    $type: "yandex.cloud.serverless.apigateway.v1.ListApiGatewayRequest";
    /**
     * ID of the folder to list API gateways in.
     *
     * To get a folder ID make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than `pageSize`, the service returns a [ListApiGatewayResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     *
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `pageToken` to the
     * [ListApiGatewayResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters functions listed in the response.
     *
     * The expression must specify:
     * 1. The field name. Currently filtering can only be applied to the [ApiGateway.name](index) field.
     * 2. An `=` operator.
     * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z]([-a-z0-9]{0,61}[a-z0-9])?`.
     * Example of a filter: `name=my-apigw`.
     */
    filter: string;
}
export interface ListApiGatewayResponse {
    $type: "yandex.cloud.serverless.apigateway.v1.ListApiGatewayResponse";
    /** List of API gateways in the specified folder. */
    apiGateways: ApiGateway[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListApiGatewayRequest.page_size], use `nextPageToken` as the value
     * for the [ListApiGatewayRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `nextPageToken` to continue paging through the results.
     */
    nextPageToken: string;
}
export interface CreateApiGatewayRequest {
    $type: "yandex.cloud.serverless.apigateway.v1.CreateApiGatewayRequest";
    /**
     * ID of the folder to create an API gateway in.
     *
     * To get a folder ID make a [yandex.cloud.resourcemanager.v1.FolderService.List] request.
     */
    folderId: string;
    /**
     * Name of the API gateway.
     * The name must be unique within the folder.
     */
    name: string;
    /** Description of the API gateway. */
    description: string;
    /** Resource labels as `key:value` pairs. */
    labels: {
        [key: string]: string;
    };
    /** The text of specification, JSON or YAML. */
    openapiSpec: string | undefined;
    /** Gateway connectivity. If specified the gateway will be attached to specified network/subnet(s). */
    connectivity?: Connectivity;
    /** Options for logging from the API gateway. */
    logOptions?: LogOptions;
    /** Values of variables defined in the specification. */
    variables: {
        [key: string]: VariableInput;
    };
    /** Canary release of the gateway. */
    canary?: Canary;
}
export interface CreateApiGatewayRequest_LabelsEntry {
    $type: "yandex.cloud.serverless.apigateway.v1.CreateApiGatewayRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface CreateApiGatewayRequest_VariablesEntry {
    $type: "yandex.cloud.serverless.apigateway.v1.CreateApiGatewayRequest.VariablesEntry";
    key: string;
    value?: VariableInput;
}
export interface UpdateApiGatewayRequest {
    $type: "yandex.cloud.serverless.apigateway.v1.UpdateApiGatewayRequest";
    /**
     * ID of the API gateway to update.
     *
     * To get a API gateway ID make a [ApiGatewayService.List] request.
     */
    apiGatewayId: string;
    /** Field mask that specifies which attributes of the API gateway should be updated. */
    updateMask?: FieldMask;
    /**
     * New name for the API gateway.
     * The name must be unique within the folder.
     */
    name: string;
    /** New description for the API gateway. */
    description: string;
    /**
     * API gateway labels as `key:value` pairs.
     *
     * Existing set of labels is completely replaced by the provided set, so if you just want
     * to add or remove a label, request the current set of labels with a [yandex.cloud.serverless.apigateway.v1.ApiGatewayService.Get] request.
     */
    labels: {
        [key: string]: string;
    };
    /** The text of specification, JSON or YAML. */
    openapiSpec: string | undefined;
    /** Gateway connectivity. If specified the gateway will be attached to specified network/subnet(s). */
    connectivity?: Connectivity;
    /** Options for logging from the API gateway. */
    logOptions?: LogOptions;
    /** Values of variables defined in the specification. */
    variables: {
        [key: string]: VariableInput;
    };
    /** Canary release of the gateway. */
    canary?: Canary;
}
export interface UpdateApiGatewayRequest_LabelsEntry {
    $type: "yandex.cloud.serverless.apigateway.v1.UpdateApiGatewayRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface UpdateApiGatewayRequest_VariablesEntry {
    $type: "yandex.cloud.serverless.apigateway.v1.UpdateApiGatewayRequest.VariablesEntry";
    key: string;
    value?: VariableInput;
}
export interface DeleteApiGatewayRequest {
    $type: "yandex.cloud.serverless.apigateway.v1.DeleteApiGatewayRequest";
    /**
     * ID of the API gateway to update.
     *
     * To get a API gateway ID make a [ApiGatewayService.List] request.
     */
    apiGatewayId: string;
}
export interface AddDomainRequest {
    $type: "yandex.cloud.serverless.apigateway.v1.AddDomainRequest";
    /** ID of the API gateway that the domain is attached to. */
    apiGatewayId: string;
    /** Name of the attaching domain. */
    domainName: string;
    /** ID of certificate for the attaching domain. */
    certificateId: string;
}
export interface RemoveDomainRequest {
    $type: "yandex.cloud.serverless.apigateway.v1.RemoveDomainRequest";
    /** ID of the API gateway from which the domain is being detached. */
    apiGatewayId: string;
    /** ID of the detaching domain. */
    domainId: string;
}
export interface CreateApiGatewayMetadata {
    $type: "yandex.cloud.serverless.apigateway.v1.CreateApiGatewayMetadata";
    /** ID of the API gateway that is being created. */
    apiGatewayId: string;
}
export interface UpdateApiGatewayMetadata {
    $type: "yandex.cloud.serverless.apigateway.v1.UpdateApiGatewayMetadata";
    /** ID of the API gateway that is being updated. */
    apiGatewayId: string;
}
export interface DeleteApiGatewayMetadata {
    $type: "yandex.cloud.serverless.apigateway.v1.DeleteApiGatewayMetadata";
    /** ID of the API gateway that is being deleted. */
    apiGatewayId: string;
}
export interface AddDomainMetadata {
    $type: "yandex.cloud.serverless.apigateway.v1.AddDomainMetadata";
    /** ID of the API gateway that the domain is attached to. */
    apiGatewayId: string;
    /** ID of the attached domain. */
    domainId: string;
    /** Name of the attaching domain. */
    domainName: string;
    /** ID of the certificate for provided domain. */
    certificateId: string;
}
export interface RemoveDomainMetadata {
    $type: "yandex.cloud.serverless.apigateway.v1.RemoveDomainMetadata";
    /** ID of the API gateway from which the domain is being detached. */
    apiGatewayId: string;
    /** ID of the detaching domain. */
    domainId: string;
}
export interface ListOperationsRequest {
    $type: "yandex.cloud.serverless.apigateway.v1.ListOperationsRequest";
    /** ID of the API gateway to list operations for. */
    apiGatewayId: string;
    /**
     * The maximum number of results per page that should be returned. If the number of available
     * results is larger than `pageSize`, the service returns a [ListOperationsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     *
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results, set `pageToken` to the
     * [ListOperationsResponse.next_page_token] returned by a previous list request.
     */
    pageToken: string;
    /**
     * A filter expression that filters resources listed in the response.
     *
     * The expression must specify:
     * 1. The field name. Currently filtering can be applied to the [operation.Operation.done], [operation.Operation.created_by] field.
     * 2. An `=` operator.
     * 3. The value in double quotes (`"`). Must be 3-63 characters long and match the regular expression `[a-z][-a-z0-9]{1,61}[a-z0-9]`.
     * Examples of a filter: `done=false`, `created_by='John.Doe'`.
     */
    filter: string;
}
export interface ListOperationsResponse {
    $type: "yandex.cloud.serverless.apigateway.v1.ListOperationsResponse";
    /** List of operations for the specified API gateway. */
    operations: Operation[];
    /**
     * Token for getting the next page of the list. If the number of results is greater than
     * the specified [ListOperationsRequest.page_size], use `nextPageToken` as the value
     * for the [ListOperationsRequest.page_token] parameter in the next list request.
     *
     * Each subsequent page will have its own `nextPageToken` to continue paging through the results.
     */
    nextPageToken: string;
}
export interface GetOpenapiSpecRequest {
    $type: "yandex.cloud.serverless.apigateway.v1.GetOpenapiSpecRequest";
    /** ID of the API gateway to get specification from. */
    apiGatewayId: string;
    /** Format of returned specification. Default is the original format used in [CreateApiGatewayRequest]. */
    format: GetOpenapiSpecRequest_Format;
}
export declare enum GetOpenapiSpecRequest_Format {
    FORMAT_UNSPECIFIED = 0,
    JSON = 1,
    YAML = 2,
    UNRECOGNIZED = -1
}
export declare function getOpenapiSpecRequest_FormatFromJSON(object: any): GetOpenapiSpecRequest_Format;
export declare function getOpenapiSpecRequest_FormatToJSON(object: GetOpenapiSpecRequest_Format): string;
export interface GetOpenapiSpecResponse {
    $type: "yandex.cloud.serverless.apigateway.v1.GetOpenapiSpecResponse";
    /** ID of the API gateway. */
    apiGatewayId: string;
    /** The text of specification, JSON or YAML. */
    openapiSpec: string;
}
export declare const GetApiGatewayRequest: {
    $type: "yandex.cloud.serverless.apigateway.v1.GetApiGatewayRequest";
    encode(message: GetApiGatewayRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetApiGatewayRequest;
    fromJSON(object: any): GetApiGatewayRequest;
    toJSON(message: GetApiGatewayRequest): unknown;
    fromPartial<I extends {
        apiGatewayId?: string | undefined;
    } & {
        apiGatewayId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "apiGatewayId">, never>>(object: I): GetApiGatewayRequest;
};
export declare const ListApiGatewayRequest: {
    $type: "yandex.cloud.serverless.apigateway.v1.ListApiGatewayRequest";
    encode(message: ListApiGatewayRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListApiGatewayRequest;
    fromJSON(object: any): ListApiGatewayRequest;
    toJSON(message: ListApiGatewayRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filter?: string | undefined;
        folderId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filter?: string | undefined;
        folderId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "filter" | "folderId">, never>>(object: I): ListApiGatewayRequest;
};
export declare const ListApiGatewayResponse: {
    $type: "yandex.cloud.serverless.apigateway.v1.ListApiGatewayResponse";
    encode(message: ListApiGatewayResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListApiGatewayResponse;
    fromJSON(object: any): ListApiGatewayResponse;
    toJSON(message: ListApiGatewayResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        apiGateways?: {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../../yandex/cloud/serverless/apigateway/v1/apigateway").ApiGateway_Status | undefined;
            folderId?: string | undefined;
            variables?: {
                [x: string]: {
                    stringValue?: string | undefined;
                    boolValue?: boolean | undefined;
                    intValue?: number | undefined;
                    doubleValue?: number | undefined;
                } | undefined;
                [x: number]: {
                    stringValue?: string | undefined;
                    boolValue?: boolean | undefined;
                    intValue?: number | undefined;
                    doubleValue?: number | undefined;
                } | undefined;
            } | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            logGroupId?: string | undefined;
            logOptions?: {
                folderId?: string | undefined;
                logGroupId?: string | undefined;
                disabled?: boolean | undefined;
                minLevel?: import("../../../logging/v1/log_entry").LogLevel_Level | undefined;
            } | undefined;
            domain?: string | undefined;
            attachedDomains?: {
                enabled?: boolean | undefined;
                domain?: string | undefined;
                certificateId?: string | undefined;
                domainId?: string | undefined;
            }[] | undefined;
            connectivity?: {
                subnetId?: string[] | undefined;
                networkId?: string | undefined;
            } | undefined;
            canary?: {
                variables?: {
                    [x: string]: {
                        stringValue?: string | undefined;
                        boolValue?: boolean | undefined;
                        intValue?: number | undefined;
                        doubleValue?: number | undefined;
                    } | undefined;
                    [x: number]: {
                        stringValue?: string | undefined;
                        boolValue?: boolean | undefined;
                        intValue?: number | undefined;
                        doubleValue?: number | undefined;
                    } | undefined;
                } | undefined;
                weight?: number | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        apiGateways?: ({
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../../yandex/cloud/serverless/apigateway/v1/apigateway").ApiGateway_Status | undefined;
            folderId?: string | undefined;
            variables?: {
                [x: string]: {
                    stringValue?: string | undefined;
                    boolValue?: boolean | undefined;
                    intValue?: number | undefined;
                    doubleValue?: number | undefined;
                } | undefined;
                [x: number]: {
                    stringValue?: string | undefined;
                    boolValue?: boolean | undefined;
                    intValue?: number | undefined;
                    doubleValue?: number | undefined;
                } | undefined;
            } | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            logGroupId?: string | undefined;
            logOptions?: {
                folderId?: string | undefined;
                logGroupId?: string | undefined;
                disabled?: boolean | undefined;
                minLevel?: import("../../../logging/v1/log_entry").LogLevel_Level | undefined;
            } | undefined;
            domain?: string | undefined;
            attachedDomains?: {
                enabled?: boolean | undefined;
                domain?: string | undefined;
                certificateId?: string | undefined;
                domainId?: string | undefined;
            }[] | undefined;
            connectivity?: {
                subnetId?: string[] | undefined;
                networkId?: string | undefined;
            } | undefined;
            canary?: {
                variables?: {
                    [x: string]: {
                        stringValue?: string | undefined;
                        boolValue?: boolean | undefined;
                        intValue?: number | undefined;
                        doubleValue?: number | undefined;
                    } | undefined;
                    [x: number]: {
                        stringValue?: string | undefined;
                        boolValue?: boolean | undefined;
                        intValue?: number | undefined;
                        doubleValue?: number | undefined;
                    } | undefined;
                } | undefined;
                weight?: number | undefined;
            } | undefined;
        }[] & ({
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../../yandex/cloud/serverless/apigateway/v1/apigateway").ApiGateway_Status | undefined;
            folderId?: string | undefined;
            variables?: {
                [x: string]: {
                    stringValue?: string | undefined;
                    boolValue?: boolean | undefined;
                    intValue?: number | undefined;
                    doubleValue?: number | undefined;
                } | undefined;
                [x: number]: {
                    stringValue?: string | undefined;
                    boolValue?: boolean | undefined;
                    intValue?: number | undefined;
                    doubleValue?: number | undefined;
                } | undefined;
            } | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            logGroupId?: string | undefined;
            logOptions?: {
                folderId?: string | undefined;
                logGroupId?: string | undefined;
                disabled?: boolean | undefined;
                minLevel?: import("../../../logging/v1/log_entry").LogLevel_Level | undefined;
            } | undefined;
            domain?: string | undefined;
            attachedDomains?: {
                enabled?: boolean | undefined;
                domain?: string | undefined;
                certificateId?: string | undefined;
                domainId?: string | undefined;
            }[] | undefined;
            connectivity?: {
                subnetId?: string[] | undefined;
                networkId?: string | undefined;
            } | undefined;
            canary?: {
                variables?: {
                    [x: string]: {
                        stringValue?: string | undefined;
                        boolValue?: boolean | undefined;
                        intValue?: number | undefined;
                        doubleValue?: number | undefined;
                    } | undefined;
                    [x: number]: {
                        stringValue?: string | undefined;
                        boolValue?: boolean | undefined;
                        intValue?: number | undefined;
                        doubleValue?: number | undefined;
                    } | undefined;
                } | undefined;
                weight?: number | undefined;
            } | undefined;
        } & {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../../yandex/cloud/serverless/apigateway/v1/apigateway").ApiGateway_Status | undefined;
            folderId?: string | undefined;
            variables?: ({
                [x: string]: {
                    stringValue?: string | undefined;
                    boolValue?: boolean | undefined;
                    intValue?: number | undefined;
                    doubleValue?: number | undefined;
                } | undefined;
                [x: number]: {
                    stringValue?: string | undefined;
                    boolValue?: boolean | undefined;
                    intValue?: number | undefined;
                    doubleValue?: number | undefined;
                } | undefined;
            } & {
                [x: string]: ({
                    stringValue?: string | undefined;
                    boolValue?: boolean | undefined;
                    intValue?: number | undefined;
                    doubleValue?: number | undefined;
                } & {
                    stringValue?: string | undefined;
                    boolValue?: boolean | undefined;
                    intValue?: number | undefined;
                    doubleValue?: number | undefined;
                } & Record<Exclude<keyof I["apiGateways"][number]["variables"][string], "$type" | "stringValue" | "boolValue" | "intValue" | "doubleValue">, never>) | undefined;
                [x: number]: ({
                    stringValue?: string | undefined;
                    boolValue?: boolean | undefined;
                    intValue?: number | undefined;
                    doubleValue?: number | undefined;
                } & {
                    stringValue?: string | undefined;
                    boolValue?: boolean | undefined;
                    intValue?: number | undefined;
                    doubleValue?: number | undefined;
                } & Record<Exclude<keyof I["apiGateways"][number]["variables"][number], "$type" | "stringValue" | "boolValue" | "intValue" | "doubleValue">, never>) | undefined;
            } & Record<Exclude<keyof I["apiGateways"][number]["variables"], string | number>, never>) | undefined;
            labels?: ({
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & Record<Exclude<keyof I["apiGateways"][number]["labels"], string | number>, never>) | undefined;
            logGroupId?: string | undefined;
            logOptions?: ({
                folderId?: string | undefined;
                logGroupId?: string | undefined;
                disabled?: boolean | undefined;
                minLevel?: import("../../../logging/v1/log_entry").LogLevel_Level | undefined;
            } & {
                folderId?: string | undefined;
                logGroupId?: string | undefined;
                disabled?: boolean | undefined;
                minLevel?: import("../../../logging/v1/log_entry").LogLevel_Level | undefined;
            } & Record<Exclude<keyof I["apiGateways"][number]["logOptions"], "$type" | "folderId" | "logGroupId" | "disabled" | "minLevel">, never>) | undefined;
            domain?: string | undefined;
            attachedDomains?: ({
                enabled?: boolean | undefined;
                domain?: string | undefined;
                certificateId?: string | undefined;
                domainId?: string | undefined;
            }[] & ({
                enabled?: boolean | undefined;
                domain?: string | undefined;
                certificateId?: string | undefined;
                domainId?: string | undefined;
            } & {
                enabled?: boolean | undefined;
                domain?: string | undefined;
                certificateId?: string | undefined;
                domainId?: string | undefined;
            } & Record<Exclude<keyof I["apiGateways"][number]["attachedDomains"][number], "$type" | "enabled" | "domain" | "certificateId" | "domainId">, never>)[] & Record<Exclude<keyof I["apiGateways"][number]["attachedDomains"], "$type" | keyof {
                enabled?: boolean | undefined;
                domain?: string | undefined;
                certificateId?: string | undefined;
                domainId?: string | undefined;
            }[]>, never>) | undefined;
            connectivity?: ({
                subnetId?: string[] | undefined;
                networkId?: string | undefined;
            } & {
                subnetId?: (string[] & string[] & Record<Exclude<keyof I["apiGateways"][number]["connectivity"]["subnetId"], "$type" | keyof string[]>, never>) | undefined;
                networkId?: string | undefined;
            } & Record<Exclude<keyof I["apiGateways"][number]["connectivity"], "$type" | "subnetId" | "networkId">, never>) | undefined;
            canary?: ({
                variables?: {
                    [x: string]: {
                        stringValue?: string | undefined;
                        boolValue?: boolean | undefined;
                        intValue?: number | undefined;
                        doubleValue?: number | undefined;
                    } | undefined;
                    [x: number]: {
                        stringValue?: string | undefined;
                        boolValue?: boolean | undefined;
                        intValue?: number | undefined;
                        doubleValue?: number | undefined;
                    } | undefined;
                } | undefined;
                weight?: number | undefined;
            } & {
                variables?: ({
                    [x: string]: {
                        stringValue?: string | undefined;
                        boolValue?: boolean | undefined;
                        intValue?: number | undefined;
                        doubleValue?: number | undefined;
                    } | undefined;
                    [x: number]: {
                        stringValue?: string | undefined;
                        boolValue?: boolean | undefined;
                        intValue?: number | undefined;
                        doubleValue?: number | undefined;
                    } | undefined;
                } & {
                    [x: string]: ({
                        stringValue?: string | undefined;
                        boolValue?: boolean | undefined;
                        intValue?: number | undefined;
                        doubleValue?: number | undefined;
                    } & {
                        stringValue?: string | undefined;
                        boolValue?: boolean | undefined;
                        intValue?: number | undefined;
                        doubleValue?: number | undefined;
                    } & Record<Exclude<keyof I["apiGateways"][number]["canary"]["variables"][string], "$type" | "stringValue" | "boolValue" | "intValue" | "doubleValue">, never>) | undefined;
                    [x: number]: ({
                        stringValue?: string | undefined;
                        boolValue?: boolean | undefined;
                        intValue?: number | undefined;
                        doubleValue?: number | undefined;
                    } & {
                        stringValue?: string | undefined;
                        boolValue?: boolean | undefined;
                        intValue?: number | undefined;
                        doubleValue?: number | undefined;
                    } & Record<Exclude<keyof I["apiGateways"][number]["canary"]["variables"][number], "$type" | "stringValue" | "boolValue" | "intValue" | "doubleValue">, never>) | undefined;
                } & Record<Exclude<keyof I["apiGateways"][number]["canary"]["variables"], string | number>, never>) | undefined;
                weight?: number | undefined;
            } & Record<Exclude<keyof I["apiGateways"][number]["canary"], "$type" | "variables" | "weight">, never>) | undefined;
        } & Record<Exclude<keyof I["apiGateways"][number], "$type" | "description" | "id" | "name" | "createdAt" | "status" | "folderId" | "variables" | "labels" | "logGroupId" | "logOptions" | "domain" | "attachedDomains" | "connectivity" | "canary">, never>)[] & Record<Exclude<keyof I["apiGateways"], "$type" | keyof {
            description?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../../yandex/cloud/serverless/apigateway/v1/apigateway").ApiGateway_Status | undefined;
            folderId?: string | undefined;
            variables?: {
                [x: string]: {
                    stringValue?: string | undefined;
                    boolValue?: boolean | undefined;
                    intValue?: number | undefined;
                    doubleValue?: number | undefined;
                } | undefined;
                [x: number]: {
                    stringValue?: string | undefined;
                    boolValue?: boolean | undefined;
                    intValue?: number | undefined;
                    doubleValue?: number | undefined;
                } | undefined;
            } | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            logGroupId?: string | undefined;
            logOptions?: {
                folderId?: string | undefined;
                logGroupId?: string | undefined;
                disabled?: boolean | undefined;
                minLevel?: import("../../../logging/v1/log_entry").LogLevel_Level | undefined;
            } | undefined;
            domain?: string | undefined;
            attachedDomains?: {
                enabled?: boolean | undefined;
                domain?: string | undefined;
                certificateId?: string | undefined;
                domainId?: string | undefined;
            }[] | undefined;
            connectivity?: {
                subnetId?: string[] | undefined;
                networkId?: string | undefined;
            } | undefined;
            canary?: {
                variables?: {
                    [x: string]: {
                        stringValue?: string | undefined;
                        boolValue?: boolean | undefined;
                        intValue?: number | undefined;
                        doubleValue?: number | undefined;
                    } | undefined;
                    [x: number]: {
                        stringValue?: string | undefined;
                        boolValue?: boolean | undefined;
                        intValue?: number | undefined;
                        doubleValue?: number | undefined;
                    } | undefined;
                } | undefined;
                weight?: number | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "apiGateways">, never>>(object: I): ListApiGatewayResponse;
};
export declare const CreateApiGatewayRequest: {
    $type: "yandex.cloud.serverless.apigateway.v1.CreateApiGatewayRequest";
    encode(message: CreateApiGatewayRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateApiGatewayRequest;
    fromJSON(object: any): CreateApiGatewayRequest;
    toJSON(message: CreateApiGatewayRequest): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        name?: string | undefined;
        folderId?: string | undefined;
        variables?: {
            [x: string]: {
                stringValue?: string | undefined;
                boolValue?: boolean | undefined;
                intValue?: number | undefined;
                doubleValue?: number | undefined;
            } | undefined;
            [x: number]: {
                stringValue?: string | undefined;
                boolValue?: boolean | undefined;
                intValue?: number | undefined;
                doubleValue?: number | undefined;
            } | undefined;
        } | undefined;
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        logOptions?: {
            folderId?: string | undefined;
            logGroupId?: string | undefined;
            disabled?: boolean | undefined;
            minLevel?: import("../../../logging/v1/log_entry").LogLevel_Level | undefined;
        } | undefined;
        connectivity?: {
            subnetId?: string[] | undefined;
            networkId?: string | undefined;
        } | undefined;
        canary?: {
            variables?: {
                [x: string]: {
                    stringValue?: string | undefined;
                    boolValue?: boolean | undefined;
                    intValue?: number | undefined;
                    doubleValue?: number | undefined;
                } | undefined;
                [x: number]: {
                    stringValue?: string | undefined;
                    boolValue?: boolean | undefined;
                    intValue?: number | undefined;
                    doubleValue?: number | undefined;
                } | undefined;
            } | undefined;
            weight?: number | undefined;
        } | undefined;
        openapiSpec?: string | undefined;
    } & {
        description?: string | undefined;
        name?: string | undefined;
        folderId?: string | undefined;
        variables?: ({
            [x: string]: {
                stringValue?: string | undefined;
                boolValue?: boolean | undefined;
                intValue?: number | undefined;
                doubleValue?: number | undefined;
            } | undefined;
            [x: number]: {
                stringValue?: string | undefined;
                boolValue?: boolean | undefined;
                intValue?: number | undefined;
                doubleValue?: number | undefined;
            } | undefined;
        } & {
            [x: string]: ({
                stringValue?: string | undefined;
                boolValue?: boolean | undefined;
                intValue?: number | undefined;
                doubleValue?: number | undefined;
            } & {
                stringValue?: string | undefined;
                boolValue?: boolean | undefined;
                intValue?: number | undefined;
                doubleValue?: number | undefined;
            } & Record<Exclude<keyof I["variables"][string], "$type" | "stringValue" | "boolValue" | "intValue" | "doubleValue">, never>) | undefined;
            [x: number]: ({
                stringValue?: string | undefined;
                boolValue?: boolean | undefined;
                intValue?: number | undefined;
                doubleValue?: number | undefined;
            } & {
                stringValue?: string | undefined;
                boolValue?: boolean | undefined;
                intValue?: number | undefined;
                doubleValue?: number | undefined;
            } & Record<Exclude<keyof I["variables"][number], "$type" | "stringValue" | "boolValue" | "intValue" | "doubleValue">, never>) | undefined;
        } & Record<Exclude<keyof I["variables"], string | number>, never>) | undefined;
        labels?: ({
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & Record<Exclude<keyof I["labels"], string | number>, never>) | undefined;
        logOptions?: ({
            folderId?: string | undefined;
            logGroupId?: string | undefined;
            disabled?: boolean | undefined;
            minLevel?: import("../../../logging/v1/log_entry").LogLevel_Level | undefined;
        } & {
            folderId?: string | undefined;
            logGroupId?: string | undefined;
            disabled?: boolean | undefined;
            minLevel?: import("../../../logging/v1/log_entry").LogLevel_Level | undefined;
        } & Record<Exclude<keyof I["logOptions"], "$type" | "folderId" | "logGroupId" | "disabled" | "minLevel">, never>) | undefined;
        connectivity?: ({
            subnetId?: string[] | undefined;
            networkId?: string | undefined;
        } & {
            subnetId?: (string[] & string[] & Record<Exclude<keyof I["connectivity"]["subnetId"], "$type" | keyof string[]>, never>) | undefined;
            networkId?: string | undefined;
        } & Record<Exclude<keyof I["connectivity"], "$type" | "subnetId" | "networkId">, never>) | undefined;
        canary?: ({
            variables?: {
                [x: string]: {
                    stringValue?: string | undefined;
                    boolValue?: boolean | undefined;
                    intValue?: number | undefined;
                    doubleValue?: number | undefined;
                } | undefined;
                [x: number]: {
                    stringValue?: string | undefined;
                    boolValue?: boolean | undefined;
                    intValue?: number | undefined;
                    doubleValue?: number | undefined;
                } | undefined;
            } | undefined;
            weight?: number | undefined;
        } & {
            variables?: ({
                [x: string]: {
                    stringValue?: string | undefined;
                    boolValue?: boolean | undefined;
                    intValue?: number | undefined;
                    doubleValue?: number | undefined;
                } | undefined;
                [x: number]: {
                    stringValue?: string | undefined;
                    boolValue?: boolean | undefined;
                    intValue?: number | undefined;
                    doubleValue?: number | undefined;
                } | undefined;
            } & {
                [x: string]: ({
                    stringValue?: string | undefined;
                    boolValue?: boolean | undefined;
                    intValue?: number | undefined;
                    doubleValue?: number | undefined;
                } & {
                    stringValue?: string | undefined;
                    boolValue?: boolean | undefined;
                    intValue?: number | undefined;
                    doubleValue?: number | undefined;
                } & Record<Exclude<keyof I["canary"]["variables"][string], "$type" | "stringValue" | "boolValue" | "intValue" | "doubleValue">, never>) | undefined;
                [x: number]: ({
                    stringValue?: string | undefined;
                    boolValue?: boolean | undefined;
                    intValue?: number | undefined;
                    doubleValue?: number | undefined;
                } & {
                    stringValue?: string | undefined;
                    boolValue?: boolean | undefined;
                    intValue?: number | undefined;
                    doubleValue?: number | undefined;
                } & Record<Exclude<keyof I["canary"]["variables"][number], "$type" | "stringValue" | "boolValue" | "intValue" | "doubleValue">, never>) | undefined;
            } & Record<Exclude<keyof I["canary"]["variables"], string | number>, never>) | undefined;
            weight?: number | undefined;
        } & Record<Exclude<keyof I["canary"], "$type" | "variables" | "weight">, never>) | undefined;
        openapiSpec?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "folderId" | "variables" | "labels" | "logOptions" | "connectivity" | "canary" | "openapiSpec">, never>>(object: I): CreateApiGatewayRequest;
};
export declare const CreateApiGatewayRequest_LabelsEntry: {
    $type: "yandex.cloud.serverless.apigateway.v1.CreateApiGatewayRequest.LabelsEntry";
    encode(message: CreateApiGatewayRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateApiGatewayRequest_LabelsEntry;
    fromJSON(object: any): CreateApiGatewayRequest_LabelsEntry;
    toJSON(message: CreateApiGatewayRequest_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): CreateApiGatewayRequest_LabelsEntry;
};
export declare const CreateApiGatewayRequest_VariablesEntry: {
    $type: "yandex.cloud.serverless.apigateway.v1.CreateApiGatewayRequest.VariablesEntry";
    encode(message: CreateApiGatewayRequest_VariablesEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateApiGatewayRequest_VariablesEntry;
    fromJSON(object: any): CreateApiGatewayRequest_VariablesEntry;
    toJSON(message: CreateApiGatewayRequest_VariablesEntry): unknown;
    fromPartial<I extends {
        value?: {
            stringValue?: string | undefined;
            boolValue?: boolean | undefined;
            intValue?: number | undefined;
            doubleValue?: number | undefined;
        } | undefined;
        key?: string | undefined;
    } & {
        value?: ({
            stringValue?: string | undefined;
            boolValue?: boolean | undefined;
            intValue?: number | undefined;
            doubleValue?: number | undefined;
        } & {
            stringValue?: string | undefined;
            boolValue?: boolean | undefined;
            intValue?: number | undefined;
            doubleValue?: number | undefined;
        } & Record<Exclude<keyof I["value"], "$type" | "stringValue" | "boolValue" | "intValue" | "doubleValue">, never>) | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): CreateApiGatewayRequest_VariablesEntry;
};
export declare const UpdateApiGatewayRequest: {
    $type: "yandex.cloud.serverless.apigateway.v1.UpdateApiGatewayRequest";
    encode(message: UpdateApiGatewayRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateApiGatewayRequest;
    fromJSON(object: any): UpdateApiGatewayRequest;
    toJSON(message: UpdateApiGatewayRequest): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        name?: string | undefined;
        variables?: {
            [x: string]: {
                stringValue?: string | undefined;
                boolValue?: boolean | undefined;
                intValue?: number | undefined;
                doubleValue?: number | undefined;
            } | undefined;
            [x: number]: {
                stringValue?: string | undefined;
                boolValue?: boolean | undefined;
                intValue?: number | undefined;
                doubleValue?: number | undefined;
            } | undefined;
        } | undefined;
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        updateMask?: {
            paths?: string[] | undefined;
        } | undefined;
        logOptions?: {
            folderId?: string | undefined;
            logGroupId?: string | undefined;
            disabled?: boolean | undefined;
            minLevel?: import("../../../logging/v1/log_entry").LogLevel_Level | undefined;
        } | undefined;
        connectivity?: {
            subnetId?: string[] | undefined;
            networkId?: string | undefined;
        } | undefined;
        canary?: {
            variables?: {
                [x: string]: {
                    stringValue?: string | undefined;
                    boolValue?: boolean | undefined;
                    intValue?: number | undefined;
                    doubleValue?: number | undefined;
                } | undefined;
                [x: number]: {
                    stringValue?: string | undefined;
                    boolValue?: boolean | undefined;
                    intValue?: number | undefined;
                    doubleValue?: number | undefined;
                } | undefined;
            } | undefined;
            weight?: number | undefined;
        } | undefined;
        apiGatewayId?: string | undefined;
        openapiSpec?: string | undefined;
    } & {
        description?: string | undefined;
        name?: string | undefined;
        variables?: ({
            [x: string]: {
                stringValue?: string | undefined;
                boolValue?: boolean | undefined;
                intValue?: number | undefined;
                doubleValue?: number | undefined;
            } | undefined;
            [x: number]: {
                stringValue?: string | undefined;
                boolValue?: boolean | undefined;
                intValue?: number | undefined;
                doubleValue?: number | undefined;
            } | undefined;
        } & {
            [x: string]: ({
                stringValue?: string | undefined;
                boolValue?: boolean | undefined;
                intValue?: number | undefined;
                doubleValue?: number | undefined;
            } & {
                stringValue?: string | undefined;
                boolValue?: boolean | undefined;
                intValue?: number | undefined;
                doubleValue?: number | undefined;
            } & Record<Exclude<keyof I["variables"][string], "$type" | "stringValue" | "boolValue" | "intValue" | "doubleValue">, never>) | undefined;
            [x: number]: ({
                stringValue?: string | undefined;
                boolValue?: boolean | undefined;
                intValue?: number | undefined;
                doubleValue?: number | undefined;
            } & {
                stringValue?: string | undefined;
                boolValue?: boolean | undefined;
                intValue?: number | undefined;
                doubleValue?: number | undefined;
            } & Record<Exclude<keyof I["variables"][number], "$type" | "stringValue" | "boolValue" | "intValue" | "doubleValue">, never>) | undefined;
        } & Record<Exclude<keyof I["variables"], string | number>, never>) | undefined;
        labels?: ({
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & Record<Exclude<keyof I["labels"], string | number>, never>) | undefined;
        updateMask?: ({
            paths?: string[] | undefined;
        } & {
            paths?: (string[] & string[] & Record<Exclude<keyof I["updateMask"]["paths"], "$type" | keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["updateMask"], "$type" | "paths">, never>) | undefined;
        logOptions?: ({
            folderId?: string | undefined;
            logGroupId?: string | undefined;
            disabled?: boolean | undefined;
            minLevel?: import("../../../logging/v1/log_entry").LogLevel_Level | undefined;
        } & {
            folderId?: string | undefined;
            logGroupId?: string | undefined;
            disabled?: boolean | undefined;
            minLevel?: import("../../../logging/v1/log_entry").LogLevel_Level | undefined;
        } & Record<Exclude<keyof I["logOptions"], "$type" | "folderId" | "logGroupId" | "disabled" | "minLevel">, never>) | undefined;
        connectivity?: ({
            subnetId?: string[] | undefined;
            networkId?: string | undefined;
        } & {
            subnetId?: (string[] & string[] & Record<Exclude<keyof I["connectivity"]["subnetId"], "$type" | keyof string[]>, never>) | undefined;
            networkId?: string | undefined;
        } & Record<Exclude<keyof I["connectivity"], "$type" | "subnetId" | "networkId">, never>) | undefined;
        canary?: ({
            variables?: {
                [x: string]: {
                    stringValue?: string | undefined;
                    boolValue?: boolean | undefined;
                    intValue?: number | undefined;
                    doubleValue?: number | undefined;
                } | undefined;
                [x: number]: {
                    stringValue?: string | undefined;
                    boolValue?: boolean | undefined;
                    intValue?: number | undefined;
                    doubleValue?: number | undefined;
                } | undefined;
            } | undefined;
            weight?: number | undefined;
        } & {
            variables?: ({
                [x: string]: {
                    stringValue?: string | undefined;
                    boolValue?: boolean | undefined;
                    intValue?: number | undefined;
                    doubleValue?: number | undefined;
                } | undefined;
                [x: number]: {
                    stringValue?: string | undefined;
                    boolValue?: boolean | undefined;
                    intValue?: number | undefined;
                    doubleValue?: number | undefined;
                } | undefined;
            } & {
                [x: string]: ({
                    stringValue?: string | undefined;
                    boolValue?: boolean | undefined;
                    intValue?: number | undefined;
                    doubleValue?: number | undefined;
                } & {
                    stringValue?: string | undefined;
                    boolValue?: boolean | undefined;
                    intValue?: number | undefined;
                    doubleValue?: number | undefined;
                } & Record<Exclude<keyof I["canary"]["variables"][string], "$type" | "stringValue" | "boolValue" | "intValue" | "doubleValue">, never>) | undefined;
                [x: number]: ({
                    stringValue?: string | undefined;
                    boolValue?: boolean | undefined;
                    intValue?: number | undefined;
                    doubleValue?: number | undefined;
                } & {
                    stringValue?: string | undefined;
                    boolValue?: boolean | undefined;
                    intValue?: number | undefined;
                    doubleValue?: number | undefined;
                } & Record<Exclude<keyof I["canary"]["variables"][number], "$type" | "stringValue" | "boolValue" | "intValue" | "doubleValue">, never>) | undefined;
            } & Record<Exclude<keyof I["canary"]["variables"], string | number>, never>) | undefined;
            weight?: number | undefined;
        } & Record<Exclude<keyof I["canary"], "$type" | "variables" | "weight">, never>) | undefined;
        apiGatewayId?: string | undefined;
        openapiSpec?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "variables" | "labels" | "updateMask" | "logOptions" | "connectivity" | "canary" | "apiGatewayId" | "openapiSpec">, never>>(object: I): UpdateApiGatewayRequest;
};
export declare const UpdateApiGatewayRequest_LabelsEntry: {
    $type: "yandex.cloud.serverless.apigateway.v1.UpdateApiGatewayRequest.LabelsEntry";
    encode(message: UpdateApiGatewayRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateApiGatewayRequest_LabelsEntry;
    fromJSON(object: any): UpdateApiGatewayRequest_LabelsEntry;
    toJSON(message: UpdateApiGatewayRequest_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): UpdateApiGatewayRequest_LabelsEntry;
};
export declare const UpdateApiGatewayRequest_VariablesEntry: {
    $type: "yandex.cloud.serverless.apigateway.v1.UpdateApiGatewayRequest.VariablesEntry";
    encode(message: UpdateApiGatewayRequest_VariablesEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateApiGatewayRequest_VariablesEntry;
    fromJSON(object: any): UpdateApiGatewayRequest_VariablesEntry;
    toJSON(message: UpdateApiGatewayRequest_VariablesEntry): unknown;
    fromPartial<I extends {
        value?: {
            stringValue?: string | undefined;
            boolValue?: boolean | undefined;
            intValue?: number | undefined;
            doubleValue?: number | undefined;
        } | undefined;
        key?: string | undefined;
    } & {
        value?: ({
            stringValue?: string | undefined;
            boolValue?: boolean | undefined;
            intValue?: number | undefined;
            doubleValue?: number | undefined;
        } & {
            stringValue?: string | undefined;
            boolValue?: boolean | undefined;
            intValue?: number | undefined;
            doubleValue?: number | undefined;
        } & Record<Exclude<keyof I["value"], "$type" | "stringValue" | "boolValue" | "intValue" | "doubleValue">, never>) | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): UpdateApiGatewayRequest_VariablesEntry;
};
export declare const DeleteApiGatewayRequest: {
    $type: "yandex.cloud.serverless.apigateway.v1.DeleteApiGatewayRequest";
    encode(message: DeleteApiGatewayRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteApiGatewayRequest;
    fromJSON(object: any): DeleteApiGatewayRequest;
    toJSON(message: DeleteApiGatewayRequest): unknown;
    fromPartial<I extends {
        apiGatewayId?: string | undefined;
    } & {
        apiGatewayId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "apiGatewayId">, never>>(object: I): DeleteApiGatewayRequest;
};
export declare const AddDomainRequest: {
    $type: "yandex.cloud.serverless.apigateway.v1.AddDomainRequest";
    encode(message: AddDomainRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AddDomainRequest;
    fromJSON(object: any): AddDomainRequest;
    toJSON(message: AddDomainRequest): unknown;
    fromPartial<I extends {
        certificateId?: string | undefined;
        apiGatewayId?: string | undefined;
        domainName?: string | undefined;
    } & {
        certificateId?: string | undefined;
        apiGatewayId?: string | undefined;
        domainName?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "certificateId" | "apiGatewayId" | "domainName">, never>>(object: I): AddDomainRequest;
};
export declare const RemoveDomainRequest: {
    $type: "yandex.cloud.serverless.apigateway.v1.RemoveDomainRequest";
    encode(message: RemoveDomainRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RemoveDomainRequest;
    fromJSON(object: any): RemoveDomainRequest;
    toJSON(message: RemoveDomainRequest): unknown;
    fromPartial<I extends {
        domainId?: string | undefined;
        apiGatewayId?: string | undefined;
    } & {
        domainId?: string | undefined;
        apiGatewayId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "domainId" | "apiGatewayId">, never>>(object: I): RemoveDomainRequest;
};
export declare const CreateApiGatewayMetadata: {
    $type: "yandex.cloud.serverless.apigateway.v1.CreateApiGatewayMetadata";
    encode(message: CreateApiGatewayMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateApiGatewayMetadata;
    fromJSON(object: any): CreateApiGatewayMetadata;
    toJSON(message: CreateApiGatewayMetadata): unknown;
    fromPartial<I extends {
        apiGatewayId?: string | undefined;
    } & {
        apiGatewayId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "apiGatewayId">, never>>(object: I): CreateApiGatewayMetadata;
};
export declare const UpdateApiGatewayMetadata: {
    $type: "yandex.cloud.serverless.apigateway.v1.UpdateApiGatewayMetadata";
    encode(message: UpdateApiGatewayMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateApiGatewayMetadata;
    fromJSON(object: any): UpdateApiGatewayMetadata;
    toJSON(message: UpdateApiGatewayMetadata): unknown;
    fromPartial<I extends {
        apiGatewayId?: string | undefined;
    } & {
        apiGatewayId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "apiGatewayId">, never>>(object: I): UpdateApiGatewayMetadata;
};
export declare const DeleteApiGatewayMetadata: {
    $type: "yandex.cloud.serverless.apigateway.v1.DeleteApiGatewayMetadata";
    encode(message: DeleteApiGatewayMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteApiGatewayMetadata;
    fromJSON(object: any): DeleteApiGatewayMetadata;
    toJSON(message: DeleteApiGatewayMetadata): unknown;
    fromPartial<I extends {
        apiGatewayId?: string | undefined;
    } & {
        apiGatewayId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "apiGatewayId">, never>>(object: I): DeleteApiGatewayMetadata;
};
export declare const AddDomainMetadata: {
    $type: "yandex.cloud.serverless.apigateway.v1.AddDomainMetadata";
    encode(message: AddDomainMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AddDomainMetadata;
    fromJSON(object: any): AddDomainMetadata;
    toJSON(message: AddDomainMetadata): unknown;
    fromPartial<I extends {
        certificateId?: string | undefined;
        domainId?: string | undefined;
        apiGatewayId?: string | undefined;
        domainName?: string | undefined;
    } & {
        certificateId?: string | undefined;
        domainId?: string | undefined;
        apiGatewayId?: string | undefined;
        domainName?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "certificateId" | "domainId" | "apiGatewayId" | "domainName">, never>>(object: I): AddDomainMetadata;
};
export declare const RemoveDomainMetadata: {
    $type: "yandex.cloud.serverless.apigateway.v1.RemoveDomainMetadata";
    encode(message: RemoveDomainMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RemoveDomainMetadata;
    fromJSON(object: any): RemoveDomainMetadata;
    toJSON(message: RemoveDomainMetadata): unknown;
    fromPartial<I extends {
        domainId?: string | undefined;
        apiGatewayId?: string | undefined;
    } & {
        domainId?: string | undefined;
        apiGatewayId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "domainId" | "apiGatewayId">, never>>(object: I): RemoveDomainMetadata;
};
export declare const ListOperationsRequest: {
    $type: "yandex.cloud.serverless.apigateway.v1.ListOperationsRequest";
    encode(message: ListOperationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListOperationsRequest;
    fromJSON(object: any): ListOperationsRequest;
    toJSON(message: ListOperationsRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filter?: string | undefined;
        apiGatewayId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filter?: string | undefined;
        apiGatewayId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "filter" | "apiGatewayId">, never>>(object: I): ListOperationsRequest;
};
export declare const ListOperationsResponse: {
    $type: "yandex.cloud.serverless.apigateway.v1.ListOperationsResponse";
    encode(message: ListOperationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListOperationsResponse;
    fromJSON(object: any): ListOperationsResponse;
    toJSON(message: ListOperationsResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        operations?: {
            description?: string | undefined;
            id?: string | undefined;
            createdBy?: string | undefined;
            done?: boolean | undefined;
            createdAt?: Date | undefined;
            modifiedAt?: Date | undefined;
            metadata?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } | undefined;
            error?: {
                code?: number | undefined;
                message?: string | undefined;
                details?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] | undefined;
            } | undefined;
            response?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        operations?: ({
            description?: string | undefined;
            id?: string | undefined;
            createdBy?: string | undefined;
            done?: boolean | undefined;
            createdAt?: Date | undefined;
            modifiedAt?: Date | undefined;
            metadata?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } | undefined;
            error?: {
                code?: number | undefined;
                message?: string | undefined;
                details?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] | undefined;
            } | undefined;
            response?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } | undefined;
        }[] & ({
            description?: string | undefined;
            id?: string | undefined;
            createdBy?: string | undefined;
            done?: boolean | undefined;
            createdAt?: Date | undefined;
            modifiedAt?: Date | undefined;
            metadata?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } | undefined;
            error?: {
                code?: number | undefined;
                message?: string | undefined;
                details?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] | undefined;
            } | undefined;
            response?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } | undefined;
        } & {
            description?: string | undefined;
            id?: string | undefined;
            createdBy?: string | undefined;
            done?: boolean | undefined;
            createdAt?: Date | undefined;
            modifiedAt?: Date | undefined;
            metadata?: ({
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } & {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } & Record<Exclude<keyof I["operations"][number]["metadata"], "$type" | "typeUrl" | "value">, never>) | undefined;
            error?: ({
                code?: number | undefined;
                message?: string | undefined;
                details?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] | undefined;
            } & {
                code?: number | undefined;
                message?: string | undefined;
                details?: ({
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] & ({
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                } & {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                } & Record<Exclude<keyof I["operations"][number]["error"]["details"][number], "$type" | "typeUrl" | "value">, never>)[] & Record<Exclude<keyof I["operations"][number]["error"]["details"], "$type" | keyof {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["operations"][number]["error"], "$type" | "code" | "message" | "details">, never>) | undefined;
            response?: ({
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } & {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } & Record<Exclude<keyof I["operations"][number]["response"], "$type" | "typeUrl" | "value">, never>) | undefined;
        } & Record<Exclude<keyof I["operations"][number], "$type" | "description" | "id" | "createdBy" | "done" | "createdAt" | "modifiedAt" | "metadata" | "error" | "response">, never>)[] & Record<Exclude<keyof I["operations"], "$type" | keyof {
            description?: string | undefined;
            id?: string | undefined;
            createdBy?: string | undefined;
            done?: boolean | undefined;
            createdAt?: Date | undefined;
            modifiedAt?: Date | undefined;
            metadata?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } | undefined;
            error?: {
                code?: number | undefined;
                message?: string | undefined;
                details?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] | undefined;
            } | undefined;
            response?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "operations">, never>>(object: I): ListOperationsResponse;
};
export declare const GetOpenapiSpecRequest: {
    $type: "yandex.cloud.serverless.apigateway.v1.GetOpenapiSpecRequest";
    encode(message: GetOpenapiSpecRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetOpenapiSpecRequest;
    fromJSON(object: any): GetOpenapiSpecRequest;
    toJSON(message: GetOpenapiSpecRequest): unknown;
    fromPartial<I extends {
        format?: GetOpenapiSpecRequest_Format | undefined;
        apiGatewayId?: string | undefined;
    } & {
        format?: GetOpenapiSpecRequest_Format | undefined;
        apiGatewayId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "format" | "apiGatewayId">, never>>(object: I): GetOpenapiSpecRequest;
};
export declare const GetOpenapiSpecResponse: {
    $type: "yandex.cloud.serverless.apigateway.v1.GetOpenapiSpecResponse";
    encode(message: GetOpenapiSpecResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetOpenapiSpecResponse;
    fromJSON(object: any): GetOpenapiSpecResponse;
    toJSON(message: GetOpenapiSpecResponse): unknown;
    fromPartial<I extends {
        apiGatewayId?: string | undefined;
        openapiSpec?: string | undefined;
    } & {
        apiGatewayId?: string | undefined;
        openapiSpec?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "apiGatewayId" | "openapiSpec">, never>>(object: I): GetOpenapiSpecResponse;
};
/** A set of methods for managing API gateways. */
export declare const ApiGatewayServiceService: {
    /**
     * Returns the specified API gateway. Note that only API gateway basic attributes are returned.
     * To get associated openapi specification, make a [GetOpenapiSpec](#GetOpenapiSpec) request.
     *
     * To get the list of all available API gateways, make a [List] request.
     */
    readonly get: {
        readonly path: "/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetApiGatewayRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetApiGatewayRequest;
        readonly responseSerialize: (value: ApiGateway) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ApiGateway;
    };
    /** Retrieves the list of API gateways in the specified folder. */
    readonly list: {
        readonly path: "/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListApiGatewayRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListApiGatewayRequest;
        readonly responseSerialize: (value: ListApiGatewayResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListApiGatewayResponse;
    };
    /** Creates an API gateway in the specified folder. */
    readonly create: {
        readonly path: "/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateApiGatewayRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateApiGatewayRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates the specified API gateway. */
    readonly update: {
        readonly path: "/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateApiGatewayRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateApiGatewayRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified API gateway. */
    readonly delete: {
        readonly path: "/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteApiGatewayRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteApiGatewayRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Attaches domain to the specified API gateway. */
    readonly addDomain: {
        readonly path: "/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/AddDomain";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: AddDomainRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => AddDomainRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Detaches domain from the specified API gateway. */
    readonly removeDomain: {
        readonly path: "/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/RemoveDomain";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: RemoveDomainRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => RemoveDomainRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Returns the OpenAPI specification of specified API gateway. */
    readonly getOpenapiSpec: {
        readonly path: "/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/GetOpenapiSpec";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetOpenapiSpecRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetOpenapiSpecRequest;
        readonly responseSerialize: (value: GetOpenapiSpecResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GetOpenapiSpecResponse;
    };
    /** Lists operations for the specified API gateway. */
    readonly listOperations: {
        readonly path: "/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/ListOperations";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListOperationsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListOperationsRequest;
        readonly responseSerialize: (value: ListOperationsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListOperationsResponse;
    };
    /** Lists existing access bindings for the specified API gateway. */
    readonly listAccessBindings: {
        readonly path: "/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/ListAccessBindings";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListAccessBindingsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListAccessBindingsRequest;
        readonly responseSerialize: (value: ListAccessBindingsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListAccessBindingsResponse;
    };
    /** Sets access bindings for the specified API gateway. */
    readonly setAccessBindings: {
        readonly path: "/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/SetAccessBindings";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: SetAccessBindingsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => SetAccessBindingsRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates access bindings for the specified API gateway. */
    readonly updateAccessBindings: {
        readonly path: "/yandex.cloud.serverless.apigateway.v1.ApiGatewayService/UpdateAccessBindings";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateAccessBindingsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateAccessBindingsRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
};
export interface ApiGatewayServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified API gateway. Note that only API gateway basic attributes are returned.
     * To get associated openapi specification, make a [GetOpenapiSpec](#GetOpenapiSpec) request.
     *
     * To get the list of all available API gateways, make a [List] request.
     */
    get: handleUnaryCall<GetApiGatewayRequest, ApiGateway>;
    /** Retrieves the list of API gateways in the specified folder. */
    list: handleUnaryCall<ListApiGatewayRequest, ListApiGatewayResponse>;
    /** Creates an API gateway in the specified folder. */
    create: handleUnaryCall<CreateApiGatewayRequest, Operation>;
    /** Updates the specified API gateway. */
    update: handleUnaryCall<UpdateApiGatewayRequest, Operation>;
    /** Deletes the specified API gateway. */
    delete: handleUnaryCall<DeleteApiGatewayRequest, Operation>;
    /** Attaches domain to the specified API gateway. */
    addDomain: handleUnaryCall<AddDomainRequest, Operation>;
    /** Detaches domain from the specified API gateway. */
    removeDomain: handleUnaryCall<RemoveDomainRequest, Operation>;
    /** Returns the OpenAPI specification of specified API gateway. */
    getOpenapiSpec: handleUnaryCall<GetOpenapiSpecRequest, GetOpenapiSpecResponse>;
    /** Lists operations for the specified API gateway. */
    listOperations: handleUnaryCall<ListOperationsRequest, ListOperationsResponse>;
    /** Lists existing access bindings for the specified API gateway. */
    listAccessBindings: handleUnaryCall<ListAccessBindingsRequest, ListAccessBindingsResponse>;
    /** Sets access bindings for the specified API gateway. */
    setAccessBindings: handleUnaryCall<SetAccessBindingsRequest, Operation>;
    /** Updates access bindings for the specified API gateway. */
    updateAccessBindings: handleUnaryCall<UpdateAccessBindingsRequest, Operation>;
}
export interface ApiGatewayServiceClient extends Client {
    /**
     * Returns the specified API gateway. Note that only API gateway basic attributes are returned.
     * To get associated openapi specification, make a [GetOpenapiSpec](#GetOpenapiSpec) request.
     *
     * To get the list of all available API gateways, make a [List] request.
     */
    get(request: GetApiGatewayRequest, callback: (error: ServiceError | null, response: ApiGateway) => void): ClientUnaryCall;
    get(request: GetApiGatewayRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ApiGateway) => void): ClientUnaryCall;
    get(request: GetApiGatewayRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ApiGateway) => void): ClientUnaryCall;
    /** Retrieves the list of API gateways in the specified folder. */
    list(request: ListApiGatewayRequest, callback: (error: ServiceError | null, response: ListApiGatewayResponse) => void): ClientUnaryCall;
    list(request: ListApiGatewayRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListApiGatewayResponse) => void): ClientUnaryCall;
    list(request: ListApiGatewayRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListApiGatewayResponse) => void): ClientUnaryCall;
    /** Creates an API gateway in the specified folder. */
    create(request: CreateApiGatewayRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateApiGatewayRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateApiGatewayRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates the specified API gateway. */
    update(request: UpdateApiGatewayRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateApiGatewayRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateApiGatewayRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified API gateway. */
    delete(request: DeleteApiGatewayRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteApiGatewayRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteApiGatewayRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Attaches domain to the specified API gateway. */
    addDomain(request: AddDomainRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    addDomain(request: AddDomainRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    addDomain(request: AddDomainRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Detaches domain from the specified API gateway. */
    removeDomain(request: RemoveDomainRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    removeDomain(request: RemoveDomainRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    removeDomain(request: RemoveDomainRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Returns the OpenAPI specification of specified API gateway. */
    getOpenapiSpec(request: GetOpenapiSpecRequest, callback: (error: ServiceError | null, response: GetOpenapiSpecResponse) => void): ClientUnaryCall;
    getOpenapiSpec(request: GetOpenapiSpecRequest, metadata: Metadata, callback: (error: ServiceError | null, response: GetOpenapiSpecResponse) => void): ClientUnaryCall;
    getOpenapiSpec(request: GetOpenapiSpecRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: GetOpenapiSpecResponse) => void): ClientUnaryCall;
    /** Lists operations for the specified API gateway. */
    listOperations(request: ListOperationsRequest, callback: (error: ServiceError | null, response: ListOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListOperationsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListOperationsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListOperationsResponse) => void): ClientUnaryCall;
    /** Lists existing access bindings for the specified API gateway. */
    listAccessBindings(request: ListAccessBindingsRequest, callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void): ClientUnaryCall;
    listAccessBindings(request: ListAccessBindingsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void): ClientUnaryCall;
    listAccessBindings(request: ListAccessBindingsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void): ClientUnaryCall;
    /** Sets access bindings for the specified API gateway. */
    setAccessBindings(request: SetAccessBindingsRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    setAccessBindings(request: SetAccessBindingsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    setAccessBindings(request: SetAccessBindingsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates access bindings for the specified API gateway. */
    updateAccessBindings(request: UpdateAccessBindingsRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateAccessBindings(request: UpdateAccessBindingsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateAccessBindings(request: UpdateAccessBindingsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
}
export declare const ApiGatewayServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): ApiGatewayServiceClient;
    service: typeof ApiGatewayServiceService;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P> | "$type">, never>;
export {};
