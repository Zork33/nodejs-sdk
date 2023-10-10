/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { UserSpec, Permission, User } from "../../../../../yandex/cloud/mdb/kafka/v1/user";
import { FieldMask } from "../../../../../google/protobuf/field_mask";
import { Operation } from "../../../../../yandex/cloud/operation/operation";
export declare const protobufPackage = "yandex.cloud.mdb.kafka.v1";
export interface GetUserRequest {
    $type: "yandex.cloud.mdb.kafka.v1.GetUserRequest";
    /**
     * ID of the Apache Kafka® cluster the user belongs to.
     *
     * To get the cluster ID, make a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * Name of the Kafka user to return.
     *
     * To get the name of the user, make a [UserService.List] request.
     */
    userName: string;
}
export interface ListUsersRequest {
    $type: "yandex.cloud.mdb.kafka.v1.ListUsersRequest";
    /**
     * ID of the Apache Kafka® cluster to list Kafka users in.
     *
     * To get the Apache Kafka® cluster ID, make a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * The maximum number of results per page to return.
     *
     * If the number of available results is larger than [page_size], the service returns a [ListUsersResponse.next_page_token] that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token.
     *
     * To get the next page of results, set [page_token] to the [ListUsersResponse.next_page_token] returned by the previous list request.
     */
    pageToken: string;
}
export interface ListUsersResponse {
    $type: "yandex.cloud.mdb.kafka.v1.ListUsersResponse";
    /** List of Kafka users. */
    users: User[];
    /**
     * This token allows you to get the next page of results for list requests.
     *
     * If the number of results is larger than [ListUsersRequest.page_size], use the [next_page_token] as the value for the [ListUsersRequest.page_token] parameter in the next list request.
     * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface CreateUserRequest {
    $type: "yandex.cloud.mdb.kafka.v1.CreateUserRequest";
    /**
     * ID of the Apache Kafka® cluster to create a user in.
     *
     * To get the cluster ID, make a [ClusterService.List] request.
     */
    clusterId: string;
    /** Configuration of the user to create. */
    userSpec?: UserSpec;
}
export interface CreateUserMetadata {
    $type: "yandex.cloud.mdb.kafka.v1.CreateUserMetadata";
    /** ID of the Apache Kafka® cluster the user is being created in. */
    clusterId: string;
    /** Name of the user that is being created. */
    userName: string;
}
export interface UpdateUserRequest {
    $type: "yandex.cloud.mdb.kafka.v1.UpdateUserRequest";
    /**
     * ID of the Apache Kafka® cluster the user belongs to.
     *
     * To get the cluster ID, make a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * Name of the user to be updated.
     *
     * To get the name of the user, make a [UserService.List] request.
     */
    userName: string;
    updateMask?: FieldMask;
    /** New password for the user. */
    password: string;
    /** New set of permissions for the user. */
    permissions: Permission[];
}
export interface UpdateUserMetadata {
    $type: "yandex.cloud.mdb.kafka.v1.UpdateUserMetadata";
    /** ID of the Apache Kafka® cluster the user belongs to. */
    clusterId: string;
    /** Name of the user that is being updated. */
    userName: string;
}
export interface DeleteUserRequest {
    $type: "yandex.cloud.mdb.kafka.v1.DeleteUserRequest";
    /**
     * ID of the Apache Kafka® cluster the user belongs to.
     * To get the cluster ID, make a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * Name of the user to delete.
     * To get the name of the user, make a [UserService.List] request.
     */
    userName: string;
}
export interface DeleteUserMetadata {
    $type: "yandex.cloud.mdb.kafka.v1.DeleteUserMetadata";
    /** ID of the Apache Kafka® cluster the user belongs to. */
    clusterId: string;
    /** Name of the user that is being deleted. */
    userName: string;
}
export interface GrantUserPermissionRequest {
    $type: "yandex.cloud.mdb.kafka.v1.GrantUserPermissionRequest";
    /**
     * ID of the Apache Kafka® cluster the user belongs to.
     *
     * To get the cluster ID, make a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * Name of the user to grant the permission to.
     *
     * To get the name of the user, make a [UserService.List] request.
     */
    userName: string;
    /** Permission that should be granted to the specified user. */
    permission?: Permission;
}
export interface GrantUserPermissionMetadata {
    $type: "yandex.cloud.mdb.kafka.v1.GrantUserPermissionMetadata";
    /**
     * ID of the Apache Kafka® cluster the user belongs to.
     *
     * To get the cluster ID, make a [ClusterService.List] request.
     */
    clusterId: string;
    /** Name of the user that is being granted a permission. */
    userName: string;
}
export interface RevokeUserPermissionRequest {
    $type: "yandex.cloud.mdb.kafka.v1.RevokeUserPermissionRequest";
    /**
     * ID of the Apache Kafka® cluster the user belongs to.
     *
     * To get the cluster ID, make a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * Name of the user to revoke a permission from.
     *
     * To get the name of the user, make a [UserService.List] request.
     */
    userName: string;
    /** Permission that should be revoked from the specified user. */
    permission?: Permission;
}
export interface RevokeUserPermissionMetadata {
    $type: "yandex.cloud.mdb.kafka.v1.RevokeUserPermissionMetadata";
    /** ID of the Apache Kafka® cluster the user belongs to. */
    clusterId: string;
    /** Name of the user whose permission is being revoked. */
    userName: string;
}
export declare const GetUserRequest: {
    $type: "yandex.cloud.mdb.kafka.v1.GetUserRequest";
    encode(message: GetUserRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetUserRequest;
    fromJSON(object: any): GetUserRequest;
    toJSON(message: GetUserRequest): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
        userName?: string | undefined;
    } & {
        clusterId?: string | undefined;
        userName?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId" | "userName">, never>>(object: I): GetUserRequest;
};
export declare const ListUsersRequest: {
    $type: "yandex.cloud.mdb.kafka.v1.ListUsersRequest";
    encode(message: ListUsersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListUsersRequest;
    fromJSON(object: any): ListUsersRequest;
    toJSON(message: ListUsersRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        clusterId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        clusterId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "clusterId">, never>>(object: I): ListUsersRequest;
};
export declare const ListUsersResponse: {
    $type: "yandex.cloud.mdb.kafka.v1.ListUsersResponse";
    encode(message: ListUsersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListUsersResponse;
    fromJSON(object: any): ListUsersResponse;
    toJSON(message: ListUsersResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        users?: {
            name?: string | undefined;
            permissions?: {
                role?: import("../../../../../yandex/cloud/mdb/kafka/v1/user").Permission_AccessRole | undefined;
                topicName?: string | undefined;
                allowHosts?: string[] | undefined;
            }[] | undefined;
            clusterId?: string | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        users?: ({
            name?: string | undefined;
            permissions?: {
                role?: import("../../../../../yandex/cloud/mdb/kafka/v1/user").Permission_AccessRole | undefined;
                topicName?: string | undefined;
                allowHosts?: string[] | undefined;
            }[] | undefined;
            clusterId?: string | undefined;
        }[] & ({
            name?: string | undefined;
            permissions?: {
                role?: import("../../../../../yandex/cloud/mdb/kafka/v1/user").Permission_AccessRole | undefined;
                topicName?: string | undefined;
                allowHosts?: string[] | undefined;
            }[] | undefined;
            clusterId?: string | undefined;
        } & {
            name?: string | undefined;
            permissions?: ({
                role?: import("../../../../../yandex/cloud/mdb/kafka/v1/user").Permission_AccessRole | undefined;
                topicName?: string | undefined;
                allowHosts?: string[] | undefined;
            }[] & ({
                role?: import("../../../../../yandex/cloud/mdb/kafka/v1/user").Permission_AccessRole | undefined;
                topicName?: string | undefined;
                allowHosts?: string[] | undefined;
            } & {
                role?: import("../../../../../yandex/cloud/mdb/kafka/v1/user").Permission_AccessRole | undefined;
                topicName?: string | undefined;
                allowHosts?: (string[] & string[] & Record<Exclude<keyof I["users"][number]["permissions"][number]["allowHosts"], "$type" | keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["users"][number]["permissions"][number], "$type" | "role" | "topicName" | "allowHosts">, never>)[] & Record<Exclude<keyof I["users"][number]["permissions"], "$type" | keyof {
                role?: import("../../../../../yandex/cloud/mdb/kafka/v1/user").Permission_AccessRole | undefined;
                topicName?: string | undefined;
                allowHosts?: string[] | undefined;
            }[]>, never>) | undefined;
            clusterId?: string | undefined;
        } & Record<Exclude<keyof I["users"][number], "$type" | "name" | "permissions" | "clusterId">, never>)[] & Record<Exclude<keyof I["users"], "$type" | keyof {
            name?: string | undefined;
            permissions?: {
                role?: import("../../../../../yandex/cloud/mdb/kafka/v1/user").Permission_AccessRole | undefined;
                topicName?: string | undefined;
                allowHosts?: string[] | undefined;
            }[] | undefined;
            clusterId?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "users">, never>>(object: I): ListUsersResponse;
};
export declare const CreateUserRequest: {
    $type: "yandex.cloud.mdb.kafka.v1.CreateUserRequest";
    encode(message: CreateUserRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateUserRequest;
    fromJSON(object: any): CreateUserRequest;
    toJSON(message: CreateUserRequest): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
        userSpec?: {
            name?: string | undefined;
            permissions?: {
                role?: import("../../../../../yandex/cloud/mdb/kafka/v1/user").Permission_AccessRole | undefined;
                topicName?: string | undefined;
                allowHosts?: string[] | undefined;
            }[] | undefined;
            password?: string | undefined;
        } | undefined;
    } & {
        clusterId?: string | undefined;
        userSpec?: ({
            name?: string | undefined;
            permissions?: {
                role?: import("../../../../../yandex/cloud/mdb/kafka/v1/user").Permission_AccessRole | undefined;
                topicName?: string | undefined;
                allowHosts?: string[] | undefined;
            }[] | undefined;
            password?: string | undefined;
        } & {
            name?: string | undefined;
            permissions?: ({
                role?: import("../../../../../yandex/cloud/mdb/kafka/v1/user").Permission_AccessRole | undefined;
                topicName?: string | undefined;
                allowHosts?: string[] | undefined;
            }[] & ({
                role?: import("../../../../../yandex/cloud/mdb/kafka/v1/user").Permission_AccessRole | undefined;
                topicName?: string | undefined;
                allowHosts?: string[] | undefined;
            } & {
                role?: import("../../../../../yandex/cloud/mdb/kafka/v1/user").Permission_AccessRole | undefined;
                topicName?: string | undefined;
                allowHosts?: (string[] & string[] & Record<Exclude<keyof I["userSpec"]["permissions"][number]["allowHosts"], "$type" | keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["userSpec"]["permissions"][number], "$type" | "role" | "topicName" | "allowHosts">, never>)[] & Record<Exclude<keyof I["userSpec"]["permissions"], "$type" | keyof {
                role?: import("../../../../../yandex/cloud/mdb/kafka/v1/user").Permission_AccessRole | undefined;
                topicName?: string | undefined;
                allowHosts?: string[] | undefined;
            }[]>, never>) | undefined;
            password?: string | undefined;
        } & Record<Exclude<keyof I["userSpec"], "$type" | "name" | "permissions" | "password">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId" | "userSpec">, never>>(object: I): CreateUserRequest;
};
export declare const CreateUserMetadata: {
    $type: "yandex.cloud.mdb.kafka.v1.CreateUserMetadata";
    encode(message: CreateUserMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateUserMetadata;
    fromJSON(object: any): CreateUserMetadata;
    toJSON(message: CreateUserMetadata): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
        userName?: string | undefined;
    } & {
        clusterId?: string | undefined;
        userName?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId" | "userName">, never>>(object: I): CreateUserMetadata;
};
export declare const UpdateUserRequest: {
    $type: "yandex.cloud.mdb.kafka.v1.UpdateUserRequest";
    encode(message: UpdateUserRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateUserRequest;
    fromJSON(object: any): UpdateUserRequest;
    toJSON(message: UpdateUserRequest): unknown;
    fromPartial<I extends {
        updateMask?: {
            paths?: string[] | undefined;
        } | undefined;
        permissions?: {
            role?: import("../../../../../yandex/cloud/mdb/kafka/v1/user").Permission_AccessRole | undefined;
            topicName?: string | undefined;
            allowHosts?: string[] | undefined;
        }[] | undefined;
        clusterId?: string | undefined;
        password?: string | undefined;
        userName?: string | undefined;
    } & {
        updateMask?: ({
            paths?: string[] | undefined;
        } & {
            paths?: (string[] & string[] & Record<Exclude<keyof I["updateMask"]["paths"], "$type" | keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["updateMask"], "$type" | "paths">, never>) | undefined;
        permissions?: ({
            role?: import("../../../../../yandex/cloud/mdb/kafka/v1/user").Permission_AccessRole | undefined;
            topicName?: string | undefined;
            allowHosts?: string[] | undefined;
        }[] & ({
            role?: import("../../../../../yandex/cloud/mdb/kafka/v1/user").Permission_AccessRole | undefined;
            topicName?: string | undefined;
            allowHosts?: string[] | undefined;
        } & {
            role?: import("../../../../../yandex/cloud/mdb/kafka/v1/user").Permission_AccessRole | undefined;
            topicName?: string | undefined;
            allowHosts?: (string[] & string[] & Record<Exclude<keyof I["permissions"][number]["allowHosts"], "$type" | keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["permissions"][number], "$type" | "role" | "topicName" | "allowHosts">, never>)[] & Record<Exclude<keyof I["permissions"], "$type" | keyof {
            role?: import("../../../../../yandex/cloud/mdb/kafka/v1/user").Permission_AccessRole | undefined;
            topicName?: string | undefined;
            allowHosts?: string[] | undefined;
        }[]>, never>) | undefined;
        clusterId?: string | undefined;
        password?: string | undefined;
        userName?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "updateMask" | "permissions" | "clusterId" | "password" | "userName">, never>>(object: I): UpdateUserRequest;
};
export declare const UpdateUserMetadata: {
    $type: "yandex.cloud.mdb.kafka.v1.UpdateUserMetadata";
    encode(message: UpdateUserMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateUserMetadata;
    fromJSON(object: any): UpdateUserMetadata;
    toJSON(message: UpdateUserMetadata): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
        userName?: string | undefined;
    } & {
        clusterId?: string | undefined;
        userName?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId" | "userName">, never>>(object: I): UpdateUserMetadata;
};
export declare const DeleteUserRequest: {
    $type: "yandex.cloud.mdb.kafka.v1.DeleteUserRequest";
    encode(message: DeleteUserRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteUserRequest;
    fromJSON(object: any): DeleteUserRequest;
    toJSON(message: DeleteUserRequest): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
        userName?: string | undefined;
    } & {
        clusterId?: string | undefined;
        userName?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId" | "userName">, never>>(object: I): DeleteUserRequest;
};
export declare const DeleteUserMetadata: {
    $type: "yandex.cloud.mdb.kafka.v1.DeleteUserMetadata";
    encode(message: DeleteUserMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteUserMetadata;
    fromJSON(object: any): DeleteUserMetadata;
    toJSON(message: DeleteUserMetadata): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
        userName?: string | undefined;
    } & {
        clusterId?: string | undefined;
        userName?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId" | "userName">, never>>(object: I): DeleteUserMetadata;
};
export declare const GrantUserPermissionRequest: {
    $type: "yandex.cloud.mdb.kafka.v1.GrantUserPermissionRequest";
    encode(message: GrantUserPermissionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GrantUserPermissionRequest;
    fromJSON(object: any): GrantUserPermissionRequest;
    toJSON(message: GrantUserPermissionRequest): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
        userName?: string | undefined;
        permission?: {
            role?: import("../../../../../yandex/cloud/mdb/kafka/v1/user").Permission_AccessRole | undefined;
            topicName?: string | undefined;
            allowHosts?: string[] | undefined;
        } | undefined;
    } & {
        clusterId?: string | undefined;
        userName?: string | undefined;
        permission?: ({
            role?: import("../../../../../yandex/cloud/mdb/kafka/v1/user").Permission_AccessRole | undefined;
            topicName?: string | undefined;
            allowHosts?: string[] | undefined;
        } & {
            role?: import("../../../../../yandex/cloud/mdb/kafka/v1/user").Permission_AccessRole | undefined;
            topicName?: string | undefined;
            allowHosts?: (string[] & string[] & Record<Exclude<keyof I["permission"]["allowHosts"], "$type" | keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["permission"], "$type" | "role" | "topicName" | "allowHosts">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId" | "userName" | "permission">, never>>(object: I): GrantUserPermissionRequest;
};
export declare const GrantUserPermissionMetadata: {
    $type: "yandex.cloud.mdb.kafka.v1.GrantUserPermissionMetadata";
    encode(message: GrantUserPermissionMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GrantUserPermissionMetadata;
    fromJSON(object: any): GrantUserPermissionMetadata;
    toJSON(message: GrantUserPermissionMetadata): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
        userName?: string | undefined;
    } & {
        clusterId?: string | undefined;
        userName?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId" | "userName">, never>>(object: I): GrantUserPermissionMetadata;
};
export declare const RevokeUserPermissionRequest: {
    $type: "yandex.cloud.mdb.kafka.v1.RevokeUserPermissionRequest";
    encode(message: RevokeUserPermissionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RevokeUserPermissionRequest;
    fromJSON(object: any): RevokeUserPermissionRequest;
    toJSON(message: RevokeUserPermissionRequest): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
        userName?: string | undefined;
        permission?: {
            role?: import("../../../../../yandex/cloud/mdb/kafka/v1/user").Permission_AccessRole | undefined;
            topicName?: string | undefined;
            allowHosts?: string[] | undefined;
        } | undefined;
    } & {
        clusterId?: string | undefined;
        userName?: string | undefined;
        permission?: ({
            role?: import("../../../../../yandex/cloud/mdb/kafka/v1/user").Permission_AccessRole | undefined;
            topicName?: string | undefined;
            allowHosts?: string[] | undefined;
        } & {
            role?: import("../../../../../yandex/cloud/mdb/kafka/v1/user").Permission_AccessRole | undefined;
            topicName?: string | undefined;
            allowHosts?: (string[] & string[] & Record<Exclude<keyof I["permission"]["allowHosts"], "$type" | keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["permission"], "$type" | "role" | "topicName" | "allowHosts">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId" | "userName" | "permission">, never>>(object: I): RevokeUserPermissionRequest;
};
export declare const RevokeUserPermissionMetadata: {
    $type: "yandex.cloud.mdb.kafka.v1.RevokeUserPermissionMetadata";
    encode(message: RevokeUserPermissionMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RevokeUserPermissionMetadata;
    fromJSON(object: any): RevokeUserPermissionMetadata;
    toJSON(message: RevokeUserPermissionMetadata): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
        userName?: string | undefined;
    } & {
        clusterId?: string | undefined;
        userName?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId" | "userName">, never>>(object: I): RevokeUserPermissionMetadata;
};
/** A set of methods for managing Kafka users. */
export declare const UserServiceService: {
    /**
     * Returns the specified Kafka user.
     *
     * To get the list of available Kafka users, make a [List] request.
     */
    readonly get: {
        readonly path: "/yandex.cloud.mdb.kafka.v1.UserService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetUserRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetUserRequest;
        readonly responseSerialize: (value: User) => Buffer;
        readonly responseDeserialize: (value: Buffer) => User;
    };
    /** Retrieves the list of Kafka users in the specified cluster. */
    readonly list: {
        readonly path: "/yandex.cloud.mdb.kafka.v1.UserService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListUsersRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListUsersRequest;
        readonly responseSerialize: (value: ListUsersResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListUsersResponse;
    };
    /** Creates a Kafka user in the specified cluster. */
    readonly create: {
        readonly path: "/yandex.cloud.mdb.kafka.v1.UserService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateUserRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateUserRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates the specified Kafka user. */
    readonly update: {
        readonly path: "/yandex.cloud.mdb.kafka.v1.UserService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateUserRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateUserRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified Kafka user. */
    readonly delete: {
        readonly path: "/yandex.cloud.mdb.kafka.v1.UserService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteUserRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteUserRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Grants permission to the specified Kafka user. */
    readonly grantPermission: {
        readonly path: "/yandex.cloud.mdb.kafka.v1.UserService/GrantPermission";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GrantUserPermissionRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GrantUserPermissionRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Revokes permission from the specified Kafka user. */
    readonly revokePermission: {
        readonly path: "/yandex.cloud.mdb.kafka.v1.UserService/RevokePermission";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: RevokeUserPermissionRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => RevokeUserPermissionRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
};
export interface UserServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified Kafka user.
     *
     * To get the list of available Kafka users, make a [List] request.
     */
    get: handleUnaryCall<GetUserRequest, User>;
    /** Retrieves the list of Kafka users in the specified cluster. */
    list: handleUnaryCall<ListUsersRequest, ListUsersResponse>;
    /** Creates a Kafka user in the specified cluster. */
    create: handleUnaryCall<CreateUserRequest, Operation>;
    /** Updates the specified Kafka user. */
    update: handleUnaryCall<UpdateUserRequest, Operation>;
    /** Deletes the specified Kafka user. */
    delete: handleUnaryCall<DeleteUserRequest, Operation>;
    /** Grants permission to the specified Kafka user. */
    grantPermission: handleUnaryCall<GrantUserPermissionRequest, Operation>;
    /** Revokes permission from the specified Kafka user. */
    revokePermission: handleUnaryCall<RevokeUserPermissionRequest, Operation>;
}
export interface UserServiceClient extends Client {
    /**
     * Returns the specified Kafka user.
     *
     * To get the list of available Kafka users, make a [List] request.
     */
    get(request: GetUserRequest, callback: (error: ServiceError | null, response: User) => void): ClientUnaryCall;
    get(request: GetUserRequest, metadata: Metadata, callback: (error: ServiceError | null, response: User) => void): ClientUnaryCall;
    get(request: GetUserRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: User) => void): ClientUnaryCall;
    /** Retrieves the list of Kafka users in the specified cluster. */
    list(request: ListUsersRequest, callback: (error: ServiceError | null, response: ListUsersResponse) => void): ClientUnaryCall;
    list(request: ListUsersRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListUsersResponse) => void): ClientUnaryCall;
    list(request: ListUsersRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListUsersResponse) => void): ClientUnaryCall;
    /** Creates a Kafka user in the specified cluster. */
    create(request: CreateUserRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateUserRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateUserRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates the specified Kafka user. */
    update(request: UpdateUserRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateUserRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateUserRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified Kafka user. */
    delete(request: DeleteUserRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteUserRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteUserRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Grants permission to the specified Kafka user. */
    grantPermission(request: GrantUserPermissionRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    grantPermission(request: GrantUserPermissionRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    grantPermission(request: GrantUserPermissionRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Revokes permission from the specified Kafka user. */
    revokePermission(request: RevokeUserPermissionRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    revokePermission(request: RevokeUserPermissionRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    revokePermission(request: RevokeUserPermissionRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
}
export declare const UserServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): UserServiceClient;
    service: typeof UserServiceService;
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
