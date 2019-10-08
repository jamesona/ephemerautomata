const { Enum } = require('../enum')

const skillTypes = new Enum('Combat', 'Passive', 'Active', 'Movement')

module.exports = { skillTypes }
