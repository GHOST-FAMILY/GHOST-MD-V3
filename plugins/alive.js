const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "alive",
    desc: "Check bot online or no.",
    category: "main",
    react: "👋",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let des = `*👋 Hello ${pushname}*

*╔╭────────────╮╕*
*╭│I'm Alive Now👾  │─◎◎▷*
*╘╰────────────╯╜*
*│A QUEEN-CHOOTY-NELUMI-MD │Whatsapp Bot Based │Many │Services With A │RealTime* *Automated │Consversational* *││Experience, Enjoy💫.*
*| So,I Think This Bots Are Useful To You.📍*
*│*
*│Type .menu To Get Bot User*
*│Menu💫*
 │✍ *qυєєη ¢нσσту ηєℓυмι м∂*
 *│සක්‍රීයව පවති..♥️*
 *│qυєєη ¢нσσту ηєℓυмι м∂* 
 *│*විදාන ලැයිස්තුව 🧚‍♂️ ලබා*
 *│ගැනීමට .menu විදානය 
 *│බාවිතා කරන්න 🎀*
 *│υʂҽ ƚԋҽ .ɱҽɳυ ƈσɱɱαɳԃ*
 │ *ƚσ ɠҽƚ ɳҽʅυɱι ƈσɱɱαɳԃ ʅιʂƚ 🎀🧧* 
 │                   *ස්තුතියි..🌝♥️*
*╰───────────────◎◎▷*

> 🌻 Have A Nice Day 🌻

*©Qᴜᴇᴇɴ ᴄʜᴏᴏᴛʏ ɴᴇʟᴜᴍɪ ᴍᴅ*`
return await conn.sendMessage(from,{image: {url: `https://i.ibb.co/vJhwvYf/Rf-Y1-Cy4-X9914.jpg`},caption: des},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})
