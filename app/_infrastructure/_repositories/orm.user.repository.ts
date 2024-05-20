import { UserInterface } from "@/app/_domain/_interface/user.interface";
import { userDTO } from "../_dto/user.dto";
import { cookies } from "next/headers";

export class ORMUserRepository implements UserInterface {

    async createUser(user: userDTO): Promise<userDTO>{
        //ORM Logic
        console.log("ORM Create Called");
        cookies().set("id", user.id);
        cookies().set("username", user.username);
        cookies().set("email", user.email);
        cookies().set("password", user.password);
        cookies().set("userRole", user.userRole);
        return Promise.resolve(new userDTO(user.id, user.username, user.email, user.password, user.userRole));
    };

    async deleteUser(user: userDTO): Promise<boolean>{
        console.log("ORM Delete Called")
        cookies().delete("id");
        cookies().delete("username");
        cookies().delete("email");
        cookies().delete("password");
        cookies().delete("userRole");
        return Promise.resolve(true);
    };

    async getUser(): Promise<userDTO | null>{
        console.log("ORM Get Called")
        const id = cookies().get("id")?.value;
        const username = cookies().get("username")?.value;
        const email = cookies().get("email")?.value;
        const password = cookies().get("password")?.value;
        const userRole = cookies().get("userRole")?.value;
        if(id && username && email && password && userRole){
            return Promise.resolve(new userDTO(id, username, email, password, userRole));
        } else {
            return Promise.resolve(null);
        }
    };
};