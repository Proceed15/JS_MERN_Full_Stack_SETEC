import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("API is running!");
    //mongodb+srv://jlisboa1375:TvlGenln8buwDRiu@mern-course-db.bpktt.mongodb.net/?retryWrites=true&w=majority&appName=mern-course-db
})
//"dev": "node --watch backend/server.js" quando node: 20.1
//"dev": "nodemon backend/server.js" quando node: 17.9.1 
app.listen(5000, () => {
    console.log("Server is running on port 5000!")
})
