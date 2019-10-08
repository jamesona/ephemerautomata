const { skills } = require('../db')

module.exports = {
	skill: (msg, search) => {
		try {
			skills.find({ name: { $regex: new RegExp(search, 'i') } }, (err, result) => {
				if (result) {
					msg.reply('```js\n' + JSON.stringify(result, null, '\t') + '\n```')
				} else {
					msg.reply('Skill not found')
				}
			})
		} catch (e) { }
	}
}
