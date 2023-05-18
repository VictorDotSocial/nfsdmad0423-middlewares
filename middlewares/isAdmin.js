const isAdmin = {
  checkIfAdmin: (req, res, next) => {
    const { username, age, job, isActive } = req.body;
    if (username === "admin") {
      next();
    } else {
      res.send("No tienes permiso");
    }
  },
};

module.exports = isAdmin;
