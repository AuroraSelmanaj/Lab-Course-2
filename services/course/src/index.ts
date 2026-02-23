import express, { Application, NextFunction, Request, Response } from "express";
import dotenv from "dotenv";

const app: Application = express();

dotenv.config();
app.use(express.json());

// middleware
app.use((req: Request, res: Response, next: NextFunction) => {
    if (req.headers['x-internal-secret'] === 'secret') {
        next();
    } else {
        res.status(403).json({ auth: 'Not Authorized' });
    }
})

app.get('/', (req: Request, res: Response) => {
    console.log("po hin course");
    
    res.json({course: 'course response'})
})

async function startServer() {
    try {

        console.log("Database connected");

        app.listen(process.env.PORT, () => {
            console.log(`Course Service running on port ${process.env.PORT}`);
        });

    } catch (error) {
        console.error("Unable to connect to database:", error);
    }
}

startServer();