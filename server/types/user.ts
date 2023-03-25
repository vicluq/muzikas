export interface User {
    name: string;
    email: string;
    password: string;
    tokenExpiration: number;
    token: string;
}