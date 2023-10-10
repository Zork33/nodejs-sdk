/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { UserSpec, Permission, User } from "../../../../../yandex/cloud/mdb/mysql/v1alpha/user";
import { FieldMask } from "../../../../../google/protobuf/field_mask";
import { Operation } from "../../../../../yandex/cloud/operation/operation";
export declare const protobufPackage = "yandex.cloud.mdb.mysql.v1alpha";
export interface GetUserRequest {
    $type: "yandex.cloud.mdb.mysql.v1alpha.GetUserRequest";
    /** ID of the MySQL cluster. */
    clusterId: string;
    /** Name of the user. */
    userName: string;
}
export interface ListUsersRequest {
    $type: "yandex.cloud.mdb.mysql.v1alpha.ListUsersRequest";
    /** ID of the cluster to list MySQL users in. To get the cluster ID, use a [ClusterService.List] request. */
    clusterId: string;
    /** The maximum number of results per page to return. If the number of available results is larger than [page_size], the service returns a [ListUsersResponse.next_page_token] that can be used to get the next page of results in subsequent list requests. */
    pageSize: number;
    /** Page token. To get the next page of results, set [page_token] to the [ListUsersResponse.next_page_token] returned by the previous list request. */
    pageToken: string;
}
export interface ListUsersResponse {
    $type: "yandex.cloud.mdb.mysql.v1alpha.ListUsersResponse";
    /** Requested list of MySQL users. */
    users: User[];
    /** This token allows you to get the next page of results for list requests. If the number of results is larger than [ListUsersRequest.page_size], use the [next_page_token] as the value for the [ListUsersRequest.page_token] parameter in the next list request. Each subsequent list request will have its own [next_page_token] to continue paging through the results. */
    nextPageToken: string;
}
export interface CreateUserRequest {
    $type: "yandex.cloud.mdb.mysql.v1alpha.CreateUserRequest";
    /** ID of the MySQL cluster to create a user for. To get the cluster ID, use a [ClusterService.List] request. */
    clusterId: string;
    /** Properties of the user to be created. */
    userSpec?: UserSpec;
}
export interface CreateUserMetadata {
    $type: "yandex.cloud.mdb.mysql.v1alpha.CreateUserMetadata";
    /** ID of the MySQL cluster the user is being created for. */
    clusterId: string;
    /** Name of the user that is being created. */
    userName: string;
}
export interface UpdateUserRequest {
    $type: "yandex.cloud.mdb.mysql.v1alpha.UpdateUserRequest";
    /** ID of the MySQL cluster the user belongs to. To get the cluster ID, use a [ClusterService.List] request. */
    clusterId: string;
    /** Name of the user to be updated. To get the name of the user, use a [UserService.List] request. */
    userName: string;
    /** Field mask that specifies which settings of the MySQL user should be updated. */
    updateMask?: FieldMask;
    /** New password for the user. */
    password: string;
    /** New set of permissions for the user. */
    permissions: Permission[];
}
export interface UpdateUserMetadata {
    $type: "yandex.cloud.mdb.mysql.v1alpha.UpdateUserMetadata";
    /** ID of the MySQL cluster the user belongs to. */
    clusterId: string;
    /** Name of a user that is being updated. */
    userName: string;
}
export interface DeleteUserRequest {
    $type: "yandex.cloud.mdb.mysql.v1alpha.DeleteUserRequest";
    /** ID of the MySQL cluster the user belongs to. To get the cluster ID, use a [ClusterService.List] request. */
    clusterId: string;
    /** Name of the user to delete. To get the name of the user, use a [UserService.List] request. */
    userName: string;
}
export interface DeleteUserMetadata {
    $type: "yandex.cloud.mdb.mysql.v1alpha.DeleteUserMetadata";
    /** ID of the MySQL cluster the user belongs to. */
    clusterId: string;
    /** Name of the user that is being deleted. */
    userName: string;
}
export interface GrantUserPermissionRequest {
    $type: "yandex.cloud.mdb.mysql.v1alpha.GrantUserPermissionRequest";
    /** ID of the MySQL cluster the user belongs to. To get the cluster ID, use a [ClusterService.List] request. */
    clusterId: string;
    /** Name of the user to grant the permission to. To get the name of the user, use a [UserService.List] request. */
    userName: string;
    /** Permission that should be granted to the specified user. */
    permission?: Permission;
}
export interface GrantUserPermissionMetadata {
    $type: "yandex.cloud.mdb.mysql.v1alpha.GrantUserPermissionMetadata";
    /** ID of the MySQL cluster the user belongs to. To get the cluster ID, use a [ClusterService.List] request. */
    clusterId: string;
    /** Name of the user that is being granted a permission. */
    userName: string;
}
export interface RevokeUserPermissionRequest {
    $type: "yandex.cloud.mdb.mysql.v1alpha.RevokeUserPermissionRequest";
    /** ID of the MySQL cluster the user belongs to. To get the cluster ID, use a [ClusterService.List] request. */
    clusterId: string;
    /** Name of the user to revoke a permission from. To get the name of the user, use a [UserService.List] request. */
    userName: string;
    /** Name of the database that the user should lose access to. */
    databaseName: string;
}
export interface RevokeUserPermissionMetadata {
    $type: "yandex.cloud.mdb.mysql.v1alpha.RevokeUserPermissionMetadata";
    /** ID of the MySQL cluster the user belongs to. */
    clusterId: string;
    /** Name of the user whose permission is being revoked. */
    userName: string;
}
export declare const GetUserRequest: {
    $type: "yandex.cloud.mdb.mysql.v1alpha.GetUserRequest";
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
    $type: "yandex.cloud.mdb.mysql.v1alpha.ListUsersRequest";
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
    $type: "yandex.cloud.mdb.mysql.v1alpha.ListUsersResponse";
    encode(message: ListUsersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListUsersResponse;
    fromJSON(object: any): ListUsersResponse;
    toJSON(message: ListUsersResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        users?: {
            name?: string | undefined;
            permissions?: {
                databaseName?: string | undefined;
                roles?: import("../../../../../yandex/cloud/mdb/mysql/v1alpha/user").Permission_Privilege[] | undefined;
            }[] | undefined;
            clusterId?: string | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        users?: ({
            name?: string | undefined;
            permissions?: {
                databaseName?: string | undefined;
                roles?: import("../../../../../yandex/cloud/mdb/mysql/v1alpha/user").Permission_Privilege[] | undefined;
            }[] | undefined;
            clusterId?: string | undefined;
        }[] & ({
            name?: string | undefined;
            permissions?: {
                databaseName?: string | undefined;
                roles?: import("../../../../../yandex/cloud/mdb/mysql/v1alpha/user").Permission_Privilege[] | undefined;
            }[] | undefined;
            clusterId?: string | undefined;
        } & {
            name?: string | undefined;
            permissions?: ({
                databaseName?: string | undefined;
                roles?: import("../../../../../yandex/cloud/mdb/mysql/v1alpha/user").Permission_Privilege[] | undefined;
            }[] & ({
                databaseName?: string | undefined;
                roles?: import("../../../../../yandex/cloud/mdb/mysql/v1alpha/user").Permission_Privilege[] | undefined;
            } & {
                databaseName?: string | undefined;
                roles?: (import("../../../../../yandex/cloud/mdb/mysql/v1alpha/user").Permission_Privilege[] & import("../../../../../yandex/cloud/mdb/mysql/v1alpha/user").Permission_Privilege[] & Record<Exclude<keyof I["users"][number]["permissions"][number]["roles"], "$type" | keyof import("../../../../../yandex/cloud/mdb/mysql/v1alpha/user").Permission_Privilege[]>, never>) | undefined;
            } & Record<Exclude<keyof I["users"][number]["permissions"][number], "$type" | "databaseName" | "roles">, never>)[] & Record<Exclude<keyof I["users"][number]["permissions"], "$type" | keyof {
                databaseName?: string | undefined;
                roles?: import("../../../../../yandex/cloud/mdb/mysql/v1alpha/user").Permission_Privilege[] | undefined;
            }[]>, never>) | undefined;
            clusterId?: string | undefined;
        } & Record<Exclude<keyof I["users"][number], "$type" | "name" | "permissions" | "clusterId">, never>)[] & Record<Exclude<keyof I["users"], "$type" | keyof {
            name?: string | undefined;
            permissions?: {
                databaseName?: string | undefined;
                roles?: import("../../../../../yandex/cloud/mdb/mysql/v1alpha/user").Permission_Privilege[] | undefined;
            }[] | undefined;
            clusterId?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "users">, never>>(object: I): ListUsersResponse;
};
export declare const CreateUserRequest: {
    $type: "yandex.cloud.mdb.mysql.v1alpha.CreateUserRequest";
    encode(message: CreateUserRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateUserRequest;
    fromJSON(object: any): CreateUserRequest;
    toJSON(message: CreateUserRequest): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
        userSpec?: {
            name?: string | undefined;
            permissions?: {
                databaseName?: string | undefined;
                roles?: import("../../../../../yandex/cloud/mdb/mysql/v1alpha/user").Permission_Privilege[] | undefined;
            }[] | undefined;
            password?: string | undefined;
        } | undefined;
    } & {
        clusterId?: string | undefined;
        userSpec?: ({
            name?: string | undefined;
            permissions?: {
                databaseName?: string | undefined;
                roles?: import("../../../../../yandex/cloud/mdb/mysql/v1alpha/user").Permission_Privilege[] | undefined;
            }[] | undefined;
            password?: string | undefined;
        } & {
            name?: string | undefined;
            permissions?: ({
                databaseName?: string | undefined;
                roles?: import("../../../../../yandex/cloud/mdb/mysql/v1alpha/user").Permission_Privilege[] | undefined;
            }[] & ({
                databaseName?: string | undefined;
                roles?: import("../../../../../yandex/cloud/mdb/mysql/v1alpha/user").Permission_Privilege[] | undefined;
            } & {
                databaseName?: string | undefined;
                roles?: (import("../../../../../yandex/cloud/mdb/mysql/v1alpha/user").Permission_Privilege[] & import("../../../../../yandex/cloud/mdb/mysql/v1alpha/user").Permission_Privilege[] & Record<Exclude<keyof I["userSpec"]["permissions"][number]["roles"], "$type" | keyof import("../../../../../yandex/cloud/mdb/mysql/v1alpha/user").Permission_Privilege[]>, never>) | undefined;
            } & Record<Exclude<keyof I["userSpec"]["permissions"][number], "$type" | "databaseName" | "roles">, never>)[] & Record<Exclude<keyof I["userSpec"]["permissions"], "$type" | keyof {
                databaseName?: string | undefined;
                roles?: import("../../../../../yandex/cloud/mdb/mysql/v1alpha/user").Permission_Privilege[] | undefined;
            }[]>, never>) | undefined;
            password?: string | undefined;
        } & Record<Exclude<keyof I["userSpec"], "$type" | "name" | "permissions" | "password">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId" | "userSpec">, never>>(object: I): CreateUserRequest;
};
export declare const CreateUserMetadata: {
    $type: "yandex.cloud.mdb.mysql.v1alpha.CreateUserMetadata";
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
    $type: "yandex.cloud.mdb.mysql.v1alpha.UpdateUserRequest";
    encode(message: UpdateUserRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateUserRequest;
    fromJSON(object: any): UpdateUserRequest;
    toJSON(message: UpdateUserRequest): unknown;
    fromPartial<I extends {
        updateMask?: {
            paths?: string[] | undefined;
        } | undefined;
        permissions?: {
            databaseName?: string | undefined;
            roles?: import("../../../../../yandex/cloud/mdb/mysql/v1alpha/user").Permission_Privilege[] | undefined;
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
            databaseName?: string | undefined;
            roles?: import("../../../../../yandex/cloud/mdb/mysql/v1alpha/user").Permission_Privilege[] | undefined;
        }[] & ({
            databaseName?: string | undefined;
            roles?: import("../../../../../yandex/cloud/mdb/mysql/v1alpha/user").Permission_Privilege[] | undefined;
        } & {
            databaseName?: string | undefined;
            roles?: (import("../../../../../yandex/cloud/mdb/mysql/v1alpha/user").Permission_Privilege[] & import("../../../../../yandex/cloud/mdb/mysql/v1alpha/user").Permission_Privilege[] & Record<Exclude<keyof I["permissions"][number]["roles"], "$type" | keyof import("../../../../../yandex/cloud/mdb/mysql/v1alpha/user").Permission_Privilege[]>, never>) | undefined;
        } & Record<Exclude<keyof I["permissions"][number], "$type" | "databaseName" | "roles">, never>)[] & Record<Exclude<keyof I["permissions"], "$type" | keyof {
            databaseName?: string | undefined;
            roles?: import("../../../../../yandex/cloud/mdb/mysql/v1alpha/user").Permission_Privilege[] | undefined;
        }[]>, never>) | undefined;
        clusterId?: string | undefined;
        password?: string | undefined;
        userName?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "updateMask" | "permissions" | "clusterId" | "password" | "userName">, never>>(object: I): UpdateUserRequest;
};
export declare const UpdateUserMetadata: {
    $type: "yandex.cloud.mdb.mysql.v1alpha.UpdateUserMetadata";
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
    $type: "yandex.cloud.mdb.mysql.v1alpha.DeleteUserRequest";
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
    $type: "yandex.cloud.mdb.mysql.v1alpha.DeleteUserMetadata";
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
    $type: "yandex.cloud.mdb.mysql.v1alpha.GrantUserPermissionRequest";
    encode(message: GrantUserPermissionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GrantUserPermissionRequest;
    fromJSON(object: any): GrantUserPermissionRequest;
    toJSON(message: GrantUserPermissionRequest): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
        userName?: string | undefined;
        permission?: {
            databaseName?: string | undefined;
            roles?: import("../../../../../yandex/cloud/mdb/mysql/v1alpha/user").Permission_Privilege[] | undefined;
        } | undefined;
    } & {
        clusterId?: string | undefined;
        userName?: string | undefined;
        permission?: ({
            databaseName?: string | undefined;
            roles?: import("../../../../../yandex/cloud/mdb/mysql/v1alpha/user").Permission_Privilege[] | undefined;
        } & {
            databaseName?: string | undefined;
            roles?: (import("../../../../../yandex/cloud/mdb/mysql/v1alpha/user").Permission_Privilege[] & import("../../../../../yandex/cloud/mdb/mysql/v1alpha/user").Permission_Privilege[] & Record<Exclude<keyof I["permission"]["roles"], "$type" | keyof import("../../../../../yandex/cloud/mdb/mysql/v1alpha/user").Permission_Privilege[]>, never>) | undefined;
        } & Record<Exclude<keyof I["permission"], "$type" | "databaseName" | "roles">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId" | "userName" | "permission">, never>>(object: I): GrantUserPermissionRequest;
};
export declare const GrantUserPermissionMetadata: {
    $type: "yandex.cloud.mdb.mysql.v1alpha.GrantUserPermissionMetadata";
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
    $type: "yandex.cloud.mdb.mysql.v1alpha.RevokeUserPermissionRequest";
    encode(message: RevokeUserPermissionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RevokeUserPermissionRequest;
    fromJSON(object: any): RevokeUserPermissionRequest;
    toJSON(message: RevokeUserPermissionRequest): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
        databaseName?: string | undefined;
        userName?: string | undefined;
    } & {
        clusterId?: string | undefined;
        databaseName?: string | undefined;
        userName?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId" | "databaseName" | "userName">, never>>(object: I): RevokeUserPermissionRequest;
};
export declare const RevokeUserPermissionMetadata: {
    $type: "yandex.cloud.mdb.mysql.v1alpha.RevokeUserPermissionMetadata";
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
/** A set of methods for managing MySQL users. */
export declare const UserServiceService: {
    /**
     * Returns the specified MySQL user.
     *
     * To get the list of available MySQL users, make a [List] request.
     */
    readonly get: {
        readonly path: "/yandex.cloud.mdb.mysql.v1alpha.UserService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetUserRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetUserRequest;
        readonly responseSerialize: (value: User) => Buffer;
        readonly responseDeserialize: (value: Buffer) => User;
    };
    /** Retrieves a list of MySQL users in the specified cluster. */
    readonly list: {
        readonly path: "/yandex.cloud.mdb.mysql.v1alpha.UserService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListUsersRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListUsersRequest;
        readonly responseSerialize: (value: ListUsersResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListUsersResponse;
    };
    /** Creates a MySQL user in the specified cluster. */
    readonly create: {
        readonly path: "/yandex.cloud.mdb.mysql.v1alpha.UserService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateUserRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateUserRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Modifies the specified MySQL user. */
    readonly update: {
        readonly path: "/yandex.cloud.mdb.mysql.v1alpha.UserService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateUserRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateUserRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified MySQL user. */
    readonly delete: {
        readonly path: "/yandex.cloud.mdb.mysql.v1alpha.UserService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteUserRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteUserRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Grants a permission to the specified MySQL user. */
    readonly grantPermission: {
        readonly path: "/yandex.cloud.mdb.mysql.v1alpha.UserService/GrantPermission";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GrantUserPermissionRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GrantUserPermissionRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Revokes a permission from the specified MySQL user. */
    readonly revokePermission: {
        readonly path: "/yandex.cloud.mdb.mysql.v1alpha.UserService/RevokePermission";
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
     * Returns the specified MySQL user.
     *
     * To get the list of available MySQL users, make a [List] request.
     */
    get: handleUnaryCall<GetUserRequest, User>;
    /** Retrieves a list of MySQL users in the specified cluster. */
    list: handleUnaryCall<ListUsersRequest, ListUsersResponse>;
    /** Creates a MySQL user in the specified cluster. */
    create: handleUnaryCall<CreateUserRequest, Operation>;
    /** Modifies the specified MySQL user. */
    update: handleUnaryCall<UpdateUserRequest, Operation>;
    /** Deletes the specified MySQL user. */
    delete: handleUnaryCall<DeleteUserRequest, Operation>;
    /** Grants a permission to the specified MySQL user. */
    grantPermission: handleUnaryCall<GrantUserPermissionRequest, Operation>;
    /** Revokes a permission from the specified MySQL user. */
    revokePermission: handleUnaryCall<RevokeUserPermissionRequest, Operation>;
}
export interface UserServiceClient extends Client {
    /**
     * Returns the specified MySQL user.
     *
     * To get the list of available MySQL users, make a [List] request.
     */
    get(request: GetUserRequest, callback: (error: ServiceError | null, response: User) => void): ClientUnaryCall;
    get(request: GetUserRequest, metadata: Metadata, callback: (error: ServiceError | null, response: User) => void): ClientUnaryCall;
    get(request: GetUserRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: User) => void): ClientUnaryCall;
    /** Retrieves a list of MySQL users in the specified cluster. */
    list(request: ListUsersRequest, callback: (error: ServiceError | null, response: ListUsersResponse) => void): ClientUnaryCall;
    list(request: ListUsersRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListUsersResponse) => void): ClientUnaryCall;
    list(request: ListUsersRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListUsersResponse) => void): ClientUnaryCall;
    /** Creates a MySQL user in the specified cluster. */
    create(request: CreateUserRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateUserRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateUserRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Modifies the specified MySQL user. */
    update(request: UpdateUserRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateUserRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateUserRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified MySQL user. */
    delete(request: DeleteUserRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteUserRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteUserRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Grants a permission to the specified MySQL user. */
    grantPermission(request: GrantUserPermissionRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    grantPermission(request: GrantUserPermissionRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    grantPermission(request: GrantUserPermissionRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Revokes a permission from the specified MySQL user. */
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
