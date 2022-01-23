"use strict";

module.exports = async(json, blocked) => {
if (conn.blocked.length > 2) return
for (let i of json[1].blocklist) {
conn.blocked.push(i.replace('c.us', 's.whatsapp.net'))
}
}