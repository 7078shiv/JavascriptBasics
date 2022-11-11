
// let is block scoped;
let myname='rohan';
{
    let myname='shivang';
    console.log(myname);
}
console.log(myname);

// we cannot declare same  variable 2 times
// inside same scope;
// let p=10;
// let p=15;
// console.log(p);

// we can do updation in same scope

// let p=10;
// p=15;
// console.log(p);

// console.log(d);// Cannot access 'd' before initialization
// let d='aman';

let d;
console.log(d);

