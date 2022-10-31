
let arr = [5, 3, 8, 1, 2, 1, 3];

function filterRange(arr, a, b) {
   return arr.filter(item => item >= a && item <= b);
}

let filtered = filterRange(arr, 1, 4);

console.log(filtered);  // вовзаращет новый массив
console.log(arr);

alert(filtered);
alert(arr);