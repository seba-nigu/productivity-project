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
    if (cat === "Done ") {
      taskArray[2].items.push({
        taskId: obj.taskId,
        text: obj.innerText,
      });
    }
  });
  res.status(200).json(taskArray);
  console.log(taskArray);
  return taskArray;
};

module.exports = {
  getTasks,
};
