import express from "express";
import dotenv from "dotenv";

dotenv.config();
const cors=require('cors');
const app = express();
app.use(cors());
const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => res.send("Hello from server!"));

app.listen(PORT, () => console.log(`⚡Server is running here  https://localhost:${PORT}`));
