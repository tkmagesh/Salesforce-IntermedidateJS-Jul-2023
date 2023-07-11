function sum(x, y){
    return x + y;
}

test('sum(10,20) => 30', () => {
    let expectedResult = 30;
    let actualResult = sum(10,20);
    expect(actualResult).toBe(expectedResult);
    //expect(sum(10,20)).toBe(30)
})

test('sum(10) => 10', () => {
    expect(sum(10)).toBe(10);
})