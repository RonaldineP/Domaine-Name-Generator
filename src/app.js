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

//BONUS 1

//let pronoun = ["the", "our", "that"];
//let adj = ["great", "big", "small"];
//let noun = ["joggernet", "racomcom", "feeorg"];
//let extensions = [".com", ".net", ".org"];

//for (let item of pronoun) {
//for (let word of adj) {
//for (let object of noun) {
//let randomExtension =
//extensions[Math.floor(Math.random() * extensions.length)];
//console.log(`${item}${word}${object.slice(0, -3)}${randomExtension}`);
//}
//}
//}

//BONUS 2

let pronoun = ["the", "our", "that"];
let adj = ["great", "big", "small"];
let noun = ["joggernet", "racomcom", "feeorg"];
let extensions = [".com", ".net", ".org"];

for (let item of pronoun) {
  for (let word of adj) {
    for (let object of noun) {
      let randomExtension =
        extensions[Math.floor(Math.random() * extensions.length)];
      let modifiedObject = object.replace(/.{3}$/, randomExtension); // replace last 3 characters with randomExtension
      console.log(`${item}${word}${modifiedObject}`);
    }
  }
}
