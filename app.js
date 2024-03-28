const express = require('express');

const app = express();

const PORT = 4100;

app.get("/", (request, response, next)=> {
    response.send("Welcome to the cafe's home page!");
});

app.get("/menu", (request, response, next)=> {
    response.send("Welcome to the cafe's menu!");
});

app.get("/katz", (request, response, next)=> {
    response.send("Welcome to the cafe's cat wall of fame!");
});

app.get("/admin", (request, response, next)=> {
    response.send("Hello, this page is for admins only!");
});

app.listen(PORT, ()=>{
    console.log(`Welcome to the Cool CodeSquader Cafe! Now loading server... on ${PORT}`);
    console.log(`http://localhost:${PORT}`);
});