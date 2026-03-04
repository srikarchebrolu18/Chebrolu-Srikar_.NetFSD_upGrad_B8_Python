let arr = [10, 20, 30, 40, 50, 60];

arr.push(70);
console.log("Pushed 70 to array :"+arr);

//find index of element 50
let index = arr.indexOf(50);
console.log("Index of 50 is: " + index);

//insert 25 at index 2
arr.splice(2, 0, 25);
console.log("inserting 25 at index 2: " + arr);

//remove element at index 2
arr.splice(2, 1);  
console.log("removing element at index 2: " + arr);

//remove element 40
let result = arr.filter(num => num !== 40);
console.log("After removing 40: " + result);

//find all elements greater than 30
let greater = arr.filter(num => num > 30);
console.log("Elements greater than 30: " + greater);

//update element 40 to 400
let updated = arr.map(num => {
    if (num === 40) {
        return 400;
    }
    return num;
});
console.log("Updated array: " + updated);

//calculate sum of all elements
let sum = updated.reduce((total, num) => {
    return total + num;
}, 0);
console.log("Sum of all elements in : " + sum);

//remove duplicates from array

let arr1 = [10, 20, 20, 30, 30, 40, 50, 50];
let nums = [];
for (let i = 0; i < arr1.length; i++) {
    if (!nums.includes(arr1[i])) {
        nums.push(arr1[i]);
    }
}
console.log("Array without duplicates: " + nums);

let arr3 = [10, 20, 20, 30, 30, 40, 50, 50];
let nums2 = [...new Set(arr3)];
console.log("Array without duplicates using Set: " + nums2);

let arr2 = [10, 20, 20, 30, 30, 40, 50, 50];
let nums1 = arr2.reduce((n, value) => {
    if (!n.includes(value)) {
        n.push(value);
    }
    return n;
}, []);
console.log("Array without duplicates using reduce: " + nums1);