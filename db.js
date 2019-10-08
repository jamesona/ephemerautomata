// https://github.com/louischatriot/nedb
const Datastore = require('nedb')

module.exports = {
	items: new Datastore({
		filename: '.data/items.db',
		autoload: true
	}),
	ephemera: new Datastore({
		filename: '.data/ephemera.db',
		autoload: true
	}),
	skills: new Datastore({
		filename: '.data/skills.db',
		autoload: true
	}),
	players: new Datastore({
		filename: '.data/players.db',
		autoload: true
	})
}

