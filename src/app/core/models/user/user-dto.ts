import { UserRole } from "./user-role";

export interface UserDto {
    id: string;
    email: string;
    verified: boolean;
    emailVisibility: boolean;
    username: string;
    role: UserRole[];
    active: boolean;

    createdBy: string;
    updatedBy: string;
    
    createdAt: string;
    updatedAt: string;
}