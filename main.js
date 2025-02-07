const game = {
  resources: {
    gold: 250,
    lumber: 100,
  },
  addResource(resource, amount) {
    

      if (resource === this.resources) {
        this.resources[resource] += amount
        console.log("New number: ", `${this.resources[resource]}`);
        
      } else {
        console.log("Invalid resource");
        
      }

      
    
  }
}

addResource(gold, 100)

