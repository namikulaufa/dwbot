require('../../index.js')
require('../../Connect/whatsapp/command/if.js')
require('../../Connect/whatsapp/command/button.js')
require('../../Connect/whatsapp/command/autorespon.js')
require('../../Connect/whatsapp/command/listMess.js')
require('../../database/Constructor/loader.js')


//AsFile
nocache('../../index.js', module => console.log(Ft.chalk.green(`'${module}' Telah berubah!`)));
nocache('../../Connect/whatsapp/command/if.js', module => console.log(Ft.chalk.green(`'${module}' Telah berubah!`)));
nocache('../../Connect/whatsapp/command/button.js', module => console.log(Ft.chalk.green(`'${module}' Telah berubah!`)));
nocache('../../Connect/whatsapp/command/autorespon.js', module => console.log(Ft.chalk.green(`'${module}' Telah berubah!`)));
nocache('../../Connect/whatsapp/command/autorespon.js', module => console.log(Ft.chalk.green(`'${module}' Telah berubah!`)));
nocache('../../database/Constructor/loader.js', module => console.log(Ft.chalk.green(`'${module}' Telah berubah!`)));
nocache('../../Connect/whatsapp/command/listMess.js', module => console.log(Ft.chalk.green(`'${module}' Telah berubah!`)));


function nocache(module, cb = () => {}) {
    conn.logger.info(Ft.color(`Module ${module} sekarang sedang diawasi untuk perubahan`))
    Ft.fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}