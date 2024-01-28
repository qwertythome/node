const express = require('express')
const PORT = 3000

const app = express()

app.get('/',(req, res)=>{
    res.send("Get")
})
app.listen(PORT, ()=>{
    console.log(`Server runing on port ${PORT}`);
})