const { Enum } = require('../enum')

const itemTypes = new Enum('Utility', 'Weapon', 'Clothing', 'Armor', 'Food', 'Ammunition', 'Currency', 'Material')

module.exports = { itemTypes }
