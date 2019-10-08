const db = require('../db')

const collections = Object.keys(db)
const isPlural = word => /s$/.test(word)

module.exports = {
	find: (msg, query) => {
		const words = query.split(' ')
		const collection = words.shift()
		const search = words.join(' ')
		const pluralCollectionName = isPlural(collection) ? collection : collection + 's'

		if (collections.includes(pluralCollectionName)) {
			try {
				db[pluralCollectionName].find({ name: { $regex: new RegExp(search, 'i') } }, (err, result) => {
					if (result) {
						msg.reply('```js\n' + JSON.stringify(result, null, '\t') + '\n```')
					} else {
						msg.reply(`"${search}" not found`)
					}
				})
			} catch (e) { }
		} else {
			msg.reply(
				`${
					collection
				} is not a known collection. Try one of ${
					JSON.stringify(collections)
				}`
			)
		}

	}
}
