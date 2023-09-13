import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.access";
export declare enum AccessBindingAction {
    ACCESS_BINDING_ACTION_UNSPECIFIED = 0,
    /** ADD - Addition of an access binding. */
    ADD = 1,
    /** REMOVE - Removal of an access binding. */
    REMOVE = 2,
    UNRECOGNIZED = -1
}
export declare function accessBindingActionFromJSON(object: any): AccessBindingAction;
export declare function accessBindingActionToJSON(object: AccessBindingAction): string;
export interface Subject {
    $type: "yandex.cloud.access.Subject";
    /**
     * ID of the subject.
     *
     * It can contain one of the following values:
     * * `allAuthenticatedUsers`: A special system identifier that represents anyone
     *    who is authenticated. It can be used only if the [type] is `system`.
     * * `allUsers`: A special system identifier that represents anyone. No authentication is required.
     *    For example, you don't need to specify the IAM token in an API query.
     * * `<cloud generated id>`: An identifier that represents a user account.
     *    It can be used only if the [type] is `userAccount`, `federatedUser` or `serviceAccount`.
     */
    id: string;
    /**
     * Type of the subject.
     *
     * It can contain one of the following values:
     * * `userAccount`: An account on Yandex or Yandex Connect, added to Yandex Cloud.
     * * `serviceAccount`: A service account. This type represents the [yandex.cloud.iam.v1.ServiceAccount] resource.
     * * `federatedUser`: A federated account. This type represents a user from an identity federation, like Active Directory.
     * * `system`: System group. This type represents several accounts with a common system identifier.
     *
     * For more information, see [Subject to which the role is assigned](/docs/iam/concepts/access-control/#subject).
     */
    type: string;
}
export interface AccessBinding {
    $type: "yandex.cloud.access.AccessBinding";
    /** ID of the [yandex.cloud.iam.v1.Role] that is assigned to the [subject]. */
    roleId: string;
    /**
     * Identity for which access binding is being created.
     * It can represent an account with a unique ID or several accounts with a system identifier.
     */
    subject?: Subject;
}
export interface ListAccessBindingsRequest {
    $type: "yandex.cloud.access.ListAccessBindingsRequest";
    /**
     * ID of the resource to list access bindings for.
     *
     * To get the resource ID, use a corresponding List request.
     * For example, use the [yandex.cloud.resourcemanager.v1.CloudService.List] request to get the Cloud resource ID.
     */
    resourceId: string;
    /**
     * The maximum number of results per page that should be returned. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListAccessBindingsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     * Default value: 100.
     */
    pageSize: number;
    /**
     * Page token. Set [page_token]
     * to the [ListAccessBindingsResponse.next_page_token]
     * returned by a previous list request to get the next page of results.
     */
    pageToken: string;
}
export interface ListAccessBindingsResponse {
    $type: "yandex.cloud.access.ListAccessBindingsResponse";
    /** List of access bindings for the specified resource. */
    accessBindings: AccessBinding[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListAccessBindingsRequest.page_size], use
     * the [next_page_token] as the value
     * for the [ListAccessBindingsRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface SetAccessBindingsRequest {
    $type: "yandex.cloud.access.SetAccessBindingsRequest";
    /**
     * ID of the resource for which access bindings are being set.
     *
     * To get the resource ID, use a corresponding List request.
     */
    resourceId: string;
    /** Access bindings to be set. For more information, see [Access Bindings](/docs/iam/concepts/access-control/#access-bindings). */
    accessBindings: AccessBinding[];
}
export interface SetAccessBindingsMetadata {
    $type: "yandex.cloud.access.SetAccessBindingsMetadata";
    /** ID of the resource for which access bindings are being set. */
    resourceId: string;
}
export interface UpdateAccessBindingsRequest {
    $type: "yandex.cloud.access.UpdateAccessBindingsRequest";
    /** ID of the resource for which access bindings are being updated. */
    resourceId: string;
    /** Updates to access bindings. */
    accessBindingDeltas: AccessBindingDelta[];
}
export interface UpdateAccessBindingsMetadata {
    $type: "yandex.cloud.access.UpdateAccessBindingsMetadata";
    /** ID of the resource for which access bindings are being updated. */
    resourceId: string;
}
export interface AccessBindingDelta {
    $type: "yandex.cloud.access.AccessBindingDelta";
    /** The action that is being performed on an access binding. */
    action: AccessBindingAction;
    /** Access binding. For more information, see [Access Bindings](/docs/iam/concepts/access-control/#access-bindings). */
    accessBinding?: AccessBinding;
}
export interface AccessBindingsOperationResult {
    $type: "yandex.cloud.access.AccessBindingsOperationResult";
    /** Result access binding deltas. */
    effectiveDeltas: AccessBindingDelta[];
}
export declare const Subject: {
    $type: "yandex.cloud.access.Subject";
    encode(message: Subject, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Subject;
    fromJSON(object: any): Subject;
    toJSON(message: Subject): unknown;
    fromPartial<I extends {
        id?: string | undefined;
        type?: string | undefined;
    } & {
        id?: string | undefined;
        type?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "id" | "type">, never>>(object: I): Subject;
};
export declare const AccessBinding: {
    $type: "yandex.cloud.access.AccessBinding";
    encode(message: AccessBinding, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AccessBinding;
    fromJSON(object: any): AccessBinding;
    toJSON(message: AccessBinding): unknown;
    fromPartial<I extends {
        roleId?: string | undefined;
        subject?: {
            id?: string | undefined;
            type?: string | undefined;
        } | undefined;
    } & {
        roleId?: string | undefined;
        subject?: ({
            id?: string | undefined;
            type?: string | undefined;
        } & {
            id?: string | undefined;
            type?: string | undefined;
        } & Record<Exclude<keyof I["subject"], "$type" | "id" | "type">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "roleId" | "subject">, never>>(object: I): AccessBinding;
};
export declare const ListAccessBindingsRequest: {
    $type: "yandex.cloud.access.ListAccessBindingsRequest";
    encode(message: ListAccessBindingsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListAccessBindingsRequest;
    fromJSON(object: any): ListAccessBindingsRequest;
    toJSON(message: ListAccessBindingsRequest): unknown;
    fromPartial<I extends {
        resourceId?: string | undefined;
        pageSize?: number | undefined;
        pageToken?: string | undefined;
    } & {
        resourceId?: string | undefined;
        pageSize?: number | undefined;
        pageToken?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "resourceId" | "pageSize" | "pageToken">, never>>(object: I): ListAccessBindingsRequest;
};
export declare const ListAccessBindingsResponse: {
    $type: "yandex.cloud.access.ListAccessBindingsResponse";
    encode(message: ListAccessBindingsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListAccessBindingsResponse;
    fromJSON(object: any): ListAccessBindingsResponse;
    toJSON(message: ListAccessBindingsResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        accessBindings?: {
            roleId?: string | undefined;
            subject?: {
                id?: string | undefined;
                type?: string | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        accessBindings?: ({
            roleId?: string | undefined;
            subject?: {
                id?: string | undefined;
                type?: string | undefined;
            } | undefined;
        }[] & ({
            roleId?: string | undefined;
            subject?: {
                id?: string | undefined;
                type?: string | undefined;
            } | undefined;
        } & {
            roleId?: string | undefined;
            subject?: ({
                id?: string | undefined;
                type?: string | undefined;
            } & {
                id?: string | undefined;
                type?: string | undefined;
            } & Record<Exclude<keyof I["accessBindings"][number]["subject"], "$type" | "id" | "type">, never>) | undefined;
        } & Record<Exclude<keyof I["accessBindings"][number], "$type" | "roleId" | "subject">, never>)[] & Record<Exclude<keyof I["accessBindings"], "$type" | keyof {
            roleId?: string | undefined;
            subject?: {
                id?: string | undefined;
                type?: string | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "accessBindings">, never>>(object: I): ListAccessBindingsResponse;
};
export declare const SetAccessBindingsRequest: {
    $type: "yandex.cloud.access.SetAccessBindingsRequest";
    encode(message: SetAccessBindingsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SetAccessBindingsRequest;
    fromJSON(object: any): SetAccessBindingsRequest;
    toJSON(message: SetAccessBindingsRequest): unknown;
    fromPartial<I extends {
        resourceId?: string | undefined;
        accessBindings?: {
            roleId?: string | undefined;
            subject?: {
                id?: string | undefined;
                type?: string | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        resourceId?: string | undefined;
        accessBindings?: ({
            roleId?: string | undefined;
            subject?: {
                id?: string | undefined;
                type?: string | undefined;
            } | undefined;
        }[] & ({
            roleId?: string | undefined;
            subject?: {
                id?: string | undefined;
                type?: string | undefined;
            } | undefined;
        } & {
            roleId?: string | undefined;
            subject?: ({
                id?: string | undefined;
                type?: string | undefined;
            } & {
                id?: string | undefined;
                type?: string | undefined;
            } & Record<Exclude<keyof I["accessBindings"][number]["subject"], "$type" | "id" | "type">, never>) | undefined;
        } & Record<Exclude<keyof I["accessBindings"][number], "$type" | "roleId" | "subject">, never>)[] & Record<Exclude<keyof I["accessBindings"], "$type" | keyof {
            roleId?: string | undefined;
            subject?: {
                id?: string | undefined;
                type?: string | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "resourceId" | "accessBindings">, never>>(object: I): SetAccessBindingsRequest;
};
export declare const SetAccessBindingsMetadata: {
    $type: "yandex.cloud.access.SetAccessBindingsMetadata";
    encode(message: SetAccessBindingsMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SetAccessBindingsMetadata;
    fromJSON(object: any): SetAccessBindingsMetadata;
    toJSON(message: SetAccessBindingsMetadata): unknown;
    fromPartial<I extends {
        resourceId?: string | undefined;
    } & {
        resourceId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "resourceId">, never>>(object: I): SetAccessBindingsMetadata;
};
export declare const UpdateAccessBindingsRequest: {
    $type: "yandex.cloud.access.UpdateAccessBindingsRequest";
    encode(message: UpdateAccessBindingsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateAccessBindingsRequest;
    fromJSON(object: any): UpdateAccessBindingsRequest;
    toJSON(message: UpdateAccessBindingsRequest): unknown;
    fromPartial<I extends {
        resourceId?: string | undefined;
        accessBindingDeltas?: {
            action?: AccessBindingAction | undefined;
            accessBinding?: {
                roleId?: string | undefined;
                subject?: {
                    id?: string | undefined;
                    type?: string | undefined;
                } | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        resourceId?: string | undefined;
        accessBindingDeltas?: ({
            action?: AccessBindingAction | undefined;
            accessBinding?: {
                roleId?: string | undefined;
                subject?: {
                    id?: string | undefined;
                    type?: string | undefined;
                } | undefined;
            } | undefined;
        }[] & ({
            action?: AccessBindingAction | undefined;
            accessBinding?: {
                roleId?: string | undefined;
                subject?: {
                    id?: string | undefined;
                    type?: string | undefined;
                } | undefined;
            } | undefined;
        } & {
            action?: AccessBindingAction | undefined;
            accessBinding?: ({
                roleId?: string | undefined;
                subject?: {
                    id?: string | undefined;
                    type?: string | undefined;
                } | undefined;
            } & {
                roleId?: string | undefined;
                subject?: ({
                    id?: string | undefined;
                    type?: string | undefined;
                } & {
                    id?: string | undefined;
                    type?: string | undefined;
                } & Record<Exclude<keyof I["accessBindingDeltas"][number]["accessBinding"]["subject"], "$type" | "id" | "type">, never>) | undefined;
            } & Record<Exclude<keyof I["accessBindingDeltas"][number]["accessBinding"], "$type" | "roleId" | "subject">, never>) | undefined;
        } & Record<Exclude<keyof I["accessBindingDeltas"][number], "$type" | "action" | "accessBinding">, never>)[] & Record<Exclude<keyof I["accessBindingDeltas"], "$type" | keyof {
            action?: AccessBindingAction | undefined;
            accessBinding?: {
                roleId?: string | undefined;
                subject?: {
                    id?: string | undefined;
                    type?: string | undefined;
                } | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "resourceId" | "accessBindingDeltas">, never>>(object: I): UpdateAccessBindingsRequest;
};
export declare const UpdateAccessBindingsMetadata: {
    $type: "yandex.cloud.access.UpdateAccessBindingsMetadata";
    encode(message: UpdateAccessBindingsMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateAccessBindingsMetadata;
    fromJSON(object: any): UpdateAccessBindingsMetadata;
    toJSON(message: UpdateAccessBindingsMetadata): unknown;
    fromPartial<I extends {
        resourceId?: string | undefined;
    } & {
        resourceId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "resourceId">, never>>(object: I): UpdateAccessBindingsMetadata;
};
export declare const AccessBindingDelta: {
    $type: "yandex.cloud.access.AccessBindingDelta";
    encode(message: AccessBindingDelta, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AccessBindingDelta;
    fromJSON(object: any): AccessBindingDelta;
    toJSON(message: AccessBindingDelta): unknown;
    fromPartial<I extends {
        action?: AccessBindingAction | undefined;
        accessBinding?: {
            roleId?: string | undefined;
            subject?: {
                id?: string | undefined;
                type?: string | undefined;
            } | undefined;
        } | undefined;
    } & {
        action?: AccessBindingAction | undefined;
        accessBinding?: ({
            roleId?: string | undefined;
            subject?: {
                id?: string | undefined;
                type?: string | undefined;
            } | undefined;
        } & {
            roleId?: string | undefined;
            subject?: ({
                id?: string | undefined;
                type?: string | undefined;
            } & {
                id?: string | undefined;
                type?: string | undefined;
            } & Record<Exclude<keyof I["accessBinding"]["subject"], "$type" | "id" | "type">, never>) | undefined;
        } & Record<Exclude<keyof I["accessBinding"], "$type" | "roleId" | "subject">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "action" | "accessBinding">, never>>(object: I): AccessBindingDelta;
};
export declare const AccessBindingsOperationResult: {
    $type: "yandex.cloud.access.AccessBindingsOperationResult";
    encode(message: AccessBindingsOperationResult, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AccessBindingsOperationResult;
    fromJSON(object: any): AccessBindingsOperationResult;
    toJSON(message: AccessBindingsOperationResult): unknown;
    fromPartial<I extends {
        effectiveDeltas?: {
            action?: AccessBindingAction | undefined;
            accessBinding?: {
                roleId?: string | undefined;
                subject?: {
                    id?: string | undefined;
                    type?: string | undefined;
                } | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        effectiveDeltas?: ({
            action?: AccessBindingAction | undefined;
            accessBinding?: {
                roleId?: string | undefined;
                subject?: {
                    id?: string | undefined;
                    type?: string | undefined;
                } | undefined;
            } | undefined;
        }[] & ({
            action?: AccessBindingAction | undefined;
            accessBinding?: {
                roleId?: string | undefined;
                subject?: {
                    id?: string | undefined;
                    type?: string | undefined;
                } | undefined;
            } | undefined;
        } & {
            action?: AccessBindingAction | undefined;
            accessBinding?: ({
                roleId?: string | undefined;
                subject?: {
                    id?: string | undefined;
                    type?: string | undefined;
                } | undefined;
            } & {
                roleId?: string | undefined;
                subject?: ({
                    id?: string | undefined;
                    type?: string | undefined;
                } & {
                    id?: string | undefined;
                    type?: string | undefined;
                } & Record<Exclude<keyof I["effectiveDeltas"][number]["accessBinding"]["subject"], "$type" | "id" | "type">, never>) | undefined;
            } & Record<Exclude<keyof I["effectiveDeltas"][number]["accessBinding"], "$type" | "roleId" | "subject">, never>) | undefined;
        } & Record<Exclude<keyof I["effectiveDeltas"][number], "$type" | "action" | "accessBinding">, never>)[] & Record<Exclude<keyof I["effectiveDeltas"], "$type" | keyof {
            action?: AccessBindingAction | undefined;
            accessBinding?: {
                roleId?: string | undefined;
                subject?: {
                    id?: string | undefined;
                    type?: string | undefined;
                } | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "effectiveDeltas">, never>>(object: I): AccessBindingsOperationResult;
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
