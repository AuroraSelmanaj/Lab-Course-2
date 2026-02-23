import Router, { Request, Response } from "express";
import axios from "axios";

const courseRoutes = Router();

const secret = {
    headers: {
        'x-internal-secret': 'secret'
    }
}

courseRoutes.get('/course', async (req: Request, res: Response) => {
    const response = await axios.get(`http://localhost:4002/`, secret);
    res.send(response.data);
})

courseRoutes.delete('/course/:id', async (req: Request, res: Response) => {
    const id = req.params.id;

    const token = req.headers.authorization;

    const validation = await axios.post(
        "http://localhost:4001/validate",
        {},
        {
            headers: { Authorization: token, ...secret.headers }
        }
    );

    
    const response = await axios.delete(`http://localhost:4002/${id}`, {
        headers: {
            "x-user-data": JSON.stringify(validation.data.user),
            ...secret.headers
        }
    });
    res.send(response.data);
})

courseRoutes.post('/course/create', async (req: Request, res: Response) => {

    try {
        const token = req.headers.authorization;

        const validation = await axios.post(
            "http://localhost:4001/validate",
            {},
            {
                headers: { Authorization: token, ...secret.headers }
            }
        );

        const response = await axios.post(
            "http://localhost:4002/",
            req.body,
            {
                headers: {
                    "x-user-data": JSON.stringify(validation.data.user),
                    ...secret.headers
                }
            }
        );

        res.json(response.data);

    } catch (error: any) {
        res.status(401).json({ message: "Unauthorized" });
    }
})


export default courseRoutes;