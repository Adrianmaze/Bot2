let handler = async (m, { isPrems, conn }) => {
let time = global.db.data.users[m.sender].lastcofre + 0 // 36000000 10 Horas //86400000 24 Horas
if (new Date - global.db.data.users[m.sender].lastcofre < 0) throw `[❗𝐈𝐍𝐅𝐎❗] 𝚈𝙰 𝚁𝙴𝙲𝙻𝙰𝙼𝙰𝚂𝚃𝙴 𝚃𝚄 𝙲𝙾𝙵𝚁𝙴\𝚗𝚅𝚄𝙴𝙻𝚅𝙴 𝙴𝙽 *${msToTime(time - new Date())}* 𝙿𝙰𝚁𝙰 𝚅𝙾𝙻𝚅𝙴𝚁 𝙰 𝚁𝙴𝙲𝙻𝙰𝙼𝙰𝚁`

let img = 'https://i.ibb.co/dP7G5Yg/file.jpg' 
let texto = `𝙂𝙪𝙞𝙖

*𝘈𝘥𝘮𝘪𝘯𝘪𝘴𝘵𝘳𝘢𝘤𝘪𝘰́𝘯*

1 .𝘰𝘯/𝘰𝘧𝘧 𝘢𝘶𝘥𝘪𝘰𝘴 
*( 𝘋𝘦𝘴/𝘈𝘤𝘵𝘪𝘷𝘢 𝘭𝘰𝘴 𝘢𝘶𝘥𝘪𝘰𝘴 𝘥𝘦𝘭 .𝘔𝘦𝘯𝘶𝟤 ).*
2 .𝘰𝘯/𝘰𝘧𝘧 𝘮𝘰𝘥𝘰𝘢𝘥𝘮𝘪𝘯 
*( 𝘋𝘦𝘴/𝘈𝘤𝘵𝘪𝘷𝘢 𝘦𝘭 𝘉𝘰𝘵 𝘴𝘰𝘭𝘰 𝘱𝘢𝘳𝘢 𝘢𝘥𝘮𝘪𝘯𝘪𝘴𝘵𝘳𝘢𝘥𝘰𝘳𝘦𝘴 ).*
3 .𝘰𝘯/𝘰𝘧𝘧 𝘸𝘦𝘭𝘤𝘰𝘮𝘦 
*( 𝘋𝘦𝘴/𝘈𝘤𝘵𝘪𝘷𝘢 𝘓𝘢 𝘉𝘪𝘦𝘯𝘷𝘦𝘯𝘪𝘥𝘢 𝘋𝘦𝘭 𝘎𝘳𝘶𝘱𝘰 ).*
4 .𝘨𝘳𝘶𝘱𝘰 𝘢𝘣𝘳𝘪𝘳/𝘤𝘦𝘳𝘳𝘢𝘳 
*( 𝘊𝘢𝘮𝘣𝘪𝘢 𝘭𝘰𝘴 𝘱𝘦𝘳𝘮𝘪𝘴𝘰𝘴 𝘱𝘢𝘳𝘢 𝘦𝘴𝘤𝘳𝘪𝘣𝘪𝘳 𝘥𝘦𝘯𝘵𝘳𝘰 𝘥𝘦𝘭 𝘎𝘳𝘶𝘱𝘰 ).*

*𝘔𝘰𝘥𝘦𝘳𝘢𝘤𝘪𝘰́𝘯*

1 .𝘴𝘦𝘵𝘸𝘦𝘭𝘤𝘰𝘮𝘦 
*( 𝘌𝘥𝘪𝘵𝘢 𝘓𝘢 𝘉𝘪𝘦𝘯𝘷𝘦𝘯𝘪𝘥𝘢 𝘥𝘦𝘭 𝘎𝘳𝘶𝘱𝘰 ).*
2 .𝘴𝘦𝘵𝘣𝘺𝘦
*( 𝘌𝘥𝘪𝘵𝘢 𝘓𝘢 𝘋𝘦𝘴𝘱𝘦𝘥𝘪𝘥𝘢 𝘥𝘦𝘭 𝘎𝘳𝘶𝘱𝘰 ).*
3 .𝘱𝘳𝘰𝘮𝘰𝘵𝘦 @𝘶𝘴𝘦𝘳 
 *(𝘥𝘢 𝘢𝘥𝘮𝘪𝘯 𝘢 𝘢𝘭𝘨𝘶𝘪𝘦𝘯)*
4 .𝘥𝘦𝘮𝘰𝘵𝘦 @𝘶𝘴𝘦𝘳 
*(𝘳𝘦𝘵𝘪𝘳𝘢 𝘢𝘥𝘮𝘪𝘯 𝘢 𝘢𝘭𝘨𝘶𝘪𝘦𝘯)*
5 .𝘴𝘦𝘵𝘳𝘦𝘨𝘭𝘢𝘴 
*( 𝘌𝘥𝘪𝘵𝘢 𝘓𝘢𝘴 𝘳𝘦𝘨𝘭𝘢𝘴 𝘋𝘦𝘭 𝘎𝘳𝘶𝘱𝘰 𝘠 𝘭𝘢𝘴 𝘦𝘯𝘷𝘪́𝘢 𝘤𝘰𝘯 .𝘳𝘦𝘨𝘭𝘢𝘴 ).*


*𝘈𝘤𝘤𝘪𝘰𝘯𝘦𝘴*

1 .𝘮𝘦𝘯𝘶 
*( 𝘔𝘦𝘯𝘶 𝘊𝘰𝘮𝘱𝘭𝘦𝘵𝘰 ).* 
2 .𝘮𝘦𝘯𝘶𝟤
*( 𝘔𝘦𝘯𝘶 𝘋𝘦 𝘈𝘶𝘥𝘪𝘰𝘴 ).*
3 .𝘮𝘦𝘯𝘶𝟥
*( 𝘔𝘦𝘯𝘶 𝘥𝘦 𝘓𝘰𝘨𝘰𝘴 )*
4 .𝘮𝘦𝘯𝘶𝟦
*( 𝘔𝘦𝘯𝘶 𝘥𝘦 𝘍𝘳𝘦𝘦 𝘍𝘪𝘳𝘦 )*
 .𝘥𝘦𝘭
*( 𝘌𝘭𝘪𝘮𝘪𝘯𝘢 𝘦𝘭 𝘮𝘦𝘯𝘴𝘢𝘫𝘦 𝘥𝘦 𝘢𝘭𝘨𝘶𝘪𝘦𝘯 )*
 .𝘧𝘢𝘯𝘵𝘢𝘴𝘮𝘢𝘴
*( 𝘓𝘪𝘴𝘵𝘢 𝘥𝘦 𝘪𝘯𝘢𝘤𝘵𝘪𝘷𝘰𝘴 𝘋𝘦𝘯𝘵𝘳𝘰 𝘥𝘦𝘭 𝘎𝘳𝘶𝘱𝘰 )* 
 .𝘵𝘰𝘥𝘰𝘴
*( 𝘌𝘵𝘪𝘲𝘶𝘦𝘵𝘢 𝘨𝘦𝘯𝘦𝘳𝘢𝘭 𝘤𝘰𝘯 𝘮𝘦𝘯𝘤𝘪𝘰́𝘯 )*
 .𝘯𝘰𝘵𝘪
 *( 𝘌𝘵𝘪𝘲𝘶𝘦𝘵𝘢 𝘴𝘪𝘯 𝘮𝘦𝘯𝘤𝘪𝘰́𝘯 )*`

const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}
await conn.sendFile(m.chat, img, 'img.jpg', texto, fkontak)
global.db.data.users[m.sender].lastcofre = new Date * 1
}
handler.help = ['guía']
handler.tags = ['group']
handler.command = ['guia', 'guía'] 
export default handler
