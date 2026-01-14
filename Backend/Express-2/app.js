// app.js
import express from "express";
import abc from "./userRoutes/user.js";

const app = express(); //
app.use(express.json());

// Use the router
app.use("/user", abc);


app.listen(3000, () => console.log("Server running on http://localhost:3000"));
