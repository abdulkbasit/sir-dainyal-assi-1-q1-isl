function add(a: number, b: number): number {
  return a + b;
}

function sub (a: number, b: number): number {
  return a - b;
}

function mul (a: number, b: number): number {
  return a * b;
}

function division(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }

  return a / b;
}

console.log(add(1,5) );
console.log(sub(1,7) ) ;
console.log(mul  (1,8) ) ;
console.log(division (6,5) ) ;

