"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _Task = _interopRequireDefault(require("../models/Task"));

var _tasksControllers = require("../controllers/tasks.controllers.js");

var router = (0, _express.Router)();
router.get("/", _tasksControllers.renderTasks);
router.post("/tasks/add", _tasksControllers.createTask);
router.get("/tasks/:id/edit", _tasksControllers.renderTaskEdit);
router.post("/tasks/:id/edit", _tasksControllers.editTask);
router.get("/tasks/:id/delete", _tasksControllers.deleteTask);
router.get("/tasks/:id/toggleDone", _tasksControllers.taskToggleDone);
var _default = router;
exports["default"] = _default;