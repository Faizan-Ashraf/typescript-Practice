interface User{
    readonly dbId: number
    email: string,
    userId: number,
    googleId?: string
    // startTrial: () => string
    startTrial(): string
    getCoupon(couponName:string, vale: number): number
}

// you are cloning this from another developer and u want to add some more properties so
// we have tot redefine this
interface User{ //this is called reopening of interface
    githubToken: string
}



// const faizan: User = {dbId: 22, email: "f@gmail.com", userId: 342,
//     startTrial: () =>{
//         return "trial started"
//     },
//     getCoupon:(name: "fai123", off: 10)=>{ //there is no hard rule u should match with couponName in parameter
//         return 10
//     },
//     githubToken: "github"
// }

//inheritance
interface Admin extends User {
    role: "amin" | "ta" | "learner"
}

const faizan: Admin = {dbId: 22, email: "f@gmail.com", userId: 342, role: "amin",
    startTrial: () =>{
        return "trial started"
    },
    getCoupon:(name: "fai123", off: 10)=>{ 
        return 10
    },
    githubToken: "github"
}


faizan.email = "fa@gmail.como"
 

//Interface Vs Type 