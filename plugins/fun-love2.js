import fs from 'fs';
import path from 'path';

let handler = async (m, { conn }) => {
    let who;

    // Determinamos quién fue mencionado o citado
    if (m.mentionedJid && m.mentionedJid.length > 0) {
        who = m.mentionedJid[0]; // Si hay mención
    } else if (m.quoted) {
        who = m.quoted.sender; // Si hay un mensaje citado
    } else {
        who = m.sender; // Si no hay mención ni cita
    }

    if (!who) throw '❕️ ¡Etiqueta o menciona a alguien!';

    let name = conn.getName(who) || 'alguien';
    let name2 = conn.getName(m.sender) || 'tú';
    m.react('🤡'); // Reacción actualizada

    // Mensaje construido
    let str = `\`${name2}\` está enamorad@ de \`${name}\` ❤️`;

    // Lista de videos
    let videos = [
        'https://telegra.ph/file/5fbd60c40ab190ecc8e1c.mp4',
        'https://telegra.ph/file/ca30d358d292674698b40.mp4',
        'https://telegra.ph/file/25f88386dd7d4d6df36fa.mp4',
        'https://telegra.ph/file/eb63131df0de6b47c7ab7.mp4',
        'https://telegra.ph/file/209990ee46c645506a5fc.mp4',
        'https://telegra.ph/file/440f276fcbb2d04cbf1d1.mp4',
        'https://telegra.ph/file/42cea67d9b013ed9a9cd0.mp4',
        'https://telegra.ph/file/bc0f47b8f3fb9470bc918.mp4',
        'https://telegra.ph/file/79ae875090b64ab247b7a.mp4',
        'https://telegra.ph/file/63222faf293e9d086f607.mp4'
    ];

    const video = videos[Math.floor(Math.random() * videos.length)]; // Selección aleatoria del video

    // Envío del video con mención
    await conn.sendMessage(m.chat, { 
        video: { url: video }, 
        gifPlayback: true, 
        caption: str, 
        mentions: [who] 
    }, { quoted: m });
};

handler.help = ['enamorada @tag'];
handler.tags = ['fun'];
handler.command = ['love2', 'enamorada', 'enamorado'];
handler.group = true;

export default handler;
