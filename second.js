let arr = [5, 2, 1, -10, 8,];

// let result = arr.sort((a, b) => b - a);

// alert(arr);

function compare(a, b) {
   if (a > b) {
      return -1;
   } else if (a < b) {
      return 1;
   } else {
      return 0;
   }
}
let result2 = arr.sort(compare);

alert(result2);


