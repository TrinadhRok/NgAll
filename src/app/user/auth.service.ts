import {Injectable, Inject} from "@angular/core";
import {IUser} from "./user.model";

@Injectable()
export class AuthService{
    currentUser:IUser;

    loginUser(userName, password){
        this.currentUser ={
            id : 1,
            userName:userName,
            firstName:"John",
            lastName:"papa"
        }
    }
    isAuthenticated(){
        return !!this.currentUser;
    }
    updateUser(fname, lname){
        this.currentUser.firstName = fname;
        this.currentUser.lastName = lname;
    }
}