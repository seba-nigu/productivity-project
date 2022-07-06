const dbOperation = require("../../database/dbOperation");

const getTasks = async (req, res) => {
  let data = await dbOperation.getTasks(req.body.email);
  let taskArray = [
    { title: "TODO", items: [] },
    { title: "In progress", items: [] },
    { title: "Done", items: [] },
  ];

  let categories = {
    TODO: 0,
    "In progress": 1,
    Done: 2,
  };

  data.recordset.forEach((obj) => {
    let cat = obj.categoryName;
    taskArray[categories[cat]].items.push({
      taskId: obj.taskId,
      text: obj.innerText,
      date: obj.date,
    });
  });
  res.status(200).json(taskArray);
  return taskArray;
};

const editTasks = async (req, res) => {
  let data = await dbOperation.modifyTasks(req.body.id, req.body.category);
  res.status(200);
  return data;
};

const postTask = async (req, res) => {
  let data = await dbOperation.postTask(
    req.body.email,
    req.body.category,
    req.body.text,
    req.body.date
  );
  res.status(200);
  return data;
};

module.exports = {
  getTasks,
  editTasks,
  postTask,
};
