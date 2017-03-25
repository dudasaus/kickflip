const Classes = require('./classes.js');

var game = new Classes.Game('GameName', '123', 'Username');

console.log(game);

// Testing joining
// Valid
game.onInput('GameName, Nick', '234');
game.onInput('GameName   ,    Brooke  ', '2');

// Invalid
game.onInput('GameName, NickAgain', '234');
game.onInput('WrongName, NickStill', '231');
game.onInput('GameName   ,    ', '2');


console.log(game);