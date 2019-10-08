const { items } = require("./items");

class Player {
	constructor() {
		this.stats = {}
		this.skills = {}
		this.inventory = []
	}

	addItem(itemID, quantity, uses) {
		this.inventory.push({
			item: itemID,
			quantity: quantity || 1,
			uses: uses || null
		})
	}
	
	get isOverburdened() {
		const maxEncumbrance = 200
		return this.inventory.reduce((totalWeight, inventoryItem) => totalWeight += items[inventoryItem.item].weight, 0) > maxEncumbrance
	}
}
