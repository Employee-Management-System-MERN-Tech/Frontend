import User from "./models/User.js";          // Add .js extension
import bcrypt from 'bcrypt';
import connectToDatabase from "./db/db.js";   // Add .js extension

const userRegister = async () => {

    await connectToDatabase();   // make sure to await the connection

    try {
        const hashPassword = await bcrypt.hash("admin", 10);

        const newUser = new User({
            name: "Admin",
            email: "admin@gmail.com",
            password: hashPassword,
            role: "admin"
        });

        await newUser.save();
        console.log("Admin user created successfully!");
    } catch (err) {
        console.log("Error creating admin user:", err);
    }

};

userRegister();
