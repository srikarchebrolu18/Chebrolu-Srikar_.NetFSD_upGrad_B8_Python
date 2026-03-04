
let arr = [100, 200, 300, 400];
 arr.push(500);
 arr.forEach(element => console.log(element));
 arr.pop();
 console.log(arr);

//Functions
function person(name)
{
    console.log("Hello " + name);
}

person("Srikar");


function add(a,b)
{
    return a+b;
}

console.log(add(4,8));

//Arrow Functions

const printname = (name) => console.log(name);
printname("Jai Shree Ram");

const multipy = (a,b) => a*b;
console.log(multipy(5,6));

//Spread Operator

let arr1 = [1, 2];
let arr2 = [...arr1, 3, 4];

console.log(arr2);

//Rest Operator

function test(a, b, ...rest) {
    console.log(rest);
}

test(10, 20, 30, 40, 50);
//Step-by-step:
a = 10

b = 20

//...rest collects remaining values 30, 40, 50

//map function

let marks1 = [50, 60, 70];

let updated = marks1.map(m => m + 10);

console.log(updated);

//filter function

let marks2 = [40, 75, 90, 30];

let passed = marks2.filter(m => m > 50);

console.log(passed);


let signal = "green";

switch(signal) {

    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Get Ready");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("Invalid signal");

}

let price = "150";
let num = Number(price);
console.log(typeof num);
console.log(typeof price);

function demoScope() {
  if (true) {
    var x = 25;
    let y = 20;
    console.log(x+y); 

  }
    console.log(x); 
}
demoScope();

var firstname1 = "srikar";

function demo() {
    var firstname2 = "jai shree ram";
    console.log(firstname1);
    console.log(firstname2);
}
demo();