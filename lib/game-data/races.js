const { Enum } = require('../enum')

const races = new Enum('Human', 'Paal', 'Elf', 'Komodan', 'Spydra', 'Fae', 'Half-Fae', 'Human-Paal', 'Human-Elf', 'Elf-Paal')

module.exports = { races }
