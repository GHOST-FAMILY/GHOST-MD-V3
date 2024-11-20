//======================= system command ======================
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')

cmd({
    pattern: "system",
    alias: ["status","botinfo"],
    desc: "check up time",
    category: "main",
    react: "📟",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{ 

let status =`┌────────────────────
    *├ ⏰Runtime:-  ${runtime(process.uptime())}*    
    *├ 📟Ram usage:- ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB*
    *├ ⚙️Platform:- ${os.hostname()}*
    *├ 👨‍💻Owner:- Sanuja Pahasara*   
    *├ 👾Version:- 1.0.0*
    └───────────────────────
`
return reply(`${status}`)
}catch(e){
console.log(e)
reply(`${e}`)
}
})


//=================== ping command =======================
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')

cmd({
    pattern: "ping",
    react: "⚡",
    alias: ["speed"],
    desc: "Check bot\'s ping",
    category: "main",
    use: '.ping',
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
var inital = new Date().getTime();
let ping = await conn.sendMessage(from , { text: '```Pinging To index.js!!!```'  }, { quoted: mek } )
var final = new Date().getTime();
return await conn.edit(ping, '*Pong*\n *' + (final - inital) + ' ms* ' )
} catch (e) {
reply(`${e}`)
console.log(e)
}
})


//================ run time ======================
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')

cmd({
    pattern: "status",
    alias: ["runtime","botinfo"],
    desc: "check up time",
    category: "main",
    react: "⏰",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{ 

let status =` *🚀 Runtime:-  ${runtime(process.uptime())}* `
return reply(`${status}`)
}catch(e){
console.log(e)
reply(`${e}`)
}
})
