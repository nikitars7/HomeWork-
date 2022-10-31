let arr = ['HTML', 'JavaScript', 'CSS'];

function copySorted(arr) {
   let copy = arr.concat();
   let result = copy.sort();
   return result;
}

let sorted = copySorted(arr);

console.log(sorted);
console.log(arr);

alert(sorted);

alert(arr);