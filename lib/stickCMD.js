let fs = require("fs"); 

const _scommand = JSON.parse(fs.readFileSync('./database/scommand.json'));

const addCmd = (id, command) => {
const obj = { id: id, chats: command }
             _scommand.push(obj)
             fs.writeFileSync('./database/scommand.json', JSON.stringify(_scommand))
         }
         
const getCommandPosition = (id) => {
      let position = null
         Object.keys(_scommand).forEach((i) => {
            if (_scommand[i].id === id) {
               position = i
            }
        })
     if (position !== null) {
     return position
     }
  }
  
const getCmd = (id) => {
      position = null
         Object.keys(_scommand).forEach((i) => {
            if (_scommand[i].id === id) {
               position = i
            }
        })
     if (position !== null) {
     return _scommand[position].chats
     }
  }
  
const checkscommand = (id) => {
      let status = false
         Object.keys(_scommand).forEach((i) => {
            if (_scommand[i].id === id) {
              let status = true
           }
        })
     return status
  }
 
module.exports = { 
 _scommand, 
 addCmd, 
 getCommandPosition, 
 checkscommand, 
 getCmd
}