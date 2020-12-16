let input = prompt('Enter something');
let arr = input.split(",");

for (i = 0; i < arr.length - 1; i++) {
    for (j = i + 1; j < arr.length; j++) {
        if(arr[i] == arr[j]) {
            arr.splice(j,1);
        }
    }
}
console.log(arr);

