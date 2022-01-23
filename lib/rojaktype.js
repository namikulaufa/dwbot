"use strict";
const axios = require("axios");
const util = require("util");

const { MessageType, WAMessageProto } = require("@adiwajshing/baileys");
const {  _scommand, addCmd, getCommandPosition, checkscommand, getCmd } = require('./stickCMD.js');

exports.WAConnection = _WAConnection => {
    class WAConnection extends _WAConnection {
        constructor(...args) {
            super(...args)
            this.version = [2, 2119, 6]
            if (!Array.isArray(this._events['CB:action,add:relay,message'])) this._events['CB:action,add:relay,message'] = [this._events['CB:action,add:relay,message']]
            else this._events['CB:action,add:relay,message'] = [this._events['CB:action,add:relay,message'].pop()]
            this._events['CB:action,add:relay,message'].unshift(async function(json) {
                try {
                    let m = json[2][0][2]
                    if (m.message && m.message.protocolMessage && m.message.protocolMessage.type == 0) {
                        let key = m.message.protocolMessage.key
                        let c = this.chats.get(key.remoteJid)
                        let a = c.messages.dict[`${key.id}|${key.fromMe ? 1 : 0}`]
                        let participant = key.fromMe ? this.user.jid : a.participant ? a.participant : key.remoteJid
                        let WAMSG = WAMessageProto.WebMessageInfo
                        this.emit('message-delete', {
                            key,
                            participant,
                            message: WAMSG.fromObject(WAMSG.toObject(a))
                        })
                    }
                } catch (e) {}
            })
            this.sendFileFromUrl = this.sendFile
        }
        
        
        async sendFileFromUrl(from, url, caption, msg, men) {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            let type = mime.split("/")[0] + "Message"
            if (mime === "image/gif") {
                type = MessageType.video
                mime = Mimetype.gif
            }
            if (mime === "application/pdf") {
                type = MessageType.document
                mime = Mimetype.pdf
            }
            if (mime.split("/")[0] === "audio") {
                mime = Mimetype.mp4Audio
            }
            return this.sendMessage(from, await exports.getBuffer(url), type, {
                caption: caption,
                quoted: msg,
                mimetype: mime,
                contextInfo: {
                    "mentionedJid": men ? men : []
                }
            })
        }
        
        async sendContact(jid, number, name, quoted, options) {
            let njid = number + '@s.whatsapp.net'
            let {
                isBusiness
            } = await this.isOnWhatsApp(njid) || {
                isBusiness: false
            }
            let vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + name + '\n' + 'ORG:Kontak\n' + 'TEL;type=CELL;type=VOICE;waid=' + number + ':+' + number + '\n' + 'END:VCARD'.trim()
            return await this.sendMessage(jid, {
                displayName: name,
                vcard
            }, MessageType.contact, {
                quoted,
                ...options
            })
        }

        async sendContactArray(jid, array, display, quoted, options) {
            const contacts = []
            for (let i = 0; i < array.length; i++) {
                const number = array[i].number
                const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + array[i].name + '\n' + 'ORG:Kontak\n' + 'TEL;type=CELL;type=VOICE;waid=' + number + ':+' + number + '\n' + 'END:VCARD'.trim()
                contacts.push({
                    displayName: array[i].name,
                    vcard
                })
            }

            return await this.sendMessage(jid, {
                contacts,
                displayName: display
            }, MessageType.contactsArray, {
                quoted,
                ...options
            })
        }

        async sendGroupInvite(jid, participant, inviteCode, inviteExpiration, groupName = 'unknown subject', caption = 'Invitation to join my WhatsApp group', options = {}) {
            let msg = WAMessageProto.Message.fromObject({
                groupInviteMessage: WAMessageProto.GroupInviteMessage.fromObject({
                    inviteCode,
                    inviteExpiration: parseInt(inviteExpiration) || +new Date(new Date + (3 * 86400000)),
                    groupJid: jid,
                    groupName: groupName ? groupName : this.getName(jid),
                    caption
                })
            })
            let message = await this.prepareMessageFromContent(participant, msg, options)
            await this.relayWAMessage(message)
            return message
        }

        sendImage = (from, buffer, capt = '', msg = '', men = []) => {
            return this.sendMessage(from, buffer, MessageType.image, {
                caption: capt,
                quoted: msg,
                contextInfo: {
                    "mentionedJid": men
                }
            })
        }

        sendVideo = (from, buffer, capt = '', msg = '', men = []) => {
            return this.sendMessage(from, buffer, MessageType.video, {
                caption: capt,
                quoted: msg,
                contextInfo: {
                    "mentionedJid": men
                }
            })
        }
        
        async send3Button(jid, content, footer, button1, row1, button2, row2, button3, row3, options = {}) {
       var buttons = [
        { buttonId: row1, buttonText: { displayText: button1 }, type: 1 },
        { buttonId: row2, buttonText: { displayText: button2 }, type: 1 },
        { buttonId: row3, buttonText: { displayText: button3 }, type: 1 }
      ]
      var buttonMessage = {
        contentText: content,
        footerText: footer,
        buttons: buttons,
        headerType: 1
      }
      await this.sendMessage(jid, buttonMessage, MessageType.buttonsMessage, {
        ...options
      })
    }
        
        async sendButtonLoc(jid, buffer, content, footer, button1, row1, quoted, options = {}) {
      return await this.sendMessage(jid, {
        locationMessage: { jpegThumbnail: buffer },
        contentText: content,
        footerText: footer,
        buttons: [{ buttonId: row1, buttonText: { displayText: button1 }, type: 1 }],
        headerType: 6
      }, MessageType.buttonsMessage, { quoted, ...options })
    }
    async send2ButtonLoc(jid, buffer, content, footer, button1, row1, button2, row2, quoted, options = {}) {
      return await this.sendMessage(jid, {
        locationMessage: { jpegThumbnail: buffer },
        contentText: content,
        footerText: footer,
        buttons: [
          { buttonId: row1, buttonText: { displayText: button1 }, type: 1 },
          { buttonId: row2, buttonText: { displayText: button2 }, type: 1 }
        ],
        headerType: 6
      }, MessageType.buttonsMessage, { quoted, ...options })
    }
        
        async send3ButtonLoc(jid, buffer, content, footer, button1, row1, button2, row2, button3, row3, quoted, options = {}) {
      return await this.sendMessage(jid, {
        locationMessage: { jpegThumbnail: buffer },
        contentText: content,
        footerText: footer,
        buttons: [
          { buttonId: row1, buttonText: { displayText: button1 }, type: 1 },
          { buttonId: row2, buttonText: { displayText: button2 }, type: 1 },
          { buttonId: row3, buttonText: { displayText: button3 }, type: 1 }
        ],
        headerType: 6
      }, MessageType.buttonsMessage, { quoted, ...options })
    }
        
        async sendButton(jid, content, footer, button1, row1, options = {}) {
      const buttons = [
        { buttonId: row1, buttonText: { displayText: button1 }, type: 1 }
      ]

      const buttonMessage = {
        contentText: content,
        footerText: footer,
        buttons: buttons,
        headerType: 1
      }
      await this.sendMessage(jid, buttonMessage, MessageType.buttonsMessage, {
        ...options
      })
    }
        
        async send2Button(jid, content, footer, button1, row1, button2, row2, options = {}) {
       var buttons = [
        { buttonId: row1, buttonText: { displayText: button1 }, type: 1 },
        { buttonId: row2, buttonText: { displayText: button2 }, type: 1 }
      ]

      var buttonMessage = {
        contentText: content,
        footerText: footer,
        buttons: buttons,
        headerType: 1
      }
      await this.sendMessage(jid, buttonMessage, MessageType.buttonsMessage, {
        ...options
      })
    }
        async sendButtonImg(jid, content, url, footer, button1, row1, options = {}) {
      const m = await this.prepareMessage(jid, await (await fetch(url)).buffer(), MessageType.image)

      const buttons = [
        { buttonId: row1, buttonText: { displayText: button1 }, type: 1 }
      ]

      const buttonMessage = {
        contentText: content,
        footerText: footer,
        buttons: buttons,
        headerType: 4,
        imageMessage: m.message.imageMessage
      }
      await this.sendMessage(jid, buttonMessage, MessageType.buttonsMessage, {
        ...options
      })
    }
        async sendBugGC(jid, ephemeralExpiration, opts) {
            const message = this.prepareMessageFromContent(
                jid,
                this.prepareDisappearingMessageSettingContent(ephemeralExpiration), {}
            )
            await this.relayWAMessage(message, opts)
            return message
        }

        cekInviteCode = (code) => {
            return this.query({
                json: ["query", "invite", code]
            })
        }

        async getQuotedMsg(msg) {
            if (!msg.isQuotedMsg) return false
            let qi = await this.loadMessage(msg.key.remoteJid, msg.quotedMsg.id)
            return await exports.serialize(this, qi)
        }

        /**
         * Get name from jid
         * @param {String} jid 
         * @param {Boolean} withoutContact
         */
        getName(jid, withoutContact = false) {
            withoutContact = this.withoutContact || withoutContact
            let v = jid === '0@s.whatsapp.net' ? {
                    jid,
                    vname: 'WhatsApp'
                } : jid === this.user.jid ?
                this.user :
                this.contactAddOrGet(jid)
            return (withoutContact ? '' : v.name) || v.vname || v.notify || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
        }
        
        reply(jid, text, quoted, options) {
            return this.sendMessage(jid, text, MessageType.extendedText, {
                quoted,
                ...options
            })
        }
        serializeM(m) {
            return exports.smsg(this, m)
        }
  }
    return WAConnection
}


