// routes/itemRoutes.js
const express = require("express");
const router = express.Router();
const {
  getAllTask,
  gettaskById,
  addTask,
  updatTask,
  deletTask,
} = require("./controllers/taskController");

// Route definitions
router.get("/", getAllTask);
router.get("/:id", getTaskById);
router.post("/", addTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

module.exports = router;