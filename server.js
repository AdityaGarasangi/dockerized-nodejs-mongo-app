const express = require("express");
const app = express();
const path = require("path");
const { MongoClient } = require("mongodb");

const PORT = 5050;
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const MONGO_URL = "mongodb://admin:qwerty@mongo:27017";
const client = new MongoClient(MONGO_URL);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// GET all users
app.get("/getUsers", async (req, res) => {
    try {
        await client.connect();
        console.log('Connected successfully to server');

        const db = client.db("dockerApp-db");
        const data = await db.collection('users').find({}).toArray();

        res.send(data);
    } catch (err) {
        res.status(500).send("Error fetching users.");
    } finally {
        await client.close();
    }
});

// POST new user
app.post("/addUser", async (req, res) => {
    const userObj = req.body;
    try {
        await client.connect();
        console.log('Connected successfully to server');

        const db = client.db("dockerApp-db");
        const data = await db.collection('users').insertOne(userObj);
        console.log(data);
        console.log("Data inserted in DB");

        res.status(200).send("User added successfully.");
    } catch (err) {
        res.status(500).send("Error adding user.");
    } finally {
        await client.close();
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
