const express = require('espress')
const PORT = 3000

const app = express()

app.get('/',(res, req)=>{
    res.send("Get")
})
app.listen(PORT, ()=>{
    console.log(`Server runing on port ${PORT}`);
})