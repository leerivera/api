const express = require('express');

const app = express();

app.listen(3000, function(){
    console.log("we on 3000 you heard!")
})

app.get('/', (res, req) =>{
    res.send (console.log("we in here"))
})