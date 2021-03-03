const userService = require('../services/user.service');
const jwt = require("jsonwebtoken");
const usersController = {};
// /api/users
usersController.login =  async (req, res) => {
    const user = req.body;
    let userdb = await userService.login(user); 
    if(userdb){
        userdb.password = undefined;
        let token = jwt.sign(userdb.username, process.env.TOKEN_SECRET||'SECRETPASSWORD');
        res.json(token);
    }else{
        res.sendStatus(403);
    }

};
usersController.register = async (req, res) => {
    const user = req.body;
    await userService.registerUser(user); 
    user.password = undefined;
    res.json(user);
};

module.exports = usersController;
