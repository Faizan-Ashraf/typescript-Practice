function addTwo(num: number): number{
    
    return num+2
}
addTwo(5)

function getUpper(val){
    return val.toUpperCase()
}
getUpper("faizan")

function signUp(name: string, email:string, isPaid:boolean){

}
signUp("Faizan", "faizan@gmail.com", false)

function login(name: string, email:string, isPaid:boolean = false){

}
login("Faizan", "faizan@gmail.com")

function getVal(myVal: number): Boolean|string{
    if(myVal>5){
        return true
    }
    return "200 OK"
}

const GetHello = (s: string):string =>{
    return ""
}

const heroes = ["thor", "ironman", "CptAmerica"]

heroes.map((hero: string): string =>{
    return `hero is ${hero}`
})

function handleError (msg:string):never{
    throw new Error(msg);
}
export {}