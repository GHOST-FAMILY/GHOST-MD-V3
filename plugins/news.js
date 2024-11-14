//======================= news command ====================
//=========================================================

const { fetchJson } = require('../lib/functions')

const apilink = 'https://dark-yasiya-news-apis.vercel.app/api' // API LINK ( DO NOT CHANGE THIS!! )


// ========HIRU NEWS

cmd({
    pattern: "hirunews",
    alias: ["hiru","news1"],
    react: "☀️",
    desc: "",
    category: "news",
    use: '.hirunews',
    filename: __filename
},
async(conn, mek, m,{from, quoted }) => {
try{

const news = await fetchJson(`${apilink}/hiru`)
  
const msg = `
           ☀️ *QUEEN-CHOOTY-NELUMI-MD HIRU NEWS* ☀️

       
• *Title* - ${news.result.title}

• *News* - ${news.result.desc}

• *Link* - ${news.result.url}

> *Qᴜᴇᴇɴ ᴄʜᴏᴏᴛʏ ɴᴇʟᴜᴍɪ ᴍᴅ*`


await conn.sendMessage( from, { image: { url: news.result.image || 'https://i.ibb.co/vJhwvYf/Rf-Y1-Cy4-X9914.jpg' }, caption: msg }, { quoted: mek })
} catch (e) {
console.log(e)
reply(e)
}
})

// ===========SIRASA NEWS

cmd({
    pattern: "sirasanews",
    alias: ["sirasa","news2"],
    react: "🔺",
    desc: "",
    category: "news",
    use: '.sirasa',
    filename: __filename
},
async(conn, mek, m,{from, quoted }) => {
try{

const news = await fetchJson(`${apilink}/sirasa`)
  
const msg = `
           🔺 *QUEEN-CHOOTY-NELUMI-MD SIRASA NEWS* 🔺 

       
• *Title* - ${news.result.title}

• *News* - ${news.result.desc}

• *Link* - ${news.result.url}

> *Qᴜᴇᴇɴ ᴄʜᴏᴏᴛʏ ɴᴇʟᴜᴍɪ ᴍᴅ*`


await conn.sendMessage( from, { image: { url: news.result.image || 'https://i.ibb.co/vJhwvYf/Rf-Y1-Cy4-X9914.jpg' }, caption: msg }, { quoted: mek })
} catch (e) {
console.log(e)
reply(e)
}
})

// ========DERANA NEWS

cmd({
    pattern: "derananews",
    alias: ["derana","news3"],
    react: "🌹",
    desc: "",
    category: "news",
    use: '.derana',
    filename: __filename
},
async(conn, mek, m,{from, quoted }) => {
try{

const news = await fetchJson(`${apilink}/derana`)
  
const msg = `
           🌹 *QUEEN-CHOOTY-NELUMI-MD DERANA NEWS* 🌹

       
• *Title* - ${news.result.title}

• *News* - ${news.result.desc}

• *Date* - ${news.result.date}

• *Link* - ${news.result.url} 

> *Qᴜᴇᴇɴ ᴄʜᴏᴏᴛʏ ɴᴇʟᴜᴍɪ ᴍᴅ*`


await conn.sendMessage( from, { image: { url: news.result.image || 'https://i.ibb.co/vJhwvYf/Rf-Y1-Cy4-X9914.jpg' }, caption: msg }, { quoted: mek })
} catch (e) {
console.log(e)
reply(e)
}
})
