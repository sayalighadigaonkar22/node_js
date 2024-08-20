let fs = require('fs');
let os = require('os');

let user = os.userInfo();
console.log(user);
console.log(user.username);

fs.appendFile('greeting.txt', "Hey" + user.username + '!\n' ,() =>{
    console.log('File is Created')
});

console.log(os);
console.log(fs);