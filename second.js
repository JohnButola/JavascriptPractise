// let arr = [20, 30, 40, 50, [80, "Amit"]];

// console.log(arr[4][1]);

// push 
// its used for adding the more array at the end 

let arr = [20, 30, "Amit", 30, 40];
let result = arr.push(50, 60, 70, 80);
console.log(result);



//Pop
// its using for remove the last Element

let arr2 = [20, 30, "Amit", 30, 40];
let result2 = arr2.pop();
console.log(result2);

//unshift
// add the element from the start
let arr4 = [5, 15, 25];
let result3 = arr4.unshift(-5, -15);
console.log(result3);
console.log(arr4);

//shift
// remove the first element
let arr5 = [15, 25, 35, 45];
let result5 = arr5.shift();
console.log(result5);
console.log(arr5);


//Splice
// its using for remove/add the elements which you want to anywhere start/end/middle
// splice(2, 2) - in this first use for indexing where you want to start second for how many elements you wanna delete

let arr6 = [15, 25, 35, 45];
let result6 = arr6.splice(2, 2)
console.log(result6);
console.log(arr6);

// splice(2, 2, 55, 65) - in this first use for indexing where you want to start second for how many elements you wanna delete after the element they will be add on the position where you deleted the elements
let result7 = arr6.splice(2, 2, 55, 65);
console.log(arr6);


//Slice
// its used only for showing the data between
let arr7 = [15, 25, 35, 45];
let result8 = arr7.slice(1, 3)
console.log(result6);

//Object method

let obj = {
    name: "Amit",
    age: "30"
}

console.log(obj.name);
obj.name = "john";
// delete property
delete obj.age
// Add Property
obj.address = "Jai Vihar";
console.log(obj);