import express from "express";

const app = express();
const port = 6969;

//Crud Functions
app.get('/movies',()=>{

    res.json({msg:"Hello World1"})
})

app.post('/movies',()=>{

})

app.put('/movies/:id',()=>{

})

app.delete('/movies/:id',()=>{

})


app.listen(port,()=>{
    console.log(`the Server is running on port  http://localhost:${port}`)
})
