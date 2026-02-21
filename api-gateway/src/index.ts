import express, { Application } from "express";
import authRoutes from "./routes/auth.routes";

const app: Application = express();
const port: number = 4000;

app.use(express.json());

app.use(authRoutes);

app.listen(port, () => {
    console.log(`Listening Api Gateway port ${port}`);
})