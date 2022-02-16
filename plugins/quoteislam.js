let fetch = require('node-fetch')
 let handler = async (m, { conn, usedPrefix, command }) => {
 	let heum = await fetch(`https://api.lolhuman.xyz/api/quotes/islami?apikey=rey2k21`)
 amin = await result.json()
    conn.reply(m.chat, `${amin.result}`, m)

    }
    
handler.help = ['quotesmuslim']
handler.tags = ['islam']
handler.command = /^(quotesislam)$/i
module.exports = handler
