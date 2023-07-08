import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

// Owner
global.owner = [
['628889616144', 'Ekuzika', true],
['6285760451683', 'Zeltoria', true]
]
global.mods = []
global.prems = []
// Info
global.nomorwa = '628889616144'
global.author = '© Ekuzika'
global.namebot = '​Clara - MD'
global.wm = '© Clara By Ekuzika'
global.stickpack = 'Clara - MD'
global.stickauth = '© Ekuzika'
// Link Sosmed
global.sig = 'https://www.instagram.com/ekuzikaa_18'
global.sgh = 'https://github.com/Xyroinee'
global.sgc = 'https://chat.whatsapp.com/LAWdMIQri9SKee5kqmISH0'
// Donasi
global.psaweria = 'https://saweria.co/Ekuzika'
global.ptrakterr = 'https://trakteer.id/zeltoria'
global.povo = '0812-1829-0392'
// Info Wait
global.wait = '_Sedang Di Proses, Mohon Tunggu_....'
global.eror = 'Terjadi Kesalahan Coba Lagi Nanti!'
global.multiplier = 69 
// Apikey
global.xyro = 'Ekuzika'
// Website: https://api.xyroinee.xyz
// Daftar Ke Website Tersebut Untuk..
// Mendapatkan Apikey Kamu

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})

