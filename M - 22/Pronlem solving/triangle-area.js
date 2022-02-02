/*
We have three sides of a triangle .... 
have to discover the are ...
a, b, c are the sides... 

*/

function triangleArea(a, b, c) {
    const sumOfSides = a + b + c;
    let p = sumOfSides / 2;
    let pa = p - a;
    let pb = p - b;
    let pc = p - c;
    let area = p * pa * pb * pc;
    area = Math.sqrt(area);
    return parseFloat(area.toFixed(3));
}

const areaOfTriangle = triangleArea(19, 20, 10);
console.log('Area is', areaOfTriangle);