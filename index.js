import dotenv from "dotenv";
import { app } from "./src/app.js";
import { connectDb } from "./src/db/db.js";

dotenv.config({
  path: "./.env",
});

connectDb()
  .then(() => {
    app.on("error", (error) => {
      console.log("Server Initialization error", error);
      throw error;
    });
    app.get("/", (req, res) => res.send("Adminto Dashboard server"));
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server running on port:${process.env.PORT || 5000}`);
    });
  })
  .catch((error) => {
    console.log("Database Server connection error", error);
  });
