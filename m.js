const items = [
	/*
	const wand = {
	identified: {
		item: "Flask of Amber Liquid",
		description: "This is a flask, roughly the size of a small apple, of amber liquid, slightly viscous. In the dark, or shadows, it appears faintly visible without a light source.",
			lore: "Ambrosia is known as the nectar of the Gods, but this is a plant-based concoction from Yerlor. Ambrosia grants a 1d10 bonus to Endurance rolls for 3 rounds.",
		},
	unidentified: {
		item: "Flask of Ambrosia",
		description: "This is a flask, roughly the size of a small apple, of amber liquid, slightly viscous.. In the dark, or shadows, it appears faintly visible without a light source.",
			lore: ""
	},
	weight: 0.15,
	type: "",
	subType: "",
	skill: ""
}

const player = {
	inventory: [
		{
			definition: Ambrosia,
			identified: false
			uses: 3
		}
	]
}

function printItem(item) {
	if (item.identified) {
		console.log(item.definition.identified.name)
		console.log(item.definition.identified.description)
	} else {
		console.log(item.definition.unidentified.name)
		console.log(item.definition.unidentified.description)
	}
}

printItem(player.inventory[0])

> Amber Flask of Liquid
> This is a flask, roughly the size of a small apple, of amber liquid, slightly viscous. In the dark, or shadows, it appears faintly visible without a light source.
  */
  

		{
			item: "9mm round",
			name: "9mm round",
			description:"This is an ordinary 9mm bullet and casing.",
			lore:"",
			weight: 0.0263,
			type: itemTypes["Ammunition"],
			subType: itemTypes[""],
			skill: skillNames[""]
		},
		{
			item: "Boots",
			name: "Boots",
			description: "Simple, all-purpose boots.",
			lore:"",
			weight: 2,
			type: itemTypes["Clothing"],
			subType: itemTypes[""],
			skill: skillNames[""]
		},
	  //     ---     //
		{
			name: "Jeans",
			weight: 1.2,
			type: itemTypes["Clothing"],
			subType: itemTypes[""],
			skill: skillNames[""]
		},
		{
			name: "T-shirt",
			weight: 0.8,
			type: itemTypes["Clothing"],
			subType: itemTypes[""],
			skill: skillNames[""]
		},
		{
			name: "Light jacket",
			weight: 1,
			type: itemTypes["Clothing"],
			subType: itemTypes[""],
			skill: skillNames[""]
		},
		{
			name: "Waterproof jacket",
			weight: 1.5,
			type: itemTypes["Clothing"],
			subType: itemTypes[""],
			skill: skillNames[""]
		},
		{
			name: "Tunic",
			weight: 0.6,
			type: itemTypes["Clothing"],
			subType: itemTypes[""],
			skill: skillNames[""]
		},
		{
			name: "Cloth pants",
			weight: 0.9,
			type: itemTypes["Clothing"],
			subType: itemTypes[""],
			skill: skillNames[""]
		},
		{
			name: "Robes",
			weight: 1.5,
			type: itemTypes["Clothing"],
			subType: itemTypes[""],
			skill: skillNames[""]
		},
		{
			name: "Police Uniform",
			weight: 3.6,
			type: itemTypes["Clothing"],
			subType: itemTypes[""],
			skill: skillNames[""]
		},
		{
			name: "Granola bar",
			weight: 0.05,
			type: itemTypes["Food"],
			subType: itemTypes[""],
			skill: skillNames[""]
		},
		{
			name: "Jerky",
			weight: 0.03,
			type: itemTypes["Food"],
			subType: itemTypes[""],
			skill: skillNames[""]
		},
		{
			name: "Pocketknife",
			weight: 0.08,
			type: itemTypes["Utility"],
			subType: itemTypes["Weapon"],
			skill: skillNames["Knife Expertise"]
		},
		{
			name: "Multitool",
			weight: 0.1,
			type: itemTypes["Utility"],
			subType: itemTypes[""],
			skill: skillNames["Tinkering"]
		},
		{
			name: "Cellphone",
			weight: 0.1,
			type: itemTypes["Utility"],
			subType: itemTypes[""],
			skill: skillNames["Tinkering"]
		},
		{
			name: "Backpack",
			weight: 1.2,
			type: itemTypes["Utility"],
			subType: itemTypes[""],
			skill: skillNames[""]
		},
		{
			name: "Lighter",
			weight: 0.06,
			type: itemTypes["Utility"],
			subType: itemTypes[""],
			skill: skillNames[""]
		},
		{
			name: "Notebook",
			weight: 0.28,
			type: itemTypes["Utility"],
			subType: itemTypes[""],
			skill: skillNames[""]
		},
		{
			name: "Water bottle",
			weight: 2,
			type: itemTypes["Utility"],
			subType: itemTypes[""],
			skill: skillNames[""]
		},
		{
			name: "Hatchet",
			weight: 3,
			type: itemTypes["Utility"],
			subType: itemTypes["Weapon"],
			skill: skillNames["Axemanship"]
		},
		{
			name: "Canteen",
			weight: 3,
			type: itemTypes["Utility"],
			subType: itemTypes[""],
			skill: skillNames[""]
		},
		{
			name: "Hawk Familiar",
			weight: 0,
			type: itemTypes["Utility"],
			subType: itemTypes[""],
			skill: skillNames[""]
		},
		{
			name: "Red Book",
			weight: 0.7,
			type: itemTypes["Utility"],
			subType: itemTypes[""],
			skill: skillNames["Ephemera"]
		},
		{
			name: "Throwing knife",
			weight: 0.12,
			type: itemTypes["Weapon"],
			subType: itemTypes[""],
			skill: skillNames["Marksmanship"]
		},
		{
			name: "Collapsing Bokken",
			weight: 1,
			type: itemTypes["Weapon"],
			subType: itemTypes[""],
			skill: skillNames["Light Sword"]
		},
		{
			name: "Gladius",
			weight: 2.5,
			type: itemTypes["Weapon"],
			subType: itemTypes[""],
			skill: skillNames["Light Sword"]
		},
		{
			name: "Priest's Staff",
			weight: 2,
			type: itemTypes["Weapon"],
			subType: itemTypes[""],
			skill: skillNames["Staves expertise"]
		},
		{
			name: "9mm Sig Sauer",
			weight: 6.5,
			type: itemTypes["Weapon"],
			subType: itemTypes[""],
			skill: skillNames["Marksmanship"]
		},
		{
			name: "Longbow",
			weight: 2,
			type: itemTypes["Weapon"],
			subType: itemTypes[""],
			skill: skillNames["Marksmanship"]
		},
		{
			name: "Arrow",
			weight: 0.12,
			type: itemTypes["Ammunition"],
			subType: itemTypes[""],
			skill: skillNames["Marksmanship"]
		},
		{
			name: "Silver",
			weight: 0.01,
			type: itemTypes["Currency"],
			subType: itemTypes[""],
			skill: skillNames[""]
		},
		{
			name: "Gold",
			weight: 0.01,
			type: itemTypes["Currency"],
			subType: itemTypes[""],
			skill: skillNames[""]
		},
		{
			name: "Copper",
			weight: 0.01,
			type: itemTypes["Currency"],
			subType: itemTypes[""],
			skill: skillNames[""]
		},
		{
			name: "Iron Ore",
			weight: 5,
			type: itemTypes["Material"],
			subType: itemTypes[""],
			skill: skillNames["Tinkering"]
		},
		{
			name: "Large Mushroom",
			weight: 0.05,
			type: itemTypes["Food"],
			subType: itemTypes["Material"],
			skill: skillNames[""]
		},
		{
			name: "Mechanical Clock",
			weight: 1,
			type: itemTypes["Utility"],
			subType: itemTypes[""],
			skill: skillNames[""]
		},
		{
			name: "Green Gem",
			weight: 0.01,
			type: itemTypes["Currency"],
			subType: itemTypes["Material"],
			skill: skillNames[""]
		},
		{
			name: "Saber",
			weight: 2.9,
			type: itemTypes["Weapon"],
			subType: itemTypes[""],
			skill: skillNames[""]
		},
		{
			name: "Leafmail Shirt (def3)",
			weight: 2,
			type: itemTypes["Armor"],
			subType: itemTypes[""],
			skill: skillNames[""]
		},
		{
			name: "Pauldrons (def1)",
			weight: 2,
			type: itemTypes["Armor"],
			subType: itemTypes[""],
			skill: skillNames[""]
		},
		{
			name: "Jerkin (def3)",
			weight: 1.8,
			type: itemTypes["Armor"],
			subType: itemTypes[""],
			skill: skillNames[""]
		},
		{
			name: "Satchel",
			weight: 0.7,
			type: itemTypes["Utility"],
			subType: itemTypes[""],
			skill: skillNames[""]
		},
		{
			name: "Lapis Lazuli Amulet",
			weight: 0.08,
			type: itemTypes["Clothing"],
			subType: itemTypes[""],
			skill: skillNames[""]
		},
		{
			item: "Flask of Amber Liquid",
			name: "Ambrosia",
			description: "This is a flask, roughly the size of a small apple, of amber liquid, perhaps slightly thicker than milk. In the dark, or shadows, it appears faintly visible without a light source.",
			lore: "Ambrosia is known as the nectar of the Gods, but this is a plant-based concoction from Yerlor. Ambrosia grants a 1d10 bonus to Endurance rolls for 3 rounds.",
			weight: 0.3,
			type: itemTypes[""],
			subType: itemTypes[""],
			skill: skillNames[""]  
		},
		{
			name: "Smallsword",
			weight: 2.1,
			type: itemTypes[""],
			subType: itemTypes[""],
			skill: skillNames[""]
		},
		{
			name: "Kriegsmesser (Jensen)",
			weight: 4.2,
			type: itemTypes[""],
			subType: itemTypes[""],
			skill: skillNames[""]
		},
		{
			name: "Kriegsmesser",
			weight: 3.7,
			type: itemTypes[""],
			subType: itemTypes[""],
			skill: skillNames[""]
		},
		{
			name: "Claymore",
			weight: 8,
			type: itemTypes[""],
			subType: itemTypes[""],
			skill: skillNames[""]
		},
		{
			name: "Short Bow",
			weight: 1.6,
			type: itemTypes[""],
			subType: itemTypes[""],
			skill: skillNames[""]
		},
		{
			name: "Crossbow (S)",
			weight: 1.7,
			type: itemTypes[""],
			subType: itemTypes[""],
			skill: skillNames[""]
		},
		{
			name: "Crossbow (L)",
			weight: 1.9,
			type: itemTypes[""],
			subType: itemTypes[""],
			skill: skillNames[""]
		},
		{
			name: "Dirk",
			weight: 1.25,
			type: itemTypes[""],
			subType: itemTypes[""],
			skill: skillNames[""]
		},
		{
			name: "Halberd",
			weight: 5.35,
			type: itemTypes[""],
			subType: itemTypes[""],
			skill: skillNames[""]
		},
		{
			name: "Pike",
			weight: 6,
			type: itemTypes[""],
			subType: itemTypes[""],
			skill: skillNames[""]
		},
		{
			name: "Wooden Pageant Shield",
			weight: 4.3,
			type: itemTypes[""],
			subType: itemTypes[""],
			skill: skillNames[""]
		},
		{
			name: "Wooden Buckler",
			weight: 3.4,
			type: itemTypes[""],
			subType: itemTypes[""],
			skill: skillNames[""]
		},
		{
			name: "Steel Buckler",
			weight: 8.2,
			type: itemTypes[""],
			subType: itemTypes[""],
			skill: skillNames[""]
		},
		{
			name: "Steel Shield",
			weight: 11.5,
			type: itemTypes[""],
			subType: itemTypes[""],
			skill: skillNames[""]
		},
		{
			name: "Light Mace",
			weight: 16,
			type: itemTypes[""],
			subType: itemTypes[""],
			skill: skillNames[""]
		},
		{
			name: "Heavy Mace",
			weight: 21,
			type: itemTypes[""],
			subType: itemTypes[""],
			skill: skillNames[""]
		},
		{
			name: "Rapier",
			weight: 2.6,
			type: itemTypes[""],
			subType: itemTypes[""],
			skill: skillNames[""]
		},
		{
			name: "Bastard Sword",
			weight: 3.4,
			type: itemTypes[""],
			subType: itemTypes[""],
			skill: skillNames[""]
		},
		{
			name: "Katana",
			weight: 2.9,
			type: itemTypes[""],
			subType: itemTypes[""],
			skill: skillNames[""]
		},
		{
			name: "Zweihänder",
			weight: 9.2,
			type: itemTypes[""],
			subType: itemTypes[""],
			skill: skillNames[""]
		},
		{
			name: "Dadao",
			weight: 1.6,
			type: itemTypes[""],
			subType: itemTypes[""],
			skill: skillNames[""]
		},
		{
			name: "Estoc",
			weight: 1.8,
			type: itemTypes[""],
			subType: itemTypes[""],
			skill: skillNames[""]
		},
		{
			name: "Steel Bracers",
			weight: 2.2,
			type: itemTypes["Armor"],
			subType: itemTypes[""],
			skill: skillNames[""]
		},
		{
			name: "Steel Boots",
			weight: 3.5,
			type: itemTypes["Armor"],
			subType: itemTypes[""],
			skill: skillNames[""]
		},
		{
			name: "Hunting Dagger",
			weight: 0.8,
			type: itemTypes["Weapon"],
			subType: itemTypes["Utility"],
			skill: skillNames["Knife Expertise"]
		},
		{
			name: "Scrying Mirror",
			weight: 0.3,
			type: itemTypes["Utility"],
			subType: itemTypes[""],
			skill: skillNames["Perma"]
		}
	]
