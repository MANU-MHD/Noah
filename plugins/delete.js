const Pnky = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const DEL_DESC = "Deletes replied message! (owner command)"

Pnky.addCommand({pattern: 'del', fromMe: true, desc: DEL_DESC}, (async (multidevice, match) => {
await multidevice.client.deleteMessage(multidevice.jid, {id: multidevice.reply_message.id, remoteJid: multidevice.reply_message.jid, fromMe: true})
}));
