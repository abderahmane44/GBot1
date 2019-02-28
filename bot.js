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



   

const gamestats = [`Mazza Shop`,`Mazza Shop`,`Mazza Shop`,`Mazza Shop`]
var index = 0
var timer = 10 // الوقت بالثواني لتغير الستريمنق
client.on("ready", ()=> {
        setInterval(function(){
        client.user.setGame(`${gamestats[index]}`,'https://www.twitch.tv/ACMBOT') 
        index++
            if( index >= gamestats.length) index = 0 ;
        }, timer*1000);

});


















































client.login(process.env.TOKEN);
