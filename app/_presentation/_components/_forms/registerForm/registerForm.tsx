import { registerFormFunction } from "./_middleware/registerFormFunction";

export default async function RegisterForm(){

    return (
        <form action={registerFormFunction} className="flex flex-col gap-2 max-w-[800px]">
            <input name="username" type="text" className="text-black" placeholder="Username" />
            <input name="email" type="email" className="text-black" placeholder="Email" />
            <input name="password" type="password" className="text-black" placeholder="Password" />
            <input name="confirmPassword" type="password" className="text-black" placeholder="Confirm Password" />
            <select name="role" className="text-black">
                <option value="user">User</option>
                <option value="admin">Admin</option>
            </select>
            <button type="submit" className="text-white">Register</button>
        </form>
    )
}