const { Functions } = require('../database/Constructor/index.0.js');
const { JsonDB } = require("node-json-db");
const { Config } = require("node-json-db/dist/lib/JsonDBConfig");
const { WAConnection: _WAConnection, ReconnectMode } = require("@adiwajshing/baileys");
const { _scommand } = require('../lib/stickCMD.js')
              global.pkgg = require('../package.json');
              global.WAConnection = require("../lib/rojaktype").WAConnection(_WAConnection);
              global.Ft = new Functions();
              global.conn = new WAConnection();
              global.db = new JsonDB(new Config("./database/database", true, false, '/'));
              require('../database/Constructor/loader.js')
         Ft.Cfonts.say(pkgg.version, { 
       font: 'tiny', 
     align: 'left', 
   gradient: ['#3456ff', 'blue'] 
})
console.log(Ft.color(
Ft.figlet.textSync('Dakwah Bot', {
   font: 'Standard',
   horizontalLayout: 'default',
   vertivalLayout: 'default',
   width: 80,
   whitespaceBreak: false
}
  ), 'cyan' ))
      conn.mode = 'public';
      conn.blocked = [];
      conn.admins = [];
      conn.charging = [];
      conn.modelmenu = [];
      conn.isCatchPengunjung = {};
      conn.Events = {};
      conn.prefa = ["."];
      conn.nopref = false;
      conn.multi = true;
      conn.battrey = { value: 0, cas: true ? 'charging' : '' }
      conn.pengunjung = JSON.parse(Ft.fs.readFileSync('./database/pengunjung.json'));
      conn.antilinkgroup = JSON.parse(Ft.fs.readFileSync('./database/antilinkgroup.json'));
      conn['config'] = JSON.parse(Ft.fs.readFileSync('./database/query.json'));
      conn._scommand = _scommand
      exports.conn = conn
      
   // Ez Base By Arifi Razzaq
      exports.connect = async() => {
          conn.version = [5, 9741, 8];
          conn.logger.level = 'warn';
          conn.autoReconnect = ReconnectMode.onConnectionLost;
          conn.browserDescription = ['SticXcode', 'IE', '9.1'];
          conn.on('qr', qr => {})
          conn.on('connecting', () => { Ft.fs.existsSync('./database/session/qrcode-terminal.json') && conn.loadAuthInfo('./database/session/qrcode-terminal.json')  })
          conn.on('open', () => { console.log(Ft.color(`~> [SYSTEM] Tersambung Pada Jaringan`)) })
          await conn.connect({timeoutMs: 30*1000})
          Ft.fs.writeFileSync('./database/session/qrcode-terminal.json', JSON.stringify(conn.base64EncodedAuthInfo(), null, '\t'));
          Ft.fs.existsSync('./database/session/qrcode-terminal.json') && conn.loadAuthInfo('./database/session/qrcode-terminal.json')
          conn.on('ws-close', async () => {})
          conn.on('close', async () => { console.log(Ft.color(`~> [SYSTEM] Jaringan Terputus`)) })
     return conn
}
require('../index.js')
