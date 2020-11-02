const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NzcyNzE2NDAyODM0NDA3NDI2.X5-uOg.o90YDGkbG92ssWWSbfgUsCk7YGo';

bot.on('ready', () =>{
	console.log('This bot is online!');
})

bot.on('message', msg=>{
	let message = msg.content;
	if(message.toUpperCase() === "HELLO"){
		msg.channel.send('Hello Bitch! <@' + msg.author.id + '>');
	}
	if(message.toUpperCase() === 'AMONG US?' || message.toUpperCase() === 'AMONG US ?'){
		msg.channel.send('Bhaag idhar se');
	}
	if(message.toLowerCase().includes('kids') || message.toLowerCase().includes('kidz')){
		msg.channel.send('Bhaag idhar se');
	}
	if(msg.content.startsWith('+mute')){
		let tomute = msg.guild.member(msg.mentions.users.first());
		let mutedRole = msg.guild.roles.cache.find(role => role.name == "Silence");
		tomute.roles.add(mutedRole);
		msg.channel.send('Done!');
	}
	if(message.startsWith("!")){
		if(message.toLowerCase().includes('brain') || message.toLowerCase().includes('abhishek'))
			msg.channel.send("You have no right to say anything about Admin");
		else
			msg.channel.send("Yes, " + message.substring(1, message.length));
	}
	if(message.startsWith("pls kill")){
		let tomute = msg.guild.member(msg.mentions.users.first());
		msg.channel.send("Okay! " + message.substring(8, message.length) + " is dead. Happy?");
	}
})

bot.login(token);
