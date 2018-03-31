var StateOne = {
  preload: () => {
    console.log("state one preload");
  },

  create: () => {
    console.log("state one create");
    game.state.start('state_two');
  },

  update: () => {
  }
}