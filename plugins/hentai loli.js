async function getRandom(url) {
    return Math.floor(Math.random() * url)
    }
    
     let handler  = async (m, { conn }) => {
    
          conn.sendFile(m.chat, `https://server-api-rey.herokuapp.com/api/wallpaper/nsfwloli?apikey=apirey`, '', `NOO 4NO`, m)
    
    }
    
    handler.help = ['nsfwloli']
    
    handler.tags = ['nsfw']
    
    handler.command = /^(nsfwloli)$/i
    
    handler.premium = true
    handler.limit = true  
    module.exports = handler