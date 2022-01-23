// Base Original Buatan : Arifi Razzaq OFFICIAL
// Reuploaded? Tag Channel Youtube Aku.
// Sepuh Rojak Berkuasa!  |  Bukan Untuk Di Claim! 

"use strict";
const { MessageType, MessageOptions, GroupSettingChange, Presence } = require("@adiwajshing/baileys");
const { serialize, sleep, getBuffer, runtime, parseMention } = require("../../../lib/rojaktype");
const { kyun, time, WIB, WITA, WIT, weton, week, date, waktu, tanggal, formatDate, count } = require("../../../lib/moment.js");
const { addCmd, getCommandPosition, checkscommand, getCmd } = require('../../../lib/stickCMD.js');
let Exif = require('../../../lib/exif');
let exif = new Exif();
let ms = (...any) => import ('parse-ms').then(({ default: ms }) => ms(...any));


module.exports = async(m, _scommand, pengunjung, multi, nopref, admins, isCatchPengunjung, modelmenu, antilinkgroup) => {
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
                        const totalchat = await conn.chats.all();
                        
                        // Metadata
                        const groupMetadata = isGroup ? await conn.groupMetadata(from) : ''
                        const groupName = isGroup ? groupMetadata.subject : ''
                        const groupId = isGroup ? groupMetadata.jid : ''
                        const groupMembers = isGroup ? groupMetadata.participants : ''
                        const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
                        const isAntilink = isGroup ? antilinkgroup.includes(from) : false
                        
         // Log Group
         if (isCmd && isGroup) { 
    console.log(Ft.chalk.bold.rgb(255, 178, 102)('\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mCMD\x1b[1;37m]'), Ft.chalk.bold.rgb(153, 255, 153)(command), Ft.chalk.bold.rgb(204, 204, 0)("from"), Ft.chalk.bold.rgb(153, 255, 204)(pushname), Ft.chalk.bold.rgb(204, 204, 0)("in"), Ft.chalk.bold.rgb(255, 178, 102)(groupMetadata.subject), Ft.chalk.bold('[' + args.length + ']')); 
}

         // Log Private
         if (isCmd && !isGroup) { 
    console.log(Ft.chalk.bold.rgb(255, 178, 102)('\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mCMD\x1b[1;37m]'), Ft.chalk.bold.rgb(153, 255, 153)(command), Ft.chalk.bold.rgb(204, 204, 0)("from"), Ft.chalk.bold.rgb(153, 255, 204)(pushname), Ft.chalk.bold.rgb(204, 204, 0)("in"), Ft.chalk.bold.rgb(255, 178, 102)("Private Chat"), Ft.chalk.bold('[' + args.length + ']')); 
}

                        // MediaType
                        const isImage = (type === 'imageMessage')
                        const isAudio = (type === 'audioMessage')
                        const isVideo = (type === 'videoMessage')
                        const isSticker = (type == 'stickerMessage')
                        const isDocument = (type == 'documentMessage')
                        const isMedia = isImage || isVideo || isSticker || (type == 'audioMessage') || (type == 'documentMessage')
         
         // Pembuat Seri
         const createSerial = (size) => {
    return Ft.crypto.randomBytes(size).toString('hex').slice(0, size)
}

                        // Pengirim
                        const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
                        const isGroupAdmins = groupAdmins.includes(sender) || false
                        const isOwnerArray = ownerArray.includes(sender)
                        const isPengunjung = conn.pengunjung.includes(sender)

         // Mengambil Total
         const getPengunjung = () => {
    return conn.pengunjung[Math.floor(Math.random() * conn.pengunjung.length)].id
}

         // Create JSON Verify
         const addPengunjung = (usr, sender, age, time, serials) => {
    let obj = { id: usr, name: sender, age: age, time: time, serial: serials }
    conn.pengunjung.push(obj)
    Ft.fs.writeFileSync('./database/pengunjung.json', JSON.stringify(conn.pengunjung))
}
        
         // Verifiy Checker
         const cekPengunjung = (sender) => {
    let status = false
    Object.keys(conn.pengunjung).forEach((i) => {
    if (conn.pengunjung[i].id === sender) {
    status = true
    }
    })
    return status
}
                        // Detect MediaType
                        const isQuotedDocument = isQuotedMsg ? (quotedMsg.type === 'documentMessage') ? true : false : false
                        const isQuotedImage = isQuotedMsg ? (quotedMsg.type === 'imageMessage') ? true : false : false
                        const isQuotedAudio = isQuotedMsg ? (quotedMsg.type === 'audioMessage') ? true : false : false
                        const isQuotedVideo = isQuotedMsg ? (quotedMsg.type === 'videoMessage') ? true : false : false
                        const isQuotedSticker = isQuotedMsg ? (quotedMsg.type === 'stickerMessage') ? true : false : false
                        
                        // Detail Pengunjung 
                        conn.isCatchPengunjung = cekPengunjung(sender)
         
         // Mesin Cetak Pengunjung
         if (isCmd) {
    const serialUser = createSerial(20)
    const a = sender
    conn.pengunjung.push(sender)
    Ft.fs.writeFileSync('./database/pengunjung.json', JSON.stringify(conn.pengunjung))
    addPengunjung(sender, serialUser)
}

         // Copy Type Text
         const print = function (teks) {
    if (typeof teks !== 'string') teks = require('util').inspect(teks)
    teks = require('util').format(teks)
    return conn.reply(from, teks, msg)
}

         // Eval & Execute Shell
         if (isOwnerArray) {
    if (chats.startsWith("> ")) {
    console.log(Ft.chalk.bold.rgb(255, 178, 102)('\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mEVAL\x1b[1;37m]'), Ft.chalk.bold.rgb(153, 255, 153)(Ft.moment(msg.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss')), Ft.chalk.bold.white('no:'), Ft.chalk.bold.rgb(230, 113, 181)(sender.split("@")[0]), Ft.chalk.bold.white('from:'), Ft.chalk.bold.rgb(0, 170, 255)(pushname), Ft.chalk.bold.white('in:'), Ft.color('Perintah Dari Owner'), Ft.chalk.bold.white('args:'), Ft.chalk.bold.white('[' + Ft.color(args.length) + Ft.chalk.bold.white(']')));
    try {
    let evaled = await eval(chats.slice(2))
    if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
    conn.reply(from, `${evaled}`, msg)
    } catch (err) {
    conn.reply(from, `${err}`, msg)
}

         // For Async In The Eval
         } else if (chats.startsWith('=> ')) {
    console.log(Ft.chalk.bold.rgb(255, 178, 102)('\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mEVAL\x1b[1;37m]'), Ft.chalk.bold.rgb(153, 255, 153)(Ft.moment(msg.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss')), Ft.chalk.bold.white('no:'), Ft.chalk.bold.rgb(230, 113, 181)(sender.split("@")[0]), Ft.chalk.bold.white('from:'), Ft.chalk.bold.rgb(0, 170, 255)(pushname), Ft.chalk.bold.white('in:'), Ft.color('Perintah Dari Owner'), Ft.chalk.bold.white('args:'), Ft.chalk.bold.white('[' + Ft.color(args.length) + Ft.chalk.bold.white(']')));
    try {
    let evaled = await eval(`(async () => { ${chats.slice(3)} })()`)
    if (typeof evaled !== 'string' ) evaled = require('util').inspect(evaled);
    conn.reply(from, `${evaled}`, msg)
    } catch (err) {
    conn.reply(from, `${err}`, msg)
}

         // Read Terminal Using Exec
         } else if (chats.startsWith("$ ")) {
    console.log(Ft.chalk.bold.rgb(255, 178, 102)('\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mEXEC\x1b[1;37m]'), Ft.chalk.bold.rgb(153, 255, 153)(Ft.moment(msg.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss')), Ft.chalk.bold.white('no:'), Ft.chalk.bold.rgb(230, 113, 181)(sender.split("@")[0]), Ft.chalk.bold.white('from:'), Ft.chalk.bold.rgb(0, 170, 255)(pushname), Ft.chalk.bold.white('in:'), Ft.color('Perintah Dari Owner'), Ft.chalk.bold.white('args:'), Ft.chalk.bold.white('[' + Ft.color(args.length) + Ft.chalk.bold.white(']')));
    Ft.exec(chats.slice(2), (err, stdout) => {
    if (err) return conn.reply(from, stdout, msg) 
    if (stdout) conn.reply(from, stdout, msg)
    })
    }
}

         // Make string like monospace
         function monospace(string) {
    return '```' + string + '```'
}

         // Anti Link Group
         if (budy.includes("://chat.whatsapp.com/")){
	if (!isGroup) return
	if (!isAntilink) return
	if (isGroupAdmins) return conn.reply(from, `*Admin Terdeteksi, Bot Tidak Akan Mengeluarkan Admin Grup, Karena Admin Grup Bebas Mengirimkan Link Grup*`, msg)
	conn.updatePresence(from, Presence.composing)
	const kic = `${sender.split("@")[0]}@s.whatsapp.net`
	let caption = `「 *GROUP LINK DETECTED* 」\n\n`
	caption += '• *Pengirim*' + ' *' + Ft.moment(msg.messageTimestamp * 1000).format('DD/MM/YYYY' + ' | ' + 'HH:mm:ss') + '* \n'
	caption += `${monospace(`Username : ${pushname.slice(0, 12)}`)}\n`
	caption += `${monospace(`Nomer : 0${sender.split('@')[0].slice(2, 99)}`)}\n`
	caption += `${monospace(`Tag : @${sender.split("@")[0]}`)}\n\n`
	caption += `*${pushname.slice(0, 12)},* *Maaf Anda Di Keluarkan Dalam Grup ${groupName}*\n`
	conn.reply(from, caption, msg, { contextInfo : { mentionedJid: (await parseMention(caption), [sender])} })
	conn.groupRemove(from, [kic]).catch((e)=> conn.logger.error(e))
	conn.updatePresence(from, Presence.composing)
	conn.sendButton(sender, '「 *BACA PERATURAN GC* 」 Lain kali Kalau Masuk Grup, Di Baca Dulu Peraturannya Ya Kak...', "Dibuat Oleh: Arifi Razzaq", 'VERIFIKASI', 'regButtons', {quoted: msg})
}


                        // Read Button
                        const isButton = (type == 'buttonsResponseMessage') ? msg.message.buttonsResponseMessage.selectedButtonId : ''
                        const isListMessage = (type == 'listResponseMessage') ? msg.message.listResponseMessage.title : ''
                        const isListMessageButton = (type == 'listResponseMessage') ? msg.message.listResponseMessage.singleSelectReply.selectedRowId : ''

         // Log Group Button
         if (isGroup && isButton) { 
    console.log(Ft.chalk.bold.rgb(255, 178, 102)('\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mBUTTON\x1b[1;37m]'), Ft.chalk.bold.rgb(153, 255, 153)(isButton), Ft.chalk.bold.rgb(204, 204, 0)("from"), Ft.chalk.bold.rgb(153, 255, 204)(pushname), Ft.chalk.bold.rgb(204, 204, 0)("in"), Ft.chalk.bold.rgb(255, 178, 102)(groupMetadata.subject), Ft.chalk.bold('[' + args.length + ']')); 
}

         // Log Private Button
         if (!isGroup && isButton) { 
    console.log(Ft.chalk.bold.rgb(255, 178, 102)('\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mBUTTON\x1b[1;37m]'), Ft.chalk.bold.rgb(153, 255, 153)(isButton), Ft.chalk.bold.rgb(204, 204, 0)("from"), Ft.chalk.bold.rgb(153, 255, 204)(pushname), Ft.chalk.bold.rgb(204, 204, 0)("in"), Ft.chalk.bold.rgb(255, 178, 102)("Private Chat"), Ft.chalk.bold('[' + args.length + ']')); 
}

         // Log Group List Message
         if (isGroup && isListMessage) { 
    console.log(Ft.chalk.bold.rgb(255, 178, 102)('\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mLIST MESSAGE\x1b[1;37m]'), Ft.chalk.bold.rgb(153, 255, 153)(isListMessage), Ft.chalk.bold.rgb(204, 204, 0)("from"), Ft.chalk.bold.rgb(153, 255, 204)(pushname), Ft.chalk.bold.rgb(204, 204, 0)("in"), Ft.chalk.bold.rgb(255, 178, 102)(groupMetadata.subject), Ft.chalk.bold('[' + args.length + ']')); 
}

         // Log Private List Message
         if (!isGroup && isListMessage) { 
    console.log(Ft.chalk.bold.rgb(255, 178, 102)('\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mLIST MESSAGE\x1b[1;37m]'), Ft.chalk.bold.rgb(153, 255, 153)(isListMessage), Ft.chalk.bold.rgb(204, 204, 0)("from"), Ft.chalk.bold.rgb(153, 255, 204)(pushname), Ft.chalk.bold.rgb(204, 204, 0)("in"), Ft.chalk.bold.rgb(255, 178, 102)("Private Chat"), Ft.chalk.bold('[' + args.length + ']')); 
}

         // Log Group Budy
         if (isGroup && !isCmd && command) { 
    console.log(Ft.chalk.bold.rgb(255, 178, 102)('\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mPESAN\x1b[1;37m]'), Ft.chalk.bold.rgb(153, 255, 153)(budy), Ft.chalk.bold.rgb(204, 204, 0)("from"), Ft.chalk.bold.rgb(153, 255, 204)(pushname), Ft.chalk.bold.rgb(204, 204, 0)("in"), Ft.chalk.bold.rgb(255, 178, 102)(groupMetadata.subject), Ft.chalk.bold('[' + args.length + ']')); 
}

         // Log Private Budy
         if (!isGroup && !isCmd && command) { 
    console.log(Ft.chalk.bold.rgb(255, 178, 102)('\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mPESAN\x1b[1;37m]'), Ft.chalk.bold.rgb(153, 255, 153)(budy), Ft.chalk.bold.rgb(204, 204, 0)("from"), Ft.chalk.bold.rgb(153, 255, 204)(pushname), Ft.chalk.bold.rgb(204, 204, 0)("in"), Ft.chalk.bold.rgb(255, 178, 102)("Private Chat"), Ft.chalk.bold('[' + args.length + ']')); 
}

         // Auto Read
         conn.chatRead(from, "read")
         

/* 

         Cara Tambah :

              * setiap pembatasan, kasih  "} else if" 
              * jangan putus else nya sampe mentok 
              * pembatasab catch bawah pada string

 */


         // Disini Tambah Fiturnya (By Arifi Razzaq)
if (command === prefix + "spam") {
            if (!isOwnerArray) return conn.reply(from, `Khusus Owner`, msg)
            if (!q) return conn.reply(from, `Penggunaan ${prefix}spam teks|jumlahspam`, msg)
                 let argz = q.split("|")
                 if (!argz) return conn.reply(from, `Penggunaan ${prefix}spam teks|jumlah`, msg)
				 if (isNaN(argz[1])) return conn.reply(from, `harus berupa angka`, msg)
				 for (let i = 0; i < argz[1]; i++){
            conn.reply(from, argz[0], msg)
            }
} else if (command === prefix + "daftarkaromah") {
                 let listMsg = {
                 title: "Karomah Para Wali", 
                 buttonText: 'Daftar Nama',
                 footerText: "Dibuat Oleh: Arifi Razzaq",
                 description: `\nHai kak @${m.sender.split('@')[0]}, Silahkan pilih mau baca yang mana?`,
                 sections: [
                 {
                 "title": `URUTAN 1`, 
                 "rows" : [
                 {
                 "title": "ASY SYAIKH ABDUL QODIR AL-JILANI",
                 "description": "\nKaromah Syekh Abdul Qodir Jaelani Dengan Seekor Ular",
                 "rowId": "abdulqodir1"
                 }]
                 },{
                 "title": `URUTAN 2`, 
                 "rows" : [
                 {
                 "title": "SUNAN AMPEL",
                 "description": "\nSunan Ampel atau dikenal dengan Raden Rahmat (Ali Rahmatullah) adalah salah satu wali songo yang masih keturunan bangsawan Kamboja. Perjalannnya ke Tanah Jawa untuk menyebarkan agama Islam tepatnya di Jepara hingga Tuban.", 
                 "rowId": "sunanampel1"
                 }]
                 },{
                 "title": `URUTAN 3`, 
                 "rows" : [
                 {
                 "title": "SUNAN BONANG",
                 "description": "\nAsal Usul Nama Sunan BonangBerdakwah dengan GamelanMasih Satu Kerabat dengan Nabi Muhammad SAWLagu Tombo Ati Diciptakan oleh Sunan BonangKarya Seni Lain dari Sunan Bonang", 
                 "rowId": "sunanbonang1"
                 }]
                 },{
                 "title": `URUTAN 4`, 
                 "rows" : [
                 {
                 "title": "SUNAN KALIJAGA",
                 "description": "\nSalah satu tokoh Walisongo, Sunan Kalijaga disebut-sebut memiliki pengalaman hidup sebagai perampok atau begal.", 
                 "rowId": "sunankalijaga1"
                 }]
                 }
                 ],
                 listType: 1
            }
            conn.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]}, quoted:msg })
} else if (command === prefix + "daftarnamawalisongo") {
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
                 "rowId": "namasunanbonang"
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
} else if (command === prefix + "daftarsyuhadaislam") {
                 let listMsg = {
                 title: "Tokoh-tokoh terkemuka Sahabat Nabi yang mengalami mati syahid atau syuhada ini disusun berdasarkan buku Tokoh-tokoh Besar Islam Sepanjang Sejarah yang ditulis oleh Muhammad Sa'id Mursi.", 
                 buttonText: 'Daftar Nama',
                 footerText: "Dibuat Oleh: Arifi Razzaq",
                 description: `\nHai kak @${m.sender.split('@')[0]}, Silahkan pilih mau baca yang mana?`,
                 sections: [
                 {
                 "title": `URUTAN 1`, 
                 "rows" : [
                 {
                 "title": "Hamzah bin Abdul-Muththalib",
                 "description": "\nKlik Disini Untuk Menampilkan!",
                 "rowId": "syuhada1"
                 }]
                 },{
                 "title": `URUTAN 2`, 
                 "rows" : [
                 {
                 "title": "Mush'ab bin Umair",
                 "description": "\nKlik Disini Untuk Menampilkan!", 
                 "rowId": "syuhada2"
                 }]
                 },{
                 "title": `URUTAN 3`, 
                 "rows" : [
                 {
                 "title": "Zaid bin Haritsah",
                 "description": "\nKlik Disini Untuk Menampilkan!", 
                 "rowId": "syuhada3"
                 }]
                 },{
                 "title": `URUTAN 4`, 
                 "rows" : [
                 {
                 "title": "Ja'far bin Abu Thalib",
                 "description": "\nKlik Disini Untuk Menampilkan!", 
                 "rowId": "syuhada4"
                 }]
                 },{
                 "title": `URUTAN 5`, 
                 "rows" : [
                 {
                 "title": "Husain bin Ali",
                 "description": "\nKlik Disini Untuk Menampilkan!", 
                 "rowId": "syuhada5"
                 }]
                 },{
                 "title": `URUTAN 6`, 
                 "rows" : [
                 {
                 "title": "Sa'ad bin Muadz",
                 "description": "\nKlik Disini Untuk Menampilkan!", 
                 "rowId": "syuhada6"
                 }]
                 },{
                 "title": `URUTAN 7`, 
                 "rows" : [
                 {
                 "title": "Abu Salamah",
                 "description": "\nKlik Disini Untuk Menampilkan!", 
                 "rowId": "syuhada7"
                 }]
                 },{
                 "title": `URUTAN 8`, 
                 "rows" : [
                 {
                 "title": "Ammar bin Yasir",
                 "description": "\nKlik Disini Untuk Menampilkan!", 
                 "rowId": "syuhada8"
                 }]
                 },{
                 "title": `URUTAN 9`, 
                 "rows" : [
                 {
                 "title": "Abad bin Bisyr",
                 "description": "\nKlik Disini Untuk Menampilkan!", 
                 "rowId": "syuhada9"
                 }]
                 },{
                 "title": `URUTAN 10`, 
                 "rows" : [
                 {
                 "title": "Salim Maula Abi Hudzaifah",
                 "description": "\nKlik Disini Untuk Menampilkan!", 
                 "rowId": "syuhada10"
                 }]
                 },{
                 "title": `URUTAN 11`, 
                 "rows" : [
                 {
                 "title": "Al-Bara' bin Malik",
                 "description": "\nKlik Disini Untuk Menampilkan!", 
                 "rowId": "syuhada11"
                 }]
                 },{
                 "title": `URUTAN 12`, 
                 "rows" : [
                 {
                 "title": "Abu Dujanah",
                 "description": "\nKlik Disini Untuk Menampilkan!", 
                 "rowId": "syuhada12"
                 }]
                 },{
                 "title": `URUTAN 13`, 
                 "rows" : [
                 {
                 "title": "Amr bin Jamuh",
                 "description": "\nKlik Disini Untuk Menampilkan!", 
                 "rowId": "syuhada13"
                 }]
                 },{
                 "title": `URUTAN 14`, 
                 "rows" : [
                 {
                 "title": "Abu Ayyub al-Anshari",
                 "description": "\nKlik Disini Untuk Menampilkan!", 
                 "rowId": "syuhada14"
                 }]
                 },{
                 "title": `URUTAN 15`, 
                 "rows" : [
                 {
                 "title": "Anas bin Nadhar",
                 "description": "\nKlik Disini Untuk Menampilkan!", 
                 "rowId": "syuhada15"
                 }]
                 },{
                 "title": `URUTAN 16`, 
                 "rows" : [
                 {
                 "title": "Abu Thalhah",
                 "description": "\nKlik Disini Untuk Menampilkan!", 
                 "rowId": "syuhada16"
                 }]
                 },{
                 "title": `URUTAN 17`, 
                 "rows" : [
                 {
                 "title": "Abdullah bin Jahsy",
                 "description": "\nKlik Disini Untuk Menampilkan!", 
                 "rowId": "syuhada17"
                 }]
                 },{
                 "title": `URUTAN 18`, 
                 "rows" : [
                 {
                 "title": "Ayyasy bin Abi Rubai'ah",
                 "description": "\nKlik Disini Untuk Menampilkan!", 
                 "rowId": "syuhada18"
                 }]
                 },{
                 "title": `URUTAN 19`, 
                 "rows" : [
                 {
                 "title": "Khubaib bin Adi",
                 "description": "\nKlik Disini Untuk Menampilkan!", 
                 "rowId": "syuhada19"
                 }]
                 },{
                 "title": `URUTAN 20`, 
                 "rows" : [
                 {
                 "title": "Thufail bin Amr ad-Dusi",
                 "description": "\nKlik Disini Untuk Menampilkan!", 
                 "rowId": "syuhada20"
                 }]
                 },{
                 "title": `URUTAN 21`, 
                 "rows" : [
                 {
                 "title": "Nu'man bin Muqrin",
                 "description": "\nKlik Disini Untuk Menampilkan!", 
                 "rowId": "syuhada21"
                 }]
                 },{
                 "title": `URUTAN 22`, 
                 "rows" : [
                 {
                 "title": "Abdullah bin Abdullah bin Ubay bin Salul",
                 "description": "\nKlik Disini Untuk Menampilkan!", 
                 "rowId": "syuhada22"
                 }]
                 },{
                 "title": `URUTAN 23`, 
                 "rows" : [
                 {
                 "title": "Tsabit bin Qais",
                 "description": "\nKlik Disini Untuk Menampilkan!", 
                 "rowId": "syuhada23"
                 }]
                 },{
                 "title": `URUTAN 24`, 
                 "rows" : [
                 {
                 "title": "Ikrimah bin Abu Jahal",
                 "description": "\nKlik Disini Untuk Menampilkan!", 
                 "rowId": "syuhada24"
                 }]
                 }
                 ],
                 listType: 1
            }
            conn.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]}, quoted:msg })
} else if (command === prefix + "mandiwajib") {
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
} else if (command === prefix + "wudhu") {
                 let listMsg = {
                 title: "PASAL: WUDHU\nDALAM DATABASE ADA 3 BAB", 
                 buttonText: 'Daftar Pilihan',
                 footerText: "Dibuat Oleh: Arifi Razzaq",
                 description: `\nHai kak @${m.sender.split('@')[0]}, Silahkan pilih mau baca yang mana?`,
                 sections: [
                 {
                 "title": `BAB 1`, 
                 "rows" : [
                 {
                 "title": "PENGERTIAN WUDHU",
                 "description": "\nKlik Disini Untuk Menampilkan!",
                 "rowId": "pengertianwudhu"
                 }]
                 },{
                 "title": `BAB 2`, 
                 "rows" : [
                 {
                 "title": "Doa Sebelum dan Sesudah Wudhu",
                 "description": "\nKlik Disini Untuk Menampilkan!", 
                 "rowId": "doasebelumdansesudahwudhu"
                 }]
                 },{
                 "title": `BAB 3`, 
                 "rows" : [
                 {
                 "title": "Niat Berwudhu",
                 "description": "\nKlik Disini Untuk Menampilkan!", 
                 "rowId": "niatberwudhu"
                 }]
                 }
                 ],
                 listType: 1
            }
            conn.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]}, quoted:msg })
} else if (command === prefix + "tayamum") {
                 let listMsg = {
                 title: "PASAL: TAYAMUM\nDALAM DATABASE ADA 8 BAB", 
                 buttonText: 'Daftar Pilihan',
                 footerText: "Dibuat Oleh: Arifi Razzaq",
                 description: `\nHai kak @${m.sender.split('@')[0]}, Silahkan pilih mau baca yang mana?`,
                 sections: [
                 {
                 "title": `BAB 1`, 
                 "rows" : [
                 {
                 "title": "PENGERTIAN TAYAMUM",
                 "description": "\nKlik Disini Untuk Menampilkan!",
                 "rowId": "pengertiantayamum"
                 }]
                 },{
                 "title": `BAB 2`, 
                 "rows" : [
                 {
                 "title": "Syarat Tayamum",
                 "description": "\nKlik Disini Untuk Menampilkan!", 
                 "rowId": "syarattayamum"
                 }]
                 },{
                 "title": `BAB 3`, 
                 "rows" : [
                 {
                 "title": "Syarat Syah Tayamum",
                 "description": "\nKlik Disini Untuk Menampilkan!", 
                 "rowId": "syaratsyahtayamum"
                 }]
                 },{
                 "title": `BAB 4`, 
                 "rows" : [
                 {
                 "title": "Fardhu / Rukun Tayamum",
                 "description": "\nKlik Disini Untuk Menampilkan!", 
                 "rowId": "fardhurukuntayamum"
                 }]
                 },{
                 "title": `BAB 5`, 
                 "rows" : [
                 {
                 "title": "Sunnah - Sunnah Tayamum",
                 "description": "\nKlik Disini Untuk Menampilkan!", 
                 "rowId": "sunnahsunnahtayamum"
                 }]
                 },{
                 "title": `BAB 6`, 
                 "rows" : [
                 {
                 "title": "Perkara - Perkara yang Membatalkan Tayamum",
                 "description": "\nKlik Disini Untuk Menampilkan!", 
                 "rowId": "perkaraperkarayangmembatalkantayamum"
                 }]
                 },{
                 "title": `BAB 7`, 
                 "rows" : [
                 {
                 "title": "Tayamumnya Orang yang Diperban",
                 "description": "\nKlik Disini Untuk Menampilkan!", 
                 "rowId": "tayamumorangyangdiperban"
                 }]
                 },{
                 "title": `BAB 8`, 
                 "rows" : [
                 {
                 "title": "Catatan Penting",
                 "description": "\nKlik Disini Untuk Menampilkan!", 
                 "rowId": "catatanpenting"
                 }]
                 }
                 ],
                 listType: 1
            }
            conn.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]}, quoted:msg })
} else if (command === prefix + "tokohislam") {
            conn.reply(from, `SEGERA`, msg)
} else if (command === prefix + "sahabatnabi") {
            conn.reply(from, `SEGERA`, msg)
} else if (command === prefix + "ultah") {
            if (!q) return conn.reply(from, `${command} tahun bulan tanggal\n\ncontoh: ${command} 2001 11 13`, msg)
                 let d = q;
                 let zodiakk = [
                 ["Capricorn", new Date(1970, 0, 1)],
                 ["Aquarius", new Date(1970, 0, 20)],
                 ["Pisces", new Date(1970, 1, 19)],
                 ["Aries", new Date(1970, 2, 21)],
                 ["Taurus", new Date(1970, 3, 21)],
                 ["Gemini", new Date(1970, 4, 21)],
                 ["Cancer", new Date(1970, 5, 22)],
                 ["Leo", new Date(1970, 6, 23)],
                 ["Virgo", new Date(1970, 7, 23)],
                 ["Libra", new Date(1970, 8, 23)],
                 ["Scorpio", new Date(1970, 9, 23)],
                 ["Sagittarius", new Date(1970, 10, 22)],
                 ["Capricorn", new Date(1970, 11, 22)]
                 ].reverse()
                 function getZodiac(month, day) {
                 let dey = new Date(1970, month - 1, day)
                 return zodiakk.find(([_,_d]) => dey >= _d)[0]
                 }
                 let dateek = new Date(q)
                 if (dateek == 'Invalid Date') return conn.reply(from, dateek, msg)
                 let dd = new Date()
                 let [tahun, bulan, tanggal] = [dd.getFullYear(), dd.getMonth() + 1, dd.getDate()]
                 let birth = [dateek.getFullYear(), dateek.getMonth() + 1, dateek.getDate()]
                 let zodiackk = getZodiac(birth[1], birth[2])
                 let ageD = new Date(d - dateek)
                 let agek = ageD.getFullYear() - new Date(1970, 0, 1).getFullYear()
                 let birthday = [tahun + (birth[1] < bulan), ...birth.slice(1)]
                 let cekusia = bulan === birth[1] && tanggal === birth[2] ? `Selamat ulang tahun yang ke-${agek} 🥳` : agek
                 let tekss = `*RESULT*\n\n`
                 tekss += `Lahir : ${birth.join('-')}\n`
                 tekss += `Ultah Mendatang : ${birthday.join('-')}\n`
                 tekss += `Usia : ${cekusia}\n`
                 tekss += `Zodiak : ${zodiackk}\n`.trim()
            conn.sendButtonLoc(from, buff, tekss, "Dibuat Oleh: Arifi Razzaq", 'Menu', 'Menu', msg)
} else if (command === prefix + "sticker") {
            if (args.length < 2) return conn.reply(`Penggunaan ${command} judul|pembuat`)
                 let packname1 = q.split('|')[0] ? q.split('|')[0] : q
                 let author1 = q.split('|')[1] ? q.split('|')[1] : ''
                 if (isImage || isQuotedImage) {
                 let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                 let media = await conn.downloadAndSaveMediaMessage(encmedia, `./database/sampah/${sender}`)
                 exif.create(packname1, author1, `stickwm_${sender}`)
                 await Ft.ffmpeg(`${media}`)
                 .input(media)
                 .on('start', function (cmd) {
                 console.log(`Started : ${cmd}`)
                 })
                 .on('error', function (err) {
                 console.log(`Error : ${err}`)
                 Ft.fs.unlinkSync(media)
                 conn.reply(from, `Terjadi Kesalahan`, msg)
                 })
                 .on('end', function () {
                 console.log('Finish')
                 Ft.exec(`webpmux -set exif ./database/sampah/stickwm_${sender}.exif ./database/sampah/${sender}.webp -o ./database/sampah/${sender}.webp`, async (error) => {
                 if (error) return conn.reply(from, `Terjadi Kesalahan`, msg)
                 conn.sendMessage(from, Ft.fs.readFileSync(`./database/sampah/${sender}.webp`), MessageType.sticker, {quoted: msg})
                 Ft.fs.unlinkSync(media)
                 Ft.fs.unlinkSync(`./database/sampah/${sender}.webp`)
                 Ft.fs.unlinkSync(`./database/sampah/stickwm_${sender}.exif`)
                 })
                 })
                 .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                 .toFormat('webp')
                 .save(`./database/sampah/${sender}.webp`)
                 } else if ((isVideo && msg.message.videoMessage.fileLength < 10000000 || isQuotedVideo && msg.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
                 let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                 let media = await conn.downloadAndSaveMediaMessage(encmedia, `./database/sampah/${sender}`)
                 exif.create(packname1, author1, `stickwm_${sender}`)
                 conn.reply(from, `Mohon Tunggu Sebentar`, msg)
                 await Ft.ffmpeg(`${media}`)
                 .inputFormat(media.split('.')[4])
                 .on('start', function (cmd) {
                 console.log(`Started : ${cmd}`)
                 })
                 .on('error', function (err) {
                 console.log(`Error : ${err}`)
                 Ft.fs.unlinkSync(media)
                 let tipe = media.endsWith('.mp4') ? 'video' : 'gif'
                 conn.reply(from, `Terjadi Kesalahan`, msg)
                 })
                 .on('end', function () {
                 console.log('Finish')
                 Ft.exec(`webpmux -set exif ./database/sampah/stickwm_${sender}.exif ./database/sampah/${sender}.webp -o ./database/sampah/${sender}.webp`, async (error) => {
                 if (error) return conn.reply(from, `Terjadi Kesalahan`, msg)
                 conn.sendMessage(from, Ft.fs.readFileSync(`./database/sampah/${sender}.webp`), MessageType.sticker, {quoted: msg})
                 Ft.fs.unlinkSync(media)
                 Ft.fs.unlinkSync(`./database/sampah/${sender}.webp`)
                 Ft.fs.unlinkSync(`./database/sampah/stickwm_${sender}.exif`)
                 })
                 })
                 .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                 .toFormat('webp')
                 .save(`./database/sampah/${sender}.webp`)
                 } else if (isQuotedSticker) {
                 const encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                 const media = await conn.downloadAndSaveMediaMessage(encmedia, `./database/sampah/${sender}`)
                 exif.create(packname1, author1, `takestick_${sender}`)
                 Ft.exec(`webpmux -set exif ./database/sampah/takestick_${sender}.exif ./database/sampah/${sender}.webp -o ./database/sampah/${sender}.webp`, async (error) => {
                 if (error) return conn.reply(from, `Terjadi Kesalahan`, msg)
                 conn.sendMessage(from, Ft.fs.readFileSync(`./database/sampah/${sender}.webp`), MessageType.sticker, {quoted: msg})
                 Ft.fs.unlinkSync(media)
                 Ft.fs.unlinkSync(`./database/sampah/takestick_${sender}.exif`)
                 })
                 } else {
            conn.reply(from, `Kirim gambar/video dengan caption ${prefix}sticker nama|author atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`, msg)
            }
} else if (command === prefix + "speed") {
                 let timestamp = Ft.speed();
                 let latensi = Ft.speed() - timestamp;
                 let teks = `*Kecepatan Dakwah Bot:*\n\n`
                 teks += `• ${latensi.toFixed(4)} ms\n`
            conn.sendButtonLoc(from, buff, teks, "Dibuat Oleh: Arifi Razzaq", 'Menu', 'Menu', msg) 
} else if (command === prefix + "menu") {
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
} else if (command === prefix + "listonline") {
            if (!isGroup) return conn.reply(from, `Khusus Group`, msg)
                 let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
                 let online = [...Object.keys(conn.chats.get(ido).presences), botNumber]
            conn.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, { quoted: msg, contextInfo: { mentionedJid: online 
            } 
            })
} else if (command === prefix + "buka") {
            if (!isGroup) return conn.reply(from, `Khusus Group`, msg);
                 await conn.groupSettingChange(from, GroupSettingChange.messageSend, false)
            conn.reply(from, `Berhasil Membuka Grup`, msg)
} else if (command === prefix + "tutup") {
            if (!isGroup) return conn.reply(from, `Khusus Group`, msg);
                 await conn.groupSettingChange(from, GroupSettingChange.messageSend, true)
            conn.reply(from, `Berhasil Menutup Grup`, msg)
} else if (command === prefix + "owner") {
                 conn.sendContact(from, '6281261324817', 'Arifi Razzaq', msg)
                 await sleep(1000)
            conn.reply(from, `Silahkan Tinggalkan Pesan Anda, Dan Jangan Spam Chat/Call!`, msg)
} else if (command === prefix + "setcmd") {
            if (!q) return conn.reply(from, `Penggunaan : ${command} cmdnya dan tag stickernya`, msg)
                 let kodenya = msg.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
                 addCmd(kodenya, q)
            conn.reply(from, `Berhasil`, msg)
} else if (command === prefix + "delcmd") {
                 let kodenya = msg.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
                 conn._scommand.splice(getCommandPosition(kodenya), 1)
                 Ft.fs.writeFileSync('./database/scommand.json', JSON.stringify(conn._scommand))
            conn.reply(from, `Berhasil`, msg)
} else if (command === prefix + "listcmd") {
                 let teksnyee = ''
                 let cemde = [];
                 for (let i of conn._scommand) {
                 cemde.push(i.id)
                 teksnyee += `\n\n*-> ID:*+* * ${i.id}\n*-> CMD:*+* * ${i.chats}`
            }
            conn.reply(from, teksnyee, msg)
} else if (command === prefix + "changelog") { 
                 let changelog = conn.config.changelog
                 let pkgg = require('../../../package.json');
                 let name = conn.getName(botNumber) 
                 let caption = `Changelog\n`
                 caption += `tanggal: ${date}\n`
                 caption += `versi saat ini *${pkgg.version}*\n\n`
                 caption += `${changelog == '' ? 'Tidak ada changelog yang di tambahkan' : '' || changelog }\n`
            conn.send3ButtonLoc(from, buff, caption, "Dibuat Oleh: Arifi Razzaq", 'Dashboard', 'Dashboard', 'Status', 'Status', 'Donasi', 'Donasi', msg)
} else if (command === prefix + "dashboard") { 
                 let asu = `total commands ${Object.keys(conn.Events).length}\n\n`
                 for (i in db.data) {
                 asu += `-${i}: ${db.data[i]}\n`
            }
            conn.reply(from, asu.trim(), msg)
} else if (command === prefix + "credits") { 
                 let teks = getText.credits()
            conn.sendButtonLoc(from, buff, teks, "Dibuat Oleh: Arifi Razzaq", 'Menu', 'Menu', msg) 
} else if (command === prefix + "rules") { 
                 let teks = getText.rules(prefix, x)
            conn.sendButtonLoc(from, buff, teks, "Dibuat Oleh: Arifi Razzaq", 'Menu', 'Menu', msg) 
} else if (command === prefix + "donasi") { 
                 let teks = getText.donasi()
            conn.sendButtonLoc(from, buff, teks, "Dibuat Oleh: Arifi Razzaq", 'Menu', 'Menu', msg) 
} else if (command === prefix + "status") { 
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
} else if (command === prefix + "clearallchat") {
            if (!isOwnerArray) return conn.reply(from, `Khusus Owner`, msg)
                 let bajik = await conn.chats.all()
                 conn.setMaxListeners(25)
                 for (let _ of bajik) {
            await conn.modifyChat(_.jid, 'clear', { includeStarred: false })
            }
            conn.reply(from, `Total Chat Yang di Bersihkan: ${bajik.length}`, msg)
} else if (command === prefix + "deleteallchat") {
            if (!isOwnerArray) return conn.reply(from, `Khusus Owner`, msg)
                 let bajik = await conn.chats.all()
                 conn.setMaxListeners(25)
                 for (let _ of bajik) {
            await conn.modifyChat(_.jid, 'delete', { includeStarred: false })
            }
            conn.reply(from, `Total Chat Yang di Hapus: ${bajik.length}`, msg)
} else if (command === prefix + "archiveallchat") {
            if (!isOwnerArray) return conn.reply(from, `Khusus Owner`, msg)
                 let bajik = await conn.chats.all()
                 conn.setMaxListeners(25)
                 for (let _ of bajik) {
            await conn.modifyChat(_.jid, 'archive', { includeStarred: false })
            }
            conn.reply(from, `Total Chat Yang di Arsip: ${bajik.length}`, msg)
} else if (command === prefix + "unarchiveallchat") {
            if (!isOwnerArray) return conn.reply(from, `Khusus Owner`, msg)
                 let bajik = await conn.chats.all()
                 conn.setMaxListeners(25)
                 for (let _ of bajik) {
            await conn.modifyChat(_.jid, 'unarchive', { includeStarred: false })
            }
            conn.reply(from, `Total Chat Yang di Unarsip: ${bajik.length}`, msg)
} else if (command === prefix + "bc") {
            if (!isOwnerArray) return conn.reply(from, `Khusus Owner`, msg);
            if (!q)return conn.reply(from, `Reply image , video , atau teks biasa dan Masukan Info`, msg)
            if (isMedia && !msg.message.imageMessage || isQuotedImage) {
                 let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'msg')).message.extendedTextMessage.contextInfo : msg
                 let media = await conn.downloadMediaMessage(encmedia)
                 }
                 let bcc = conn.chats.all() 
                 let randomID = length => require('crypto').randomBytes(Math.ceil(length * .5)).toString('hex').slice(0, length)
                 conn.reply(from, `Sedang mengirim pesan ${bcc.length}\nestimasi selesai *${bcc.length * 1.5} detik*`)
                 let cc = conn.serializeM(text ? msg : msg.quoted ? await msg.getQuotedObj() : false || msg)  
                 let teks = q ? q : cc.text
                 let t = teks ? teks : budy.slice(0).trim().split(/ +/).shift().toLowerCase()
                 for (let _ of bcc) {
                 let more = String.fromCharCode(8206)
                 let readMore = more.repeat(4001)
                 let delay = time => new Promise(res => setTimeout(res, time))
                 await delay(1500)
            conn.sendMessage(_.jid, t + readMore + "\n\n\n\n[ *BroadCast DakwahBot* ]", text, {detectLinks: false})
            }
            conn.reply(from, `Succses BroadCast ${totalchat.length} Total chat`, msg)
} else if (command === prefix + "bcbutton") {
            if (!isOwnerArray) return conn.reply(from, `Khusus Owner`, msg);
            if (!q)return conn.reply(from, `Reply image , video , atau teks biasa dan Masukan Info`, msg)
            if (isMedia && !msg.message.imageMessage || isQuotedImage) {
                 let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'msg')).message.extendedTextMessage.contextInfo : msg
                 let media = await conn.downloadMediaMessage(encmedia)
                 }
                 let bcc = conn.chats.all() 
                 let randomID = length => require('crypto').randomBytes(Math.ceil(length * .5)).toString('hex').slice(0, length)
                 conn.reply(from, `Sedang mengirim pesan ${bcc.length}\nestimasi selesai *${bcc.length * 1.5} detik*`)
                 let cc = conn.serializeM(text ? msg : msg.quoted ? await msg.getQuotedObj() : false || msg)  
                 let teks = q ? q : cc.text
                 let t = teks ? teks : budy.slice(0).trim().split(/ +/).shift().toLowerCase()
                 for (let _ of bcc) {
                 let more = String.fromCharCode(8206)
                 let readMore = more.repeat(4001)
                 let delay = time => new Promise(res => setTimeout(res, time))
                 await delay(1500)
            conn.sendButtonLoc(_.jid, buff, t + readMore + "\n\n\n\n[ *BroadCast DakwahBot* ]", "Dibuat Oleh: Arifi Razzaq", 'Menu', 'Menu', msg, {detectLinks: false})
            }
            conn.reply(from, `Succses BroadCast ${totalchat.length} Total chat`, msg)
} else if (command === prefix + "antilinkgroup") {
                 if (!isGroup) return conn.reply(from, `Khusus Grup`, msg);
                 if (!isOwnerArray) return conn.reply(from, `Khusus Owner`, msg);
            conn.send2Button(from, `MODE ANTI LINK GROUP`, `Silahkan pilih salah satu`, 'ON', 'antiLinkGroupOnButtons', 'OFF', 'antiLinkGroupOffButtons', { quoted: msg })
} else if (command === prefix + "setmenu") {
            if (!isOwnerArray) return conn.reply(from, `Perintah Tersebut Hanya Bisa Digunakan Oleh Owner`, msg)
                 let teks2 = `Masukan opts :\n\n`
                 teks2 += `• original\n`
                 teks2 += `• loc *</Rekomendasi>*\n`
                 teks2 += `• pdf\n`
                 teks2 += `• zip\n`
                 teks2 += `• pptx\n`
                 teks2 += `• xlsx\n`
                 teks2 += `• docx\n`
                 teks2 += `• katalogv1\n`
                 teks2 += `• katalogv2\n\n`
                 teks2 += `Cara Penggunan :\n`
                 teks2 += `${prefix}setmenu loc\n`
            if (!q) return conn.reply(from, teks2, msg)
            if (q == "loc") {
            conn.modelmenu = "loc"
            conn.reply(from, "Done change menu to "+q + "\n\n" + "*Silahkan Ketik* "+ `${prefix}menu ` + "*Untuk Menampilkan*", msg)
            } else if (q == "pdf") {
            conn.modelmenu = "pdf"
            conn.reply(from, "Done change menu to "+q + "\n\n" + "*Silahkan Ketik* "+ `${prefix}menu ` + "*Untuk Menampilkan*", msg)
            } else if (q == "zip") {
            conn.modelmenu = "zip"
            conn.reply(from, "Done change menu to "+q + "\n\n" + "*Silahkan Ketik* "+ `${prefix}menu ` + "*Untuk Menampilkan*", msg)
            } else if (q == "katalogv1") {
            conn.modelmenu = "katalogv1"
            conn.reply(from, "Done change menu to "+q + "\n\n" + "*Silahkan Ketik* "+ `${prefix}menu ` + "*Untuk Menampilkan*", msg)
            } else if (q == "katalogv2") {
            conn.modelmenu = "katalogv2"
            conn.reply(from, "Done change menu to "+q + "\n\n" + "*Silahkan Ketik* "+ `${prefix}menu ` + "*Untuk Menampilkan*", msg)
            } else if (q == "pptx") {
            conn.modelmenu = "pptx"
            conn.reply(from, "Done change menu to "+q + "\n\n" + "*Silahkan Ketik* "+ `${prefix}menu ` + "*Untuk Menampilkan*", msg)
            } else if (q == "xlsx") {
            conn.modelmenu = "xlsx"
            conn.reply(from, "Done change menu to "+q + "\n\n" + "*Silahkan Ketik* "+ `${prefix}menu ` + "*Untuk Menampilkan*", msg)
            } else if (q == "docx") {
            conn.modelmenu = "docx"
            conn.reply(from, "Done change menu to "+q + "\n\n" + "*Silahkan Ketik* "+ `${prefix}menu ` + "*Untuk Menampilkan*", msg)
            } else if (q == "original") {
            conn.modelmenu = "original"
            conn.reply(from, "Done change menu to "+q + "\n\n" + "*Silahkan Ketik* "+ `${prefix}menu ` + "*Untuk Menampilkan*", msg)
            } else {
            conn.reply(from, teks2, msg)
            }
          }
        } catch (err) {
    console.log(Ft.chalk.bold.red('[ERROR]'), err)
    }
}