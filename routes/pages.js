const pagesRouter = require("express").Router(); 

const { sendIndex, sendDashboard } = require("../controllers/auth.js");
const { checkCookiesJWT, checkAuth } = require("../middlewares/Auth.js");

pagesRouter.get("/", sendIndex);
pagesRouter.get("/admin/**", checkCookiesJWT, checkAuth, sendDashboard);

module.exports = pagesRouter;