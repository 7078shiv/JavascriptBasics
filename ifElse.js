let speedlimit=50;
let carspeed=40;
if(carspeed<speedlimit){
    console.log("safe driving");
}
else{
    console.log("rush driving");
}

// if else chainning

const upperlimit=50;
const lowerlimit=20;
 carspeed=100;
if(carspeed>lowerlimit && carspeed<upperlimit){
    console.log("safe driving");
}
else if(carspeed<lowerlimit){
    console.log("increase car speed");
}
else if(carspeed>upperlimit) {
    console.log("decrease car speed");
}
else{
    console.log("all is safe");
}