const config = require("./dbConfig");
const sql = require("mssql");

const createRegister = async (Login) => {
  try {
    let pool = await sql.connect(config);
    let data = await pool
      .request()
      .query(
        `INSERT INTO [user] VALUES('${Login.username}', '${Login.email}', '${Login.password}');`
      );
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getLogin = async (email) => {
  try {
    let pool = await sql.connect(config);
    let data = pool
      .request()
      .query(`SELECT * FROM [user] WHERE email ='${email}'`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getId = async (id) => {
  try {
    let pool = await sql.connect(config);
    let data = pool
      .request()
      .query(`SELECT id, email, username FROM [user] WHERE id ='${id}'`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getTasks = async (email) => {
  try {
    let pool = await sql.connect(config);
    let data = await pool
      .request()
      .query(`SELECT * FROM tasks WHERE userEmail ='${email}'`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createRegister,
  getLogin,
  getId,
  getTasks,
};
