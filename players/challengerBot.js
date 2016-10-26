module.exports = function () {

  var info = {
    name: "Nameless Valter",
    email: "ferrazv@br.ibm.com",
    btcWallet: ""
  };

  function update(game) {
    if (game.state !== "complete") {
      return game.betting.call
    }
  }

  return { update: update, info: info }

}
