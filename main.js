const game = {
  resources: {
    gold: 250,
    lumber: 100,
  },
  addResource(resource, amount) {
    if (this.resources[resource]) {
      this.resources[resource] += amount;
      console.log("New number: ", this.resources[resource]);
    } else {
      console.log("Invalid resource");
    }
  }
};

game.addResource('gold', 100);
