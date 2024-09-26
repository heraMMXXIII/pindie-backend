const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const usersRouter = require("./routes/users");
const gamesRouter = require("./routes/games");
const categoriesRouter = require("./routes/categories");
const cookieParser = require("cookie-parser");

const connectToDatabase = require("./database/connect");
const cors = require("./middlewares/cors");
const apiRouter = require("./routes/apiRouter");
const pagesRouter = require("./routes/pages");

const app = express();
const PORT = 3001;

app.use(
  cors,
  bodyParser.json(),
  cookieParser(), 
  apiRouter,
  express.static(path.join(__dirname, "public")),
  pagesRouter
);

connectToDatabase();

app.listen(PORT);
