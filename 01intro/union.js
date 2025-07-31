var score = 33;
score = 45;
score = "55";
var faizan = {
    name: "faizan",
    id: 334
};
faizan = { username: "faizan", id: 334 };
function getDbId(id) {
    // id.toUpperCase(); -> error occured
    if (typeof id === "string") {
        id.toUpperCase();
    }
}
//ARRAY
var data = [1, 2, 4];
var data2 = ["1", "2", "3"];
var data3 = ["1", "2", 3];
var pi = 3.14;
// pi = 3.145 -> error occured
