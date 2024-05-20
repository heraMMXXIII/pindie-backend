
const authRouter = require("express").Router();
const { login } = require("../controllers/auth.js");
const path = require("path");
authRouter.post("/auth/login", login);


// Импорты и другие функции-контроллеры


module.exports = authRouter;