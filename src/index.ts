import express from 'express';
import { PrismaClient } from "@prisma/client";
const app = express();
const prismaClient = new PrismaClient();


app.get("/", (req, res) => {
    res.send({
        message : "Hello, World!"
    });
});

app.get("/users", async (req, res) => {
    const users = await prismaClient.user.findMany();
    res.json({
        data : users
    })
});

app.post("/users", async (req, res) => {
    const {name, email, password} = req.body;
    const user = await prismaClient.user.create({
        data : {
            name : name,
            email : email,
            password : password
        }
    });
    res.send({
        message : "User created successfully",
        user : { name, email, password }
    });
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});