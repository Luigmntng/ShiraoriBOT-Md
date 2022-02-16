let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix, command }) => {
  await m.reply(global.wait)
  let res = await fetch('https://islamic-api-zhirrr.vercel.app/api/data/quotes')
  let son = await res.json()
  shyi = son.data
  let json = shyi[Math.floor(Math.random() * shyi.length)]
  let caption = `
*「 Quotes Islam 」*
${json.text_en}
${json.text_id}
${json.author}
`.trim()
  await conn.reply(m.chat, caption, m)
}
handler.help = ['quotesislam']
handler.tags = ['islam']
handler.command = /^(quotesislam)$/i

module.exports = handler
