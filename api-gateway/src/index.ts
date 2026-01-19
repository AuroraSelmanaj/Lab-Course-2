import axios from "axios";
import express, { Application, Request, Response } from "express";
import { log } from "node:console";

const app: Application = express();
const port: number = 4000;

app.get('/api', async (req: Request, res: Response) => {
    const response = await axios.get(
        `http://localhost:4001/user/`
    );

    res.json(response.data);
});

app.listen(port, () => {
    console.log(`Listening Api Gateway port ${port}`);
})