import { userDTO } from "@/app/_infrastructure/_dto/user.dto"

//Interface provide Abstraction at the Domain Level, creating the Link between Domain and Infrastructure Layer.

export interface UserInterface {
    createUser(user: userDTO): Promise<userDTO>;
    deleteUser(user: userDTO): Promise<boolean>;
    getUser(): Promise<userDTO | null>;
};