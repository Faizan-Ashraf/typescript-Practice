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
class User{
    protected _coursecount = 1;
   readonly city: string = "lahore"

    constructor(
        public email: string,
        public name: string){

    }

    private deleteToken(){
        console.log("Token Deleted")
    }

    get getEmail(): string{
        return `Email: ${this.email}`
    }

    get courseCount():number{
        return this._coursecount;
    }
    set courseCount(courseNum){
        if (courseNum<=1) {
            throw new Error("Course count should be more than 1")
        }
        this._coursecount = courseNum
    }
}
const faizan = new User("f@.com","faizan")

class subUser extends User{
    isFamily: boolean = true
    changeCourseCount(){
        this._coursecount = 4
    }
}