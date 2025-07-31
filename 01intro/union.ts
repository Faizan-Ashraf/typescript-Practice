let score: number | string = 33

score = 45
score = "55"

type User  = {
    name:string;
    id: number
}
type Admin = {
    username: string
    id: number
}

let faizan: User | Admin = {
    name: "faizan",
    id: 334
}
faizan = {username: "faizan", id: 334}

function getDbId(id:number | string){
    // id.toUpperCase(); -> error occured
    if(typeof id ==="string"){
        id.toUpperCase();
    }
}

//ARRAY
const data: number[] = [1, 2, 4]
const data2: string[] = ["1", "2", "3"]
const data3: (number|string)[] = ["1","2",3] 

let pi:3.14 = 3.14
// pi = 3.145 -> error occured
