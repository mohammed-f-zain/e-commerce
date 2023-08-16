import express from "express";
import cors from "cors";
import dotenv from "dotenv";


const app = express();
app.use(cors());
dotenv.config();
app.use(express.json());


const port = process.env.PORT;

  app.listen(port, () => {
    console.log(`App is listing on ${port}`);
  })
