import { User } from "@/app/_domain/_entities/user.entity";
import { UserRole } from "@/app/_domain/_enums/userrole.enum";
import { UserInterface } from "@/app/_domain/_interface/user.interface";
import { ORMUserRepository } from "@/app/_infrastructure/_repositories/orm.user.repository";


export async function registerFormFunction(formData: FormData){
    'use server'
    const username = formData.get("username")?.toString();
    const email = formData.get("email");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");
    const role = formData.get("role");

    console.log("Let userInterface");
    let userInterface: UserInterface;
    console.log("Let ORM");
    let ORM: ORMUserRepository = new ORMUserRepository();
    console.log("Let userInterface = ORM");
    userInterface = ORM;


    if(username && email && password && confirmPassword && role){
        console.log("Creating User");
        if(role.toString() === "admin"){
            const user: User = new User("1", username, email.toString(), password.toString(), UserRole.ADMIN);
            user.create(userInterface);
            console.log(await user.get(userInterface));
        } else {
            const user: User = new User("1", username, email.toString(), password.toString(), UserRole.USER);
            user.create(userInterface)
            console.log(await user.get(userInterface));
        };
    } else {
        console.log("Value Missing");
    };
};