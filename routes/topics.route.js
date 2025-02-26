const express = require("express");
const router = express.Router();
const topicsController = require("../controllers/topics.controller");

router.post("/createTopic", topicsController.createUser);
router.get("/getAllTopics", topicsController.getAllUsers);
router.get("/getTopicById/:id", topicsController.getUserById);
router.put("/updateTopic/:id", topicsController.updateUser);
router.delete("/deleteTopic/:id", topicsController.deleteUser);
module.exports = router;
