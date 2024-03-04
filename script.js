const express = require('express')
app = express();

const hello = function(req,res,next){
    console.log("nigger");
    next();


}
app.use(hello);


app.get("/",function(req,res){
    res.send("heldde ")
})

app.listen(3000);