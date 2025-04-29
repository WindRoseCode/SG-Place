import express from "express";
import cors from "cors";
import userRoutes from "./routes/users.js"

const app = express();

app.use(express.jason());
app.use(cors());

app.use("/", userRoutes)
app.listen(8800);4