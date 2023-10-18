const express=require('express');
const App=express();
App.get('/',(req,res)=>
{
    res.status(200).send("Hello this is my Node file")
})
App.get("/name", (req, res) => {
  res.status(200).send("Hello World");
});
App.listen(3000,()=>
{
  console.log('Listening on port no: 3000');
});