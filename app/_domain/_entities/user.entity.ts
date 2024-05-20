import { userDTO } from "@/app/_infrastructure/_dto/user.dto";
import { UserRole } from "../_enums/UserRole";
import { UserInterface } from "../_interface/user.interface";


export class User {

    id: string;
    username: string;
    email: string;
    password: string;
    userRole: UserRole;

    constructor(id: string, username: string, email: string, password: string, userRole: UserRole) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
        this.userRole = userRole;
    };

    async create(userRepo: UserInterface): Promise<User>{
        console.log("User Create Logic Called");
        const res = await userRepo.createUser(new userDTO(this.id, this.username, this.email, this.password, this.userRole));
        if(res){
            return userDTO.toUser(res);
        } else {
            return res;
        }
    };

    async delete(userRepo: UserInterface): Promise<boolean>{
        return await userRepo.deleteUser(this);
    };

    async get(userRepo: UserInterface): Promise<User | null>{
        console.log("User Get Logic Called");
        const res: userDTO | null = await userRepo.getUser();
        if(res){
            return userDTO.toUser(res);
        } else {
            return res;
        };
    };

};

