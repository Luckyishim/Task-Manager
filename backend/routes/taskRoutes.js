const express = require("express")
const { protect, adminOnly } = require("../middlewares/authMiddleware");
const { getDashboardData, getUserDashboardData, getTasks, getTasksByID, CreateTask, deleteTask, updateTask, updateTaskStatus, updatedTaskCheckList } = require("../controllers/taskController");

const router = express.Router()

//Task Management Routes
router.get("/dashboard-data", protect, getDashboardData);
router.get("/user-dashbaord-data", protect, getUserDashboardData);
router.get("/", protect, getTasks); //Get all tasks(Admin:all, User:assigned)
router.get("/:id", protect, getTasksByID); //Get task by ID
router.post("/", protect, adminOnly, CreateTask); //Create a task(Admin only
router.put("/:id", protect, updateTask); //Update task details
router.delete("/:id", protect, adminOnly, deleteTask); //Dlete a task (Admin only)
router.put("/:id/status", protect, updateTaskStatus); //Update task status
router.put("/:id/todo", protect, updatedTaskCheckList); //Update task checklist

module.exports = router;