const dbOperation = require("../../database/dbOperation");

const getTasks = async (req, res) => {
  let data = await dbOperation.getTasks(req.body.email);
  let taskArray = [
    { title: "TODO", items: [] },
    { title: "In progress", items: [] },
    { title: "Done", items: [] },
  ];
  data.recordset.forEach((obj) => {
    let cat = obj.categoryName;
    if (cat === "TODO") {
      taskArray[0].items.push({
        taskId: obj.taskId,
        text: obj.innerText,
      });
    }
    if (cat === "In progress") {
      taskArray[1].items.push({
        taskId: obj.taskId,
        text: obj.innerText,
      });
    }
    if (cat === "Done") {
      taskArray[2].items.push({
        taskId: obj.taskId,
        text: obj.innerText,
      });
    }
  });
  res.status(200).json(taskArray);
  return taskArray;
};

const editTasks = async (req, res) => {
  let data = await dbOperation.modifyTasks(req.body.id, req.body.category);
  res.status(200);
  return data;
};

module.exports = {
  getTasks,
  editTasks,
};
