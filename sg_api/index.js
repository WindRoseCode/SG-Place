import express from "express";
import cors from "cors";
import clientRoutes from "./routes/client.js"

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", clientRoutes)
app.listen(8800);