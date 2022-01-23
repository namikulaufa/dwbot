"use strict";
const { MessageType } = require("@adiwajshing/baileys");
const { serialize } = require("../../../lib/rojaktype");

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
         const { sender, from, budy, isBaileys } = msg;
         if (isBaileys) return
         
         // Setting
         const setArrayNumber = [ "6281261324817" ]
         const ownerArray = setArrayNumber + '@s.whatsapp.net'
         const isOwnerArray = ownerArray.includes(sender)
    
    // Message Auto
    if (budy.includes("Assalamu'alaikum")) {
          conn.reply(from, "Wa'alaikumussalam, Warahmatullahi wabarakatuh", msg)
    } else if (budy.includes("Assalamualaikum")) {
          conn.reply(from, "Wa'alaikumussalam, Warahmatullahi wabarakatuh", msg)
    } else if (budy.includes("assalamualaikum")) {
          conn.reply(from, "Wa'alaikumussalam, Warahmatullahi wabarakatuh", msg)
    } else if (budy.includes("assalamu'alaikum")) {
          conn.reply(from, "Wa'alaikumussalam, Warahmatullahi wabarakatuh", msg)
    }
    
    // Costume Undefined
    if (isOwnerArray) {
    if (budy.toLowerCase() === ">") {
          conn.reply(from, "eval tidak di ketahui", msg)
    } else if (budy.toLowerCase() === "=>") {
          conn.reply(from, "eval async tidak di ketahui", msg)
    } else if (budy.toLowerCase() === "$") {
          conn.reply(from, "Exec tidak di ketahui", msg)
    }
      }
        } catch (err) {
    console.log(Ft.chalk.bold.red('[ERROR]'), err)
    }
}