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