const db = require("../models");

module.exports = function (app) {
  // code here
  app.get("/teams", (req, res) => {
    console.log("testing");
    db.Team.findAll({}).then((dbTeam) => res.json(dbTeam));
  });
};
