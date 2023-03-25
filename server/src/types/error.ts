export interface Error {
    status: number;
    message: string;
}

export type ErrorType = Error | null;