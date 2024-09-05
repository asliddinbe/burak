import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_URL as string, {}) 
  .then((data) => {console.log("MongoDB connection succees");
    const PORT = process.env.PORT ?? 4002;
  })
  .catch((err) => console.log("ERROR on connection <MongoDB", err));