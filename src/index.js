const TelegramBot = require('node-telegram-bot-api')
require('dotenv').config()
const helper = require('./helper.js')
const keyboard = require('./keyboard.js')
const kb = require('./keyboard_buttons.js')

// const bot = new TelegramBot(process.env.BOT_TOKEN, {
// 	polling: {
// 		interval: 300,
// 		autoStart: true,
// 		params: {
// 			timeout: 10
// 		}
// 	}
// })

helper.logStart()

const bot = new TelegramBot(process.env.BOT_TOKEN, {
	polling: true
})

bot.on('message', msg => {
	console.log('Работаем')

	switch (msg.text) {

	}
})

bot.onText(/\/start/, msg => {

	const text =  `Здраствуйте, ${msg.from.first_name}\nВыберите команду для начала работы`

	console.log(keyboard.home)

	bot.sendMessage(msg.chat.id, text, {
		reply_markup: {
			keyboard: keyboard.home
		}
	})

})

bot.on("polling_error", err => console.log(err))