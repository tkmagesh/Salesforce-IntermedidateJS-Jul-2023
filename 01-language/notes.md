# JS Language #

```
    1. Line Oriented Language
    2. Procedural Languages
    3. Object Based Languages
    4. Object Oriented Languages
    5. Functional Languages
```
## JS - Object Based + Functional ##

## Functional Language ##
- Functions are first class citizens (not just a programming constructs)
- Functions are data
    - functions can be created like objects
    - functions can have state
    - functions can have behaviors


### Creation ###
```
var obj = {}

var obj = new Object()
```

```
var fn = function(){
    /*...*/
}

var fn = new Function('console.log("fn invoked");')

var add = new Function('x', 'y', 'return x + y;')
```

### State ###
```
var obj = {}

obj['id'] = 100

console.log(obj.id)
```

```
function fn(){

}

fn['id'] = 100

console.log(fn.id)
```

### Behavior (methods) ###
```
var obj = {}
obj['whoAmI'] = function(){
    console.log('I am an object');
}
obj.whoAmI()
```

```
function fn(){

}
fn['whoAmI'] = function(){
    console.log('I am a function!');
}
fn.whoAmI()
```

### As Arguments ###

```
function fn(x){
    console.log('typeof x =', typeof x);
}

function fx(){
}

fn(fx)
```
### As Return Values ###

```
function getGreeter(){
    return function(){
        console.log('Hi there!');
    }
}

var greeter = getGreeter()

greeter()
```

# Invocation Context (this) #

- It does not matter **where** the function is OR **who** owns the function. 
- What matters is **how** the function is **invoked**.

## Function invocation patterns (6 ways) ##
- As a method of an object (obj)
    ```
        this -> obj
    ```
    - Example:
        ```
            var person = {
                name : 'Magesh'
            }
            
            function whoAmI(){
                console.log('I am ', this.name)
            }
            
            person['whoAmI'] = whoAmI
            
            person.whoAmI()
        ```
    - Example-2
        ```
            var person = {
                name : 'Magesh'
            }
            
            function greet(salutation, msg){
                console.log(salutation + this.name + ', ' + msg)
            }
            
            //Mr.Magesh, Have a nice day!
            //salutation -> 'Mr.'
            //msg -> 'Have a nice day!'
            //this.name -> person.name // this -> person

            person['greet'] = greet;
            person.greet('Mr.', 'Have a nice day!')
        ```
- As a function
    ```
        this -> global scope (window in the browser)
    ```
    - Example
        ```
            window.name = 'Chrome Browser'
            whoAmI()
        ```
- Using the "call" method of the function
    - Example-1
        ```
            var person = {
                name : 'Magesh'
            }
            
            function whoAmI(){
                console.log('I am ', this.name)
            }
            
            whoAmI.call(person)
        ```
    - Example-2
        ```
            var person = {
                name : 'Magesh'
            }
            
            function greet(salutation, msg){
                console.log(salutation + this.name + ', ' + msg)
            }
            
            greet.call(person, 'Mr.', 'Have a nice day!')
            
        ```

- Using the "apply" method of the function
    - Example
        ```
            var person = {
                name : 'Magesh'
            }
            
            function whoAmI(){
                console.log('I am ', this.name)
            }
            
            whoAmI.call(person)
        ```
    - Example-2
        ```
            var person = {
                name : 'Magesh'
            }
            
            function greet(salutation, msg){
                console.log(salutation + this.name + ', ' + msg)
            }
            
            greet.apply(person, ['Mr.', 'Have a nice day!'])
            
        ```