const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys-md')
let fs = require('fs')
let handler  = async (m, { conn, usedPrefix }) => { 
let str = `
╭─˗ˏˋ *Informasi Owner* ´ˎ˗
│ (Follow ig saya dong)
│ ✎ Nama : Lui (cowok)
│    Kelas : 9 SMP
│    Umur : 15
│    Asal : jawa
│    Kabupaten: ponorogo
│    Status : Privasi
│    Suka : recode sc orang :v
│ ✎ _Official Grup_ :
│    https://chat.whatsapp.com/DdMbKYRxn5TCFrB9m10XnQ
│ ✎ _Instagram_ :
│    instagram.com/ahmdlui
│ ✎ _github_ : 
│    github.com/luigmntng
│ ✎ _FaceBook_ :
│    (Private)
│ ✎ _WhatsApp_ :
│    bit.ly/
╰‿‿‿‿‿‿‿‿
`.trim()
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
    templateMessage: {
        hydratedTemplate: {
          hydratedContentText: str,
          locationMessage: { 
          jpegThumbnail: fs.readFileSync('./media/shiraori.jpg') },           
          hydratedFooterText: wm,
          hydratedButtons: [{
            urlButton: {
              displayText: 'Official instagran',
              url: 'https://instagram.com/ahmdlui'
            }

          },
              {
            quickReplyButton: {
              displayText: 'Back To Menu',
              id: '.menu',
            }

          }]
        }
      }
    }), { userJid: m.sender, quoted: m });
   //conn.reply(m.chat, text.trim(), m)
   return await conn.relayMessage(
        m.chat,
        template.message,
        { messageId: template.key.id }
    )
}

handler.help = ['owner'. 'creator']
handler.tags = ['info']
handler.command = /^(owner)$/i


module.exports = handler
