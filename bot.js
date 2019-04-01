/*
FlameForDiscord™

DO NOT LEEACH! GIVE ME CREDIT!
by Track Projects inc.
*/

const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = "!";

console.log('[BOT] Started...')
client.on('ready', () => {
    console.log(`FlameForDiscord : ${client.user.tag} Ready!`);
    client.user.setActivity('FlameForDiscord™ by Лиам#1316!');
});


global.hacker = 0
global.I = 0
global.so = 0
global.Yes = 0
global.is = 0
global.destroy = 0

client.on('message', msg => {
    if (msg.author == client.user) {
        return
    }
    const args = msg.content.slice(prefix.length).trim().split(/ +/g);
    var cmd = msg.content.split(' ');
	if (cmd.indexOf("hacker") > -1) {
		hacker = hacker + 1
	}
	if (cmd.indexOf("I") > -1) {
		I = I + 1
	}
	if (cmd.indexOf("i") > -1) {
		I = I + 1
	}
	if (cmd.indexOf("Im") > -1) {
		I = I + 1
	}
	if (cmd.indexOf("I'll") > -1) {
		I = I + 1
	}
	if (cmd.indexOf("Yes") > -1) {
		Yes = Yes + 1
	}
	if (cmd.indexOf("yes") > -1) {
		Yes = Yes + 1
	}
	if (cmd.indexOf("is") > -1) {
		is = is + 1
	}
	if (cmd.indexOf("so") > -1) {
		so = so + 1
	}
	if (cmd.indexOf("Is") > -1) {
		is = is + 1
	}
	if (cmd.indexOf("iI") > -1) {
		is = is + 1
	}
	if (cmd.indexOf("IS") > -1) {
		is = is + 1
	}
	if (cmd.indexOf("destroy") > -1) {
		destroy = destroy + 1
	}
	if (cmd.indexOf("DESTROY") > -1) {
		destroy = destroy + 1
    }
    if (!msg.content.startsWith(prefix)) return
    if (msg.content.startsWith(prefix + "stats")) {
        msg.channel.send('| Yes: ' + Yes + ' | So: ' + so + ' | I: ' + I + ' | Hacker: ' + hacker + ' |' + ' Destroy: ' + destroy + ' | Is: ' + is + ' |');
    } if (msg.content.startsWith(prefix + "info")) {
        msg.channel.send(`FlameForDiscord™ by Лиам#1316 - A discord message analyzer
        `)
    };
});

client.login('NTYxODQ2NzA1MzM1ODI4NDgw.XKCK6g.arCGzEd7GsEnyUEpsoIx9rUYGCc');
/*
built by track3cc [ Instagram ]
*/