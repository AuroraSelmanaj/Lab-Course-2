import express, { Application, Request, Response } from "express";

const app: Application = express();

app.get('/api', (req: Request, res: Response) => {
    res.json({ test: "response is okay" })
});

app.listen(4000, () => {
    console.log(`Listening port 4000`);
})