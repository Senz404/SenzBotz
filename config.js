/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://api.neoxr.eu.org/',
}

// Apikey Website Api
global.APIKeys = {
	'https://api.neoxr.eu.org/': 'm9IIHgza',
}

// Other
global.owner = ['6283800930156','6283800930156','6283800930156']
global.premium = ['6283800930156']
global.packname = 'Sticker by'
global.author = 'Senz'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '✓ *Success Ngab*',
    admin: '*Fitur Khusus Admin Group Cok*‼️',
    botAdmin: '*Bot Aj Bukan Admin Cok"!*',
    owner: '*Lu siapa Cok!Owner gw?*',
    group: '*Fitur Digunakan Hanya Untuk Group!*',
    private: '*Fitur Digunakan Hanya Untuk Private Chat!*',
    bot: '*Fitur Khusus Pengguna Nomor Bot*',
    wait: '*Tunggu Sebentar Ya Sayang...*',
    endLimit: '*Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12*',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./lib/20220625_223313.png')
global.visoka = { url: 'https://telegra.ph/file/15209657f9d4f59c7ca1e.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
