const userService = require('../services/user.service');
const jwt = require("jsonwebtoken");
const usersController = {};
// /api/users
usersController.login =  async (req, res) => {
    const user = req.body;
    let userdb = await userService.login(user); 
    if(userdb){
        userdb.password = undefined;
        let token = jwt.sign(userdb.toObject(), process.env.TOKEN_SECRET||'SECRETPASSWORD');
        res.json({token:token});
    }else{
        res.sendStatus(403);
    }

};
usersController.register = async (req, res) => {
    const user = req.body;
    await userService.registerUser(user); 
    res.json();
};

module.exports = usersController;
