const { Enum } = require('../enum')

const bloodTypes = new Enum('A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB-', 'AB+', 'KA', 'KB')

module.exports = { bloodTypes }
