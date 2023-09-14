const db = require('../config')
const { hash, compare, hashSync } = require('bcrypt')
const { createToken } = require('../middleware/AuthenticateUser')

class Users {
  fetchUsers(req, res) {
    const query = `
        SELECT userID, firstName, lastName, email, userUrl
        FROM Users;`;
    db.query(query, (err, results) => {
      if (err) throw err
      res.json({
        status: res.statusCode,
        results,
      });
    });
  }
  // ==== SINGLE USER ==== \\
  fetchUser(req, res) {
    const query = ` SELECT userID, firstName,
        lastName, email, userUrl
        FROM Users
        WHERE UserID = ${req.params.id};`;
    db.query(query, (err, result) => {
      if (err) throw err
      res.json({
        status: res.statusCode,
        result,
      });
    });
  }
  // ==== LOGIN ==== \\
  login(req, res) {
    const { email, userPass } = req.body;

    // query with parameterized query
    const query = `
    SELECT firstName, lastName,
    email, userPass,
    userUrl
    FROM Users
    WHERE email= ?;
    `;

    db.query(query, [email], async (err, result) => {
      if (err) throw err
      if (!result?.length) {
        res.json({
          status: res.statusCode,
          msg: "You provided a wrong email.",
        });
      } else {
        compare(userPass, result[0].userPass, (cErr, cResult) => {
          if (cErr) throw cErr;
          // Create a token
          const token = createToken({
            email,
            userPass,
          });
          // Save a token
          res.cookie("LegitUser", token, {
            maxAge: 3600000,
            httpOnly: true,
          });
          if (cResult) {
            res.json({
              msg: "Logged in",
              token,
              result: result[0],
            });
          } else {
            res.json({
              status: res.statusCode,
              msg: "Invalid password or you have not registered",
            });
          }
        });
      }
    });
  }
  // ==== REGISTER ==== \\
  async register(req, res) {
    const data = req.body;
    //Encrypt Password
    data.userPass = await hash(data.userPass, 15);
    // PayLoad
    const user = {
      email: data.email,
      userPass: data.userPass,
    };
    //Query
    const query = `
   INSERT INTO Users
   SET ?;
   `;
    db.query(query, [data], (err) => {
      if (err) throw err;
      //Create Token
      let token = createToken(user);
      res.cookie("LegitUser", token, {
        maxAge: 3600000,
        httpOnly: true,
      });
      res.json({
        status: res.statusCode,
        msg: "You are now registered",
      });
    });
  }
  // ==== UPDATE ==== \\
  updateUser(req, res) {
    const query = `
        UPDATE FROM Users
        SET ?
        WHERE userID = ?
        ;`
    db.query(query, [req.body, req.params.id], (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "The user record was updated.",
      });
    });
  }
  //===== DELETE ====== \\
  deleteUser(req, res) {
    const query = `
        DELETE FROM Users
        WHERE userID = ${req.params.id};
        `
    db.query(query, (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "A user record was deleted.",
      });
    });
  }
}
module.exports = Users
