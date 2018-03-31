var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game');
game.state.add('state_one', StateOne);
game.state.add('state_two', StateTwo);
game.state.add('state_three', StateThree);

game.state.start('state_one');