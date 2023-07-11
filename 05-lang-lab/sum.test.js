//ES5 (using arguments, call, apply etc)
/* 
function sum(){
    function parseArg(n){
        if (Array.isArray(n)) return sum.apply(this, n)
        if (typeof n === 'function') return parseArg(n())
        return isNaN(n) ? 0 : parseInt(n);
    }
    return arguments.length <= 1 ? parseArg(arguments[0]) : parseArg(arguments[0]) + sum([].slice.call(arguments, 1))
} 
*/

//ES6 (using rest operator, spread operator)
function sum(...args){
    function parseArg(n){
        if (Array.isArray(n)) return sum(...n)
        if (typeof n === 'function') return parseArg(n())
        return isNaN(n) ? 0 : parseInt(n);
    }
    return args.length <= 1 ? parseArg(args[0]) : parseArg(args[0]) + sum(args.slice(1))
}

test('sum(10,20) => 30', () => {
    let expectedResult = 30;
    let actualResult = sum(10,20);
    expect(actualResult).toBe(expectedResult);
    //expect(sum(10,20)).toBe(30)
})

test('sum("10", 20) // => 30', () => {
    expect(sum("10", 20)).toBe(30)
})

test('sum("abc", 20) // => 20', () => {
    expect(sum("abc", 20)).toBe(20)
})

test('sum(10) // => 10', () => {
    expect(sum(10)).toBe(10)
})

test('sum() // => 0', () => {
    expect(sum()).toBe(0)
})

test('sum(10,20,30,40,50) // => 150', () => {
    expect(sum(10,20,30,40,50)).toBe(150)
})

test('sum([10,20],[30,40,50]) // => 150', () => {
    expect(sum([10,20],[30,40,50])).toBe(150)
})

test('sum([10,20],[30,"40",50]) // => 150', () => {
    expect(sum([10,20],[30,"40",50])).toBe(150);
})

test('sum([10,20],[30,"40","abc"]) // => 100', () => {
    expect(sum([10,20],[30,"40","abc"])).toBe(100);
})

test('sum([10,20],[30,["40","abc"]]) // => 100', () => {
    expect(sum([10,20],[30,["40","abc"]])).toBe(100);
})

test('sum(function(){ return 10; }, function(){ return 20;}) // => 30', () => {
    expect(sum(function(){ return 10; }, function(){ return 20;})).toBe(30);
})

test('sum(function(){ return [10,20];}, function() {return [30,["40","abc"]];}) // => 100', () => {
    expect(sum(function(){ return [10,20];}, function() {return [30,["40","abc"]];})).toBe(100);
})

test('sum([function(){ return [10,20];}, function() {return [30,["40","abc"]];}]) // => 100', () => {
    expect(sum([function(){ return [10,20];}, function() {return [30,["40","abc"]];}])).toBe(100);
})