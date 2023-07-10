/* 
ES6 features
==================================
1. let
2. const
3. array destructuring
4. rest operator (array)
5. spread operator (array)
6. object destructuring
7. rest operator (object)
8. spread operator (object)
9. default arguments
10. arrow functions
11. template strings
*/

// array destructuring
let nos = [3,1,4,2,5]
let [x, y] = nos

//rest operator (array)
let nos = [3,1,4,2,5]
let [x, y, ...z] = nos

//spread operator (array)
let nos = [3,1,4,2,5]
let newNos = [ ...nos, 10, 20, 30 ]

//6. object destructuring
var emp = {
    id : 100,
    name : 'Magesh',
    city : 'Bangalore'
}
let {id, city} = emp
let {id :x, city :y} = emp

//7. rest operator (object)
let emp = {
    id : 100,
    name : 'Magesh',
    city : 'Bangalore'
}
let { id : x, ...z } = emp

//8. spread operator (object)
let emp = {
    id : 100,
    name : 'Magesh',
    city : 'Bangalore'
}
let newEmp = { ...emp, city : 'Washington', org : 'Salesforce' } 

// 9. default arguments
function add(x = 10,y = 20){
    return x + y
}

add()

add(100)

add(undefined, 200)

add(100,200)

// 10. arrow functions
/*
//function statement
function add(x,y){
    return x + y;
}

//function expression
let add = function(x,y){
    return x + y;
}

//arrow function
let add = (x,y) => {
    return x + y;
}
*/
let add = (x,y) => x + y;

// 11. template strings
let x = 100, y = 200
//sum of 100 and 200 is 300
let s1 = 'sum of ' + x + ' and ' + y + ' is ' + (x+y)
let s2 = `sum of ${x} and ${y} is ${x+y}`