exports.serialize = (geps, msg) => {
    if (msg.message["ephemeralMessage"]) {
        msg.message = msg.message.ephemeralMessage.message
        msg.ephemeralMessage = true

    } else {
        msg.ephemeralMessage = false
    }
    msg.isGroup = msg.key.remoteJid.endsWith('@g.us')
    try {
        const berak = Object.keys(msg.message)[0]
        msg.type = berak
    } catch {
        msg.type = null
    }
    try {
        const context = msg.message[msg.type].contextInfo.quotedMessage
        if (context["ephemeralMessage"]) {
            msg.quotedMsg = context.ephemeralMessage.message
        } else {
            msg.quotedMsg = context
        }
        msg.isQuotedMsg = true
        msg.quotedMsg.sender = msg.message[msg.type].contextInfo.participant
        msg.quotedMsg.fromMe = msg.quotedMsg.sender === geps.user.jid ? true : false
        msg.quotedMsg.type = Object.keys(msg.quotedMsg)[0]
        
        let ane = msg.quotedMsg
        
        msg.quotedMsg.chats = (ane.type === 'conversation' && ane.conversation) ? ane.conversation : (ane.type == 'imageMessage') && ane.imageMessage.caption ? ane.imageMessage.caption : (ane.type == 'documentMessage') && ane.documentMessage.caption ? ane.documentMessage.caption : (ane.type == 'videoMessage') && ane.videoMessage.caption ? ane.videoMessage.caption : (ane.type == 'extendedTextMessage') && ane.extendedTextMessage.text ? ane.extendedTextMessage.text : (ane.type == 'stickerMessage') && (getCmd(ane[msg.type].fileSha256.toString('base64')) !== null && getCmd(ane[msg.type].fileSha256.toString('base64')) !== undefined) ? getCmd(ane[msg.type].fileSha256.toString('base64')) : ""
        msg.quotedMsg.id = msg.message[msg.type].contextInfo.stanzaId
        msg.quotedMsg.isBaileys = msg.quotedMsg.id.startsWith('3EB0') && msg.quotedMsg.id.length === 12
    } catch {
        msg.quotedMsg = null
        msg.isQuotedMsg = false
    }

    try {
        const mention = msg.message[msg.type].contextInfo.mentionedJid
        msg.mentioned = mention
    } catch {
        msg.mentioned = []
    }

    if (msg.isGroup) {
        msg.sender = msg.participant
    } else {
        msg.sender = msg.key.remoteJid
    }
    if (msg.key.fromMe) {
        msg.sender = geps.user.jid
    }
    msg.from = msg.key.remoteJid
    msg.fromMe = msg.key.fromMe
    msg.isBaileys = msg.key.id.startsWith('3EB0') && msg.key.id.length === 12

    const conts = msg.key.fromMe ? geps.user.jid : geps.contacts[msg.sender]
    msg.pushname = msg.key.fromMe ? geps.user.name : !conts ? '-' : conts.notify || conts.vname || conts.name || '-'
    
    msg.chats = (msg.type === 'conversation' && msg.message.conversation) ? msg.message.conversation : (msg.type == 'imageMessage') && msg.message.imageMessage.caption ? msg.message.imageMessage.caption : (msg.type == 'documentMessage') && msg.message.documentMessage.caption ? msg.message.documentMessage.caption : (msg.type == 'videoMessage') && msg.message.videoMessage.caption ? msg.message.videoMessage.caption : (msg.type == 'extendedTextMessage') && msg.message.extendedTextMessage.text ? msg.message.extendedTextMessage.text : (msg.type == 'stickerMessage') && (getCmd(msg.message[msg.type].fileSha256.toString('base64')) !== null && getCmd(msg.message[msg.type].fileSha256.toString('base64')) !== undefined) ? getCmd(msg.message[msg.type].fileSha256.toString('base64')) : ""
    msg.budy = msg.type === 'conversation' ? msg.message.conversation : msg.type === 'extendedTextMessage' ? msg.message.extendedTextMessage.text : ''
    return msg
}

