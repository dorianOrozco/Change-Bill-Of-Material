import { UserRole } from "./user-role";

export interface User   {
    id: string;
    email: string;
    verified: boolean;
    emailVisibility: boolean;
    username: string;
    role: UserRole[];
    active: boolean;

    createdAt: string;
    updatedAt: string;
}   