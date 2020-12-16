let input = prompt('Enter what ever u want');

let arr = input.split(" ");
let newStr = "";
for (i = 0; i < arr.length; i++) {
    let upperLetter = arr[i].split("");
    upperLetter[0] = upperLetter[0].toUpperCase();
    for(j=0;j<upperLetter.length; j++) {
        newStr += upperLetter[j];
    }
    newStr += " ";
}
console.log(newStr);



















