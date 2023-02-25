/* eslint-disable */
//import "bootstrap";
///:import "./style.css";

//import "./assets/img/rigo-baby.jpg";
//import "./assets/img/4geeks.ico";

//window.onload = function() {
//write your code here
//console.log("Hello Rigo from the console!");
//};

//let pronoun = ["the", "our", "that"];
//let adj = ["great", "big", "small"];
//let noun = ["jogger", "racom", "feeorg"];
//let extensions = [".com", ".net", ".org"];
//for (let item of pronoun) {
//for (let word of adj) {
//for (let object of noun) {
//for (let variation of extensions) {
//console.log(`${item}${word}${object}${variation}`);
// }
//}
//}
//}

let pronoun = ["the", "our", "that"];
let adj = ["great", "big", "small"];
let noun = ["joggernet", "racomcom", "feeorg"];
let extensions = [".com", ".net", ".org"];

for (let item of pronoun) {
  for (let word of adj) {
    for (let object of noun) {
      let randomExtension =
        extensions[Math.floor(Math.random() * extensions.length)];
      console.log(`${item}${word}${object.slice(0, -3)}${randomExtension}`);
    }
  }
}
