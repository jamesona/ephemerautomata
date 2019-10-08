const { Enum } = require('../enum')

const stats = new Enum('INI', 'MOV', 'DEX', 'END', 'INT', 'PER', 'STR', 'DEF', 'DAM')

module.exports = { stats }
