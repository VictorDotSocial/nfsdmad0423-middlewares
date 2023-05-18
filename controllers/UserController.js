const UserController = {
  getUser: (req, res) => {
    res.send("GET usuario");
  },
  addUser: (req, res) => {
    const { username, age, job, isActive } = req.body;
    console.log("Info del usuario", username, age, job, isActive);
    res.send("Eres admin. Todo bien");
  },
};

module.exports = UserController;
