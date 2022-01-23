"use strict";

module.exports = async(json, charging, battery) => {
let a = json[2][0][1].value
let b = json[2][0][1].live
conn.battrey.value = a
conn.battrey.cas = b
console.log(Ft.chalk.keyword('orange')('Battery: ' + a), Ft.chalk.keyword('salmon')(', Charge: ' + b + ''));
}