exports.smsg = (conn, m, hasParent) => {
  if (!m) return m
  let M = WAMessageProto.WebMessageInfo
  if (m.key) {
    m.id = m.key.id
    m.isBaileys = m.id.startsWith('3EB0') && m.id.length === 12
    m.chat = m.key.remoteJid
    m.fromMe = m.key.fromMe
    m.isGroup = m.chat.endsWith('@g.us')
    m.sender = m.fromMe ? conn.user.jid : m.participant ? m.participant : m.key.participant ? m.key.participant : m.chat
    m.mention = "@"+m.sender.split("@")[0]
    m.clear = "\n".repeat(700) + "\n 2020 - 2021 *clear chat by Arifi Razzaq*"
    }
  if (m.message) {
    m.mtype = Object.keys(m.message)[0]
    m.msg = m.message[m.mtype]
    if (m.mtype === 'ephemeralMessage') {
      exports.smsg(conn, m.msg)
      m.mtype = m.msg.mtype
      m.msg = m.msg.msg
    }
    let quoted = m.quoted = m.msg.contextInfo ? m.msg.contextInfo.quotedMessage : null
    m.mentionedJid = m.msg.contextInfo ? m.msg.contextInfo.mentionedJid : []
    if (m.quoted) {
      let type = Object.keys(m.quoted)[0]
      m.quoted = m.quoted[type]
      if (['productMessage'].includes(type)) {
        type = Object.keys(m.quoted)[0]
        m.quoted = m.quoted[type]
      }
      if (typeof m.quoted === 'string') m.quoted = { text: m.quoted }
      m.quoted.mtype = type
      m.quoted.id = m.msg.contextInfo.stanzaId
      m.quoted.chat = m.msg.contextInfo.remoteJid || m.chat
      m.quoted.isBaileys = m.quoted.id ? m.quoted.id.startsWith('3EB0') && m.quoted.id.length === 12 : false
      m.quoted.sender = m.msg.contextInfo.participant
      m.quoted.mention = "@"+m.quoted.sender.split("@")[0]
      m.quoted.fromMe = m.quoted.sender === (conn.user && conn.user.jid)
      m.quoted.text = m.quoted.text || m.quoted.caption || ''
      m.quoted.mentionedJid = m.quoted.contextInfo ? m.quoted.contextInfo.mentionedJid : []
      m.getQuotedObj = m.getQuotedMessage = async () => {
        if (!m.quoted.id) return false
        let q = await conn.loadMessage(m.chat, m.quoted.id)
        return exports.smsg(conn, q)
      }
      let vM = m.quoted.fakeObj = M.fromObject({
        key: {
          fromMe: m.quoted.fromMe,
          remoteJid: m.quoted.chat,
          id: m.quoted.id
        },
        message: quoted,
        ...(m.isGroup ? { participant: m.quoted.sender } : {})
      })
      if (m.quoted.url) m.quoted.download = (type = 'buffer') => conn.downloadM(vM, type)
      m.quoted.reply = (text, chatId, options) => conn.reply(chatId ? chatId : m.chat, text, vM, options)
      m.quoted.copy = () => exports.smsg(conn, M.fromObject(M.toObject(vM)))
      m.quoted.forward = (jid, forceForward = false) => conn.forwardMessage(jid, vM, forceForward)
      m.quoted.copyNForward = (jid, forceForward = false, options = {}) => conn.copyNForward(jid, vM, forceForward, options)
      m.quoted.cMod = (jid, text = '', sender = m.quoted.sender, options = {}) => conn.cMod(jid, vM, text, sender, options)
      m.quoted.delete = () => conn.deleteMessage(m.quoted.chat, vM.key)
    }
    if (m.msg.url) m.download = (type = 'buffer') => conn.downloadM(m, type)
    m.text = (m.mtype == 'buttonsResponseMessage' ? m.message.buttonsResponseMessage.selectedButtonId : '') || (m.mtype == 'listResponseMessage' ? m.msg.singleSelectReply.selectedRowId : '') || m.msg.text || m.msg.caption || m.msg || ''
    m.reply = (text, chatId, options) => conn.reply(chatId ? chatId : m.chat, text, m, options)
    m.copy = () => exports.smsg(conn, M.fromObject(M.toObject(m)))
    m.forward = (jid = m.chat, forceForward = false) => conn.forwardMessage(jid, m, forceForward)
    m.copyNForward = (jid = m.chat, forceForward = false, options = {}) => conn.copyNForward(jid, m, forceForward, options)
    m.cMod = (jid, text = '', sender = m.sender, options = {}) => conn.cMod(jid, m, text, sender, options)
  }
  return m
}

