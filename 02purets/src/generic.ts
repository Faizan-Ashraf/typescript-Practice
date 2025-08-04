const score: Array<number> = []
const names: Array<string> = []

function identityOne(val: boolean | number): boolean | number{
    return val;
}

function identityTwo(val: any): any{
    return val;
}

function identityThree<Type>(val: Type): Type{
    return val;
}

// identityThree(true)

function identityFour<T>(val: T):T{ //same as above func
    return val;
}

interface Bootle{
    brand: string,
    type: number
}

// identityFour<Bootle>({brand: "dsadj",type: 23});

//Generics in arrays and arrow functions
function getSearchProducts<T>(products: T[]):T{
    return products[3]
}

const getMoreSearchProducts = <T>(products: T[]):T =>{
    return products[3]
}


//Generic Classes
interface Database{
    connection: string,
    username: string,
    password: string
}
function anotherFunction<T, U extends Database>(valOne:T,valTwo: U):object{
    return{
        valOne,
        valTwo
    }
}
// anotherFunction(3,{})

interface Quiz{
    name: string,
    type: string

}
interface Course{
    name: string,
    author: string,
    subject: string
}

class Sellable<T>{
    public cart: T[] = []
    addToCart(products: T){
        this.cart.push(products);
        
    }
}