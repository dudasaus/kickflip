const Driver = require('./driver.js');
const Classes = require('./classes.js');

var driver = new Driver.Driver();
var game = new Classes.Game('GameName', '123', 'Username', driver.driverEmitter);

game.sendText(['+12488824432','+12485348895','+18172230083'], 'tests.js');

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

// Testing judgeStart
game.state = 'judgeStart';
console.log(game);
game.onInput('what is my favorite color', '123'); //judge creates valid question
game.onInput('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', '123');
game.onInput('I want this to be my question', '234');
game.onInput('Im not in the game even', '12489t1235');
//console.log(game);
console.log(game);

/********  Driver tests  *********/

var args = driver.getArgs(' create MyGameName ,   MyName  ', 'create');
if (args[0] != 'MyGameName') {
	throw new Error('Driver\'s getArgs is wrong');
}
if (args[1] != 'MyName') {
	throw new Error('Driver\'s getArgs is wrong');
}
