const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('hello how are you i am fine');
});

app.listen(3000 , '0,0,0,0' , ()=>{
    console.log('server started');
})