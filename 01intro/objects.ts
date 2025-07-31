// const User = {
//     name: "Faizan",
//     email: "faizan@gmail.com",
//     isActive: true
// }

// // const createUser = ({name: string, isPaid: boolean}) =>{

// // }
// // createUser({name:"faizan",isPaid: true});

// function createCourse():{name: string, isPaid: boolean}{
//     return {name:"IT",isPaid: true}
// }

// const createUser = ({name: string, isPaid: boolean}) =>{

// }
// let user = {name:"faizan",isPaid: true, email: "faizan@gmail.com"}
// createUser(user);


// type person = {
//     name: string;
//     email: string;
//     isActive: boolean
// }

// function createPerson(user: person){}
// createPerson({name:"",email:"",isActive:true})

 


//READONLY and optional
type User = {
    readonly _id: string
    name: string
    email: string
    isActive: boolean,
    creditcardDetail?: number //optional
}

let myUser: User = {
    _id: "1234",
    name: "f",
    email: "f@gmail.com",
    isActive: false
}
myUser.email = "fa@gmail.com"
// myUser._id = "343" -> error occured

type cardNumber = {
    cardnumber: string

}
type cardDate = {
    cardDate: string
}

type carrdDetails = cardNumber & cardDate & {
    cvv: number
}

export {} 