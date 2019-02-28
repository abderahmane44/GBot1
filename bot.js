const prefix ="+";
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
 console.log("bot online"); 
console.log("log");
});





 
client.on('message', message => {
    if (message.content === '....') {
        message.reply('♪أطلـَـق من نقط, يلــبى بس ☆');
      }
});


client.on('message', message => {
    if (message.content === '...') {
        message.reply('♪أطلـَـق من نقط, يلــبى بس ☆');
      }
});


client.on('message', message => {
    if (message.content === '..') {
        message.reply('♪أطلـَـق من نقط, يلــبى بس ☆');
      }
});

client.on('message', message => {
    if (message.content === '.') {
        message.reply('♪أطلـَـق من نقط, يلــبى بس ☆');
      }
});



   





	
	
client.login(process.env.BOT_TOKEN);
