import express, { Application, Request, Response } from "express";

const app: Application = express();
const port: number = 4000;

app.get('/api', (req: Request, res: Response) => {
    res.json({ test: "response is okay" })
});

app.listen(port, () => {
    console.log(`Listening port ${port}`);
})