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

