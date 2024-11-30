import fetch from 'node-fetch'

let handler  = async (m, { conn, usedPrefix, command }) => {
let img = await (await fetch(`https://d.uguu.se/dRTMOLYM.jpg`)).buffer()
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
let txt = `𝘛𝘦 𝘪𝘯𝘷𝘪𝘵𝘢𝘮𝘰𝘴 𝘢 𝘯𝘶𝘦𝘴𝘵𝘳𝘰𝘴 𝘨𝘳𝘶𝘱𝘰𝘴 𝘰𝘧𝘪𝘤𝘪𝘢𝘭𝘦𝘴. 🌸
> 𝐃𝐀𝐑𝐋𝐘 𝐁𝐎𝐓 ᡣ𐭩  

*🎌* ${group}

> 📫 Enlace anulado? entre aquí! 

Canal :

*🏷️* ${canal}

> 🚩 ${textbot}`
await conn.sendFile(m.chat, img, "Thumbnail.jpg", txt, m, null, rcanal)
}
handler.help = ['grupos']
handler.tags = ['main']
handler.command = /^(grupos)$/i
export default handler
