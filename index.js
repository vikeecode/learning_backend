require('dotenv').config()
const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
    res.send("Hello World!");
})

app.get ('/about', (req, res) =>{
    res.send("<h1>I am a vikas pandey</h1>");
})

app.get("/login", (req, res) =>{
    res.send("please login the page")
})
app.listen(process.env.PORT || port, () => {
    console.log(`Server is running on port ${port}`);
});