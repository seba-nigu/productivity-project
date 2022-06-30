const jwt = require("jsonwebtoken");

const protect = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      jwt.verify(token, "mysecretkey", (er, decoded) => {
        if (er) {
          console.log(ere.message);
          res.redirect("/login");
        } else {
          res.send("Good");
          next();
        }
      });
    } catch (error) {
      console.log(error);
      res.status(401).json({ message: "Invalid token" });
    }
  }
  if (!token) {
    res.status(401).json({ message: "No token" });
    console.log("No token");
    res.redirect("/login");
  }
};

module.exports = { protect };
