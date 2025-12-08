import { UserDto } from "./user-dto";
import { UserRole } from "./user-role";

export class User implements UserDto {
    constructor(
        public id: string,
        public email: string,
        public verified: boolean,
        public emailVisibility: boolean,
        public username: string,
        public role: UserRole[],
        public active: boolean,

        public createdBy: string,
        public updatedBy: string,

        public createdAt: string,
        public updatedAt: string
    ){}

}