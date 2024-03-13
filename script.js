// Crate an array of integrs
const arr = Array.from({ length: 10 }, (_, i) => i + 1); // 1-10
// slice a specific range and store it into new array
const slicedArray = arr.slice(2, 5); // 1-10
// Remove Element From Array By Using splice and store into new array
const removeElement = [];
for (let i = 2; i < 5; i++) {
    removeElement.push(arr.splice(2, 1)[0]);
} // 3,4,5 removed arr = 1,2,6,7,8,9,10
// shift the first element of the array and store it into new variable;
const firstElemet = arr.shift(); // 2,3,6,7,8,9,10
// add the element in the beginning of the array;
arr.unshift(0); // 0,2,6,7,8,9,10
// add the element in the end of the array;
arr.push(11); // 0,2,6,7,8,9,10,11
// use pop to remove element from array and store it into variable
const lastElement = arr.pop(); // 0,2,6,7,8,9,10
// move element element from the array to new array using slice method
const movedElement = arr.slice(2, 5); // moved 6,7,8 arr = same as above
// Remove Element From Array By Using splice and store into new array
const removeElement2 = [];
for (let i = 2; i < 5; i++) {
    removeElement2.push(arr.splice(2, 1)[0]);
} // removed 6,7,8 arr = 0,2,9,10
// shift elements from the array one by one and store into variables;
const shiftElements = [];
for (let i = 0; i < arr.length; i++) {
    shiftElements.push(arr.shift());
} // arr = [9,10]
// const shiftElements = [];
// for (let i = 0; i < 5; i++) {
//     shiftElements.push(arr.shift());
// } arr = []

// add multiple element at the end of the array;
arr.push(12, 13, 14);