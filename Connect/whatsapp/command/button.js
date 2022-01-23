"use strict";
const { MessageType } = require("@adiwajshing/baileys");
const { serialize, sleep, getBuffer, runtime } = require("../../../lib/rojaktype");
const { kyun, time, WIB, WITA, WIT, weton, week, date, waktu, tanggal, formatDate, count } = require("../../../lib/moment.js");

module.exports = async(m, antilinkgroup) => {
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
                        const isAntilink = isGroup ? antilinkgroup.includes(from) : false
                        
                        // Admin
                        const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
                        const isGroupAdmins = groupAdmins.includes(sender) || false
                        const isOwnerArray = ownerArray.includes(sender)
                        
                        // Setting
                        const isButton = (type == 'buttonsResponseMessage') ? msg.message.buttonsResponseMessage.selectedButtonId : ''

    if (isOwnerArray) {
    if (isButton === 'antiLinkGroupOffButtons') {
    if (!isAntilink) return conn.reply(from, `Sudah Di Nonaktifkan Sebelumnya`, msg);
    antilinkgroup.splice(from, 1);
    Ft.fs.writeFileSync("./database/antilinkgroup.json",JSON.stringify(antilinkgroup));
    conn.reply(from, `Berhasil, Menonaktifkan Fitur Tersebut.`, msg)
    }
}   
    if (isOwnerArray) {
    if (isButton === 'antiLinkGroupOnButtons') {
    if (isAntilink) return conn.reply(from, `Sudah Di Aktifkan Sebelumnya`, msg);
    antilinkgroup.push(from);
    Ft.fs.writeFileSync("./database/antilinkgroup.json",JSON.stringify(antilinkgroup));
    conn.reply(from, `Berhasil, Mengaktifkan Fitur Tersebut`, msg)
    }
}
    if (isButton === 'Menu') {
                 let teks = `› *𝐃 𝐚 𝐤 𝐰 𝐚 𝐡  𝐁 𝐨 𝐭*\n\n`
                 teks += `™🪶 Pencipta: *@${ownerArray.split("@")[0]}*\n`
                 teks += `™🛍️ pengunjung: *${conn.pengunjung.length} Orang*\n\n`
                 let menu = getText.menu(prefix, x)
            if (conn.modelmenu == "loc") {
            conn.send3ButtonLoc(from, buff, teks + menu, 'Dibuat Oleh: Arifi Razzaq', 'DEVELOPER', 'creator', 'CHANGELOG', 'Changelog', 'CREDITS', 'credits', msg, { contextInfo: { mentionedJid: [ownerArray] 
            } 
            })
            } else if (conn.modelmenu == "katalogv2") {
                 let teks = `› *𝐃 𝐚 𝐤 𝐰 𝐚 𝐡  𝐁 𝐨 𝐭*\n\n`
                 teks += `™🪶 Pencipta: *Arifi Razzaq*\n`
                 teks += `™🛍️ pengunjung: *${conn.pengunjung.length} Orang*\n\n`
                 let menu = getText.menu(prefix, x)
                 let imgs = await conn.prepareMessage('0@c.us', buff, MessageType.image, { thumbnail: await getBuffer("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR39SN-YtBOJfeqSC04tMhiw2N--1I7QpQQ5w&usqp=CAU") })
                 let imgCatalog = imgs.message.imageMessage
                 let ctlg = await conn.prepareMessageFromContent(from, { "productMessage": { "product": { "productImage": imgCatalog, "productId": "4715716298440452", "title": `𝗠𝗘𝗡𝗨 𝗖𝗔𝗧𝗔𝗟𝗢𝗚 𝗣𝗥𝗢𝗗𝗨𝗖𝗧`, "description": teks + menu, "footerText": "Dibuat Oleh: Arifi Razzaq", "currencyCode": "IDR", "priceAmount1000": "100000000","productImageCount": 1, "firstImageId": 1, "salePriceAmount1000": "35000000","retailerId": "Dibuat Oleh: Arifi Razzaq", "url": "https://github.com/Arifirazzaq2001" 
            }, "businessOwnerJid": "6281261324817@s.whatsapp.net" 
            }}, { quoted: msg, mimetype: 'image/jpeg' 
            })
            conn.relayWAMessage(ctlg)
            } else if (conn.modelmenu == "katalogv1") {
                 let teks = `› *𝐃 𝐚 𝐤 𝐰 𝐚 𝐡  𝐁 𝐨 𝐭*\n\n`
                 teks += `™🪶 Pencipta: *@${ownerArray.split("@")[0]}*\n`
                 teks += `™🛍️ pengunjung: *${conn.pengunjung.length} Orang*\n\n`
                 let menu = getText.menu(prefix, x)
                 let res = conn.prepareMessageFromContent(from, { "orderMessage": { "itemCount": 321, "message": teks + menu, "thumbnail": buff, "surface": 'CATALOG' 
            }}, { quoted:msg
            })
            conn.relayWAMessage(res)
            } else if (conn.modelmenu == "pptx") {
                 let teks = `› *𝐃 𝐚 𝐤 𝐰 𝐚 𝐡  𝐁 𝐨 𝐭*\n\n`
                 teks += `™🪶 Pencipta: *@${ownerArray.split("@")[0]}*\n`
                 teks += `™🛍️ pengunjung: *${conn.pengunjung.length} Orang*\n\n`
                 let menu = getText.menu(prefix, x)
            conn.sendMessage(from, { contentText: teks + menu, buttons: [{buttonId: 'Credits', buttonText: {displayText: 'Credits️'}, type: 1},{buttonId: 'Rules', buttonText: {displayText: 'Rules'}, type: 1},{buttonId: 'Changelog' , buttonText: {displayText: 'Changelog'}, type: 1}], "headerType": "DOCUMENT", "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/Ano5cGYOFQnC51uJaqGBWiCrSJH1aDCi8-YPQMMb1N1y.enc", "mimetype": "application/vnd.openxmlformats-officedocument.presentationml.presentation", "title": "Dibuat Oleh: Arifi Razzaq", "fileSha256": "8Xfe3NQDhjwVjR54tkkShLDGrIFKR9QT5EsthPyxDCI=", "fileLength": 999999999999, "pageCount": 999, "mediaKey": "XWv4hcnpGY51qEVSO9+e+q6LYqPR3DbtT4iqS9yKhkI=", "fileName": "Arifi Razzaq", "fileEncSha256": "NI9ykWUcXKquea4BmH7GgzhMb3pAeqqwE+MTFbH/Wk8=", "directPath": "/v/t62.7119-24/35160407_568282564396101_3119299043264875885_n.enc?ccb=11-4&oh=d43befa9a76b69d757877c3d430a0752&oe=61915CEC", "mediaKeyTimestamp": "1634472176", "jpegThumbnail": buff 
            }}, MessageType.buttonsMessage, { quoted: msg, thumbnail: await getBuffer("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaKMd-u03_y51D3P8-tq_puhYY7JHRZWyi1A&usqp=CAU"), contextInfo: { mentionedJid: [ownerArray], externalAdReply: { title: `${pushname} | ${groupName}`, body: `${tanggal}\n⎇ ${waktu} ${week} ${weton}`, thumbnail: await getBuffer("https://i.ytimg.com/vi/fdgrmZX65zg/hqdefault.jpg"), mediaType:"2", previewType: "VIDEO", mediaUrl: "https://youtu.be/nLEYHaaB6x0"
            }
            }
            })
            } else if (conn.modelmenu == "xlsx") {
                 let teks = `› *𝐃 𝐚 𝐤 𝐰 𝐚 𝐡  𝐁 𝐨 𝐭*\n\n`
                 teks += `™🪶 Pencipta: *@${ownerArray.split("@")[0]}*\n`
                 teks += `™🛍️ pengunjung: *${conn.pengunjung.length} Orang*\n\n`
                 let menu = getText.menu(prefix, x)
            conn.sendMessage(from, { contentText: teks + menu, buttons: [{buttonId: 'Credits', buttonText: {displayText: 'Credits️'}, type: 1},{buttonId: 'Rules', buttonText: {displayText: 'Rules'}, type: 1},{buttonId: 'Changelog' , buttonText: {displayText: 'Changelog'}, type: 1}], "headerType": "DOCUMENT", "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/Ano5cGYOFQnC51uJaqGBWiCrSJH1aDCi8-YPQMMb1N1y.enc", "mimetype": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "title": "Dibuat Oleh: Arifi Razzaq", "fileSha256": "8Xfe3NQDhjwVjR54tkkShLDGrIFKR9QT5EsthPyxDCI=", "fileLength": 999999999999, "pageCount": 999, "mediaKey": "XWv4hcnpGY51qEVSO9+e+q6LYqPR3DbtT4iqS9yKhkI=", "fileName": "Arifi Razzaq", "fileEncSha256": "NI9ykWUcXKquea4BmH7GgzhMb3pAeqqwE+MTFbH/Wk8=", "directPath": "/v/t62.7119-24/35160407_568282564396101_3119299043264875885_n.enc?ccb=11-4&oh=d43befa9a76b69d757877c3d430a0752&oe=61915CEC", "mediaKeyTimestamp": "1634472176", "jpegThumbnail": buff 
            }}, MessageType.buttonsMessage, { quoted: msg, thumbnail: await getBuffer("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtaIwTQXVXMgWbbdAnTgYvnv9HsTgsqkd3Lw&usqp=CAU"), contextInfo: { mentionedJid: [ownerArray], externalAdReply: { title: `${pushname} | ${groupName}`, body: `${tanggal}\n⎇ ${waktu} ${week} ${weton}`, thumbnail: await getBuffer("https://i.ytimg.com/vi/fdgrmZX65zg/hqdefault.jpg"), mediaType:"2", previewType: "VIDEO", mediaUrl: "https://youtu.be/nLEYHaaB6x0"
            }
            }
            })
            } else if (conn.modelmenu == "docx") {
                 let teks = `› *𝐃 𝐚 𝐤 𝐰 𝐚 𝐡  𝐁 𝐨 𝐭*\n\n`
                 teks += `™🪶 Pencipta: *@${ownerArray.split("@")[0]}*\n`
                 teks += `™🛍️ pengunjung: *${conn.pengunjung.length} Orang*\n\n`
                 let menu = getText.menu(prefix, x)
            conn.sendMessage(from, { contentText: teks + menu, buttons: [{buttonId: 'Credits', buttonText: {displayText: 'Credits️'}, type: 1},{buttonId: 'Rules', buttonText: {displayText: 'Rules'}, type: 1},{buttonId: 'Changelog' , buttonText: {displayText: 'Changelog'}, type: 1}], "headerType": "DOCUMENT", "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/Ano5cGYOFQnC51uJaqGBWiCrSJH1aDCi8-YPQMMb1N1y.enc", "mimetype": "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "title": "Dibuat Oleh: Arifi Razzaq", "fileSha256": "8Xfe3NQDhjwVjR54tkkShLDGrIFKR9QT5EsthPyxDCI=", "fileLength": 999999999999, "pageCount": 999, "mediaKey": "XWv4hcnpGY51qEVSO9+e+q6LYqPR3DbtT4iqS9yKhkI=", "fileName": "Arifi Razzaq", "fileEncSha256": "NI9ykWUcXKquea4BmH7GgzhMb3pAeqqwE+MTFbH/Wk8=", "directPath": "/v/t62.7119-24/35160407_568282564396101_3119299043264875885_n.enc?ccb=11-4&oh=d43befa9a76b69d757877c3d430a0752&oe=61915CEC", "mediaKeyTimestamp": "1634472176", "jpegThumbnail": buff 
            }}, MessageType.buttonsMessage, { quoted: msg, thumbnail: await getBuffer("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwrqHk7RvWtWleflcueP6dUDM4FqMaPEtKGiLu_BlJuomLEXK7mE_E3otw&s=10"), contextInfo: { mentionedJid: [ownerArray], externalAdReply: { title: `${pushname} | ${groupName}`, body: `${tanggal}\n⎇ ${waktu} ${week} ${weton}`, thumbnail: await getBuffer("https://i.ytimg.com/vi/fdgrmZX65zg/hqdefault.jpg"), mediaType:"2", previewType: "VIDEO", mediaUrl: "https://youtu.be/nLEYHaaB6x0"
            }
            }
            })
            } else if (conn.modelmenu == "zip") {
                 let teks = `› *𝐃 𝐚 𝐤 𝐰 𝐚 𝐡  𝐁 𝐨 𝐭*\n\n`
                 teks += `™🪶 Pencipta: *@${ownerArray.split("@")[0]}*\n`
                 teks += `™🛍️ pengunjung: *${conn.pengunjung.length} Orang*\n\n`
                 let menu = getText.menu(prefix, x)
            conn.sendMessage(from, { contentText: teks + menu, buttons: [{buttonId: 'Credits', buttonText: {displayText: 'Credits️'}, type: 1},{buttonId: 'Rules', buttonText: {displayText: 'Rules'}, type: 1},{buttonId: 'Changelog' , buttonText: {displayText: 'Changelog'}, type: 1}], "headerType": "DOCUMENT", "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/Ano5cGYOFQnC51uJaqGBWiCrSJH1aDCi8-YPQMMb1N1y.enc", "mimetype": "application/zip", "title": "Dibuat Oleh: Arifi Razzaq", "fileSha256": "8Xfe3NQDhjwVjR54tkkShLDGrIFKR9QT5EsthPyxDCI=", "fileLength": 999999999999, "pageCount": 999, "mediaKey": "XWv4hcnpGY51qEVSO9+e+q6LYqPR3DbtT4iqS9yKhkI=", "fileName": "Arifi Razzaq", "fileEncSha256": "NI9ykWUcXKquea4BmH7GgzhMb3pAeqqwE+MTFbH/Wk8=", "directPath": "/v/t62.7119-24/35160407_568282564396101_3119299043264875885_n.enc?ccb=11-4&oh=d43befa9a76b69d757877c3d430a0752&oe=61915CEC", "mediaKeyTimestamp": "1634472176", "jpegThumbnail": buff 
            }}, MessageType.buttonsMessage, { quoted: msg, thumbnail: await getBuffer("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbKOLjsiQ7o5oB0mj1VtCbWffMX-8PVS8Rl9CbbHmU-NO71Oev4qyboNcC&s=10"), contextInfo: { mentionedJid: [ownerArray], externalAdReply: { title: `${pushname} | ${groupName}`, body: `${tanggal}\n⎇ ${waktu} ${week} ${weton}`, thumbnail: await getBuffer("https://i.ytimg.com/vi/fdgrmZX65zg/hqdefault.jpg"), mediaType:"2", previewType: "VIDEO", mediaUrl: "https://youtu.be/nLEYHaaB6x0"
            }
            }
            })
            } else if (conn.modelmenu == "pdf") {
                 let teks = `› *𝐃 𝐚 𝐤 𝐰 𝐚 𝐡  𝐁 𝐨 𝐭*\n\n`
                 teks += `™🪶 Pencipta: *@${ownerArray.split("@")[0]}*\n`
                 teks += `™🛍️ pengunjung: *${conn.pengunjung.length} Orang*\n\n`
                 let menu = getText.menu(prefix, x)
            conn.sendMessage(from, { contentText: teks + menu, buttons: [{buttonId: 'Credits', buttonText: {displayText: 'Credits️'}, type: 1},{buttonId: 'Rules', buttonText: {displayText: 'Rules'}, type: 1},{buttonId: 'Changelog' , buttonText: {displayText: 'Changelog'}, type: 1}], "headerType": "DOCUMENT", "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/Ano5cGYOFQnC51uJaqGBWiCrSJH1aDCi8-YPQMMb1N1y.enc", "mimetype": "application/pdf", "title": "Dibuat Oleh: Arifi Razzaq", "fileSha256": "8Xfe3NQDhjwVjR54tkkShLDGrIFKR9QT5EsthPyxDCI=", "fileLength": 999999999999, "pageCount": 999, "mediaKey": "XWv4hcnpGY51qEVSO9+e+q6LYqPR3DbtT4iqS9yKhkI=", "fileName": "Arifi Razzaq", "fileEncSha256": "NI9ykWUcXKquea4BmH7GgzhMb3pAeqqwE+MTFbH/Wk8=", "directPath": "/v/t62.7119-24/35160407_568282564396101_3119299043264875885_n.enc?ccb=11-4&oh=d43befa9a76b69d757877c3d430a0752&oe=61915CEC", "mediaKeyTimestamp": "1634472176", "jpegThumbnail": buff 
            }}, MessageType.buttonsMessage, { quoted: msg, thumbnail: await getBuffer("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS33v_ivd5ki8-fH77dAleGXaj4x6lbrjnFQA&usqp=CAU"), contextInfo: { mentionedJid: [ownerArray], externalAdReply: { title: `${pushname} | ${groupName}`, body: `${tanggal}\n⎇ ${waktu} ${week} ${weton}`, thumbnail: await getBuffer("https://i.ytimg.com/vi/fdgrmZX65zg/hqdefault.jpg"), mediaType:"2", previewType: "VIDEO", mediaUrl: "https://youtu.be/nLEYHaaB6x0"
            }
            }
            })
            } else if (conn.modelmenu == "original") {
                 let teks = `› *𝐃 𝐚 𝐤 𝐰 𝐚 𝐡  𝐁 𝐨 𝐭*\n\n`
                 teks += `™🪶 Pencipta: *@${ownerArray.split("@")[0]}*\n`
                 teks += `™🛍️ pengunjung: *${conn.pengunjung.length} Orang*\n\n`
                 let menu = getText.menu(prefix, x)
            conn.sendMessage(from, teks + menu, extendedText, { quoted: msg, contextInfo: { mentionedJid: [ownerArray] 
            } 
            })
            } else {
                 let teks2 = `Silahkan Setting Menu Terlebih Dahulu, Agar Menu Bisa Ditampilkan.\n`
                 teks2 += `Pilih Type Menu di bawah Ini:\n\n`
                 teks2 += `• original\n`
                 teks2 += `• loc\n`
                 teks2 += `• pdf\n`
                 teks2 += `• zip\n`
                 teks2 += `• pptx\n`
                 teks2 += `• xlsx\n`
                 teks2 += `• docx\n`
                 teks2 += `• katalogv1\n`
                 teks2 += `• katalogv2\n\n`
                 teks2 += `Cara Penggunan :\n`
                 teks2 += `${prefix}setmenu loc\n`
            conn.sendMessage(from, teks2, extendedText, { quoted: msg, contextInfo: { mentionedJid: [ownerArray] 
            } 
            })
            }
         }
         
    if (isButton === 'abdulqodir2') {
            let caption = getText.abdulqodir2()
            conn.sendButton(from, caption, "Dibuat Oleh: Arifi Razzaq", "Lanjut Baca", "abdulqodir3", { quoted: msg })
            }
    if (isButton === 'abdulqodir3') {
            let caption = getText.abdulqodir3()
            conn.sendButton(from, caption, "Dibuat Oleh: Arifi Razzaq", "Menu", "Menu", { quoted: msg })
            }
    if (isButton === 'sunanampel2') {
            let caption = getText.sunanampel2()
            conn.sendButton(from, caption, "Dibuat Oleh: Arifi Razzaq", "Menu", "Menu", { quoted: msg })
            }
    if (isButton === 'sunanbonang2') {
            let caption = getText.sunanbonang2()
            conn.sendButton(from, caption, "Dibuat Oleh: Arifi Razzaq", "Menu", "Menu", { quoted: msg })
            }
    if (isButton === 'sunankalijaga2') {
            let caption = getText.sunankalijaga2()
            conn.sendButton(from, caption, "Dibuat Oleh: Arifi Razzaq", "Menu", "Menu", { quoted: msg })
            }
    if (isButton === 'Dashboard') {
            let asu = `total commands ${Object.keys(conn.Events).length}\n\n`
            for (i in db.data) {
            asu += `-${i}: ${db.data[i]}\n`
            }
            conn.reply(from, asu.trim(), msg)
            }
    if (isButton === 'Donasi') {
            let teks = getText.donasi()
            conn.sendButtonLoc(from, buff, teks, "Dibuat Oleh: Arifi Razzaq", 'Menu', 'Menu', msg) 
    }
    if (isButton === 'Changelog') {
            let changelog = conn.config.changelog
            let pkgg = require('../../../package.json');
            let name = conn.getName(botNumber) 
            let caption = `Changelog\n`
            caption += `tanggal: ${date}\n`
            caption += `versi saat ini *${pkgg.version}*\n\n`
            caption += `${changelog == '' ? 'Tidak ada changelog yang di tambahkan' : '' || changelog }\n`
            conn.send3ButtonLoc(from, buff, caption, "Dibuat Oleh: Arifi Razzaq", 'Dashboard', 'Dashboard', 'Status', 'Status', 'Donasi', 'Donasi', msg)
    }
    if (isButton === 'Status') {
            let groups = conn.chats.array.filter(v => v.jid.endsWith('g.us'));
            let privat = conn.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'));
            let totalChat = await conn.chats.all();
            let ramTwo = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
            let teks = "\n\n\n「 *𝗦𝗧𝗔𝗧𝗨𝗦 𝗕𝗢𝗧* 」\n\n"
            teks += `• Group Chats : ${groups.length}\n`
            teks += `• Private Chats : ${privat.length}\n`
            teks += `• Total Chats : ${totalChat.length}\n`
            teks += `• Speed : ${latensi.toFixed(4)} ms\n`
            teks += `• Multi Prefix : ${conn.multi ? 'true' : 'false'}\n\n\n`
            teks += "「 *𝗦𝗧𝗔𝗧𝗨𝗦 𝗗𝗘𝗩𝗜𝗖𝗘* 」\n\n"
            teks += `• Total Ram : ${ramTwo}\n`
            teks += `• Platform : ${Ft.os.platform()}\n`
            teks += `• Hostname : ${Ft.os.hostname()}\n`
            teks += `• Merk Device : ${device_manufacturer}\n`
            teks += `• Version WhatsApp : ${wa_version}\n`
            teks += `• Version OS : ${os_version}\n`
            teks += `• Version Device : ${device_model}\n`
            teks += `• MCC : ${mcc}\n`
            teks += `• MNC : ${mnc}\n`
            conn.sendButtonLoc(from, buff, '*Platform Aktif Selama:*\n' + runtime(Ft.os.uptime()) + '\n\n*Bot Aktif Selama:*\n' + runtime(process.uptime()) + teks, "Dibuat Oleh: Arifi Razzaq", 'Menu', 'Menu', msg) 
    }
    if (isButton === 'Rules') {
            let teks = getText.rules(prefix, x)
            conn.sendButtonLoc(from, buff, teks, "Dibuat Oleh: Arifi Razzaq", 'Menu', 'Menu', msg) 
    }
    if (isButton === 'Credits') {
            let teks = getText.credits()
            conn.sendButtonLoc(from, buff, teks, "Dibuat Oleh: Arifi Razzaq", 'Menu', 'Menu', msg) 
    }
    if (isButton === 'credits') {
            let teks = getText.credits()
            conn.sendButtonLoc(from, buff, teks, "Dibuat Oleh: Arifi Razzaq", 'Menu', 'Menu', msg) 
    }
    if (isButton === 'creator') {
            conn.sendContact(from, '6281261324817', 'Arifi Razzaq', msg)
                 await sleep(1000)
            conn.reply(from, `Silahkan Tinggalkan Pesan Anda, Dan Jangan Spam Chat/Call!`, msg)
    }
    
    if (isButton === 'daftarnamawalisongo') { 
    	         let listMsg = {
                 title: "Nama-Nama Wali Songo Beserta Nama Aslinya", 
                 buttonText: 'Daftar Nama',
                 footerText: "Dibuat Oleh: Arifi Razzaq",
                 description: `\nHai kak @${m.sender.split('@')[0]}, Silahkan pilih mau baca yang mana?`,
                 sections: [
                 {
                 "title": `URUTAN 1`, 
                 "rows" : [
                 {
                 "title": "MAULANA MAGHRIBI",
                 "description": "\nNama aslinya adalah Maulana Malik Ibrahim.",
                 "rowId": "namamaulanamaghribi"
                 }]
                 },{
                 "title": `URUTAN 2`, 
                 "rows" : [
                 {
                 "title": "SUNAN AMPEL",
                 "description": "\nSemula bernama Raden Rahmat dan merupakan putra dari Syekh Maulana Malik Ibrahim", 
                 "rowId": "namasunanampel"
                 }]
                 },{
                 "title": `URUTAN 3`, 
                 "rows" : [
                 {
                 "title": "SUNAN BONANG",
                 "description": "\nSunan Bonang adalah anak dari Sunan Ampel atau cucu dari Maulana Malik Ibrahim.", 
                 "rowId": "namasunanbonang1"
                 }]
                 },{
                 "title": `URUTAN 4`, 
                 "rows" : [
                 {
                 "title": "SUNAN DRAJAT",
                 "description": "\nNama asli Sunan Drajat adalah Raden Syarifuddin.", 
                 "rowId": "namasunandrajat"
                 }]
                 },{
                 "title": `URUTAN 5`, 
                 "rows" : [
                 {
                 "title": "SUNAN GIRI",
                 "description": "\nWali songo selanjutnya adalah sahabat dari Makhdum Ibrahim yang semula bernama Raden Paku.", 
                 "rowId": "namasunangiri"
                 }]
                 },{
                 "title": `URUTAN 6`, 
                 "rows" : [
                 {
                 "title": "SUNAN KALIJAGA",
                 "description": "\nIa merupakan tokoh wali songo yang paling terkenal di antara sembilan wali lainnya.", 
                 "rowId": "namasunankalijaga"
                 }]
                 },{
                 "title": `URUTAN 7`, 
                 "rows" : [
                 {
                 "title": "SUNAN KUDUS",
                 "description": "\nMemiliki nama asli Ja'far Shodiq.", 
                 "rowId": "namasunankudus"
                 }]
                 },{
                 "title": `URUTAN 8`, 
                 "rows" : [
                 {
                 "title": "SUNAN MURIA",
                 "description": "\nNama kecilnya adalah Raden Prawoto.", 
                 "rowId": "namasunanmuria"
                 }]
                 },{
                 "title": `URUTAN 9`, 
                 "rows" : [
                 {
                 "title": "SUNAN GUNUNG JATI",
                 "description": "\nMulanya bernama Syarif Hidayatullah.", 
                 "rowId": "namasunangunungjati"
                 }]
                 }
                 ],
                 listType: 1
            }
            conn.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]}, quoted:msg })
            }
     if (isButton === 'mandiwajib') { 
                 let listMsg = {
                 title: "PASAL: MANDI\nDALAM DATABASE ADA 4 BAB", 
                 buttonText: 'Daftar Pilihan',
                 footerText: "Dibuat Oleh: Arifi Razzaq",
                 description: `\nHai kak @${m.sender.split('@')[0]}, Silahkan pilih mau baca yang mana?`,
                 sections: [
                 {
                 "title": `BAB 1`, 
                 "rows" : [
                 {
                 "title": "Perkara Perkara yang Mewajibkan Mandi",
                 "description": "\nKlik Disini Untuk Menampilkan!",
                 "rowId": "perkarayangmewajibkanmandi"
                 }]
                 },{
                 "title": `BAB 2`, 
                 "rows" : [
                 {
                 "title": "Rukun / Fardhu Mandi",
                 "description": "\nKlik Disini Untuk Menampilkan!", 
                 "rowId": "rukunfardhumandi"
                 }]
                 },{
                 "title": `BAB 3`, 
                 "rows" : [
                 {
                 "title": "Sunnah Sunnah Mandi",
                 "description": "\nKlik Disini Untuk Menampilkan!", 
                 "rowId": "sunnahsunnahmandi"
                 }]
                 },{
                 "title": `BAB 4`, 
                 "rows" : [
                 {
                 "title": "Keadaan yang disunnahkan mandi",
                 "description": "\nKlik Disini Untuk Menampilkan!", 
                 "rowId": "keadaanyangdisunnahkanmandi"
                 }]
                 }
                 ],
                 listType: 1
            }
            conn.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]}, quoted:msg })
            }
        } catch (err) {
    console.log(Ft.chalk.bold.red('[ERROR]'), err)
    }
}