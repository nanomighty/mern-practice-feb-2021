const express = require("express");
const Company = require("./Company");
const User = require("./User");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get( "/api/users/new/" , (request, response) => {
    console.log(request.url);
    response.json(new User());
});

app.get("/api/companies/new/" , (request, response) => {
    console.log(request.url);
    response.json(new Company() );
});

app.get("/api/user/company/" , (request, response) => {
    response.json([
        new User(),
        new Company()
        ]);
});

app.listen(8000, () => {
    console.log("You have successfully connected to port 8000")
})




