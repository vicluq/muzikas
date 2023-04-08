export type DataResponse<u> =
  | u
  | {
      message: string;
      errorType?: string;
    };

export type OperationResponse = {
    message: string;
    errorType?: string;
};