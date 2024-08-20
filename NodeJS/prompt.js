let prompt = require('prompt-sync')();
const age = prompt('Please enter Your Age : ');
if (age < 18){
    console.log("You Get a 20% Minor Discount");
}
else{
    console.log('You will get 30% Discount');
}