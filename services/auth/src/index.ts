import express, { Application, NextFunction, Request, response, Response } from "express";

const app: Application = express();
const port: number = 4001;

app.use(express.json());

// middleware
app.use((req: Request, res: Response, next: NextFunction) => {
    if(req.headers['x-internal-secret'] === 'secret') {
        next();
    } else {
        res.status(403).json({auth: 'Not Authorized'});
    }
})

app.get('/', async (req: Request, res: Response, next: NextFunction)=>{
    res.json({auth: true});
})

app.listen(port, () => {
    console.log(`Listening Api Gateway port ${port}`);
})

