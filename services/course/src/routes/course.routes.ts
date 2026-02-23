import { Router, Request, Response } from "express";
import { Course } from "../models/course";

const router = Router();

router.post("/", async (req: Request, res: Response) => {
  try {
    const user = await JSON.parse(req.headers["x-user-data"] as string);

    if(!user){
      return res.status(401).json({ message: "Unauthorized" });
    }

    const course = await Course.create({instructorId: user.id, ...req.body});
    
    res.status(201).json(course);
  } catch (error) {
    res.status(400).json({ message: "Error creating course" });
  }
});

router.get("/", async (_req: Request, res: Response) => {
  const courses = await Course.find();
  res.json(courses);
});


router.get("/:id", async (req: Request, res: Response) => {
  const course = await Course.findById(req.params.id);

  if (!course) {
    return res.status(404).json({ message: "Course not found" });
  }

  res.json(course);
});

router.put("/:id", async (req: Request, res: Response) => {
  const course = await Course.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  if (!course) {
    return res.status(404).json({ message: "Course not found" });
  }

  res.json(course);
});

router.delete("/:id", async (req: Request, res: Response) => {
  const course = await Course.findByIdAndDelete(req.params.id);

  if (!course) {
    return res.status(404).json({ message: "Course not found" });
  }

  res.json({ message: "Course deleted" });
});

export default router;