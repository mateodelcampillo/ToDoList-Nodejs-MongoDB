import Task from "../models/Task";

export const renderTasks = async (req, res) => {
    const tasks = await Task.find().lean();
  
    res.render("index", { tasks });
  }

export const createTask = async (req, res) => {
    try {
      const task = Task(req.body);
  
      const taskSaved = await task.save();
  
      res.redirect("/");
    } catch (e) {
      console.log(e);
    }
  }

export const renderTaskEdit = async (req, res) => {
    try {
      const task = await Task.findById(req.params.id).lean();
      res.render("edit", { task });
    } catch (e) {
      console.log(e);
    }
  }

export const editTask = async (req, res) => {
    await Task.findByIdAndUpdate(req.params.id, req.body);
  
    res.redirect("/");
  }

export const deleteTask = async (req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.redirect("/");
  }

export const taskToggleDone = async (req, res) => {
    const task = await Task.findById(req.params.id);
  
    task.done = !task.done;
  
    await task.save();
  
    res.redirect("/");
  }