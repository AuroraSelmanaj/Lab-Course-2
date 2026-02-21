import axios from "axios";
import express, { Application, Request, Response } from "express";

const app: Application = express();
const port: number = 4000;

app.use(express.json());

app.get('/login', async (req: Request, res: Response)=>{  

    const response = await axios.get(
        `http://localhost:4001`, {
            headers: {
                'x-internal-secret': 'secret'
            }
        }
    );

    res.send(response.data);
})

app.listen(port, () => {
    console.log(`Listening Api Gateway port ${port}`);
})