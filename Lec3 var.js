// var is function or global scoped;
// variable declared with var is only function scoped.
var myname='rohan';
// {
//     var myname='shivang';
//     console.log(myname);
// }
function myfunction(){
    var myname='shivang';
     console.log(myname);
 }
 myfunction();
console.log(myname);

// varibale redecleration using var keyword is allowed

var name="rohan";
var name="shivang";
console.log(name);


// updation using var is allowed
var name="rohan";
 name="ram";
console.log(name);

var catname;
console.log(catname);
catname='shivang';
console.log(catname);