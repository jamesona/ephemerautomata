const { items } = require('../db')

module.exports = {
	item: (msg, search) => {
		try {
			items.find({ name: { $regex: new RegExp(search, 'i') } }, (err, result) => {
				if (result) {
					msg.reply('```js\n' + JSON.stringify(result, null, '\t') + '\n```')
				} else {
					msg.reply('Item not found')
				}
			})
		} catch (e) { }
	}
}
