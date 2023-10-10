/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { TopicSpec, Topic } from "../../../../../yandex/cloud/mdb/kafka/v1/topic";
import { FieldMask } from "../../../../../google/protobuf/field_mask";
import { Operation } from "../../../../../yandex/cloud/operation/operation";
export declare const protobufPackage = "yandex.cloud.mdb.kafka.v1";
export interface GetTopicRequest {
    $type: "yandex.cloud.mdb.kafka.v1.GetTopicRequest";
    /**
     * ID of the Apache Kafka® cluster that the topic belongs to.
     *
     * To get the cluster ID, make a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * Name of the Kafka topic resource to return.
     *
     * To get the name of the topic, make a [TopicService.List] request.
     */
    topicName: string;
}
export interface ListTopicsRequest {
    $type: "yandex.cloud.mdb.kafka.v1.ListTopicsRequest";
    /**
     * ID of the Apache Kafka® cluster to list topics in.
     *
     * To get the cluster ID, make a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * The maximum number of results per page to return.
     *
     * If the number of available results is larger than [page_size], the service returns a [ListTopicsResponse.next_page_token] that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token.
     *
     * To get the next page of results, set [page_token] to the [ListTopicsResponse.next_page_token] returned by the previous list request.
     */
    pageToken: string;
}
export interface ListTopicsResponse {
    $type: "yandex.cloud.mdb.kafka.v1.ListTopicsResponse";
    /** List of Kafka topics. */
    topics: Topic[];
    /**
     * This token allows you to get the next page of results for list requests.
     *
     * If the number of results is larger than [ListTopicsRequest.page_size], use the [next_page_token] as the value for the [ListTopicsRequest.page_token] parameter in the next list request.
     * Each subsequent list request will have its own [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface CreateTopicRequest {
    $type: "yandex.cloud.mdb.kafka.v1.CreateTopicRequest";
    /**
     * ID of the Apache Kafka® cluster to create a topic in.
     *
     * To get the cluster ID, make a [ClusterService.List] request.
     */
    clusterId: string;
    /** Configuration of the topic to create. */
    topicSpec?: TopicSpec;
}
export interface CreateTopicMetadata {
    $type: "yandex.cloud.mdb.kafka.v1.CreateTopicMetadata";
    /** ID of the Apache Kafka® cluster where a topic is being created. */
    clusterId: string;
    /** Name of the Kafka topic that is being created. */
    topicName: string;
}
export interface UpdateTopicRequest {
    $type: "yandex.cloud.mdb.kafka.v1.UpdateTopicRequest";
    /**
     * ID of the Apache Kafka® cluster to update a topic in.
     *
     * To get the cluster ID, make a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * Name of the topic to update.
     *
     * To get the name of the topic, make a [TopicService.List] request.
     */
    topicName: string;
    updateMask?: FieldMask;
    /**
     * New configuration of the topic.
     *
     * Use [update_mask] to prevent reverting all topic settings that are not listed in [topic_spec] to their default values.
     */
    topicSpec?: TopicSpec;
}
export interface UpdateTopicMetadata {
    $type: "yandex.cloud.mdb.kafka.v1.UpdateTopicMetadata";
    /** ID of the Apache Kafka® cluster where a topic is being updated. */
    clusterId: string;
    /** Name of the Kafka topic that is being updated. */
    topicName: string;
}
export interface DeleteTopicRequest {
    $type: "yandex.cloud.mdb.kafka.v1.DeleteTopicRequest";
    /**
     * ID of the Apache Kafka® cluster to delete a topic in.
     *
     * To get the cluster ID, make a [ClusterService.List] request.
     */
    clusterId: string;
    /**
     * Name of the topic to delete.
     *
     * To get the name of the topic, make a [TopicService.List] request.
     */
    topicName: string;
}
export interface DeleteTopicMetadata {
    $type: "yandex.cloud.mdb.kafka.v1.DeleteTopicMetadata";
    /** ID of the Apache Kafka® cluster where a topic is being deleted. */
    clusterId: string;
    /** Name of the Kafka topic that is being deleted. */
    topicName: string;
}
export declare const GetTopicRequest: {
    $type: "yandex.cloud.mdb.kafka.v1.GetTopicRequest";
    encode(message: GetTopicRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetTopicRequest;
    fromJSON(object: any): GetTopicRequest;
    toJSON(message: GetTopicRequest): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
        topicName?: string | undefined;
    } & {
        clusterId?: string | undefined;
        topicName?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId" | "topicName">, never>>(object: I): GetTopicRequest;
};
export declare const ListTopicsRequest: {
    $type: "yandex.cloud.mdb.kafka.v1.ListTopicsRequest";
    encode(message: ListTopicsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListTopicsRequest;
    fromJSON(object: any): ListTopicsRequest;
    toJSON(message: ListTopicsRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        clusterId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        clusterId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "clusterId">, never>>(object: I): ListTopicsRequest;
};
export declare const ListTopicsResponse: {
    $type: "yandex.cloud.mdb.kafka.v1.ListTopicsResponse";
    encode(message: ListTopicsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListTopicsResponse;
    fromJSON(object: any): ListTopicsResponse;
    toJSON(message: ListTopicsResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        topics?: {
            name?: string | undefined;
            partitions?: number | undefined;
            clusterId?: string | undefined;
            replicationFactor?: number | undefined;
            topicConfig21?: {
                cleanupPolicy?: import("../../../../../yandex/cloud/mdb/kafka/v1/topic").Topicconfig21_CleanupPolicy | undefined;
                compressionType?: import("./common").CompressionType | undefined;
                deleteRetentionMs?: number | undefined;
                fileDeleteDelayMs?: number | undefined;
                flushMessages?: number | undefined;
                flushMs?: number | undefined;
                minCompactionLagMs?: number | undefined;
                retentionBytes?: number | undefined;
                retentionMs?: number | undefined;
                maxMessageBytes?: number | undefined;
                minInsyncReplicas?: number | undefined;
                segmentBytes?: number | undefined;
                preallocate?: boolean | undefined;
            } | undefined;
            topicConfig26?: {
                cleanupPolicy?: import("../../../../../yandex/cloud/mdb/kafka/v1/topic").Topicconfig26_CleanupPolicy | undefined;
                compressionType?: import("./common").CompressionType | undefined;
                deleteRetentionMs?: number | undefined;
                fileDeleteDelayMs?: number | undefined;
                flushMessages?: number | undefined;
                flushMs?: number | undefined;
                minCompactionLagMs?: number | undefined;
                retentionBytes?: number | undefined;
                retentionMs?: number | undefined;
                maxMessageBytes?: number | undefined;
                minInsyncReplicas?: number | undefined;
                segmentBytes?: number | undefined;
                preallocate?: boolean | undefined;
            } | undefined;
            topicConfig28?: {
                cleanupPolicy?: import("../../../../../yandex/cloud/mdb/kafka/v1/topic").Topicconfig28_CleanupPolicy | undefined;
                compressionType?: import("./common").CompressionType | undefined;
                deleteRetentionMs?: number | undefined;
                fileDeleteDelayMs?: number | undefined;
                flushMessages?: number | undefined;
                flushMs?: number | undefined;
                minCompactionLagMs?: number | undefined;
                retentionBytes?: number | undefined;
                retentionMs?: number | undefined;
                maxMessageBytes?: number | undefined;
                minInsyncReplicas?: number | undefined;
                segmentBytes?: number | undefined;
                preallocate?: boolean | undefined;
            } | undefined;
            topicConfig3?: {
                cleanupPolicy?: import("../../../../../yandex/cloud/mdb/kafka/v1/topic").TopicConfig3_CleanupPolicy | undefined;
                compressionType?: import("./common").CompressionType | undefined;
                deleteRetentionMs?: number | undefined;
                fileDeleteDelayMs?: number | undefined;
                flushMessages?: number | undefined;
                flushMs?: number | undefined;
                minCompactionLagMs?: number | undefined;
                retentionBytes?: number | undefined;
                retentionMs?: number | undefined;
                maxMessageBytes?: number | undefined;
                minInsyncReplicas?: number | undefined;
                segmentBytes?: number | undefined;
                preallocate?: boolean | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        topics?: ({
            name?: string | undefined;
            partitions?: number | undefined;
            clusterId?: string | undefined;
            replicationFactor?: number | undefined;
            topicConfig21?: {
                cleanupPolicy?: import("../../../../../yandex/cloud/mdb/kafka/v1/topic").Topicconfig21_CleanupPolicy | undefined;
                compressionType?: import("./common").CompressionType | undefined;
                deleteRetentionMs?: number | undefined;
                fileDeleteDelayMs?: number | undefined;
                flushMessages?: number | undefined;
                flushMs?: number | undefined;
                minCompactionLagMs?: number | undefined;
                retentionBytes?: number | undefined;
                retentionMs?: number | undefined;
                maxMessageBytes?: number | undefined;
                minInsyncReplicas?: number | undefined;
                segmentBytes?: number | undefined;
                preallocate?: boolean | undefined;
            } | undefined;
            topicConfig26?: {
                cleanupPolicy?: import("../../../../../yandex/cloud/mdb/kafka/v1/topic").Topicconfig26_CleanupPolicy | undefined;
                compressionType?: import("./common").CompressionType | undefined;
                deleteRetentionMs?: number | undefined;
                fileDeleteDelayMs?: number | undefined;
                flushMessages?: number | undefined;
                flushMs?: number | undefined;
                minCompactionLagMs?: number | undefined;
                retentionBytes?: number | undefined;
                retentionMs?: number | undefined;
                maxMessageBytes?: number | undefined;
                minInsyncReplicas?: number | undefined;
                segmentBytes?: number | undefined;
                preallocate?: boolean | undefined;
            } | undefined;
            topicConfig28?: {
                cleanupPolicy?: import("../../../../../yandex/cloud/mdb/kafka/v1/topic").Topicconfig28_CleanupPolicy | undefined;
                compressionType?: import("./common").CompressionType | undefined;
                deleteRetentionMs?: number | undefined;
                fileDeleteDelayMs?: number | undefined;
                flushMessages?: number | undefined;
                flushMs?: number | undefined;
                minCompactionLagMs?: number | undefined;
                retentionBytes?: number | undefined;
                retentionMs?: number | undefined;
                maxMessageBytes?: number | undefined;
                minInsyncReplicas?: number | undefined;
                segmentBytes?: number | undefined;
                preallocate?: boolean | undefined;
            } | undefined;
            topicConfig3?: {
                cleanupPolicy?: import("../../../../../yandex/cloud/mdb/kafka/v1/topic").TopicConfig3_CleanupPolicy | undefined;
                compressionType?: import("./common").CompressionType | undefined;
                deleteRetentionMs?: number | undefined;
                fileDeleteDelayMs?: number | undefined;
                flushMessages?: number | undefined;
                flushMs?: number | undefined;
                minCompactionLagMs?: number | undefined;
                retentionBytes?: number | undefined;
                retentionMs?: number | undefined;
                maxMessageBytes?: number | undefined;
                minInsyncReplicas?: number | undefined;
                segmentBytes?: number | undefined;
                preallocate?: boolean | undefined;
            } | undefined;
        }[] & ({
            name?: string | undefined;
            partitions?: number | undefined;
            clusterId?: string | undefined;
            replicationFactor?: number | undefined;
            topicConfig21?: {
                cleanupPolicy?: import("../../../../../yandex/cloud/mdb/kafka/v1/topic").Topicconfig21_CleanupPolicy | undefined;
                compressionType?: import("./common").CompressionType | undefined;
                deleteRetentionMs?: number | undefined;
                fileDeleteDelayMs?: number | undefined;
                flushMessages?: number | undefined;
                flushMs?: number | undefined;
                minCompactionLagMs?: number | undefined;
                retentionBytes?: number | undefined;
                retentionMs?: number | undefined;
                maxMessageBytes?: number | undefined;
                minInsyncReplicas?: number | undefined;
                segmentBytes?: number | undefined;
                preallocate?: boolean | undefined;
            } | undefined;
            topicConfig26?: {
                cleanupPolicy?: import("../../../../../yandex/cloud/mdb/kafka/v1/topic").Topicconfig26_CleanupPolicy | undefined;
                compressionType?: import("./common").CompressionType | undefined;
                deleteRetentionMs?: number | undefined;
                fileDeleteDelayMs?: number | undefined;
                flushMessages?: number | undefined;
                flushMs?: number | undefined;
                minCompactionLagMs?: number | undefined;
                retentionBytes?: number | undefined;
                retentionMs?: number | undefined;
                maxMessageBytes?: number | undefined;
                minInsyncReplicas?: number | undefined;
                segmentBytes?: number | undefined;
                preallocate?: boolean | undefined;
            } | undefined;
            topicConfig28?: {
                cleanupPolicy?: import("../../../../../yandex/cloud/mdb/kafka/v1/topic").Topicconfig28_CleanupPolicy | undefined;
                compressionType?: import("./common").CompressionType | undefined;
                deleteRetentionMs?: number | undefined;
                fileDeleteDelayMs?: number | undefined;
                flushMessages?: number | undefined;
                flushMs?: number | undefined;
                minCompactionLagMs?: number | undefined;
                retentionBytes?: number | undefined;
                retentionMs?: number | undefined;
                maxMessageBytes?: number | undefined;
                minInsyncReplicas?: number | undefined;
                segmentBytes?: number | undefined;
                preallocate?: boolean | undefined;
            } | undefined;
            topicConfig3?: {
                cleanupPolicy?: import("../../../../../yandex/cloud/mdb/kafka/v1/topic").TopicConfig3_CleanupPolicy | undefined;
                compressionType?: import("./common").CompressionType | undefined;
                deleteRetentionMs?: number | undefined;
                fileDeleteDelayMs?: number | undefined;
                flushMessages?: number | undefined;
                flushMs?: number | undefined;
                minCompactionLagMs?: number | undefined;
                retentionBytes?: number | undefined;
                retentionMs?: number | undefined;
                maxMessageBytes?: number | undefined;
                minInsyncReplicas?: number | undefined;
                segmentBytes?: number | undefined;
                preallocate?: boolean | undefined;
            } | undefined;
        } & {
            name?: string | undefined;
            partitions?: number | undefined;
            clusterId?: string | undefined;
            replicationFactor?: number | undefined;
            topicConfig21?: ({
                cleanupPolicy?: import("../../../../../yandex/cloud/mdb/kafka/v1/topic").Topicconfig21_CleanupPolicy | undefined;
                compressionType?: import("./common").CompressionType | undefined;
                deleteRetentionMs?: number | undefined;
                fileDeleteDelayMs?: number | undefined;
                flushMessages?: number | undefined;
                flushMs?: number | undefined;
                minCompactionLagMs?: number | undefined;
                retentionBytes?: number | undefined;
                retentionMs?: number | undefined;
                maxMessageBytes?: number | undefined;
                minInsyncReplicas?: number | undefined;
                segmentBytes?: number | undefined;
                preallocate?: boolean | undefined;
            } & {
                cleanupPolicy?: import("../../../../../yandex/cloud/mdb/kafka/v1/topic").Topicconfig21_CleanupPolicy | undefined;
                compressionType?: import("./common").CompressionType | undefined;
                deleteRetentionMs?: number | undefined;
                fileDeleteDelayMs?: number | undefined;
                flushMessages?: number | undefined;
                flushMs?: number | undefined;
                minCompactionLagMs?: number | undefined;
                retentionBytes?: number | undefined;
                retentionMs?: number | undefined;
                maxMessageBytes?: number | undefined;
                minInsyncReplicas?: number | undefined;
                segmentBytes?: number | undefined;
                preallocate?: boolean | undefined;
            } & Record<Exclude<keyof I["topics"][number]["topicConfig21"], "$type" | "cleanupPolicy" | "compressionType" | "deleteRetentionMs" | "fileDeleteDelayMs" | "flushMessages" | "flushMs" | "minCompactionLagMs" | "retentionBytes" | "retentionMs" | "maxMessageBytes" | "minInsyncReplicas" | "segmentBytes" | "preallocate">, never>) | undefined;
            topicConfig26?: ({
                cleanupPolicy?: import("../../../../../yandex/cloud/mdb/kafka/v1/topic").Topicconfig26_CleanupPolicy | undefined;
                compressionType?: import("./common").CompressionType | undefined;
                deleteRetentionMs?: number | undefined;
                fileDeleteDelayMs?: number | undefined;
                flushMessages?: number | undefined;
                flushMs?: number | undefined;
                minCompactionLagMs?: number | undefined;
                retentionBytes?: number | undefined;
                retentionMs?: number | undefined;
                maxMessageBytes?: number | undefined;
                minInsyncReplicas?: number | undefined;
                segmentBytes?: number | undefined;
                preallocate?: boolean | undefined;
            } & {
                cleanupPolicy?: import("../../../../../yandex/cloud/mdb/kafka/v1/topic").Topicconfig26_CleanupPolicy | undefined;
                compressionType?: import("./common").CompressionType | undefined;
                deleteRetentionMs?: number | undefined;
                fileDeleteDelayMs?: number | undefined;
                flushMessages?: number | undefined;
                flushMs?: number | undefined;
                minCompactionLagMs?: number | undefined;
                retentionBytes?: number | undefined;
                retentionMs?: number | undefined;
                maxMessageBytes?: number | undefined;
                minInsyncReplicas?: number | undefined;
                segmentBytes?: number | undefined;
                preallocate?: boolean | undefined;
            } & Record<Exclude<keyof I["topics"][number]["topicConfig26"], "$type" | "cleanupPolicy" | "compressionType" | "deleteRetentionMs" | "fileDeleteDelayMs" | "flushMessages" | "flushMs" | "minCompactionLagMs" | "retentionBytes" | "retentionMs" | "maxMessageBytes" | "minInsyncReplicas" | "segmentBytes" | "preallocate">, never>) | undefined;
            topicConfig28?: ({
                cleanupPolicy?: import("../../../../../yandex/cloud/mdb/kafka/v1/topic").Topicconfig28_CleanupPolicy | undefined;
                compressionType?: import("./common").CompressionType | undefined;
                deleteRetentionMs?: number | undefined;
                fileDeleteDelayMs?: number | undefined;
                flushMessages?: number | undefined;
                flushMs?: number | undefined;
                minCompactionLagMs?: number | undefined;
                retentionBytes?: number | undefined;
                retentionMs?: number | undefined;
                maxMessageBytes?: number | undefined;
                minInsyncReplicas?: number | undefined;
                segmentBytes?: number | undefined;
                preallocate?: boolean | undefined;
            } & {
                cleanupPolicy?: import("../../../../../yandex/cloud/mdb/kafka/v1/topic").Topicconfig28_CleanupPolicy | undefined;
                compressionType?: import("./common").CompressionType | undefined;
                deleteRetentionMs?: number | undefined;
                fileDeleteDelayMs?: number | undefined;
                flushMessages?: number | undefined;
                flushMs?: number | undefined;
                minCompactionLagMs?: number | undefined;
                retentionBytes?: number | undefined;
                retentionMs?: number | undefined;
                maxMessageBytes?: number | undefined;
                minInsyncReplicas?: number | undefined;
                segmentBytes?: number | undefined;
                preallocate?: boolean | undefined;
            } & Record<Exclude<keyof I["topics"][number]["topicConfig28"], "$type" | "cleanupPolicy" | "compressionType" | "deleteRetentionMs" | "fileDeleteDelayMs" | "flushMessages" | "flushMs" | "minCompactionLagMs" | "retentionBytes" | "retentionMs" | "maxMessageBytes" | "minInsyncReplicas" | "segmentBytes" | "preallocate">, never>) | undefined;
            topicConfig3?: ({
                cleanupPolicy?: import("../../../../../yandex/cloud/mdb/kafka/v1/topic").TopicConfig3_CleanupPolicy | undefined;
                compressionType?: import("./common").CompressionType | undefined;
                deleteRetentionMs?: number | undefined;
                fileDeleteDelayMs?: number | undefined;
                flushMessages?: number | undefined;
                flushMs?: number | undefined;
                minCompactionLagMs?: number | undefined;
                retentionBytes?: number | undefined;
                retentionMs?: number | undefined;
                maxMessageBytes?: number | undefined;
                minInsyncReplicas?: number | undefined;
                segmentBytes?: number | undefined;
                preallocate?: boolean | undefined;
            } & {
                cleanupPolicy?: import("../../../../../yandex/cloud/mdb/kafka/v1/topic").TopicConfig3_CleanupPolicy | undefined;
                compressionType?: import("./common").CompressionType | undefined;
                deleteRetentionMs?: number | undefined;
                fileDeleteDelayMs?: number | undefined;
                flushMessages?: number | undefined;
                flushMs?: number | undefined;
                minCompactionLagMs?: number | undefined;
                retentionBytes?: number | undefined;
                retentionMs?: number | undefined;
                maxMessageBytes?: number | undefined;
                minInsyncReplicas?: number | undefined;
                segmentBytes?: number | undefined;
                preallocate?: boolean | undefined;
            } & Record<Exclude<keyof I["topics"][number]["topicConfig3"], "$type" | "cleanupPolicy" | "compressionType" | "deleteRetentionMs" | "fileDeleteDelayMs" | "flushMessages" | "flushMs" | "minCompactionLagMs" | "retentionBytes" | "retentionMs" | "maxMessageBytes" | "minInsyncReplicas" | "segmentBytes" | "preallocate">, never>) | undefined;
        } & Record<Exclude<keyof I["topics"][number], "$type" | "name" | "partitions" | "clusterId" | "replicationFactor" | "topicConfig21" | "topicConfig26" | "topicConfig28" | "topicConfig3">, never>)[] & Record<Exclude<keyof I["topics"], "$type" | keyof {
            name?: string | undefined;
            partitions?: number | undefined;
            clusterId?: string | undefined;
            replicationFactor?: number | undefined;
            topicConfig21?: {
                cleanupPolicy?: import("../../../../../yandex/cloud/mdb/kafka/v1/topic").Topicconfig21_CleanupPolicy | undefined;
                compressionType?: import("./common").CompressionType | undefined;
                deleteRetentionMs?: number | undefined;
                fileDeleteDelayMs?: number | undefined;
                flushMessages?: number | undefined;
                flushMs?: number | undefined;
                minCompactionLagMs?: number | undefined;
                retentionBytes?: number | undefined;
                retentionMs?: number | undefined;
                maxMessageBytes?: number | undefined;
                minInsyncReplicas?: number | undefined;
                segmentBytes?: number | undefined;
                preallocate?: boolean | undefined;
            } | undefined;
            topicConfig26?: {
                cleanupPolicy?: import("../../../../../yandex/cloud/mdb/kafka/v1/topic").Topicconfig26_CleanupPolicy | undefined;
                compressionType?: import("./common").CompressionType | undefined;
                deleteRetentionMs?: number | undefined;
                fileDeleteDelayMs?: number | undefined;
                flushMessages?: number | undefined;
                flushMs?: number | undefined;
                minCompactionLagMs?: number | undefined;
                retentionBytes?: number | undefined;
                retentionMs?: number | undefined;
                maxMessageBytes?: number | undefined;
                minInsyncReplicas?: number | undefined;
                segmentBytes?: number | undefined;
                preallocate?: boolean | undefined;
            } | undefined;
            topicConfig28?: {
                cleanupPolicy?: import("../../../../../yandex/cloud/mdb/kafka/v1/topic").Topicconfig28_CleanupPolicy | undefined;
                compressionType?: import("./common").CompressionType | undefined;
                deleteRetentionMs?: number | undefined;
                fileDeleteDelayMs?: number | undefined;
                flushMessages?: number | undefined;
                flushMs?: number | undefined;
                minCompactionLagMs?: number | undefined;
                retentionBytes?: number | undefined;
                retentionMs?: number | undefined;
                maxMessageBytes?: number | undefined;
                minInsyncReplicas?: number | undefined;
                segmentBytes?: number | undefined;
                preallocate?: boolean | undefined;
            } | undefined;
            topicConfig3?: {
                cleanupPolicy?: import("../../../../../yandex/cloud/mdb/kafka/v1/topic").TopicConfig3_CleanupPolicy | undefined;
                compressionType?: import("./common").CompressionType | undefined;
                deleteRetentionMs?: number | undefined;
                fileDeleteDelayMs?: number | undefined;
                flushMessages?: number | undefined;
                flushMs?: number | undefined;
                minCompactionLagMs?: number | undefined;
                retentionBytes?: number | undefined;
                retentionMs?: number | undefined;
                maxMessageBytes?: number | undefined;
                minInsyncReplicas?: number | undefined;
                segmentBytes?: number | undefined;
                preallocate?: boolean | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "topics">, never>>(object: I): ListTopicsResponse;
};
export declare const CreateTopicRequest: {
    $type: "yandex.cloud.mdb.kafka.v1.CreateTopicRequest";
    encode(message: CreateTopicRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateTopicRequest;
    fromJSON(object: any): CreateTopicRequest;
    toJSON(message: CreateTopicRequest): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
        topicSpec?: {
            name?: string | undefined;
            partitions?: number | undefined;
            replicationFactor?: number | undefined;
            topicConfig21?: {
                cleanupPolicy?: import("../../../../../yandex/cloud/mdb/kafka/v1/topic").Topicconfig21_CleanupPolicy | undefined;
                compressionType?: import("./common").CompressionType | undefined;
                deleteRetentionMs?: number | undefined;
                fileDeleteDelayMs?: number | undefined;
                flushMessages?: number | undefined;
                flushMs?: number | undefined;
                minCompactionLagMs?: number | undefined;
                retentionBytes?: number | undefined;
                retentionMs?: number | undefined;
                maxMessageBytes?: number | undefined;
                minInsyncReplicas?: number | undefined;
                segmentBytes?: number | undefined;
                preallocate?: boolean | undefined;
            } | undefined;
            topicConfig26?: {
                cleanupPolicy?: import("../../../../../yandex/cloud/mdb/kafka/v1/topic").Topicconfig26_CleanupPolicy | undefined;
                compressionType?: import("./common").CompressionType | undefined;
                deleteRetentionMs?: number | undefined;
                fileDeleteDelayMs?: number | undefined;
                flushMessages?: number | undefined;
                flushMs?: number | undefined;
                minCompactionLagMs?: number | undefined;
                retentionBytes?: number | undefined;
                retentionMs?: number | undefined;
                maxMessageBytes?: number | undefined;
                minInsyncReplicas?: number | undefined;
                segmentBytes?: number | undefined;
                preallocate?: boolean | undefined;
            } | undefined;
            topicConfig28?: {
                cleanupPolicy?: import("../../../../../yandex/cloud/mdb/kafka/v1/topic").Topicconfig28_CleanupPolicy | undefined;
                compressionType?: import("./common").CompressionType | undefined;
                deleteRetentionMs?: number | undefined;
                fileDeleteDelayMs?: number | undefined;
                flushMessages?: number | undefined;
                flushMs?: number | undefined;
                minCompactionLagMs?: number | undefined;
                retentionBytes?: number | undefined;
                retentionMs?: number | undefined;
                maxMessageBytes?: number | undefined;
                minInsyncReplicas?: number | undefined;
                segmentBytes?: number | undefined;
                preallocate?: boolean | undefined;
            } | undefined;
            topicConfig3?: {
                cleanupPolicy?: import("../../../../../yandex/cloud/mdb/kafka/v1/topic").TopicConfig3_CleanupPolicy | undefined;
                compressionType?: import("./common").CompressionType | undefined;
                deleteRetentionMs?: number | undefined;
                fileDeleteDelayMs?: number | undefined;
                flushMessages?: number | undefined;
                flushMs?: number | undefined;
                minCompactionLagMs?: number | undefined;
                retentionBytes?: number | undefined;
                retentionMs?: number | undefined;
                maxMessageBytes?: number | undefined;
                minInsyncReplicas?: number | undefined;
                segmentBytes?: number | undefined;
                preallocate?: boolean | undefined;
            } | undefined;
        } | undefined;
    } & {
        clusterId?: string | undefined;
        topicSpec?: ({
            name?: string | undefined;
            partitions?: number | undefined;
            replicationFactor?: number | undefined;
            topicConfig21?: {
                cleanupPolicy?: import("../../../../../yandex/cloud/mdb/kafka/v1/topic").Topicconfig21_CleanupPolicy | undefined;
                compressionType?: import("./common").CompressionType | undefined;
                deleteRetentionMs?: number | undefined;
                fileDeleteDelayMs?: number | undefined;
                flushMessages?: number | undefined;
                flushMs?: number | undefined;
                minCompactionLagMs?: number | undefined;
                retentionBytes?: number | undefined;
                retentionMs?: number | undefined;
                maxMessageBytes?: number | undefined;
                minInsyncReplicas?: number | undefined;
                segmentBytes?: number | undefined;
                preallocate?: boolean | undefined;
            } | undefined;
            topicConfig26?: {
                cleanupPolicy?: import("../../../../../yandex/cloud/mdb/kafka/v1/topic").Topicconfig26_CleanupPolicy | undefined;
                compressionType?: import("./common").CompressionType | undefined;
                deleteRetentionMs?: number | undefined;
                fileDeleteDelayMs?: number | undefined;
                flushMessages?: number | undefined;
                flushMs?: number | undefined;
                minCompactionLagMs?: number | undefined;
                retentionBytes?: number | undefined;
                retentionMs?: number | undefined;
                maxMessageBytes?: number | undefined;
                minInsyncReplicas?: number | undefined;
                segmentBytes?: number | undefined;
                preallocate?: boolean | undefined;
            } | undefined;
            topicConfig28?: {
                cleanupPolicy?: import("../../../../../yandex/cloud/mdb/kafka/v1/topic").Topicconfig28_CleanupPolicy | undefined;
                compressionType?: import("./common").CompressionType | undefined;
                deleteRetentionMs?: number | undefined;
                fileDeleteDelayMs?: number | undefined;
                flushMessages?: number | undefined;
                flushMs?: number | undefined;
                minCompactionLagMs?: number | undefined;
                retentionBytes?: number | undefined;
                retentionMs?: number | undefined;
                maxMessageBytes?: number | undefined;
                minInsyncReplicas?: number | undefined;
                segmentBytes?: number | undefined;
                preallocate?: boolean | undefined;
            } | undefined;
            topicConfig3?: {
                cleanupPolicy?: import("../../../../../yandex/cloud/mdb/kafka/v1/topic").TopicConfig3_CleanupPolicy | undefined;
                compressionType?: import("./common").CompressionType | undefined;
                deleteRetentionMs?: number | undefined;
                fileDeleteDelayMs?: number | undefined;
                flushMessages?: number | undefined;
                flushMs?: number | undefined;
                minCompactionLagMs?: number | undefined;
                retentionBytes?: number | undefined;
                retentionMs?: number | undefined;
                maxMessageBytes?: number | undefined;
                minInsyncReplicas?: number | undefined;
                segmentBytes?: number | undefined;
                preallocate?: boolean | undefined;
            } | undefined;
        } & {
            name?: string | undefined;
            partitions?: number | undefined;
            replicationFactor?: number | undefined;
            topicConfig21?: ({
                cleanupPolicy?: import("../../../../../yandex/cloud/mdb/kafka/v1/topic").Topicconfig21_CleanupPolicy | undefined;
                compressionType?: import("./common").CompressionType | undefined;
                deleteRetentionMs?: number | undefined;
                fileDeleteDelayMs?: number | undefined;
                flushMessages?: number | undefined;
                flushMs?: number | undefined;
                minCompactionLagMs?: number | undefined;
                retentionBytes?: number | undefined;
                retentionMs?: number | undefined;
                maxMessageBytes?: number | undefined;
                minInsyncReplicas?: number | undefined;
                segmentBytes?: number | undefined;
                preallocate?: boolean | undefined;
            } & {
                cleanupPolicy?: import("../../../../../yandex/cloud/mdb/kafka/v1/topic").Topicconfig21_CleanupPolicy | undefined;
                compressionType?: import("./common").CompressionType | undefined;
                deleteRetentionMs?: number | undefined;
                fileDeleteDelayMs?: number | undefined;
                flushMessages?: number | undefined;
                flushMs?: number | undefined;
                minCompactionLagMs?: number | undefined;
                retentionBytes?: number | undefined;
                retentionMs?: number | undefined;
                maxMessageBytes?: number | undefined;
                minInsyncReplicas?: number | undefined;
                segmentBytes?: number | undefined;
                preallocate?: boolean | undefined;
            } & Record<Exclude<keyof I["topicSpec"]["topicConfig21"], "$type" | "cleanupPolicy" | "compressionType" | "deleteRetentionMs" | "fileDeleteDelayMs" | "flushMessages" | "flushMs" | "minCompactionLagMs" | "retentionBytes" | "retentionMs" | "maxMessageBytes" | "minInsyncReplicas" | "segmentBytes" | "preallocate">, never>) | undefined;
            topicConfig26?: ({
                cleanupPolicy?: import("../../../../../yandex/cloud/mdb/kafka/v1/topic").Topicconfig26_CleanupPolicy | undefined;
                compressionType?: import("./common").CompressionType | undefined;
                deleteRetentionMs?: number | undefined;
                fileDeleteDelayMs?: number | undefined;
                flushMessages?: number | undefined;
                flushMs?: number | undefined;
                minCompactionLagMs?: number | undefined;
                retentionBytes?: number | undefined;
                retentionMs?: number | undefined;
                maxMessageBytes?: number | undefined;
                minInsyncReplicas?: number | undefined;
                segmentBytes?: number | undefined;
                preallocate?: boolean | undefined;
            } & {
                cleanupPolicy?: import("../../../../../yandex/cloud/mdb/kafka/v1/topic").Topicconfig26_CleanupPolicy | undefined;
                compressionType?: import("./common").CompressionType | undefined;
                deleteRetentionMs?: number | undefined;
                fileDeleteDelayMs?: number | undefined;
                flushMessages?: number | undefined;
                flushMs?: number | undefined;
                minCompactionLagMs?: number | undefined;
                retentionBytes?: number | undefined;
                retentionMs?: number | undefined;
                maxMessageBytes?: number | undefined;
                minInsyncReplicas?: number | undefined;
                segmentBytes?: number | undefined;
                preallocate?: boolean | undefined;
            } & Record<Exclude<keyof I["topicSpec"]["topicConfig26"], "$type" | "cleanupPolicy" | "compressionType" | "deleteRetentionMs" | "fileDeleteDelayMs" | "flushMessages" | "flushMs" | "minCompactionLagMs" | "retentionBytes" | "retentionMs" | "maxMessageBytes" | "minInsyncReplicas" | "segmentBytes" | "preallocate">, never>) | undefined;
            topicConfig28?: ({
                cleanupPolicy?: import("../../../../../yandex/cloud/mdb/kafka/v1/topic").Topicconfig28_CleanupPolicy | undefined;
                compressionType?: import("./common").CompressionType | undefined;
                deleteRetentionMs?: number | undefined;
                fileDeleteDelayMs?: number | undefined;
                flushMessages?: number | undefined;
                flushMs?: number | undefined;
                minCompactionLagMs?: number | undefined;
                retentionBytes?: number | undefined;
                retentionMs?: number | undefined;
                maxMessageBytes?: number | undefined;
                minInsyncReplicas?: number | undefined;
                segmentBytes?: number | undefined;
                preallocate?: boolean | undefined;
            } & {
                cleanupPolicy?: import("../../../../../yandex/cloud/mdb/kafka/v1/topic").Topicconfig28_CleanupPolicy | undefined;
                compressionType?: import("./common").CompressionType | undefined;
                deleteRetentionMs?: number | undefined;
                fileDeleteDelayMs?: number | undefined;
                flushMessages?: number | undefined;
                flushMs?: number | undefined;
                minCompactionLagMs?: number | undefined;
                retentionBytes?: number | undefined;
                retentionMs?: number | undefined;
                maxMessageBytes?: number | undefined;
                minInsyncReplicas?: number | undefined;
                segmentBytes?: number | undefined;
                preallocate?: boolean | undefined;
            } & Record<Exclude<keyof I["topicSpec"]["topicConfig28"], "$type" | "cleanupPolicy" | "compressionType" | "deleteRetentionMs" | "fileDeleteDelayMs" | "flushMessages" | "flushMs" | "minCompactionLagMs" | "retentionBytes" | "retentionMs" | "maxMessageBytes" | "minInsyncReplicas" | "segmentBytes" | "preallocate">, never>) | undefined;
            topicConfig3?: ({
                cleanupPolicy?: import("../../../../../yandex/cloud/mdb/kafka/v1/topic").TopicConfig3_CleanupPolicy | undefined;
                compressionType?: import("./common").CompressionType | undefined;
                deleteRetentionMs?: number | undefined;
                fileDeleteDelayMs?: number | undefined;
                flushMessages?: number | undefined;
                flushMs?: number | undefined;
                minCompactionLagMs?: number | undefined;
                retentionBytes?: number | undefined;
                retentionMs?: number | undefined;
                maxMessageBytes?: number | undefined;
                minInsyncReplicas?: number | undefined;
                segmentBytes?: number | undefined;
                preallocate?: boolean | undefined;
            } & {
                cleanupPolicy?: import("../../../../../yandex/cloud/mdb/kafka/v1/topic").TopicConfig3_CleanupPolicy | undefined;
                compressionType?: import("./common").CompressionType | undefined;
                deleteRetentionMs?: number | undefined;
                fileDeleteDelayMs?: number | undefined;
                flushMessages?: number | undefined;
                flushMs?: number | undefined;
                minCompactionLagMs?: number | undefined;
                retentionBytes?: number | undefined;
                retentionMs?: number | undefined;
                maxMessageBytes?: number | undefined;
                minInsyncReplicas?: number | undefined;
                segmentBytes?: number | undefined;
                preallocate?: boolean | undefined;
            } & Record<Exclude<keyof I["topicSpec"]["topicConfig3"], "$type" | "cleanupPolicy" | "compressionType" | "deleteRetentionMs" | "fileDeleteDelayMs" | "flushMessages" | "flushMs" | "minCompactionLagMs" | "retentionBytes" | "retentionMs" | "maxMessageBytes" | "minInsyncReplicas" | "segmentBytes" | "preallocate">, never>) | undefined;
        } & Record<Exclude<keyof I["topicSpec"], "$type" | "name" | "partitions" | "replicationFactor" | "topicConfig21" | "topicConfig26" | "topicConfig28" | "topicConfig3">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId" | "topicSpec">, never>>(object: I): CreateTopicRequest;
};
export declare const CreateTopicMetadata: {
    $type: "yandex.cloud.mdb.kafka.v1.CreateTopicMetadata";
    encode(message: CreateTopicMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateTopicMetadata;
    fromJSON(object: any): CreateTopicMetadata;
    toJSON(message: CreateTopicMetadata): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
        topicName?: string | undefined;
    } & {
        clusterId?: string | undefined;
        topicName?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId" | "topicName">, never>>(object: I): CreateTopicMetadata;
};
export declare const UpdateTopicRequest: {
    $type: "yandex.cloud.mdb.kafka.v1.UpdateTopicRequest";
    encode(message: UpdateTopicRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateTopicRequest;
    fromJSON(object: any): UpdateTopicRequest;
    toJSON(message: UpdateTopicRequest): unknown;
    fromPartial<I extends {
        updateMask?: {
            paths?: string[] | undefined;
        } | undefined;
        clusterId?: string | undefined;
        topicName?: string | undefined;
        topicSpec?: {
            name?: string | undefined;
            partitions?: number | undefined;
            replicationFactor?: number | undefined;
            topicConfig21?: {
                cleanupPolicy?: import("../../../../../yandex/cloud/mdb/kafka/v1/topic").Topicconfig21_CleanupPolicy | undefined;
                compressionType?: import("./common").CompressionType | undefined;
                deleteRetentionMs?: number | undefined;
                fileDeleteDelayMs?: number | undefined;
                flushMessages?: number | undefined;
                flushMs?: number | undefined;
                minCompactionLagMs?: number | undefined;
                retentionBytes?: number | undefined;
                retentionMs?: number | undefined;
                maxMessageBytes?: number | undefined;
                minInsyncReplicas?: number | undefined;
                segmentBytes?: number | undefined;
                preallocate?: boolean | undefined;
            } | undefined;
            topicConfig26?: {
                cleanupPolicy?: import("../../../../../yandex/cloud/mdb/kafka/v1/topic").Topicconfig26_CleanupPolicy | undefined;
                compressionType?: import("./common").CompressionType | undefined;
                deleteRetentionMs?: number | undefined;
                fileDeleteDelayMs?: number | undefined;
                flushMessages?: number | undefined;
                flushMs?: number | undefined;
                minCompactionLagMs?: number | undefined;
                retentionBytes?: number | undefined;
                retentionMs?: number | undefined;
                maxMessageBytes?: number | undefined;
                minInsyncReplicas?: number | undefined;
                segmentBytes?: number | undefined;
                preallocate?: boolean | undefined;
            } | undefined;
            topicConfig28?: {
                cleanupPolicy?: import("../../../../../yandex/cloud/mdb/kafka/v1/topic").Topicconfig28_CleanupPolicy | undefined;
                compressionType?: import("./common").CompressionType | undefined;
                deleteRetentionMs?: number | undefined;
                fileDeleteDelayMs?: number | undefined;
                flushMessages?: number | undefined;
                flushMs?: number | undefined;
                minCompactionLagMs?: number | undefined;
                retentionBytes?: number | undefined;
                retentionMs?: number | undefined;
                maxMessageBytes?: number | undefined;
                minInsyncReplicas?: number | undefined;
                segmentBytes?: number | undefined;
                preallocate?: boolean | undefined;
            } | undefined;
            topicConfig3?: {
                cleanupPolicy?: import("../../../../../yandex/cloud/mdb/kafka/v1/topic").TopicConfig3_CleanupPolicy | undefined;
                compressionType?: import("./common").CompressionType | undefined;
                deleteRetentionMs?: number | undefined;
                fileDeleteDelayMs?: number | undefined;
                flushMessages?: number | undefined;
                flushMs?: number | undefined;
                minCompactionLagMs?: number | undefined;
                retentionBytes?: number | undefined;
                retentionMs?: number | undefined;
                maxMessageBytes?: number | undefined;
                minInsyncReplicas?: number | undefined;
                segmentBytes?: number | undefined;
                preallocate?: boolean | undefined;
            } | undefined;
        } | undefined;
    } & {
        updateMask?: ({
            paths?: string[] | undefined;
        } & {
            paths?: (string[] & string[] & Record<Exclude<keyof I["updateMask"]["paths"], "$type" | keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["updateMask"], "$type" | "paths">, never>) | undefined;
        clusterId?: string | undefined;
        topicName?: string | undefined;
        topicSpec?: ({
            name?: string | undefined;
            partitions?: number | undefined;
            replicationFactor?: number | undefined;
            topicConfig21?: {
                cleanupPolicy?: import("../../../../../yandex/cloud/mdb/kafka/v1/topic").Topicconfig21_CleanupPolicy | undefined;
                compressionType?: import("./common").CompressionType | undefined;
                deleteRetentionMs?: number | undefined;
                fileDeleteDelayMs?: number | undefined;
                flushMessages?: number | undefined;
                flushMs?: number | undefined;
                minCompactionLagMs?: number | undefined;
                retentionBytes?: number | undefined;
                retentionMs?: number | undefined;
                maxMessageBytes?: number | undefined;
                minInsyncReplicas?: number | undefined;
                segmentBytes?: number | undefined;
                preallocate?: boolean | undefined;
            } | undefined;
            topicConfig26?: {
                cleanupPolicy?: import("../../../../../yandex/cloud/mdb/kafka/v1/topic").Topicconfig26_CleanupPolicy | undefined;
                compressionType?: import("./common").CompressionType | undefined;
                deleteRetentionMs?: number | undefined;
                fileDeleteDelayMs?: number | undefined;
                flushMessages?: number | undefined;
                flushMs?: number | undefined;
                minCompactionLagMs?: number | undefined;
                retentionBytes?: number | undefined;
                retentionMs?: number | undefined;
                maxMessageBytes?: number | undefined;
                minInsyncReplicas?: number | undefined;
                segmentBytes?: number | undefined;
                preallocate?: boolean | undefined;
            } | undefined;
            topicConfig28?: {
                cleanupPolicy?: import("../../../../../yandex/cloud/mdb/kafka/v1/topic").Topicconfig28_CleanupPolicy | undefined;
                compressionType?: import("./common").CompressionType | undefined;
                deleteRetentionMs?: number | undefined;
                fileDeleteDelayMs?: number | undefined;
                flushMessages?: number | undefined;
                flushMs?: number | undefined;
                minCompactionLagMs?: number | undefined;
                retentionBytes?: number | undefined;
                retentionMs?: number | undefined;
                maxMessageBytes?: number | undefined;
                minInsyncReplicas?: number | undefined;
                segmentBytes?: number | undefined;
                preallocate?: boolean | undefined;
            } | undefined;
            topicConfig3?: {
                cleanupPolicy?: import("../../../../../yandex/cloud/mdb/kafka/v1/topic").TopicConfig3_CleanupPolicy | undefined;
                compressionType?: import("./common").CompressionType | undefined;
                deleteRetentionMs?: number | undefined;
                fileDeleteDelayMs?: number | undefined;
                flushMessages?: number | undefined;
                flushMs?: number | undefined;
                minCompactionLagMs?: number | undefined;
                retentionBytes?: number | undefined;
                retentionMs?: number | undefined;
                maxMessageBytes?: number | undefined;
                minInsyncReplicas?: number | undefined;
                segmentBytes?: number | undefined;
                preallocate?: boolean | undefined;
            } | undefined;
        } & {
            name?: string | undefined;
            partitions?: number | undefined;
            replicationFactor?: number | undefined;
            topicConfig21?: ({
                cleanupPolicy?: import("../../../../../yandex/cloud/mdb/kafka/v1/topic").Topicconfig21_CleanupPolicy | undefined;
                compressionType?: import("./common").CompressionType | undefined;
                deleteRetentionMs?: number | undefined;
                fileDeleteDelayMs?: number | undefined;
                flushMessages?: number | undefined;
                flushMs?: number | undefined;
                minCompactionLagMs?: number | undefined;
                retentionBytes?: number | undefined;
                retentionMs?: number | undefined;
                maxMessageBytes?: number | undefined;
                minInsyncReplicas?: number | undefined;
                segmentBytes?: number | undefined;
                preallocate?: boolean | undefined;
            } & {
                cleanupPolicy?: import("../../../../../yandex/cloud/mdb/kafka/v1/topic").Topicconfig21_CleanupPolicy | undefined;
                compressionType?: import("./common").CompressionType | undefined;
                deleteRetentionMs?: number | undefined;
                fileDeleteDelayMs?: number | undefined;
                flushMessages?: number | undefined;
                flushMs?: number | undefined;
                minCompactionLagMs?: number | undefined;
                retentionBytes?: number | undefined;
                retentionMs?: number | undefined;
                maxMessageBytes?: number | undefined;
                minInsyncReplicas?: number | undefined;
                segmentBytes?: number | undefined;
                preallocate?: boolean | undefined;
            } & Record<Exclude<keyof I["topicSpec"]["topicConfig21"], "$type" | "cleanupPolicy" | "compressionType" | "deleteRetentionMs" | "fileDeleteDelayMs" | "flushMessages" | "flushMs" | "minCompactionLagMs" | "retentionBytes" | "retentionMs" | "maxMessageBytes" | "minInsyncReplicas" | "segmentBytes" | "preallocate">, never>) | undefined;
            topicConfig26?: ({
                cleanupPolicy?: import("../../../../../yandex/cloud/mdb/kafka/v1/topic").Topicconfig26_CleanupPolicy | undefined;
                compressionType?: import("./common").CompressionType | undefined;
                deleteRetentionMs?: number | undefined;
                fileDeleteDelayMs?: number | undefined;
                flushMessages?: number | undefined;
                flushMs?: number | undefined;
                minCompactionLagMs?: number | undefined;
                retentionBytes?: number | undefined;
                retentionMs?: number | undefined;
                maxMessageBytes?: number | undefined;
                minInsyncReplicas?: number | undefined;
                segmentBytes?: number | undefined;
                preallocate?: boolean | undefined;
            } & {
                cleanupPolicy?: import("../../../../../yandex/cloud/mdb/kafka/v1/topic").Topicconfig26_CleanupPolicy | undefined;
                compressionType?: import("./common").CompressionType | undefined;
                deleteRetentionMs?: number | undefined;
                fileDeleteDelayMs?: number | undefined;
                flushMessages?: number | undefined;
                flushMs?: number | undefined;
                minCompactionLagMs?: number | undefined;
                retentionBytes?: number | undefined;
                retentionMs?: number | undefined;
                maxMessageBytes?: number | undefined;
                minInsyncReplicas?: number | undefined;
                segmentBytes?: number | undefined;
                preallocate?: boolean | undefined;
            } & Record<Exclude<keyof I["topicSpec"]["topicConfig26"], "$type" | "cleanupPolicy" | "compressionType" | "deleteRetentionMs" | "fileDeleteDelayMs" | "flushMessages" | "flushMs" | "minCompactionLagMs" | "retentionBytes" | "retentionMs" | "maxMessageBytes" | "minInsyncReplicas" | "segmentBytes" | "preallocate">, never>) | undefined;
            topicConfig28?: ({
                cleanupPolicy?: import("../../../../../yandex/cloud/mdb/kafka/v1/topic").Topicconfig28_CleanupPolicy | undefined;
                compressionType?: import("./common").CompressionType | undefined;
                deleteRetentionMs?: number | undefined;
                fileDeleteDelayMs?: number | undefined;
                flushMessages?: number | undefined;
                flushMs?: number | undefined;
                minCompactionLagMs?: number | undefined;
                retentionBytes?: number | undefined;
                retentionMs?: number | undefined;
                maxMessageBytes?: number | undefined;
                minInsyncReplicas?: number | undefined;
                segmentBytes?: number | undefined;
                preallocate?: boolean | undefined;
            } & {
                cleanupPolicy?: import("../../../../../yandex/cloud/mdb/kafka/v1/topic").Topicconfig28_CleanupPolicy | undefined;
                compressionType?: import("./common").CompressionType | undefined;
                deleteRetentionMs?: number | undefined;
                fileDeleteDelayMs?: number | undefined;
                flushMessages?: number | undefined;
                flushMs?: number | undefined;
                minCompactionLagMs?: number | undefined;
                retentionBytes?: number | undefined;
                retentionMs?: number | undefined;
                maxMessageBytes?: number | undefined;
                minInsyncReplicas?: number | undefined;
                segmentBytes?: number | undefined;
                preallocate?: boolean | undefined;
            } & Record<Exclude<keyof I["topicSpec"]["topicConfig28"], "$type" | "cleanupPolicy" | "compressionType" | "deleteRetentionMs" | "fileDeleteDelayMs" | "flushMessages" | "flushMs" | "minCompactionLagMs" | "retentionBytes" | "retentionMs" | "maxMessageBytes" | "minInsyncReplicas" | "segmentBytes" | "preallocate">, never>) | undefined;
            topicConfig3?: ({
                cleanupPolicy?: import("../../../../../yandex/cloud/mdb/kafka/v1/topic").TopicConfig3_CleanupPolicy | undefined;
                compressionType?: import("./common").CompressionType | undefined;
                deleteRetentionMs?: number | undefined;
                fileDeleteDelayMs?: number | undefined;
                flushMessages?: number | undefined;
                flushMs?: number | undefined;
                minCompactionLagMs?: number | undefined;
                retentionBytes?: number | undefined;
                retentionMs?: number | undefined;
                maxMessageBytes?: number | undefined;
                minInsyncReplicas?: number | undefined;
                segmentBytes?: number | undefined;
                preallocate?: boolean | undefined;
            } & {
                cleanupPolicy?: import("../../../../../yandex/cloud/mdb/kafka/v1/topic").TopicConfig3_CleanupPolicy | undefined;
                compressionType?: import("./common").CompressionType | undefined;
                deleteRetentionMs?: number | undefined;
                fileDeleteDelayMs?: number | undefined;
                flushMessages?: number | undefined;
                flushMs?: number | undefined;
                minCompactionLagMs?: number | undefined;
                retentionBytes?: number | undefined;
                retentionMs?: number | undefined;
                maxMessageBytes?: number | undefined;
                minInsyncReplicas?: number | undefined;
                segmentBytes?: number | undefined;
                preallocate?: boolean | undefined;
            } & Record<Exclude<keyof I["topicSpec"]["topicConfig3"], "$type" | "cleanupPolicy" | "compressionType" | "deleteRetentionMs" | "fileDeleteDelayMs" | "flushMessages" | "flushMs" | "minCompactionLagMs" | "retentionBytes" | "retentionMs" | "maxMessageBytes" | "minInsyncReplicas" | "segmentBytes" | "preallocate">, never>) | undefined;
        } & Record<Exclude<keyof I["topicSpec"], "$type" | "name" | "partitions" | "replicationFactor" | "topicConfig21" | "topicConfig26" | "topicConfig28" | "topicConfig3">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "updateMask" | "clusterId" | "topicName" | "topicSpec">, never>>(object: I): UpdateTopicRequest;
};
export declare const UpdateTopicMetadata: {
    $type: "yandex.cloud.mdb.kafka.v1.UpdateTopicMetadata";
    encode(message: UpdateTopicMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateTopicMetadata;
    fromJSON(object: any): UpdateTopicMetadata;
    toJSON(message: UpdateTopicMetadata): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
        topicName?: string | undefined;
    } & {
        clusterId?: string | undefined;
        topicName?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId" | "topicName">, never>>(object: I): UpdateTopicMetadata;
};
export declare const DeleteTopicRequest: {
    $type: "yandex.cloud.mdb.kafka.v1.DeleteTopicRequest";
    encode(message: DeleteTopicRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteTopicRequest;
    fromJSON(object: any): DeleteTopicRequest;
    toJSON(message: DeleteTopicRequest): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
        topicName?: string | undefined;
    } & {
        clusterId?: string | undefined;
        topicName?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId" | "topicName">, never>>(object: I): DeleteTopicRequest;
};
export declare const DeleteTopicMetadata: {
    $type: "yandex.cloud.mdb.kafka.v1.DeleteTopicMetadata";
    encode(message: DeleteTopicMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteTopicMetadata;
    fromJSON(object: any): DeleteTopicMetadata;
    toJSON(message: DeleteTopicMetadata): unknown;
    fromPartial<I extends {
        clusterId?: string | undefined;
        topicName?: string | undefined;
    } & {
        clusterId?: string | undefined;
        topicName?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "clusterId" | "topicName">, never>>(object: I): DeleteTopicMetadata;
};
/** A set of methods for managing Kafka topics. */
export declare const TopicServiceService: {
    /**
     * Returns the specified Kafka topic.
     *
     * To get the list of available Kafka topics, make a [List] request.
     */
    readonly get: {
        readonly path: "/yandex.cloud.mdb.kafka.v1.TopicService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetTopicRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetTopicRequest;
        readonly responseSerialize: (value: Topic) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Topic;
    };
    /** Retrieves the list of Kafka topics in the specified cluster. */
    readonly list: {
        readonly path: "/yandex.cloud.mdb.kafka.v1.TopicService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListTopicsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListTopicsRequest;
        readonly responseSerialize: (value: ListTopicsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListTopicsResponse;
    };
    /** Creates a new Kafka topic in the specified cluster. */
    readonly create: {
        readonly path: "/yandex.cloud.mdb.kafka.v1.TopicService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateTopicRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateTopicRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Updates the specified Kafka topic. */
    readonly update: {
        readonly path: "/yandex.cloud.mdb.kafka.v1.TopicService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateTopicRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateTopicRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    /** Deletes the specified Kafka topic. */
    readonly delete: {
        readonly path: "/yandex.cloud.mdb.kafka.v1.TopicService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteTopicRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteTopicRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
};
export interface TopicServiceServer extends UntypedServiceImplementation {
    /**
     * Returns the specified Kafka topic.
     *
     * To get the list of available Kafka topics, make a [List] request.
     */
    get: handleUnaryCall<GetTopicRequest, Topic>;
    /** Retrieves the list of Kafka topics in the specified cluster. */
    list: handleUnaryCall<ListTopicsRequest, ListTopicsResponse>;
    /** Creates a new Kafka topic in the specified cluster. */
    create: handleUnaryCall<CreateTopicRequest, Operation>;
    /** Updates the specified Kafka topic. */
    update: handleUnaryCall<UpdateTopicRequest, Operation>;
    /** Deletes the specified Kafka topic. */
    delete: handleUnaryCall<DeleteTopicRequest, Operation>;
}
export interface TopicServiceClient extends Client {
    /**
     * Returns the specified Kafka topic.
     *
     * To get the list of available Kafka topics, make a [List] request.
     */
    get(request: GetTopicRequest, callback: (error: ServiceError | null, response: Topic) => void): ClientUnaryCall;
    get(request: GetTopicRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Topic) => void): ClientUnaryCall;
    get(request: GetTopicRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Topic) => void): ClientUnaryCall;
    /** Retrieves the list of Kafka topics in the specified cluster. */
    list(request: ListTopicsRequest, callback: (error: ServiceError | null, response: ListTopicsResponse) => void): ClientUnaryCall;
    list(request: ListTopicsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListTopicsResponse) => void): ClientUnaryCall;
    list(request: ListTopicsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListTopicsResponse) => void): ClientUnaryCall;
    /** Creates a new Kafka topic in the specified cluster. */
    create(request: CreateTopicRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateTopicRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateTopicRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Updates the specified Kafka topic. */
    update(request: UpdateTopicRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateTopicRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateTopicRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    /** Deletes the specified Kafka topic. */
    delete(request: DeleteTopicRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteTopicRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteTopicRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
}
export declare const TopicServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): TopicServiceClient;
    service: typeof TopicServiceService;
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
