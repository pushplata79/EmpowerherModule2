// routes/user.js
import express from "express";

const router = express.Router();

// In-memory user array (could also import from a db file)
let users = [
  { id: 1, name: "Amit" },
  { id: 2, name: "Rahul" }
];

// GET all users
router.get("/", (req, res) => res.json(users));

// GET single user
router.get("/:id", (req, res) => {
  const user = users.find(u => u.id === Number(req.params.id));
  res.json(user || { message: "User not found" });
});

// POST user
router.post("/", (req, res) => {
  const { id, name } = req.body;

  // Optional: check for duplicate id
  if (users.find(u => u.id === id)) {
    return res.status(400).json({ message: "ID already exists" });
  }

  users.push({ id, name });
  res.json({ message: "User added", users });
});

// PUT user
router.put("/:id", (req, res) => {
  const user = users.find(u => u.id === Number(req.params.id));
  if (!user) return res.status(404).json({ message: "User not found" });

  user.name = req.body.name ?? user.name;
  res.json({ message: "User updated", users });
});

// DELETE user
router.delete("/:id", (req, res) => {
  users = users.filter(u => u.id !== Number(req.params.id));
  res.json({ message: "User deleted", users });
});

export default router;