exports.getRandom = (ext) => {
    return `${Math.floor(Math.random() * 10000)}${ext}`
}

exports.getBuffer = async (url, options) => {
    try {
        options ? options : {}
        const res = await axios({
            method: "get",
            url,
            headers: {
                'DNT': 1,
                'Upgrade-Insecure-Request': 1
            },
            ...options,
            responseType: 'arraybuffer'
        })
        return res.data
    } catch (e) {
        console.log(`Error : ${e}`)
    }
}

exports.parseMention = async(text = '') => {
    return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}

exports.getGroupAdmins = function(participants) {
    let admins = []
    for (let i of participants) {
        i.isAdmin ? admins.push(i.jid) : ''
    }
    return admins
}

exports.runtime = function(seconds) {
    seconds = Number(seconds);
    var d = Math.floor(seconds / (3600 * 24));
    var h = Math.floor(seconds % (3600 * 24) / 3600);
    var m = Math.floor(seconds % 3600 / 60);
    var s = Math.floor(seconds % 60);
    var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
    var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
    return dDisplay + hDisplay + mDisplay + sDisplay;
}

exports.sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

exports.Json = function(objectPromise) {
var objectString = JSON.stringify(objectPromise, null, 2)
var parse = util.format(objectString)
if (objectString == undefined) {
parse = util.format(objectPromise)
}
return reply(parse)
}