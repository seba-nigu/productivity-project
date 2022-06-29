const bcrypt = require("bcrypt");
const dbOperation = require("../../database/dbOperation");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  const { email, username, password } = req.body;
  if (!email || !username || !password) {
    res.status(400).json({ message: "Please add all fields" });
  } else {
    // check if email exists
    let data = await dbOperation.getLogin(req.body.email);
    if (data.recordset[0]) {
      res.status(400).json({ message: "Email already exists" });
    } else {
      bcrypt.hash(req.body.password, 10, async function (err, hash) {
        await dbOperation.createRegister({
          email: req.body.email,
          username: req.body.username,
          password: hash,
        });
      });
      res.status(200).json({ message: "Registered successfully" });
    }
  }
};

const loginUser = async (req, res) => {
  let data = await dbOperation.getLogin(req.body.email);
  if (!data.recordset[0]) {
    res.status(400).json({ message: "Email or Password incorrect!" });
  } else {
    bcrypt.compare(
      req.body.password,
      data.recordset[0].password,
      function (err, resp) {
        if (err) {
          console.log(err);
        }
        if (resp) {
          console.log("Match");
          let returnedData = {
            id: data.recordset[0].id,
            username: data.recordset[0].username,
            email: data.recordset[0].email,
            token: generateToken(data.recordset[0].id),
          };
          res.json(returnedData);
          console.log(returnedData);
          return returnedData;
        } else {
          console.log("No match");
          res.status(400).json({ message: "Email or Password incorrect!" });
        }
      }
    );
  }
};

const getUserData = async (req, res) => {
  res.status(200).json({
    id: req.user.recordset[0].id,
    username: req.user.recordset[0].username,
    email: req.user.recordset[0].email,
  });
};

const generateToken = (id) => {
  return jwt.sign({ id }, "mysecretkey", {
    expiresIn: "30d",
  });
};

module.exports = {
  registerUser,
  loginUser,
  getUserData,
};
