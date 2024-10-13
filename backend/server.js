<<<<<<< HEAD
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from './config/db.js'
import itemRoute from './routes/item.route.js'

dotenv.config();
const app = express();

app.use("/api", itemRoute);
//midware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("API IS RUNNIG");
});
const PORT = process.env.PORT || 5000
connectDB().then(() => {

    app.listen(5000, () => {
        console.log(`Server is running on port ${PORT}.`);
    });
});

=======
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
>>>>>>> 2bc72ccbbdcd10a34d733283e647289925412c8a
