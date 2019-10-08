const { asyncForEach } = require('../lib/asyncForEach')

module.exports = {
	menu: msg => {
		const options = [
			{
				reaction: '👥',
				description: 'list players'
			},
			{
				reaction: '🎁',
				description: 'give item'
			},
			{
				reaction: '💰',
				description: 'give currency'
			},
			{
				reaction: '🌟',
				description: 'give xp'
			},
			{
				reaction: '🔮',
				description: 'identify item'
			},
			{
				reaction: '⚔',
				description: 'attack'
			}
		]

		const messageBody = options.reduce((message, option) => message += `\n ${option.reaction} ${option.description}`, '')

		msg.reply(messageBody)
			.then(async sentMessage => {
				// does not work
				// options.map(option => option.reaction).reduce((promise, emoji) => promise.then(sentMessage.react(emoji)), Promise.resolve())

				// works
				// await sentMessage.react(options[0].reaction)
				// await sentMessage.react(options[1].reaction)
				// await sentMessage.react(options[2].reaction)
				// await sentMessage.react(options[3].reaction)
				// await sentMessage.react(options[4].reaction)

				// works, out of order
				// try {
				// 	await options.map(option => option.reaction).forEach(emoji => {
				// 		sentMessage.react(emoji)
				// 	})
				// } catch (e) {
				// 	console.error(e)
				// }

				// works, out of order
				// options.map(option => option.reaction).reduce((promise, emoji) => promise ? promise.then(sentMessage.react(emoji)) : sentMessage.react(emoji), undefined)

				asyncForEach(options.map(option => option.reaction), emoji => sentMessage.react(emoji))
			})
			.catch(console.error)
	}
}
