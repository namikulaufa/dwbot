"use strict";
const { MessageType } = require("@adiwajshing/baileys");
const { serialize, sleep, getBuffer, runtime } = require("../../../lib/rojaktype");
const { kyun, time, WIB, WITA, WIT, weton, week, date, waktu, tanggal, formatDate, count } = require("../../../lib/moment.js");

module.exports = async(m) => {
if (!m.hasNewMessage) return
      m = m.messages.all()[0]

// Anti Oversize
if (m.messageStubType) {
if (m.messageStubType == 68) {
      conn.clearMessage(m.key)
     }
}

// Control Conn
if (!m.message) return
if (m.key && m.key.remoteJid == 'status@broadcast') return
      let msg = serialize(conn, m)

// Detect Troli
if (msg.message && msg.isBaileys && msg.isQuotedMsg && msg.quotedMsg.type === 'orderMessage') {
      conn.clearMessage(msg.key)
     }
     try {
                   const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product, ListMessage, buttonsMessage } = MessageType;
                   const { type, quotedMsg, isGroup, isQuotedMsg, mentioned, sender, from, fromMe, pushname, chats, budy, isBaileys } = msg;
                   const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = conn.user.phone;
                            global.getText = require('../../../lib/keep.js')
                            global.getGroupAdmins = function(participants) {
                               admins = []
                               for (let i of participants) {
                               i.isAdmin ? admins.push(i.jid) : ''
                             }
                           return conn.admins
                         }
                         
const timestamp = Ft.speed();
const latensi = Ft.speed() - timestamp;

        if (isBaileys) return
            let x = 1;
            const args = chats.split(' ')
            const command = chats.toLowerCase().split(' ')[0] || ''
        
        if (conn.multi) {
               var prefix = /^[°•π÷×¶∆£¢€¥®™✓=|!?#%^&.+-,\/\\©^]/.test(command) ? command.match(/^[°•π÷×¶∆£¢€¥®™✓=|!?#$%^&.+-,\/\\©^]/gi) : '#'
                  } else {
                    if (conn.nopref) {
                         prefix = ''
                    } else {
                         prefix = conn.prefa
                           }
                        }
                  try {
                         var img = await conn.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
                    } catch {
                         var img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPf7ddd8KiWOdrwLSDoBdWnScTp1jiDZOENQ&usqp=CAUl'
                        }
                        
                        // Commander
                        const buff = await getBuffer(img)
                        const isCmd = command.startsWith(prefix)
                        const q = chats.slice(command.length + 1, chats.length)
                        const body = chats.startsWith(prefix) ? chats : ''
                        const setArrayNumber = [ "6281261324817" ]
                        const ownerArray = setArrayNumber + '@s.whatsapp.net'
                        const botNumber = conn.user.jid
                        
                        // Metadata
                        const groupMetadata = isGroup ? await conn.groupMetadata(from) : ''
                        const groupName = isGroup ? groupMetadata.subject : ''
                        const groupId = isGroup ? groupMetadata.jid : ''
                        const groupMembers = isGroup ? groupMetadata.participants : ''
                        const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
                        
                        // Admin
                        const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
                        const isGroupAdmins = groupAdmins.includes(sender) || false
                        const isOwnerArray = ownerArray.includes(sender)
                        
                        // Setting
                        const isListMessage = (type == 'listResponseMessage') ? msg.message.listResponseMessage.title : ''
                        const isListMessageButton = (type == 'listResponseMessage') ? msg.message.listResponseMessage.singleSelectReply.selectedRowId : ''
       
       if (isListMessageButton === 'abdulqodir1') {
            let caption = getText.abdulqodir1()
            conn.sendButton(from, caption, "Dibuat Oleh: Arifi Razzaq", "Lanjut Baca", "abdulqodir2", { quoted: msg })
            }
       if (isListMessageButton === 'sunanampel1') {
            let caption = getText.sunanampel()
            conn.sendButton(from, caption, "Dibuat Oleh: Arifi Razzaq", "Lanjut Baca", "sunanampel2", { quoted: msg })
            }
       if (isListMessageButton === 'sunanbonang1') {
            let caption = getText.sunanbonang()
            conn.sendButton(from, caption, "Dibuat Oleh: Arifi Razzaq", "Lanjut Baca", "sunanbonang2", { quoted: msg })
            }
       if (isListMessageButton === 'sunankalijaga1') {
            let caption = getText.sunankalijaga()
            conn.sendButton(from, caption, "Dibuat Oleh: Arifi Razzaq", "Lanjut Baca", "sunankalijaga2", { quoted: msg })
            }
            
       if (isListMessageButton === 'namamaulanamaghribi') {
            let caption = getText.namamaulanamaghribi()
            conn.sendButtonLoc(from, await ( await Ft.fetch("https://i.ibb.co/0CHVYts/sunan-muria.webp")).buffer(), caption, "Dibuat Oleh: Arifi Razzaq", 'DAFTAR NAMA', 'daftarnamawalisongo', msg) 
            }
       if (isListMessageButton === 'namasunanampel') {
            let caption = getText.namasunanampel()
            conn.sendButtonLoc(from, await ( await Ft.fetch("https://i.ibb.co/0CHVYts/sunan-muria.webp")).buffer(), caption, "Dibuat Oleh: Arifi Razzaq", 'DAFTAR NAMA', 'daftarnamawalisongo', msg) 
            }
       if (isListMessageButton === 'namasunanbonang') {
            let caption = getText.namasunanbonang()
            conn.sendButtonLoc(from, await ( await Ft.fetch("https://i.ibb.co/0CHVYts/sunan-muria.webp")).buffer(), caption, "Dibuat Oleh: Arifi Razzaq", 'DAFTAR NAMA', 'daftarnamawalisongo', msg) 
            }
       if (isListMessageButton === 'namasunandrajat') {
            let caption = getText.namasunandrajat()
            conn.sendButtonLoc(from, await ( await Ft.fetch("https://i.ibb.co/0CHVYts/sunan-muria.webp")).buffer(), caption, "Dibuat Oleh: Arifi Razzaq", 'DAFTAR NAMA', 'daftarnamawalisongo', msg) 
            }
       if (isListMessageButton === 'namasunangiri') {
            let caption = getText.namasunangiri()
            conn.sendButtonLoc(from, await ( await Ft.fetch("https://i.ibb.co/0CHVYts/sunan-muria.webp")).buffer(), caption, "Dibuat Oleh: Arifi Razzaq", 'DAFTAR NAMA', 'daftarnamawalisongo', msg) 
            }
       if (isListMessageButton === 'namasunankalijaga') {
            let caption = getText.namasunankalijaga()
            conn.sendButtonLoc(from, await ( await Ft.fetch("https://i.ibb.co/0CHVYts/sunan-muria.webp")).buffer(), caption, "Dibuat Oleh: Arifi Razzaq", 'DAFTAR NAMA', 'daftarnamawalisongo', msg) 
            }
       if (isListMessageButton === 'namasunankudus') {
            let caption = getText.namasunankudus()
            conn.sendButtonLoc(from, await ( await Ft.fetch("https://i.ibb.co/0CHVYts/sunan-muria.webp")).buffer(), caption, "Dibuat Oleh: Arifi Razzaq", 'DAFTAR NAMA', 'daftarnamawalisongo', msg) 
            }
       if (isListMessageButton === 'namasunanmuria') {
            let caption = getText.namasunanmuria()
            conn.sendButtonLoc(from, await ( await Ft.fetch("https://i.ibb.co/0CHVYts/sunan-muria.webp")).buffer(), caption, "Dibuat Oleh: Arifi Razzaq", 'DAFTAR NAMA', 'daftarnamawalisongo', msg) 
            }
       if (isListMessageButton === 'namasunangunungjati') {
            let caption = getText.namasunangunungjati()
            conn.sendButtonLoc(from, await ( await Ft.fetch("https://i.ibb.co/0CHVYts/sunan-muria.webp")).buffer(), caption, "Dibuat Oleh: Arifi Razzaq", 'DAFTAR NAMA', 'daftarnamawalisongo', msg) 
            }
            
       if (isListMessageButton === 'perkarayangmewajibkanmandi') {
            let caption = getText.perkarayangmewajibkanmandi()
            conn.sendButtonLoc(from, await ( await Ft.fetch("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT34uCiJT85-xIo6ihyN2CtndDQmB2VXH_rkw&usqp=CAU")).buffer(), caption, "Dibuat Oleh: Arifi Razzaq", 'DAFTAR HALAMAN', 'mandiwajib', msg) 
            }
       if (isListMessageButton === 'rukunfardhumandi') {
            let caption = getText.rukunfardhumandi()
            conn.sendButtonLoc(from, await ( await Ft.fetch("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT34uCiJT85-xIo6ihyN2CtndDQmB2VXH_rkw&usqp=CAU")).buffer(), caption, "Dibuat Oleh: Arifi Razzaq", 'DAFTAR HALAMAN', 'mandiwajib', msg) 
            }
       if (isListMessageButton === 'keadaanyangdisunnahkanmandi') {
            let caption = getText.keadaanyangdisunnahkanmandi()
            conn.sendButtonLoc(from, await ( await Ft.fetch("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT34uCiJT85-xIo6ihyN2CtndDQmB2VXH_rkw&usqp=CAU")).buffer(), caption, "Dibuat Oleh: Arifi Razzaq", 'DAFTAR HALAMAN', 'mandiwajib', msg) 
            }
       if (isListMessageButton === 'sunnahsunnahmandi') {
            let caption = getText.sunnahsunnahmandi()
            conn.sendButtonLoc(from, await ( await Ft.fetch("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT34uCiJT85-xIo6ihyN2CtndDQmB2VXH_rkw&usqp=CAU")).buffer(), caption, "Dibuat Oleh: Arifi Razzaq", 'DAFTAR HALAMAN', 'mandiwajib', msg) 
            }
        } catch (err) {
    console.log(Ft.chalk.bold.red('[ERROR]'), err)
    }
}