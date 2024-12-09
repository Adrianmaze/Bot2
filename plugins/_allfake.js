import fetch from 'node-fetch'

export async function before(m, { conn }) {
//let img = await (await fetch(`https://tinyurl.com/2c5hk765`)).buffer()
let img = catalogo
 global.fake = {
    contextInfo: {
    	isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: "120363299667225383@newsletter",
      serverMessageId: 100,
      newsletterName: '「  𝑺𝑰𝑺𝑲𝑬𝑫 - 𝑪𝑯𝑨𝑵𝑬𝑳  」',
    },
	    externalAdReply: {
				    showAdAttribution: true,
					title: botname,
					body: 'Hola',
					mediaUrl: null,
					description: null,
					previewType: "PHOTO",
					thumbnailUrl: 'https://qu.ax/FNsw.jpg',
		           sourceUrl: canal,
		           mediaType: 1,
                   renderLargerThumbnail: false
	    },
    },
  }

 global.adReply = {
	    contextInfo: { 
             forwardingScore: 9999, 
                 isForwarded: false, 
                    externalAdReply: {
				    showAdAttribution: true,
					title: botname,
					body: textbot,
					mediaUrl: null,
					description: null,
					previewType: "PHOTO",
					thumbnailUrl: img,
                    thumbnail: img,
		           sourceUrl: canal,
		           mediaType: 1,
                   renderLargerThumbnail: true
				}
			}
		}

global.rcanal = {
contextInfo: {
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: "120363299667225383@newsletter",
serverMessageId: 100,
newsletterName: '「  𝑺𝑰𝑺𝑲𝑬𝑫 - 𝑪𝑯𝑨𝑵𝑬𝑳  」',
},
externalAdReply: { 
showAdAttribution: true,
title: '𝙳𝙰𝚁𝙻𝚈 𝙱𝙾𝚃 ᡣ𐭩',
body: '𝚂𝚞𝚙𝚎𝚛 𝙱𝚘𝚝 𝚍𝚎 𝚆𝚑𝚊𝚝𝚜𝙰𝚙𝚙 🍒',
previewType: "PHOTO",
thumbnailUrl: 'https://i.ibb.co/WFcXVvr/file.jpg',
sourceUrl: 'https://wa.me/qr/OEGLZUMXONHDL1',
mediaType: 1,
renderLargerThumbnail: false
},},}
	
}
