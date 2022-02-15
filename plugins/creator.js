const PhoneNumber = require('awesome-phonenumber')
async function handler(m) {
                let vcard = 'BEGIN:VCARD\n' // metadata of the contact card
                    + 'VERSION:3.0\n' 
                    + 'N:;Mas Lui;;;'
                    + 'FN:Maszz Lui\n' // full name
                    + 'ORG:WM SUKI BADAK;\n' // the organization of the contact
                    + 'TEL;type=CELL;type=VOICE;waid=6282146092695:+62 821-4609-2695\n' // WhatsApp ID + phone number
                    + 'END:VCARD'
                conn.sendMessage(m.chat, { contacts: { displayName: 'Maszz Lui', contacts: [{ vcard }] } }, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
