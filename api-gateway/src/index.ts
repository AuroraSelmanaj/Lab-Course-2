import express, { Application } from "express";
import authRoutes from "./routes/auth.routes";
import courseRoutes from "./routes/course.routes";

const app: Application = express();
const port: number = 4000;

app.use(express.json());

app.use("/auth", authRoutes);
app.use(courseRoutes);

app.listen(port, () => {
    console.log(`Listening Api Gateway port ${port}`);
})