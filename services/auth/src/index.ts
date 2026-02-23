import express, { Application, NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import { sequelize } from "./config/db";
import authRoutes from "./routes/auth.routes";

const app: Application = express();

dotenv.config();
app.use(express.json());

// middleware
app.use((req: Request, res: Response, next: NextFunction) => {
    if(req.headers['x-internal-secret'] === 'secret') {
      next();
    } else {
        res.status(403).json({auth: 'Not Authorized'});
    }
})

app.use(authRoutes);

async function startServer() {
  try {
    await sequelize.authenticate();
    await sequelize.sync({alter: true}); // auto create tables

    console.log("Database connected");

    app.listen(process.env.PORT, () => {
      console.log(`Auth Service running on port ${process.env.PORT}`);
    });

  } catch (error) {
    console.error("Unable to connect to database:", error);
  }
}

startServer();
