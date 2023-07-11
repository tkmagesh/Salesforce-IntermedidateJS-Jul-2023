# Language Lab #

## Application setup ##
- create a folder
- cd into the folder
- run the following commands
- > npm init -y
- > npm install jest --save-dev
- modify the "test" script in the "package.json" file to "jest --watch" and run the following command
- > npm test

## Test Cases ##
- sum(10,20)  // => 30
- sum("10", 20) // => 30
- sum("abc", 20) // => 20
- sum(10) // => 10
- sum() // => 0
- sum(10,20,30,40,50) // => 150
- sum([10,20],[30,40,50]) // => 150
- sum([10,20],[30,"40",50]) // => 150
- sum([10,20],[30,"40","abc"]) // => 100
- sum([10,20],[30,["40","abc"]]) // => 100
- sum(function(){ return 10; }, function(){ return 20;}) // => 30
- sum(function(){ return [10,20];}, function() {return [30,["40","abc"]];}) // => 100
- sum([function(){ return [10,20];}, function() {return [30,["40","abc"]];}]) // => 30

```
// HINTS
// Use "arguments" to access the arguments in a variadic function 
function list(){
    for (let idx = 0; idx < arguments.length; idx++)
        console.log(`arguments[${idx}] : ${arguments[idx]}`)
}

```


- use **typeof** to check if the value is a number, string, boolean, object, function & undefined
- use **Array.isArray()** to check if the value is an array
- use **isNaN()** to check if the value can be converted to a number
