import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://raw.githubusercontent.com/NaufalID/asupan2/master/ana.json'
	conn.sendButton(m.chat, 'Waifu nya om (≧ω≦)', wm, await(await fetch(url)).buffer(), [['Next',`.${command}`]],m)
}
handler.command = /^(anna)$/i
handler.tags = ['anime']
handler.help = ['anna']
handler.premium = false

export default handler
