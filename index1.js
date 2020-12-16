let str_input = prompt('Enter a string');

let arr = str_input.split("");
let newStr = "";
for (i = arr.length - 1; i >= 0; i--) {
    newStr += arr[i];
}

console.log(newStr);



























