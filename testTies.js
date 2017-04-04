const Driver = require('./driver.js');
const Classes = require('./classes.js');

const numbers = {
    austin: "+12488824432",
    nick: "+12487361831",
    ben: "+18172230083",
    brooke: "+12485348895",
    sieu: "+17347809868"
}

var driver = new Driver.Driver();
var game = new Classes.Game('GameName', numbers.austin, 'Austin', driver.driverEmitter);

// Testing joining
// Valid
game.onInput('GameName, Nick', numbers.nick);
game.onInput('GameName   ,    Brooke  ', numbers.brooke);

for (var i = 0; i < 3; ++i) {
    game.players[i].score = 20;
}

game.gameOver();

// Shorten timer
setTimeout(function() {
    game.pgDriver.client.end();
}, 2000);

game.pingInactiveTimer(1);
