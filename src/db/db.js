import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.sizskqa.mongodb.net/${process.env.DB_NAME}`
    );
    console.log(
      "Data Base connected successfully",
      connectionInstance.connection.host
    );
  } catch (error) {
    console.log("Database connection error", error);
    process.exit(1);
  }
};
