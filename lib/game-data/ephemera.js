const { Enum } = require('../enum')
const { elements } = require('./elements')

const ephemera = [
		{
			element: elements.Air,
			name: 'Haste'
		},
		{
			element: elements.Air,
			name: 'Transformation'
		},
		{
			element: elements.Air,
			name: 'Transmutation'
		},
		{
			element: elements.Earth,
			name: 'Spectral Dissolution'
		},
		{
			element: elements.Earth,
			name: 'Transformation'
		},
		{
			element: elements.Earth,
			name: 'Transmutation'
		},
		{
			element: elements.Electromagnetism,
			name: 'Combat tricks'
		},
		{
			element: elements.Electromagnetism,
			name: 'Conduct / Insulate'
		},
		{
			element: elements.Electromagnetism,
			name: 'Levitate'
		},
		{
			element: elements.Electromagnetism,
			name: 'Lightning'
		},
		{
			element: elements.Electromagnetism,
			name: 'Portal'
		},
		{
			element: elements.ESP,
			name: 'Detection'
		},
		{
			element: elements.ESP,
			name: 'Intention sense'
		},
		{
			element: elements.ESP,
			name: 'Telebroadcast'
		},
		{
			element: elements.ESP,
			name: 'Teleproject'
		},
		{
			element: elements.Fire,
			name: 'Heat / Cold Manipulate'
		},
		{
			element: elements.Life,
			name: 'Filter Toxin'
		},
		{
			element: elements.Life,
			name: 'Healing / Decay'
		},
		{
			element: elements.Life,
			name: 'Health Transfer / Necromancy'
		},
		{
			element: elements.Water,
			name: 'Haste'
		},
		{
			element: elements.Water,
			name: 'Transformation'
		},
		{
			element: elements.Water,
			name: 'Transmutation'
		},
	]

const ephemeraNames = new Enum(...ephemera.map(eph => eph.name))
	
module.exports = { ephemera, ephemeraNames }
