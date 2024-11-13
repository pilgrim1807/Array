const numbers = [10, 4, 100, -5, 54, 2];

// Через цикл for
function sumOfCubesFor(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += Math.pow(arr[i], 3);
  }
  return sum;
}

console.log( sumOfCubesFor(numbers));

//  Через цикл for...of
function sumOfCubesForOf(arr) {
  let sum = 0;
  for (const num of arr) {
    sum += Math.pow(num, 3);
  }
  return sum;
}

console.log( sumOfCubesFor(numbers));

//  Через метод forEach()
function sumOfCubesForEach(arr) {
  let sum = 0;
  arr.forEach(num => {
    sum += Math.pow(num, 3);
  });
  return sum;
}
console.log( sumOfCubesFor(numbers));

// Через метод reduce()
function sumOfCubesReduce(arr) {
  return arr.reduce((sum, num) => sum + Math.pow(num, 3), 0);
}
console.log( sumOfCubesFor(numbers));