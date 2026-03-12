import dotenv from "dotenv";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import { Admin } from "./models/Admin.js";

dotenv.config();

async function seedAdmin() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    const email = "admin@example.com";
    const plainPassword = "Admin12345";

    const existingAdmin = await Admin.findOne({ email });

    if (existingAdmin) {
      console.log("Admin already exists");
      process.exit(0);
    }

    const hashedPassword = await bcrypt.hash(plainPassword, 10);

    await Admin.create({
      email,
      password: hashedPassword,
      name: "Md Rayhan",
    });

    console.log("Admin created successfully");
    console.log("Email:", email);
    console.log("Password:", plainPassword);

    process.exit(0);
  } catch (error) {
    console.error("Failed to seed admin:", error.message);
    process.exit(1);
  }
}

seedAdmin();