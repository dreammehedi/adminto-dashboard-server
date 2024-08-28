import dotenv from "dotenv";
import app from "./src/app.js";
import { connectDb } from "./src/db/db.js";

// Load environment variables from .env file
dotenv.config({
  path: "./.env",
});

// Connect to the database and start the server
connectDb()
  .then(() => {
    console.log("Database connection successful!");

    // Start the server
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server Running On PORT: ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Database Server Connection Error:", error);
    process.exit(1); // Exit the process with an error code
  });
