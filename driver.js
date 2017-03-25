const Game = require('./classes.js');
const EventEmitter = require('events');

const CREATE_COMMAND = 'create';

class Driver {
	constructor() {
		this.game = null;
	}

	onReceiveText(body) {
		var command = this.getCommand(body.Body);

		if (command == CREATE_COMMAND) {
			onReceiveCreate(body);
		}
	}

	onReceiveCreate(body) {
		var text = body.Body;
		var senderNumber = body.From;

		// A game is already in place
		// Maybe send back a text or something here
		if (this.game) {
			return;
		}

		var args = this.getArgs(text, CREATE_COMMAND);

		this.game = new Game(args[0], senderNumber, args[1]);
	}

	getCommand(text) {
		text = text.trim().toLowerCase();
		return text.split(' ')[0];
	}

	getArgs(text, command) {
		text = text.trim();
		text = text.substr(command.length);
		text = text.trim();

		var args = text.split(',');
		for (var i = 0; i < args.length; i++) {
			args[i] = args[i].trim();
		}

		return args;
	}
}

class DriverEmitter extends EventEmitter {}

module.exports.Driver = Driver;
