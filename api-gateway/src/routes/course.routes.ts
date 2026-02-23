import Router, { NextFunction, Request, Response } from "express";
import axios from "axios";

const courseRoutes = Router();

const secret = {
    headers: {
        'x-internal-secret': 'secret'
    }
}

courseRoutes.get('/course', async (req: Request, res: Response, next: NextFunction) => {
    // const response = await axios.post(`http://localhost:4001/signIn`, req.body, secret);
    const response = await axios.get(`http://localhost:4002/`, secret);

    res.send(response.data);
})


export default courseRoutes;