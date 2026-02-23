
import { Router, Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../models/User";

const router = Router();
const JWT_SECRET = process.env.JWT_SECRET as string;

router.post("/signUp", async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      email,
      password: hashedPassword
    });

    res.status(201).json({
      message: "User registered",
      user: { id: user.id, email: user.email }
    });

  } catch (error) {
    res.status(400).json({ message: "User already exists" });
  }
});

router.post("/signIn", async (req: Request, res: Response) => {
  try {

    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user.id, role: user.role },
      JWT_SECRET,
      { expiresIn: "24h" }
    );

    res.json({ token });

  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

router.post("/validate", (req: Request, res: Response) => {
  
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ valid: false });
  }

  
  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET as string
    );

    return res.json({
      valid: true,
      user: decoded
    });

  } catch {    
    return res.status(401).json({ valid: false });
  }
})

export default router;
