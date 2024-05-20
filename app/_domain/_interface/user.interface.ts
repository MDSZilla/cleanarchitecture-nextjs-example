import { userDTO } from "@/app/_infrastructure/_dto/user.dto"

export interface UserInterface {
    createUser(user: userDTO): Promise<userDTO>;
    deleteUser(user: userDTO): Promise<boolean>;
    getUser(): Promise<userDTO | null>;
};