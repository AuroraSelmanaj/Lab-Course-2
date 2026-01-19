import express, { Application, Request, Response } from "express";

const app: Application = express();
const port: number = 4001;

app.get('/user', (req: Request, res: Response) => {
    res.json({ user: "test user response" })
});

app.listen(port, () => {
    console.log(`Listening User port ${port}`);
})