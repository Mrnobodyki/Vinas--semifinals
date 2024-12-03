// controllers/itemController.js
const items = require("./models/itemModel");
// Get all iTask
const getAllItems = async (req, res) => {
  try {
    res
      .status(200)
      .json({ message: "Task retrieved successfully", data: Task });
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
};
// Get a specific item by ID
const getTaskById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const task = Task.find((Task) => Task.id === id);
    if (Task) {
      res
        .status(200)
        .json({ message: "Task retrieved successfully", data: Task });
    } else {
      res.status(404).json({ message: "Task not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
};
// Add a new item
const addTask = async (req, res) => {
  try {
    const newTask = req.body;
    Task.push(newTask);
    res.status(201).json({ message: "Task added successfully", data: Task });
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
};
// Update an existing item
const updateTask = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const index = items.findIndex((Task) => Task.id === id);
    if (index !== -1) {
      Task[index] = { ...Task[index], ...req.body };
      res
        .status(200)
        .json({ message: "Task updated successfully", data: Task });
    } else {
      res.status(404).json({ message: "Task not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
};
// Delete an item
const deleteTask = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const index = Task.findIndex((Task) => Task.id === id);
    if (index !== -1) {
      Task.splice(index, 1);
      res
        .status(200)
        .json({ message: "Task deleted successfully", data: Task });
    } else {
      res.status(404).json({ message: "Task not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
};
module.exports = {
  getAllITask,
  getTaskById,
  addTask,
  updateTask,
  deleteTask,
};
