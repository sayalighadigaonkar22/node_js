const express = require('express');
const app = express();

app.get('/' , function(req,res){
    res.send('Welcome to Our Hotel...How Can i help You? We have this List of Menu');
})

app.get('/Chicken' , (req , res) =>{
    res.send('Sure, I would love to serve chicken');
})

app.get('/mumbai',(req , res) =>{
    let customized ={
        name : 'Rava Idli',
        size : '10 cm diameter',
        is_sambhar : true,
        is_chutney : true
    }
    // res.send('Welcome to Mumbai - South Indian Hotel');
    res.send(customized);
})

app.listen(3000 , ()=>{
    console.log('Server Listerning on Port 3000');
})