const express = require("express");
const path = require("path");
const fs = require("fs");
const taskController = require("./controllers/taskController.js");
const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, "../Client/")));

app.get("/", (req, res) => {
  return res.status(200).sendFile(path.join(_dirname, "../Client/index.html"));
});

app.get("/task", taskController.getTasks, (req, res) => {
  return res.status(200).json({ tasks: res.locals.tasks });
});

app.post("/task", taskController.addTask, (req, res) => {
  return res.status(200).end();
});

app.delete("/deleteAll", taskController.deleteAll, (req, res) => {
  return res.status(200).end();
});

app.listen(3000, () => {
  console.log("Yo this port 3000, in the hizzouse");
});
