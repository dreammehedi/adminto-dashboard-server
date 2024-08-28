import dotenv from "dotenv";
import app from "./src/app.js";
import { connectDb } from "./src/db/db.js";

dotenv.config({
  path: "./.env",
});

connectDb()
  .then(() => {
    app.on("error", (error) => {
      console.log("Server Initialization Error!", error);
      throw error;
    });
    app.get("/", (req, res) => res.send("Adminto Dashboard Server."));

    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server Running On PORT:${process.env.PORT || 5000}`);
    });
  })
  .catch((error) => {
    console.log("Database Server Connection Error:", error);
  });
