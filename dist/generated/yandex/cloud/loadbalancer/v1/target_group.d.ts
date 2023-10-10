import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.loadbalancer.v1";
/** A TargetGroup resource. For more information, see [Target groups and resources](/docs/network-load-balancer/concepts/target-resources). */
export interface TargetGroup {
    $type: "yandex.cloud.loadbalancer.v1.TargetGroup";
    /** Output only. ID of the target group. */
    id: string;
    /** ID of the folder that the target group belongs to. */
    folderId: string;
    /** Output only. Creation timestamp in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
    createdAt?: Date;
    /**
     * Name of the target group.
     * The name is unique within the folder. 3-63 characters long.
     */
    name: string;
    /** Description of the target group. 0-256 characters long. */
    description: string;
    /** Resource labels as `` key:value `` pairs. Maximum of 64 per resource. */
    labels: {
        [key: string]: string;
    };
    /** ID of the region where the target group resides. */
    regionId: string;
    /** A list of targets in the target group. */
    targets: Target[];
}
export interface TargetGroup_LabelsEntry {
    $type: "yandex.cloud.loadbalancer.v1.TargetGroup.LabelsEntry";
    key: string;
    value: string;
}
/** A Target resource. For more information, see [Target groups and resources](/docs/network-load-balancer/concepts/target-resources). */
export interface Target {
    $type: "yandex.cloud.loadbalancer.v1.Target";
    /**
     * ID of the subnet that targets are connected to.
     * All targets in the target group must be connected to the same subnet within a single availability zone.
     */
    subnetId: string;
    /** IP address of the target. */
    address: string;
}
export declare const TargetGroup: {
    $type: "yandex.cloud.loadbalancer.v1.TargetGroup";
    encode(message: TargetGroup, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TargetGroup;
    fromJSON(object: any): TargetGroup;
    toJSON(message: TargetGroup): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        id?: string | undefined;
        name?: string | undefined;
        createdAt?: Date | undefined;
        folderId?: string | undefined;
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        targets?: {
            subnetId?: string | undefined;
            address?: string | undefined;
        }[] | undefined;
        regionId?: string | undefined;
    } & {
        description?: string | undefined;
        id?: string | undefined;
        name?: string | undefined;
        createdAt?: Date | undefined;
        folderId?: string | undefined;
        labels?: ({
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & Record<Exclude<keyof I["labels"], string | number>, never>) | undefined;
        targets?: ({
            subnetId?: string | undefined;
            address?: string | undefined;
        }[] & ({
            subnetId?: string | undefined;
            address?: string | undefined;
        } & {
            subnetId?: string | undefined;
            address?: string | undefined;
        } & Record<Exclude<keyof I["targets"][number], "$type" | "subnetId" | "address">, never>)[] & Record<Exclude<keyof I["targets"], "$type" | keyof {
            subnetId?: string | undefined;
            address?: string | undefined;
        }[]>, never>) | undefined;
        regionId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "id" | "name" | "createdAt" | "folderId" | "labels" | "targets" | "regionId">, never>>(object: I): TargetGroup;
};
export declare const TargetGroup_LabelsEntry: {
    $type: "yandex.cloud.loadbalancer.v1.TargetGroup.LabelsEntry";
    encode(message: TargetGroup_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TargetGroup_LabelsEntry;
    fromJSON(object: any): TargetGroup_LabelsEntry;
    toJSON(message: TargetGroup_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): TargetGroup_LabelsEntry;
};
export declare const Target: {
    $type: "yandex.cloud.loadbalancer.v1.Target";
    encode(message: Target, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Target;
    fromJSON(object: any): Target;
    toJSON(message: Target): unknown;
    fromPartial<I extends {
        subnetId?: string | undefined;
        address?: string | undefined;
    } & {
        subnetId?: string | undefined;
        address?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "subnetId" | "address">, never>>(object: I): Target;
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
