// Auto-generated index of operation icon locations
// Base path: public/images/operations

const BASE_PATH = "/images/operations";

export const operationImages = {
    apiIntegration: `${BASE_PATH}/api_integration.svg`,
    bottlenecks: `${BASE_PATH}/bottlenecks.svg`,
    customerEscalation: `${BASE_PATH}/customer_escalation.svg`,
    delayedMis: `${BASE_PATH}/delayes_mis.svg`,
    dupRecords: `${BASE_PATH}/dup_records.svg`,
    failedDebit: `${BASE_PATH}/failed_debit.svg`,
    highProcessing: `${BASE_PATH}/high_processing.svg`,
    manualRetry: `${BASE_PATH}/manual_retry.svg`,
    multipleBank: `${BASE_PATH}/multiple_bank.svg`,
    noRealtime: `${BASE_PATH}/no_realtime.svg`,
    regulatory: `${BASE_PATH}/regulatory.svg`,
    rejectionRate: `${BASE_PATH}/rejection_rate.svg`,
    validationIssue: `${BASE_PATH}/validation_issue.svg`,
    zipSvg: `${BASE_PATH}/zip_svg.svg`,
} as const;

export type OperationImageKey = keyof typeof operationImages;

export default operationImages;