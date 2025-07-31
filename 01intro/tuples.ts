// const user: (string|number)[] = ["hc",1]
let user: [string, number, boolean]
// user = [true, " ", 2] -> error occured because of order

user = ["f", 231, true]

type User = [number, string]
const newUser: User = [112, "asdsa"]
newUser[1] = "SADSAD"
