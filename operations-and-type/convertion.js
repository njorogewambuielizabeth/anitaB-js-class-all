let a = "10";
// implicit coersion
let b = a *10;
console.log(b);
console.log(typeof(b));
console.log(a * 1);
console.log(typeof(+a));

// explicit
//use js method
let c = Number(a);
console.log("c",typeof(c));

let d = String(c);
console.log("d",typeof(d));

let e = new Array(d);
console.log(e);

let f = "45";
console.log(parseFloat(f));
