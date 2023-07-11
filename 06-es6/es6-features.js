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
12. iterators (for..of)
13. classes
*/

// array destructuring
let nos = [3,1,4,2,5]
let [x, y] = nos

//rest operator (array)
let nos = [3,1,4,2,5]
let [x, y, ...z] = nos

//spread operator (array)
let nos = [3,1,4,2,5]
// let newNos = [ nos[0], nos[1], nos[2], nos[3], nos[4], 10, 20, 30 ]
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
// let newEmp = { id : emp.id, name : emp.name, city : emp.city, city : 'Washington', org : 'Salesforce' }
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

// 12. iterators (for..of)
let nos = [3,1,4,2,5]
for (let no of nos){
    console.log(no)
}

// NOT an ES6 features
// for..in
let emp = {
    id : 100,
    name : 'Magesh',
    city : 'Bangalore'
}
for (let key in emp){
    console.log(`${key} - ${emp[key]}`)
}

// 13. classes
class Employee {
    //class level attributes

    //SUPPOSED to be private
    #id = 0;

    //public attributes
    name = '';
    city = '';

    //static attribute
    static type = 'App.Employee'

    //static method
    static print(){
        console.log('Employee class')
    }

    //setter & getter accessors
    get id(){
        console.log('get id triggered')
        return this.#id
    }
    set id(id){
        console.log('set id triggered')
        if (id < 0) {
            throw new Error('id cannot be negative')
        }
        this.#id = id;
    }

    //constructor method
    constructor(id, name, city){
        this.id = id; //trigger "set id()"
        this.name = name;
        this.city = city;
    }

    //instance level methods
    display(){
        return `id : ${this.id} , name : ${this.name} , city : ${this.city}`;
    }
}

//inheritance
class FullTimeEmployee extends Employee {

    benefits = '';
    
    //constructor method
    constructor(id, name, city, benefits){
        super(id, name, city)
        this.benefits = benefits
    }

    //instance level methods
    display(){
        return `${super.display()} , benefits : ${this.benefits}`
    }
}