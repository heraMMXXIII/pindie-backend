// Файл routes/games.js

const gamesRouter = require("express").Router();
const { checkAuth } = require("../middlewares/Auth");

const {
  findAllGames,
  createGame,
  findGameById,
  updateGame,
  deleteGame,
  checkEmptyFields,
  checkIfUsersAreSafe,
  checkIfCategoriesAvaliable,
  checkIsGameExists,
} = require("../middlewares/games");
const {
  sendAllGames,
  sendGameCreated,
  sendGameById,
  sendGameUpdated,
  sendGameDeleted,
} = require("../controllers/games");


gamesRouter.get("/games", findAllGames, sendAllGames);
gamesRouter.get("/games/:id", findGameById, sendGameById);
gamesRouter.delete(
  "/games/:id", // Слушаем запросы по эндпоинту
  checkAuth, 
  deleteGame,
  sendGameDeleted // Тут будут функция удаления элементов из MongoDB и ответ клиенту
);

// Файл routes/games.js

gamesRouter.post(
  "/games",
  findAllGames,
  checkIsGameExists,
  checkIfCategoriesAvaliable,
  checkEmptyFields,
  checkAuth,
  createGame,
  sendGameCreated
);

gamesRouter.put(
  "/games/:id",
  findGameById,
  ///checkIsVoteRequest,
  checkIfUsersAreSafe,
  checkIfCategoriesAvaliable,
  checkEmptyFields,
  checkAuth,
  updateGame,
  sendGameUpdated
);
module.exports = gamesRouter;
