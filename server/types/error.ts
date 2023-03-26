export interface Error {
    status: number;
    message: string;
    errorType: string;
}

export type ErrorType = Error | null;