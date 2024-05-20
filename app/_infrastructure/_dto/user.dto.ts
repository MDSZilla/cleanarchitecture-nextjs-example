import { User } from "@/app/_domain/_entities/user.entity";
import { UserRole } from "@/app/_domain/_enums/userrole.enum";

//A DTO acts as a Middle Layer in Clean Architecture allowing us to Map from Higher Levels to Lower Levels without direct coupling.

export class userDTO {
    id: string;
    username: string;
    email: string;
    password: string;
    userRole: string;

    constructor(id: string, username: string, email: string, password: string, userRole: string) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
        this.userRole = userRole;
    };

    static toDTO(user: User): userDTO {
        return new userDTO(user.id, user.username, user.email, user.password, user.userRole);
    }

    static toUser(user: userDTO): User {
        let role;
        if(user.userRole === UserRole.ADMIN){
            role = UserRole.ADMIN;
        } else {
            role = UserRole.USER;
        };
        return new User(user.id, user.username, user.email, user.password, role);
    };
    
};