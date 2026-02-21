import Router, { Request, Response } from "express";
import axios from "axios";

const authRoutes = Router();

const secret = {
    headers: {
        'x-internal-secret': 'secret'
    }
}

authRoutes.post('/signIn', async (req: Request, res: Response) => {
    const response = await axios.post(`http://localhost:4001/signIn`, req.body, secret);
    res.send(response.data);
})

authRoutes.post('/signUp', async (req: Request, res: Response) => {
    const response = await axios.post(`http://localhost:4001/signUp`, req.body,secret);
    res.send(response.data);
})

export default authRoutes;