class View{
  constructor(game, $rootEl){
    this.game = game;
    this.$rootEl = $rootEl;
    this.setupTowers();
  }

  setupTowers() {
    let $board = $("<ul></ul>");

    for (let i = 0; i < 3; i++) {
      let $pile = $("<ul></ul>");
      if (i === 0) {
        for (let j = 0; j < 3; j++) {
          let $li = $("<li></li>");
          $li.attr("width", j+1);
          $pile.append($li);
        }
      }

      $board.append($pile);
    }


    this.$rootEl.append($board);
  }
}



module.exports = View;
