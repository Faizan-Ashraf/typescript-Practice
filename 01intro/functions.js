"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
addTwo(5);
function getUpper(val) {
    return val.toUpperCase();
}
getUpper("faizan");
function signUp(name, email, isPaid) {
}
signUp("Faizan", "faizan@gmail.com", false);
function login(name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
}
login("Faizan", "faizan@gmail.com");
function getVal(myVal) {
    if (myVal > 5) {
        return true;
    }
    return "200 OK";
}
var GetHello = function (s) {
    return "";
};
var heroes = ["thor", "ironman", "CptAmerica"];
heroes.map(function (hero) {
    return "hero is ".concat(hero);
});
function handleError(msg) {
    throw new Error(msg);
}
