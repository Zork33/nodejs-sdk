/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { Budget, CostBudgetSpec, ExpenseBudgetSpec, BalanceBudgetSpec } from "../../../../yandex/cloud/billing/v1/budget";
import { Operation } from "../../../../yandex/cloud/operation/operation";
export declare const protobufPackage = "yandex.cloud.billing.v1";
export interface GetBudgetRequest {
    $type: "yandex.cloud.billing.v1.GetBudgetRequest";
    /**
     * ID of the budget to return.
     * To get the budget ID, use [BudgetService.List] request.
     */
    id: string;
}
export interface ListBudgetsRequest {
    $type: "yandex.cloud.billing.v1.ListBudgetsRequest";
    /**
     * ID of the billing account to list budgets corresponding to.
     * To get the billing account ID, use [BillingAccountService.List] request.
     */
    billingAccountId: string;
    /**
     * The maximum number of results per page to return. If the number of available
     * results is larger than [page_size],
     * the service returns a [ListBudgetsResponse.next_page_token]
     * that can be used to get the next page of results in subsequent list requests.
     */
    pageSize: number;
    /**
     * Page token. To get the next page of results,
     * set [page_token] to the [ListBudgetsResponse.next_page_token]
     * returned by a previous list request.
     */
    pageToken: string;
}
export interface ListBudgetsResponse {
    $type: "yandex.cloud.billing.v1.ListBudgetsResponse";
    /** List of budgets. */
    budgets: Budget[];
    /**
     * This token allows you to get the next page of results for list requests. If the number of results
     * is larger than [ListBudgetsRequest.page_size], use
     * [next_page_token] as the value
     * for the [ListBudgetsRequest.page_token] query parameter
     * in the next list request. Each subsequent list request will have its own
     * [next_page_token] to continue paging through the results.
     */
    nextPageToken: string;
}
export interface CreateBudgetRequest {
    $type: "yandex.cloud.billing.v1.CreateBudgetRequest";
    /**
     * ID of the billing account to list budgets corresponding to.
     * To get the billing account ID, use [yandex.cloud.billing.v1.BillingAccountService.List] request.
     */
    billingAccountId: string;
    /** Name of the budget. */
    name: string;
    /** Cost budget specification. */
    costBudgetSpec?: CostBudgetSpec | undefined;
    /** Expense budget specification. */
    expenseBudgetSpec?: ExpenseBudgetSpec | undefined;
    /** Balance budget specification. */
    balanceBudgetSpec?: BalanceBudgetSpec | undefined;
}
export interface CreateBudgetMetadata {
    $type: "yandex.cloud.billing.v1.CreateBudgetMetadata";
    /** ID of the budget. */
    budgetId: string;
}
export declare const GetBudgetRequest: {
    $type: "yandex.cloud.billing.v1.GetBudgetRequest";
    encode(message: GetBudgetRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetBudgetRequest;
    fromJSON(object: any): GetBudgetRequest;
    toJSON(message: GetBudgetRequest): unknown;
    fromPartial<I extends {
        id?: string | undefined;
    } & {
        id?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "id">, never>>(object: I): GetBudgetRequest;
};
export declare const ListBudgetsRequest: {
    $type: "yandex.cloud.billing.v1.ListBudgetsRequest";
    encode(message: ListBudgetsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListBudgetsRequest;
    fromJSON(object: any): ListBudgetsRequest;
    toJSON(message: ListBudgetsRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        billingAccountId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        billingAccountId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "billingAccountId">, never>>(object: I): ListBudgetsRequest;
};
export declare const ListBudgetsResponse: {
    $type: "yandex.cloud.billing.v1.ListBudgetsResponse";
    encode(message: ListBudgetsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListBudgetsResponse;
    fromJSON(object: any): ListBudgetsResponse;
    toJSON(message: ListBudgetsResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        budgets?: {
            id?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/billing/v1/budget").BudgetStatus | undefined;
            name?: string | undefined;
            billingAccountId?: string | undefined;
            costBudget?: {
                filter?: {
                    serviceIds?: string[] | undefined;
                    cloudFoldersFilters?: {
                        cloudId?: string | undefined;
                        folderIds?: string[] | undefined;
                    }[] | undefined;
                } | undefined;
                amount?: string | undefined;
                notificationUserAccountIds?: string[] | undefined;
                thresholdRules?: {
                    type?: import("../../../../yandex/cloud/billing/v1/budget").ThresholdType | undefined;
                    amount?: string | undefined;
                    notificationUserAccountIds?: string[] | undefined;
                }[] | undefined;
                resetPeriod?: import("../../../../yandex/cloud/billing/v1/budget").ResetPeriodType | undefined;
                startDate?: string | undefined;
                endDate?: string | undefined;
            } | undefined;
            expenseBudget?: {
                filter?: {
                    serviceIds?: string[] | undefined;
                    cloudFoldersFilters?: {
                        cloudId?: string | undefined;
                        folderIds?: string[] | undefined;
                    }[] | undefined;
                } | undefined;
                amount?: string | undefined;
                notificationUserAccountIds?: string[] | undefined;
                thresholdRules?: {
                    type?: import("../../../../yandex/cloud/billing/v1/budget").ThresholdType | undefined;
                    amount?: string | undefined;
                    notificationUserAccountIds?: string[] | undefined;
                }[] | undefined;
                resetPeriod?: import("../../../../yandex/cloud/billing/v1/budget").ResetPeriodType | undefined;
                startDate?: string | undefined;
                endDate?: string | undefined;
            } | undefined;
            balanceBudget?: {
                amount?: string | undefined;
                notificationUserAccountIds?: string[] | undefined;
                thresholdRules?: {
                    type?: import("../../../../yandex/cloud/billing/v1/budget").ThresholdType | undefined;
                    amount?: string | undefined;
                    notificationUserAccountIds?: string[] | undefined;
                }[] | undefined;
                startDate?: string | undefined;
                endDate?: string | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        budgets?: ({
            id?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/billing/v1/budget").BudgetStatus | undefined;
            name?: string | undefined;
            billingAccountId?: string | undefined;
            costBudget?: {
                filter?: {
                    serviceIds?: string[] | undefined;
                    cloudFoldersFilters?: {
                        cloudId?: string | undefined;
                        folderIds?: string[] | undefined;
                    }[] | undefined;
                } | undefined;
                amount?: string | undefined;
                notificationUserAccountIds?: string[] | undefined;
                thresholdRules?: {
                    type?: import("../../../../yandex/cloud/billing/v1/budget").ThresholdType | undefined;
                    amount?: string | undefined;
                    notificationUserAccountIds?: string[] | undefined;
                }[] | undefined;
                resetPeriod?: import("../../../../yandex/cloud/billing/v1/budget").ResetPeriodType | undefined;
                startDate?: string | undefined;
                endDate?: string | undefined;
            } | undefined;
            expenseBudget?: {
                filter?: {
                    serviceIds?: string[] | undefined;
                    cloudFoldersFilters?: {
                        cloudId?: string | undefined;
                        folderIds?: string[] | undefined;
                    }[] | undefined;
                } | undefined;
                amount?: string | undefined;
                notificationUserAccountIds?: string[] | undefined;
                thresholdRules?: {
                    type?: import("../../../../yandex/cloud/billing/v1/budget").ThresholdType | undefined;
                    amount?: string | undefined;
                    notificationUserAccountIds?: string[] | undefined;
                }[] | undefined;
                resetPeriod?: import("../../../../yandex/cloud/billing/v1/budget").ResetPeriodType | undefined;
                startDate?: string | undefined;
                endDate?: string | undefined;
            } | undefined;
            balanceBudget?: {
                amount?: string | undefined;
                notificationUserAccountIds?: string[] | undefined;
                thresholdRules?: {
                    type?: import("../../../../yandex/cloud/billing/v1/budget").ThresholdType | undefined;
                    amount?: string | undefined;
                    notificationUserAccountIds?: string[] | undefined;
                }[] | undefined;
                startDate?: string | undefined;
                endDate?: string | undefined;
            } | undefined;
        }[] & ({
            id?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/billing/v1/budget").BudgetStatus | undefined;
            name?: string | undefined;
            billingAccountId?: string | undefined;
            costBudget?: {
                filter?: {
                    serviceIds?: string[] | undefined;
                    cloudFoldersFilters?: {
                        cloudId?: string | undefined;
                        folderIds?: string[] | undefined;
                    }[] | undefined;
                } | undefined;
                amount?: string | undefined;
                notificationUserAccountIds?: string[] | undefined;
                thresholdRules?: {
                    type?: import("../../../../yandex/cloud/billing/v1/budget").ThresholdType | undefined;
                    amount?: string | undefined;
                    notificationUserAccountIds?: string[] | undefined;
                }[] | undefined;
                resetPeriod?: import("../../../../yandex/cloud/billing/v1/budget").ResetPeriodType | undefined;
                startDate?: string | undefined;
                endDate?: string | undefined;
            } | undefined;
            expenseBudget?: {
                filter?: {
                    serviceIds?: string[] | undefined;
                    cloudFoldersFilters?: {
                        cloudId?: string | undefined;
                        folderIds?: string[] | undefined;
                    }[] | undefined;
                } | undefined;
                amount?: string | undefined;
                notificationUserAccountIds?: string[] | undefined;
                thresholdRules?: {
                    type?: import("../../../../yandex/cloud/billing/v1/budget").ThresholdType | undefined;
                    amount?: string | undefined;
                    notificationUserAccountIds?: string[] | undefined;
                }[] | undefined;
                resetPeriod?: import("../../../../yandex/cloud/billing/v1/budget").ResetPeriodType | undefined;
                startDate?: string | undefined;
                endDate?: string | undefined;
            } | undefined;
            balanceBudget?: {
                amount?: string | undefined;
                notificationUserAccountIds?: string[] | undefined;
                thresholdRules?: {
                    type?: import("../../../../yandex/cloud/billing/v1/budget").ThresholdType | undefined;
                    amount?: string | undefined;
                    notificationUserAccountIds?: string[] | undefined;
                }[] | undefined;
                startDate?: string | undefined;
                endDate?: string | undefined;
            } | undefined;
        } & {
            id?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/billing/v1/budget").BudgetStatus | undefined;
            name?: string | undefined;
            billingAccountId?: string | undefined;
            costBudget?: ({
                filter?: {
                    serviceIds?: string[] | undefined;
                    cloudFoldersFilters?: {
                        cloudId?: string | undefined;
                        folderIds?: string[] | undefined;
                    }[] | undefined;
                } | undefined;
                amount?: string | undefined;
                notificationUserAccountIds?: string[] | undefined;
                thresholdRules?: {
                    type?: import("../../../../yandex/cloud/billing/v1/budget").ThresholdType | undefined;
                    amount?: string | undefined;
                    notificationUserAccountIds?: string[] | undefined;
                }[] | undefined;
                resetPeriod?: import("../../../../yandex/cloud/billing/v1/budget").ResetPeriodType | undefined;
                startDate?: string | undefined;
                endDate?: string | undefined;
            } & {
                filter?: ({
                    serviceIds?: string[] | undefined;
                    cloudFoldersFilters?: {
                        cloudId?: string | undefined;
                        folderIds?: string[] | undefined;
                    }[] | undefined;
                } & {
                    serviceIds?: (string[] & string[] & Record<Exclude<keyof I["budgets"][number]["costBudget"]["filter"]["serviceIds"], "$type" | keyof string[]>, never>) | undefined;
                    cloudFoldersFilters?: ({
                        cloudId?: string | undefined;
                        folderIds?: string[] | undefined;
                    }[] & ({
                        cloudId?: string | undefined;
                        folderIds?: string[] | undefined;
                    } & {
                        cloudId?: string | undefined;
                        folderIds?: (string[] & string[] & Record<Exclude<keyof I["budgets"][number]["costBudget"]["filter"]["cloudFoldersFilters"][number]["folderIds"], "$type" | keyof string[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["budgets"][number]["costBudget"]["filter"]["cloudFoldersFilters"][number], "$type" | "cloudId" | "folderIds">, never>)[] & Record<Exclude<keyof I["budgets"][number]["costBudget"]["filter"]["cloudFoldersFilters"], "$type" | keyof {
                        cloudId?: string | undefined;
                        folderIds?: string[] | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I["budgets"][number]["costBudget"]["filter"], "$type" | "serviceIds" | "cloudFoldersFilters">, never>) | undefined;
                amount?: string | undefined;
                notificationUserAccountIds?: (string[] & string[] & Record<Exclude<keyof I["budgets"][number]["costBudget"]["notificationUserAccountIds"], "$type" | keyof string[]>, never>) | undefined;
                thresholdRules?: ({
                    type?: import("../../../../yandex/cloud/billing/v1/budget").ThresholdType | undefined;
                    amount?: string | undefined;
                    notificationUserAccountIds?: string[] | undefined;
                }[] & ({
                    type?: import("../../../../yandex/cloud/billing/v1/budget").ThresholdType | undefined;
                    amount?: string | undefined;
                    notificationUserAccountIds?: string[] | undefined;
                } & {
                    type?: import("../../../../yandex/cloud/billing/v1/budget").ThresholdType | undefined;
                    amount?: string | undefined;
                    notificationUserAccountIds?: (string[] & string[] & Record<Exclude<keyof I["budgets"][number]["costBudget"]["thresholdRules"][number]["notificationUserAccountIds"], "$type" | keyof string[]>, never>) | undefined;
                } & Record<Exclude<keyof I["budgets"][number]["costBudget"]["thresholdRules"][number], "$type" | "type" | "amount" | "notificationUserAccountIds">, never>)[] & Record<Exclude<keyof I["budgets"][number]["costBudget"]["thresholdRules"], "$type" | keyof {
                    type?: import("../../../../yandex/cloud/billing/v1/budget").ThresholdType | undefined;
                    amount?: string | undefined;
                    notificationUserAccountIds?: string[] | undefined;
                }[]>, never>) | undefined;
                resetPeriod?: import("../../../../yandex/cloud/billing/v1/budget").ResetPeriodType | undefined;
                startDate?: string | undefined;
                endDate?: string | undefined;
            } & Record<Exclude<keyof I["budgets"][number]["costBudget"], "$type" | "filter" | "amount" | "notificationUserAccountIds" | "thresholdRules" | "resetPeriod" | "startDate" | "endDate">, never>) | undefined;
            expenseBudget?: ({
                filter?: {
                    serviceIds?: string[] | undefined;
                    cloudFoldersFilters?: {
                        cloudId?: string | undefined;
                        folderIds?: string[] | undefined;
                    }[] | undefined;
                } | undefined;
                amount?: string | undefined;
                notificationUserAccountIds?: string[] | undefined;
                thresholdRules?: {
                    type?: import("../../../../yandex/cloud/billing/v1/budget").ThresholdType | undefined;
                    amount?: string | undefined;
                    notificationUserAccountIds?: string[] | undefined;
                }[] | undefined;
                resetPeriod?: import("../../../../yandex/cloud/billing/v1/budget").ResetPeriodType | undefined;
                startDate?: string | undefined;
                endDate?: string | undefined;
            } & {
                filter?: ({
                    serviceIds?: string[] | undefined;
                    cloudFoldersFilters?: {
                        cloudId?: string | undefined;
                        folderIds?: string[] | undefined;
                    }[] | undefined;
                } & {
                    serviceIds?: (string[] & string[] & Record<Exclude<keyof I["budgets"][number]["expenseBudget"]["filter"]["serviceIds"], "$type" | keyof string[]>, never>) | undefined;
                    cloudFoldersFilters?: ({
                        cloudId?: string | undefined;
                        folderIds?: string[] | undefined;
                    }[] & ({
                        cloudId?: string | undefined;
                        folderIds?: string[] | undefined;
                    } & {
                        cloudId?: string | undefined;
                        folderIds?: (string[] & string[] & Record<Exclude<keyof I["budgets"][number]["expenseBudget"]["filter"]["cloudFoldersFilters"][number]["folderIds"], "$type" | keyof string[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["budgets"][number]["expenseBudget"]["filter"]["cloudFoldersFilters"][number], "$type" | "cloudId" | "folderIds">, never>)[] & Record<Exclude<keyof I["budgets"][number]["expenseBudget"]["filter"]["cloudFoldersFilters"], "$type" | keyof {
                        cloudId?: string | undefined;
                        folderIds?: string[] | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I["budgets"][number]["expenseBudget"]["filter"], "$type" | "serviceIds" | "cloudFoldersFilters">, never>) | undefined;
                amount?: string | undefined;
                notificationUserAccountIds?: (string[] & string[] & Record<Exclude<keyof I["budgets"][number]["expenseBudget"]["notificationUserAccountIds"], "$type" | keyof string[]>, never>) | undefined;
                thresholdRules?: ({
                    type?: import("../../../../yandex/cloud/billing/v1/budget").ThresholdType | undefined;
                    amount?: string | undefined;
                    notificationUserAccountIds?: string[] | undefined;
                }[] & ({
                    type?: import("../../../../yandex/cloud/billing/v1/budget").ThresholdType | undefined;
                    amount?: string | undefined;
                    notificationUserAccountIds?: string[] | undefined;
                } & {
                    type?: import("../../../../yandex/cloud/billing/v1/budget").ThresholdType | undefined;
                    amount?: string | undefined;
                    notificationUserAccountIds?: (string[] & string[] & Record<Exclude<keyof I["budgets"][number]["expenseBudget"]["thresholdRules"][number]["notificationUserAccountIds"], "$type" | keyof string[]>, never>) | undefined;
                } & Record<Exclude<keyof I["budgets"][number]["expenseBudget"]["thresholdRules"][number], "$type" | "type" | "amount" | "notificationUserAccountIds">, never>)[] & Record<Exclude<keyof I["budgets"][number]["expenseBudget"]["thresholdRules"], "$type" | keyof {
                    type?: import("../../../../yandex/cloud/billing/v1/budget").ThresholdType | undefined;
                    amount?: string | undefined;
                    notificationUserAccountIds?: string[] | undefined;
                }[]>, never>) | undefined;
                resetPeriod?: import("../../../../yandex/cloud/billing/v1/budget").ResetPeriodType | undefined;
                startDate?: string | undefined;
                endDate?: string | undefined;
            } & Record<Exclude<keyof I["budgets"][number]["expenseBudget"], "$type" | "filter" | "amount" | "notificationUserAccountIds" | "thresholdRules" | "resetPeriod" | "startDate" | "endDate">, never>) | undefined;
            balanceBudget?: ({
                amount?: string | undefined;
                notificationUserAccountIds?: string[] | undefined;
                thresholdRules?: {
                    type?: import("../../../../yandex/cloud/billing/v1/budget").ThresholdType | undefined;
                    amount?: string | undefined;
                    notificationUserAccountIds?: string[] | undefined;
                }[] | undefined;
                startDate?: string | undefined;
                endDate?: string | undefined;
            } & {
                amount?: string | undefined;
                notificationUserAccountIds?: (string[] & string[] & Record<Exclude<keyof I["budgets"][number]["balanceBudget"]["notificationUserAccountIds"], "$type" | keyof string[]>, never>) | undefined;
                thresholdRules?: ({
                    type?: import("../../../../yandex/cloud/billing/v1/budget").ThresholdType | undefined;
                    amount?: string | undefined;
                    notificationUserAccountIds?: string[] | undefined;
                }[] & ({
                    type?: import("../../../../yandex/cloud/billing/v1/budget").ThresholdType | undefined;
                    amount?: string | undefined;
                    notificationUserAccountIds?: string[] | undefined;
                } & {
                    type?: import("../../../../yandex/cloud/billing/v1/budget").ThresholdType | undefined;
                    amount?: string | undefined;
                    notificationUserAccountIds?: (string[] & string[] & Record<Exclude<keyof I["budgets"][number]["balanceBudget"]["thresholdRules"][number]["notificationUserAccountIds"], "$type" | keyof string[]>, never>) | undefined;
                } & Record<Exclude<keyof I["budgets"][number]["balanceBudget"]["thresholdRules"][number], "$type" | "type" | "amount" | "notificationUserAccountIds">, never>)[] & Record<Exclude<keyof I["budgets"][number]["balanceBudget"]["thresholdRules"], "$type" | keyof {
                    type?: import("../../../../yandex/cloud/billing/v1/budget").ThresholdType | undefined;
                    amount?: string | undefined;
                    notificationUserAccountIds?: string[] | undefined;
                }[]>, never>) | undefined;
                startDate?: string | undefined;
                endDate?: string | undefined;
            } & Record<Exclude<keyof I["budgets"][number]["balanceBudget"], "$type" | "amount" | "notificationUserAccountIds" | "thresholdRules" | "startDate" | "endDate">, never>) | undefined;
        } & Record<Exclude<keyof I["budgets"][number], "$type" | "id" | "createdAt" | "status" | "name" | "billingAccountId" | "costBudget" | "expenseBudget" | "balanceBudget">, never>)[] & Record<Exclude<keyof I["budgets"], "$type" | keyof {
            id?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../yandex/cloud/billing/v1/budget").BudgetStatus | undefined;
            name?: string | undefined;
            billingAccountId?: string | undefined;
            costBudget?: {
                filter?: {
                    serviceIds?: string[] | undefined;
                    cloudFoldersFilters?: {
                        cloudId?: string | undefined;
                        folderIds?: string[] | undefined;
                    }[] | undefined;
                } | undefined;
                amount?: string | undefined;
                notificationUserAccountIds?: string[] | undefined;
                thresholdRules?: {
                    type?: import("../../../../yandex/cloud/billing/v1/budget").ThresholdType | undefined;
                    amount?: string | undefined;
                    notificationUserAccountIds?: string[] | undefined;
                }[] | undefined;
                resetPeriod?: import("../../../../yandex/cloud/billing/v1/budget").ResetPeriodType | undefined;
                startDate?: string | undefined;
                endDate?: string | undefined;
            } | undefined;
            expenseBudget?: {
                filter?: {
                    serviceIds?: string[] | undefined;
                    cloudFoldersFilters?: {
                        cloudId?: string | undefined;
                        folderIds?: string[] | undefined;
                    }[] | undefined;
                } | undefined;
                amount?: string | undefined;
                notificationUserAccountIds?: string[] | undefined;
                thresholdRules?: {
                    type?: import("../../../../yandex/cloud/billing/v1/budget").ThresholdType | undefined;
                    amount?: string | undefined;
                    notificationUserAccountIds?: string[] | undefined;
                }[] | undefined;
                resetPeriod?: import("../../../../yandex/cloud/billing/v1/budget").ResetPeriodType | undefined;
                startDate?: string | undefined;
                endDate?: string | undefined;
            } | undefined;
            balanceBudget?: {
                amount?: string | undefined;
                notificationUserAccountIds?: string[] | undefined;
                thresholdRules?: {
                    type?: import("../../../../yandex/cloud/billing/v1/budget").ThresholdType | undefined;
                    amount?: string | undefined;
                    notificationUserAccountIds?: string[] | undefined;
                }[] | undefined;
                startDate?: string | undefined;
                endDate?: string | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "budgets">, never>>(object: I): ListBudgetsResponse;
};
export declare const CreateBudgetRequest: {
    $type: "yandex.cloud.billing.v1.CreateBudgetRequest";
    encode(message: CreateBudgetRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateBudgetRequest;
    fromJSON(object: any): CreateBudgetRequest;
    toJSON(message: CreateBudgetRequest): unknown;
    fromPartial<I extends {
        name?: string | undefined;
        billingAccountId?: string | undefined;
        costBudgetSpec?: {
            filter?: {
                serviceIds?: string[] | undefined;
                cloudFoldersFilters?: {
                    cloudId?: string | undefined;
                    folderIds?: string[] | undefined;
                }[] | undefined;
            } | undefined;
            amount?: string | undefined;
            notificationUserAccountIds?: string[] | undefined;
            thresholdRules?: {
                type?: import("../../../../yandex/cloud/billing/v1/budget").ThresholdType | undefined;
                amount?: string | undefined;
                notificationUserAccountIds?: string[] | undefined;
            }[] | undefined;
            resetPeriod?: import("../../../../yandex/cloud/billing/v1/budget").ResetPeriodType | undefined;
            startDate?: string | undefined;
            endDate?: string | undefined;
        } | undefined;
        expenseBudgetSpec?: {
            filter?: {
                serviceIds?: string[] | undefined;
                cloudFoldersFilters?: {
                    cloudId?: string | undefined;
                    folderIds?: string[] | undefined;
                }[] | undefined;
            } | undefined;
            amount?: string | undefined;
            notificationUserAccountIds?: string[] | undefined;
            thresholdRules?: {
                type?: import("../../../../yandex/cloud/billing/v1/budget").ThresholdType | undefined;
                amount?: string | undefined;
                notificationUserAccountIds?: string[] | undefined;
            }[] | undefined;
            resetPeriod?: import("../../../../yandex/cloud/billing/v1/budget").ResetPeriodType | undefined;
            startDate?: string | undefined;
            endDate?: string | undefined;
        } | undefined;
        balanceBudgetSpec?: {
            amount?: string | undefined;
            notificationUserAccountIds?: string[] | undefined;
            thresholdRules?: {
                type?: import("../../../../yandex/cloud/billing/v1/budget").ThresholdType | undefined;
                amount?: string | undefined;
                notificationUserAccountIds?: string[] | undefined;
            }[] | undefined;
            startDate?: string | undefined;
            endDate?: string | undefined;
        } | undefined;
    } & {
        name?: string | undefined;
        billingAccountId?: string | undefined;
        costBudgetSpec?: ({
            filter?: {
                serviceIds?: string[] | undefined;
                cloudFoldersFilters?: {
                    cloudId?: string | undefined;
                    folderIds?: string[] | undefined;
                }[] | undefined;
            } | undefined;
            amount?: string | undefined;
            notificationUserAccountIds?: string[] | undefined;
            thresholdRules?: {
                type?: import("../../../../yandex/cloud/billing/v1/budget").ThresholdType | undefined;
                amount?: string | undefined;
                notificationUserAccountIds?: string[] | undefined;
            }[] | undefined;
            resetPeriod?: import("../../../../yandex/cloud/billing/v1/budget").ResetPeriodType | undefined;
            startDate?: string | undefined;
            endDate?: string | undefined;
        } & {
            filter?: ({
                serviceIds?: string[] | undefined;
                cloudFoldersFilters?: {
                    cloudId?: string | undefined;
                    folderIds?: string[] | undefined;
                }[] | undefined;
            } & {
                serviceIds?: (string[] & string[] & Record<Exclude<keyof I["costBudgetSpec"]["filter"]["serviceIds"], "$type" | keyof string[]>, never>) | undefined;
                cloudFoldersFilters?: ({
                    cloudId?: string | undefined;
                    folderIds?: string[] | undefined;
                }[] & ({
                    cloudId?: string | undefined;
                    folderIds?: string[] | undefined;
                } & {
                    cloudId?: string | undefined;
                    folderIds?: (string[] & string[] & Record<Exclude<keyof I["costBudgetSpec"]["filter"]["cloudFoldersFilters"][number]["folderIds"], "$type" | keyof string[]>, never>) | undefined;
                } & Record<Exclude<keyof I["costBudgetSpec"]["filter"]["cloudFoldersFilters"][number], "$type" | "cloudId" | "folderIds">, never>)[] & Record<Exclude<keyof I["costBudgetSpec"]["filter"]["cloudFoldersFilters"], "$type" | keyof {
                    cloudId?: string | undefined;
                    folderIds?: string[] | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["costBudgetSpec"]["filter"], "$type" | "serviceIds" | "cloudFoldersFilters">, never>) | undefined;
            amount?: string | undefined;
            notificationUserAccountIds?: (string[] & string[] & Record<Exclude<keyof I["costBudgetSpec"]["notificationUserAccountIds"], "$type" | keyof string[]>, never>) | undefined;
            thresholdRules?: ({
                type?: import("../../../../yandex/cloud/billing/v1/budget").ThresholdType | undefined;
                amount?: string | undefined;
                notificationUserAccountIds?: string[] | undefined;
            }[] & ({
                type?: import("../../../../yandex/cloud/billing/v1/budget").ThresholdType | undefined;
                amount?: string | undefined;
                notificationUserAccountIds?: string[] | undefined;
            } & {
                type?: import("../../../../yandex/cloud/billing/v1/budget").ThresholdType | undefined;
                amount?: string | undefined;
                notificationUserAccountIds?: (string[] & string[] & Record<Exclude<keyof I["costBudgetSpec"]["thresholdRules"][number]["notificationUserAccountIds"], "$type" | keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["costBudgetSpec"]["thresholdRules"][number], "$type" | "type" | "amount" | "notificationUserAccountIds">, never>)[] & Record<Exclude<keyof I["costBudgetSpec"]["thresholdRules"], "$type" | keyof {
                type?: import("../../../../yandex/cloud/billing/v1/budget").ThresholdType | undefined;
                amount?: string | undefined;
                notificationUserAccountIds?: string[] | undefined;
            }[]>, never>) | undefined;
            resetPeriod?: import("../../../../yandex/cloud/billing/v1/budget").ResetPeriodType | undefined;
            startDate?: string | undefined;
            endDate?: string | undefined;
        } & Record<Exclude<keyof I["costBudgetSpec"], "$type" | "filter" | "amount" | "notificationUserAccountIds" | "thresholdRules" | "resetPeriod" | "startDate" | "endDate">, never>) | undefined;
        expenseBudgetSpec?: ({
            filter?: {
                serviceIds?: string[] | undefined;
                cloudFoldersFilters?: {
                    cloudId?: string | undefined;
                    folderIds?: string[] | undefined;
                }[] | undefined;
            } | undefined;
            amount?: string | undefined;
            notificationUserAccountIds?: string[] | undefined;
            thresholdRules?: {
                type?: import("../../../../yandex/cloud/billing/v1/budget").ThresholdType | undefined;
                amount?: string | undefined;
                notificationUserAccountIds?: string[] | undefined;
            }[] | undefined;
            resetPeriod?: import("../../../../yandex/cloud/billing/v1/budget").ResetPeriodType | undefined;
            startDate?: string | undefined;
            endDate?: string | undefined;
        } & {
            filter?: ({
                serviceIds?: string[] | undefined;
                cloudFoldersFilters?: {
                    cloudId?: string | undefined;
                    folderIds?: string[] | undefined;
                }[] | undefined;
            } & {
                serviceIds?: (string[] & string[] & Record<Exclude<keyof I["expenseBudgetSpec"]["filter"]["serviceIds"], "$type" | keyof string[]>, never>) | undefined;
                cloudFoldersFilters?: ({
                    cloudId?: string | undefined;
                    folderIds?: string[] | undefined;
                }[] & ({
                    cloudId?: string | undefined;
                    folderIds?: string[] | undefined;
                } & {
                    cloudId?: string | undefined;
                    folderIds?: (string[] & string[] & Record<Exclude<keyof I["expenseBudgetSpec"]["filter"]["cloudFoldersFilters"][number]["folderIds"], "$type" | keyof string[]>, never>) | undefined;
                } & Record<Exclude<keyof I["expenseBudgetSpec"]["filter"]["cloudFoldersFilters"][number], "$type" | "cloudId" | "folderIds">, never>)[] & Record<Exclude<keyof I["expenseBudgetSpec"]["filter"]["cloudFoldersFilters"], "$type" | keyof {
                    cloudId?: string | undefined;
                    folderIds?: string[] | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["expenseBudgetSpec"]["filter"], "$type" | "serviceIds" | "cloudFoldersFilters">, never>) | undefined;
            amount?: string | undefined;
            notificationUserAccountIds?: (string[] & string[] & Record<Exclude<keyof I["expenseBudgetSpec"]["notificationUserAccountIds"], "$type" | keyof string[]>, never>) | undefined;
            thresholdRules?: ({
                type?: import("../../../../yandex/cloud/billing/v1/budget").ThresholdType | undefined;
                amount?: string | undefined;
                notificationUserAccountIds?: string[] | undefined;
            }[] & ({
                type?: import("../../../../yandex/cloud/billing/v1/budget").ThresholdType | undefined;
                amount?: string | undefined;
                notificationUserAccountIds?: string[] | undefined;
            } & {
                type?: import("../../../../yandex/cloud/billing/v1/budget").ThresholdType | undefined;
                amount?: string | undefined;
                notificationUserAccountIds?: (string[] & string[] & Record<Exclude<keyof I["expenseBudgetSpec"]["thresholdRules"][number]["notificationUserAccountIds"], "$type" | keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["expenseBudgetSpec"]["thresholdRules"][number], "$type" | "type" | "amount" | "notificationUserAccountIds">, never>)[] & Record<Exclude<keyof I["expenseBudgetSpec"]["thresholdRules"], "$type" | keyof {
                type?: import("../../../../yandex/cloud/billing/v1/budget").ThresholdType | undefined;
                amount?: string | undefined;
                notificationUserAccountIds?: string[] | undefined;
            }[]>, never>) | undefined;
            resetPeriod?: import("../../../../yandex/cloud/billing/v1/budget").ResetPeriodType | undefined;
            startDate?: string | undefined;
            endDate?: string | undefined;
        } & Record<Exclude<keyof I["expenseBudgetSpec"], "$type" | "filter" | "amount" | "notificationUserAccountIds" | "thresholdRules" | "resetPeriod" | "startDate" | "endDate">, never>) | undefined;
        balanceBudgetSpec?: ({
            amount?: string | undefined;
            notificationUserAccountIds?: string[] | undefined;
            thresholdRules?: {
                type?: import("../../../../yandex/cloud/billing/v1/budget").ThresholdType | undefined;
                amount?: string | undefined;
                notificationUserAccountIds?: string[] | undefined;
            }[] | undefined;
            startDate?: string | undefined;
            endDate?: string | undefined;
        } & {
            amount?: string | undefined;
            notificationUserAccountIds?: (string[] & string[] & Record<Exclude<keyof I["balanceBudgetSpec"]["notificationUserAccountIds"], "$type" | keyof string[]>, never>) | undefined;
            thresholdRules?: ({
                type?: import("../../../../yandex/cloud/billing/v1/budget").ThresholdType | undefined;
                amount?: string | undefined;
                notificationUserAccountIds?: string[] | undefined;
            }[] & ({
                type?: import("../../../../yandex/cloud/billing/v1/budget").ThresholdType | undefined;
                amount?: string | undefined;
                notificationUserAccountIds?: string[] | undefined;
            } & {
                type?: import("../../../../yandex/cloud/billing/v1/budget").ThresholdType | undefined;
                amount?: string | undefined;
                notificationUserAccountIds?: (string[] & string[] & Record<Exclude<keyof I["balanceBudgetSpec"]["thresholdRules"][number]["notificationUserAccountIds"], "$type" | keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["balanceBudgetSpec"]["thresholdRules"][number], "$type" | "type" | "amount" | "notificationUserAccountIds">, never>)[] & Record<Exclude<keyof I["balanceBudgetSpec"]["thresholdRules"], "$type" | keyof {
                type?: import("../../../../yandex/cloud/billing/v1/budget").ThresholdType | undefined;
                amount?: string | undefined;
                notificationUserAccountIds?: string[] | undefined;
            }[]>, never>) | undefined;
            startDate?: string | undefined;
            endDate?: string | undefined;
        } & Record<Exclude<keyof I["balanceBudgetSpec"], "$type" | "amount" | "notificationUserAccountIds" | "thresholdRules" | "startDate" | "endDate">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "name" | "billingAccountId" | "costBudgetSpec" | "expenseBudgetSpec" | "balanceBudgetSpec">, never>>(object: I): CreateBudgetRequest;
};
export declare const CreateBudgetMetadata: {
    $type: "yandex.cloud.billing.v1.CreateBudgetMetadata";
    encode(message: CreateBudgetMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateBudgetMetadata;
    fromJSON(object: any): CreateBudgetMetadata;
    toJSON(message: CreateBudgetMetadata): unknown;
    fromPartial<I extends {
        budgetId?: string | undefined;
    } & {
        budgetId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "budgetId">, never>>(object: I): CreateBudgetMetadata;
};
/** A set of methods for managing Budget resources. */
export declare const BudgetServiceService: {
    /** Returns the specified budget. */
    readonly get: {
        readonly path: "/yandex.cloud.billing.v1.BudgetService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetBudgetRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetBudgetRequest;
        readonly responseSerialize: (value: Budget) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Budget;
    };
    /** Retrieves the list of budgets corresponding to the specified billing account. */
    readonly list: {
        readonly path: "/yandex.cloud.billing.v1.BudgetService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListBudgetsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListBudgetsRequest;
        readonly responseSerialize: (value: ListBudgetsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListBudgetsResponse;
    };
    /** Creates a budget for the specified billing account. */
    readonly create: {
        readonly path: "/yandex.cloud.billing.v1.BudgetService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateBudgetRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateBudgetRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
};
export interface BudgetServiceServer extends UntypedServiceImplementation {
    /** Returns the specified budget. */
    get: handleUnaryCall<GetBudgetRequest, Budget>;
    /** Retrieves the list of budgets corresponding to the specified billing account. */
    list: handleUnaryCall<ListBudgetsRequest, ListBudgetsResponse>;
    /** Creates a budget for the specified billing account. */
    create: handleUnaryCall<CreateBudgetRequest, Operation>;
}
export interface BudgetServiceClient extends Client {
    /** Returns the specified budget. */
    get(request: GetBudgetRequest, callback: (error: ServiceError | null, response: Budget) => void): ClientUnaryCall;
    get(request: GetBudgetRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Budget) => void): ClientUnaryCall;
    get(request: GetBudgetRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Budget) => void): ClientUnaryCall;
    /** Retrieves the list of budgets corresponding to the specified billing account. */
    list(request: ListBudgetsRequest, callback: (error: ServiceError | null, response: ListBudgetsResponse) => void): ClientUnaryCall;
    list(request: ListBudgetsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListBudgetsResponse) => void): ClientUnaryCall;
    list(request: ListBudgetsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListBudgetsResponse) => void): ClientUnaryCall;
    /** Creates a budget for the specified billing account. */
    create(request: CreateBudgetRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateBudgetRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateBudgetRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
}
export declare const BudgetServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): BudgetServiceClient;
    service: typeof BudgetServiceService;
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
