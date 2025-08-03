"use strict";
// class User{
//     public email: string
//     private name: string
//     // #name: string // we can also private this
//     readonly city: string
//     constructor(email: string, name: string){
//         this.city = "lahore"
//         this.email = email;
//         this.name = name;
//     }
// }
//we can also write like this
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._coursecount = 1;
        this.city = "lahore";
    }
    deleteToken() {
        console.log("Token Deleted");
    }
    get getEmail() {
        return `Email: ${this.email}`;
    }
    get courseCount() {
        return this._coursecount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._coursecount = courseNum;
    }
}
const faizan = new User("f@.com", "faizan");
class subUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._coursecount = 4;
    }
}
