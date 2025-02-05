const game = {
  resources: {
    gold: 250,
    lumber: 100,
  },
  addResource(resource, amount) {
    if (resource === game.resources.gold) {
      game.resources.gold += amount
      return game.resources.gold
    } else if (resource === game.resources.lumber) {
      game.resources.lumber += amount
      return game.resources.lumber
    } else {
      console.log("Invalid resource");
    }
  }
}





