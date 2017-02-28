let HanoiView = require("./view.js");
let HanoiGame = require("./game.js");

$( () => {
  const $rootEl = $('.hanoi');
  const game = new HanoiGame();
  new HanoiView(game, $rootEl);

  console.log("hello");
});
