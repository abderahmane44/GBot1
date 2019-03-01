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





client.on('message', function(msg) {
        let verifLevels = ["None", "Low", "Medium", "(╯°□°）╯︵  ┻━┻", "┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻"];
        let region = {
            "brazil": "Brazil",
            "eu-central": "Central Europe",
            "singapore": "Singapore",
            "Russia": "Russia",
            "us-central": "U.S. Central",
            "sydney": "Sydney",
            "us-east": "U.S. East",
            "us-south": "U.S. South",
            "us-west": "U.S. West",
            "eu-west": "Western Europe",
            "vip-us-east": "VIP U.S. East",
            "london": "London",
            "amsterdam": "Amsterdam",
            "hongkong": "Hong Kong"
        };
      
          if (msg.content.startsWith(prefix + 'server')) {
          if (!msg.guild) return message.reply('**Only Servers | :x:**')
      console.log(`${msg.author.username} Has Ran Server Command`)
          let embed = new Discord.RichEmbed()
          .setColor('RANDOM')
          .setThumbnail(msg.guild.iconURL)
          .setTitle(`${msg.guild.name}`)
          .addField('**[❖] Server Name | اسم السيرفر**',`[** __${msg.guild.name}__ **]`,true)
          .addField('**[❖] OwnerShip | مؤسس السيرفر**',`**${msg.guild.owner}**`,true)
          .addField('**[❖] Server ID | معرف السيرفر**',`**${msg.guild.id}**`,true)
          .addField('**[❖] Members Count | عدد الاعضاء**',`[** __${msg.guild.memberCount}__ **]`,true)
          .addField('**[❖] Verification Level | مستوي الحمايه**',`[** __${verifLevels[msg.guild.verificationLevel]}__** ]`,true)
          .addField('**[❖] Region | البلد**',`[** __${region[msg.guild.region]}__** ]`,true)
          .addField('**[❖] Text Channels | رومات كتابيه**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
          .addField('**[❖] Voice Channels | رومات صوتيه**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
          .addField('**[❖] Created At | صنع في**',msg.guild.createdAt.toLocaleString())
          msg.channel.send({embed:embed});
        }
      });










client.on('message', message => {
        if (message.content === "+inv") {
            if(!message.channel.guild) return;
        let embed = new Discord.RichEmbed()
        .setAuthor(` ${message.author.username} `, message.author.avatarURL)      
        .setTitle(`:small_orange_diamond: Click Here `)
        .setURL(`https://discordapp.com/api/oauth2/authorize?client_id=489909153368768523&permissions=8&scope=bot`)        
     message.channel.sendEmbed(embed);
       }
   });

client.on("message", msg => {
  if(msg.content === '+' + "id") {
      const embed = new Discord.RichEmbed();
  embed.addField("🔱| اسم الحساب :", `${msg.author.username}#${msg.author.discriminator}`, true)
          .addField("🆔| الاي دي :", `${msg.author.id}`, true)
          .setColor("RANDOM")
          .setFooter(msg.author.username , msg.author.avatarURL)
          .setThumbnail(`${msg.author.avatarURL}`)
          .setTimestamp()
          .setURL(`${msg.author.avatarURL}`)
          .addField('📛| الحالة :', `${msg.author.presence.status.toUpperCase()}`, true)
          .addField('🎲| بلاينج :', `${msg.author.presence.game === null ? "No Game" : msg.author.presence.game.name}`, true)
          .addField('🏅| الرتب : ', `${msg.member.roles.filter(r => r.name).size}`, true)
          .addField('📅| تم الانضمام للديسكورد في :', `${msg.createdAt}`,true)
          .addField('🤖| هل هو بوت ؟', `${msg.author.bot.toString().toUpperCase()}`, true);
      msg.channel.send({embed: embed})
  }
});


client.on('message', message => {
	var prefix = "+"
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .kickable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).kick();

  const kickembed = new Discord.RichEmbed()
  .setAuthor(`KICKED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : kickembed
  })
}
});





client.on("message", (message) => {
if (message.content.startsWith("+setVoice")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'voice');
    message.channel.sendMessage('تـم إنـشاء روم صـوتي')
    
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
