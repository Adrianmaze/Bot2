import fg from 'api-dylux' 
import fetch from 'node-fetch'
import axios from 'axios'
let handler = async (m, { conn, args, command, usedPrefix }) => {
if (!args[0]) throw `
╭──────⚔──────╮
ㅤㅤㅤ  𝐒𝐂𝐑𝐈𝐌 
╰──────⚔──────╯
╭──────────────╮
│ㅤ⏱ 𝐇𝐎𝐑𝐀𝐑𝐈𝐎 
│ㅤ🇲🇽 𝐌𝐄𝐗 : 
│ㅤ🇨🇴 𝐂𝐎𝐋 : 
│➥ 𝐌𝐎𝐃𝐀𝐋𝐈𝐃𝐀𝐃: 
│➥ 𝐉𝐔𝐆𝐀𝐃𝐎𝐑𝐀𝐒:
│
│     𝗘𝗦𝗖𝗨𝗔𝗗𝗥𝗔 
│
│👑 ➤ 
│👸🏻 ➤ 
│👸🏻 ➤ 
│👸🏻 ➤  
│
│ㅤʚ 𝐒𝐔𝐏𝐋𝐄𝐍𝐓𝐄:
│👸🏻 ➤ 
│👸🏻 ➤ 
╰─────────────
                 
` 
}
handler.help = ['scrim']
handler.tags = ['freefire']
handler.command = /^(scrim)$/i
handler.group = true
handler.admin = true
export default handler
