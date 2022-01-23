"use strict";
require("dotenv").config();

global.BaileysDevice = require('./Connect/test')
global.conn = BaileysDevice.conn
global.blocked = conn.blocked;
global.charging = conn.charging;
global.battery = conn.battery;
global._scommand = conn._scommand;
global.pengunjung = conn.pengunjung;
global.multi = conn.multi;
global.nopref = conn.nopref;
global.admins = conn.admins;
global.isCatchPengunjung = conn.isCatchPengunjung;
global.charging = conn.charging;
global.modelmenu = conn.modelmenu;
global.antilinkgroup = conn.antilinkgroup

conn.on('CB:Blocklist', json => { 
require('./Connect/whatsapp/client/block')(json, blocked) 
})

conn.on('CB:action,,battery', json => { 
require('./Connect/whatsapp/client/battery')(json, charging, battery) 
})

conn.on('chat-update', async (m) => { 
require('./Connect/whatsapp/command/autorespon')(m); 
require('./Connect/whatsapp/command/button')(m, antilinkgroup); 
require('./Connect/whatsapp/command/listMess')(m); 
require('./Connect/whatsapp/command/if')(m, _scommand, pengunjung, multi, nopref, admins, isCatchPengunjung, modelmenu, antilinkgroup);
})

BaileysDevice.connect();