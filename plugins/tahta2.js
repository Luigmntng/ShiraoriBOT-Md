let util = require('util')
let path = require('path')
let { spawn } = require('child_process')

// HartA tahta Xteam
let handler  = async (m, { conn, text }) => {
  let d = new Date
  let tgl = d.toLocaleDateString('id-Id')
  let hari = d.toLocaleDateString('id-Id', { weekday: 'long' })
 text,
await conn.sendFile(m.chat, global.API('leyscoders', '/tahta', { text, }, 'MIMINGANZ'), 'Harta Tahta.png', 'Nih udah jadi Harta tahtamu...\n *_Tetap Support:_* *Drawl Nag*', m)
}
handler.help = ['tahta'].map(v => v + '<teks>')
handler.tags = ['internet']
handler.command = /^tahta$/i

handler.limit = true
handler.premium = true

module.exports = handler
