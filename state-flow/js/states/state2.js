var StateTwo = {
  preload: () => {
    console.log("state two preload");
  },

  create: () => {
    console.log("state two create");
    game.state.start('state_three');
  },

  update: () => {
  }
}