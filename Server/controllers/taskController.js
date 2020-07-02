const db = require("../models/listItemModel");

const taskController = {};

taskController.getTasks = (req, res, next) => {
  const queryAll = 'SELECT * FROM tasklist ';
  db.query(queryAll)
    .then((result) => {
      res.locals.tasks = result.rows;
      return next();
    })
    .catch(error => next({ log: error }));
}

taskController.addTask = (req, res, next) => {
  const task = req.body.task;
  console.log(task)
  const queryAdd =  `
    INSERT INTO tasklist(task)
    VALUES ($1);`
  db.query(queryAdd, [task])
    .then((result) => next())
    .catch(error => next({ log: error }))
}

taskController.deleteAll = (req, res, next) => {
  const queryDeleteAll = 'DELETE FROM tasklist ';
  db.query(queryDeleteAll)
    .then(() => next())
    .catch(error => next({ log: error }))
}

taskController.deleteOne =  (req, res, next) => {
  // const queryDelete = `
  //   DELETE FROM tasklist
  //   WHERE task = `;
  // db.query(queryDelete)
  //   .then(() => next())
  //   .catch(error => next({ log: error }))
}

module.exports = taskController;