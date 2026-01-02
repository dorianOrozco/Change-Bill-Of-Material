export interface ApiError {
    type?: string;          // 
    title: string;          // HTTP error message
    status: number;         // HTTP status
    detail: string;         // Custom error message from backend
    instance?: string;      // Path request
}