const commands = require('./commands/index')

const Discord = require('discord.js')
const client = new Discord.Client()

client.login(process.env.BOT_TOKEN)

client.on('message', msg => {
	const commandMatcher = /^\/([a-z]+) ?/
	
	if (commandMatcher.test(msg.content)) {
		const command = msg.content.match(commandMatcher)[1]
		const parameters = msg.content.replace(commandMatcher, '')
		
		if (commands[command]) {
			commands[command](msg, parameters)
		}
	}
})

client.login(process.env.BOT_TOKEN)
