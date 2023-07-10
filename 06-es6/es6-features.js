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