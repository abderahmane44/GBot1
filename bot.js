const prefix ="!";
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
 console.log("bot online"); 
console.log("log");
});









client.on('message', message => {
    if (message.content.startsWith("رابط")) {

  message.channel.createInvite({
        thing: true,
        maxUses: 100,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
  message.channel.send("**تم ارسال الرابط برسالة خاصة**")

message.author.send(`**مدة الرابط : يـوم
عدد استخدامات الرابط : 100**`)


    }
});
 
client.on('message', msg => {
if (msg.content.startsWith(prefix + 'cal')) {
  let args = msg.content.split(" ").slice(1);
      const question = args.join(' ');
  if (args.length < 1) {
      msg.reply('**من فضلك .. قم بكتابة سؤال **.');
} else {    let answer;
  try {
      answer = math.eval(question);
  } catch (err) {
      return msg.reply(`Error: ${err}`);
  }

  const embed = new Discord.RichEmbed()
  .setThumbnail('https://banner2.kisspng.com/20180215/ade/kisspng-office-supplies-animation-calculator-5a85e764e3aa68.4914103215187249649325.jpg')
.setDescription(`**
 السؤال يقولك :thinking:  : ${question}
 طبعا الاجابة :writing_hand: : ${answer}**
`)
  msg.channel.send(embed)
  }
};
});
 
 
 
 
 
 
 
 

client.on('message', msg => {
    if(msg.content.startsWith('!link')) {
    if(msg.channel.type === 'dm') return;
const user = msg.mentions.users.first();
if(!user) return msg.channel.send('``' + '**قم بتحديد بوت**' + '``')
if(!user.bot) return msg.reply('\`منشن بوت\`');
msg.channel.send(`**Bot InviteURL : ** https://discordapp.com/oauth2/authorize?client_id=${user.id}&scope=bot&permissions=384064`)
    }
});
  
 
 
 

 
 
 
 
 
 
 client.on('message' , function (message){
      var token = 'توكن بوتك'; // التوكن هنا بس
      if(message.content === '!restart') {
if(message.author.id !== 'ايديك') return message.reply('**الامر خاص بـ صاحب البوت وشكرا**');
          client.destroy();
          client.login(token) // لا تغيرها
var time = 7200000;
client.setInterval(function() {
    client.destroy();
    client.login(token) // لا تغيرها
  }, time);
}
})





client.on('message', message => {
    if(message.content == '!bans'){
        message.guild.fetchBans().then(bans => {
            bans.forEach(user => {
               message.channel.send('\`#\` <@'+ user.id + '>');
            });
        });
    }
});
  
  


  
  
 const snekfetch = require("snekfetch");
  client.on('message', async message => {
if(message.author.bot) return;
if (message.channel.guild) {
if (message.content.startsWith(prefix + `!cat`)) {
            const { body } = await snekfetch.get("http://aws.random.cat/meow");
            return message.channel.send({ file: body.file });
}}});
  
  
 
 
 client.on("message", message => {
    if (message.content.match(/([A-Z0-9]|-|_){24}\.([A-Z0-9]|-|_){6}\.([A-Z0-9]|-|_){27}|mfa\.([A-Z0-9]|-|_){84}/gi)) {
        if(!message.guild.members.get(client.user.id).hasPermission('MANAGE_MESSAGES')) return message.channel.send('**I need Permission \`MANAGE_MESSAGE\`To delete Tokens**')
        message.delete();
        message.reply(`مخك وين ترسل التوكن لحول`);
        return;
    }
                              if(message.channel.type === "dm"){
    if (message.content.match(/([A-Z0-9]|-|_){24}\.([A-Z0-9]|-|_){6}\.([A-Z0-9]|-|_){27}|mfa\.([A-Z0-9]|-|_){84}/gi)) {
        message.delete();
        message.reply(`مخك وين ترسل التوكن لحول`);
        return;
    }
}
});
  
 
 client.on('message',async message => {
  let mention = message.mentions.members.first();
  let acRoom = client.channels.get('483662159277064197');
  if(message.content.startsWith(prefix + "رفض")) {
  if(message.guild.id !== '470478928947970048') return;
  if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return;
  if(!mention) return message.reply("منشن شخص");
  acRoom.send(`**${mention} تم رفضك للاسف**`)
  }
});
 
 
 

 
 
 

 
 
 
 
 

 
 
 
 


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 client.on('message', message => {
if(message.content.startsWith('!مستخدم') ) {
     if(!message.channel.guild) return message.reply('** This command only for servers **')
          var args = message.content.split(" ").slice(1);
    let sent = 0
    let count = 1;
    
      if(args){
client.users.filter(u => u.discriminator == args[0]).forEach(u => {
    if(sent > 4){
     return
    }
    sent = sent + 1
      message.channel.send(`
      ** ${count}➥ ${u.tag}**
         
      `)
      count++;
})
}
}
if(message.content ===('!مستخدم') ) {
     if(!message.channel.guild) return message.reply('** This command only for servers **')
  let sent = 0
    let count = 1;
          

client.users.filter(u => u.discriminator == message.author.discriminator).forEach(u => {
    if(sent > 4){
        return
    }
    sent = sent + 1
      message.channel.send(`
      ** ${count}➥ ${u.tag}**
         
      `)
      count++;
})
}
});
 
 

 
 
 
client.on('message',async message => {
  var room;
  var title;
  var duration;
  var gMembers;
  var filter = m => m.author.id === message.author.id;
  if(message.content.startsWith(prefix + "giveaway")) {
     //return message.channel.send(':heavy_multiplication_x:| **هذا الامر معطل حاليا.. ``حاول في وقت لاحق``**');
    if(!message.guild.member(message.author).hasPermission('MANAGE_GUILD')) return message.channel.send(':heavy_multiplication_x:| **يجب أن يكون لديك خاصية التعديل على السيرفر**');
    message.channel.send(`:eight_pointed_black_star:| **منشن الروم الذي تريد به القيف اواي**`).then(msgg => {
      message.channel.awaitMessages(filter, {
        max: 1,
        time: 20000,
        errors: ['time']
      }).then(collected => {
        let room = message.guild.channels.find('giveaway', collected.first().content);
        if(!room) return message.channel.send(':heavy_multiplication_x:| **لم اقدر على ايجاد الروم المطلوب**');
        room = collected.first().content;
        collected.first().delete();
        msgg.edit(':eight_pointed_black_star:| **اكتب مدة القيف اواي**').then(msg => {
          message.channel.awaitMessages(filter, {
            max: 1,
            time: 20000,
            errors: ['time']
          }).then(collected => {
            if(isNaN(collected.first().content)) return message.channel.send(':heavy_multiplication_x:| **يجب عليك ان تحدد وقت زمني صحيح.. ``يجب عليك اعادة كتابة الامر``**');
            duration = collected.first().content * 60000;
            collected.first().delete();
            msgg.edit(':eight_pointed_black_star:| **واخيرا اكتب على ماذا تريد القيف اواي**').then(msg => {
              message.channel.awaitMessages(filter, {
                max: 1,
                time: 20000,
                errors: ['time']
              }).then(collected => {
                title = collected.first().content;
                collected.first().delete();
                try {
                  let giveEmbed = new Discord.RichEmbed()
                  .setAuthor(message.guild.name, message.guild.iconURL)
                  .setTitle(title)
                  .setDescription(`المدة : ${duration / 60000} دقائق`)
                  .setFooter(message.author.username, message.author.avatarURL);
                  message.guild.channels.find('name', room).send(giveEmbed).then(m => {
                     let re = m.react('🎉');
                     setTimeout(() => {
                       let users = m.reactions.get("🎉").users;
                       let list = users.array().filter(u => u.id !== m.author.id);
                       let gFilter = list[Math.floor(Math.random() * list.length) + 0];
                         if(users.size === 1) gFilter = '**لم يتم التحديد**';
                       let endEmbed = new Discord.RichEmbed()
                       .setAuthor(message.author.username, message.author.avatarURL)
                       .setTitle(title)
                       .addField('انتهى القيف اواي !',`الفائز هو : ${gFilter}`)
                       .setFooter(message.guild.name, message.guild.iconURL);
                       m.edit(endEmbed);
                     },duration);
                   });
                  msgg.edit(`:heavy_check_mark:| **تم اعداد القيف اواي**`);
                } catch(e) {
                  msgg.edit(`:heavy_multiplication_x:| **لم اقدر على اعداد القيف اواي بسبب نقص الخصائص**`);
                  console.log(e);
                }
              });
            });
          });
        });
      });
    });
  }
});
 
 
 
 
 
 
 

 
 
 
 
 
 
 
 
 
client.on("message", message => {
    var prefix = "!"; 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "مسح")) {
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('⚠ | **ليس لديك صلاحيات**');
        var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "Done | تــم",
        color: 0x06DF00,
        description: "تم مسح الرسائل بنجاح",
        footer: {
          text: "bot.bot" 
        }
      }}).then(msg => {msg.delete(3000)});
                          }

     
});
 
 

 
 
 
 
 
 
 

 

 
 client.on('typingStart', (ch, user) => {
    if(user.presence.status === 'offline') {
        
        ch.send(`${user} هاهاهاا , كشفتك وانت تكتب ي اوف لاين`)
        .then(msg => {
            msg.delete(10000)
        })
    }
})
 








 
 
 


client.on('message', message => {
   if(message.content.startsWith(prefix + "invites")) {
    message.guild.fetchInvites().then(invs => {
      let user = message.mentions.users.first() || message.author
      let personalInvites = invs.filter(i => i.inviter.id === user.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
               let mmmmEmbed = new Discord.RichEmbed()
                         .setAuthor(client.user.username)
                         .setThumbnail(message.author.avatarURL)
 .addField(` لقد قمت بدعوة :`, ` ${inviteCount} `)
           .setFooter(`- Requested By: ${message.author.tag}`);
           message.channel.send(mmmmEmbed)
});
  }
});
 
 
 
 

 
 
 
 
 
 
 
 

 
 
 
 
 
 
 
 
 
client.on('message',async message => {
  let args = message.content.split(" ").slice(1).join(" ");
  let role = message.guild.roles.find('name',args) || message.guild.roles.get(args);


  if(message.content.startsWith(prefix + "gRole")) {
    if(!args) return message.reply('اكتب اسم الرتبة');
    if(!role) return message.reply('هذه الرتبة غير موجودة');
    let iQp = new Discord.RichEmbed()
    .setAuthor(message.author.tag,message.author.avatarURL)
    .setTitle(message.guild.name)
    .setThumbnail(message.guild.iconURL)
    .addField('- اسم الرتبة',role.name,true)
    .addField('- اي دي الرتبة',role.id,true)
    .addField('- تم انشاء الرتبة',role.createdAt.toLocaleString(),true)
    .addField('- لون الرتبة',role.hexColor,true)
    .addField('- عدد الاعضاء الذي لديهم نفس الرتبة',role.members.size,true)
    .addField('- مركز الرتبة بين كل الرتب',role.position,true)
    .addField('- خصائص الرتبة',role.permissions,true)
    .setFooter(message.author.tag,message.author.avatarURL);

    message.channel.send(iQp);
  }
});
 
 
 
 
 
 
 

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 client.on('guildMemberAdd', member=> {
    member.addRole(member.guild.roles.find("name","Member"));
    });
 
 
 
 
 
 
 
 
 
 
 
 
 

 
 
 
 
client.on('message', message => {
    if(message.content.startsWith(prefix + 'moveall')) {
     if (!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send('**لايوجد لديك صلاحية سحب الأعضاء**');
       if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return message.reply("**لايوجد لدي صلاحية السحب**");
    if (message.member.voiceChannel == null) return message.channel.send(`**الرجاء الدخول لروم صوتي**`)
     var author = message.member.voiceChannelID;
     var m = message.guild.members.filter(m=>m.voiceChannel)
     message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
     m.setVoiceChannel(author)
     })
     message.channel.send(`**تم سحب جميع الأعضاء الي الروم الصوتي حقك.**`)


     }
       });
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 




 
 
 
 
 
 
 
 
client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ردد") {
   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 }); 
 

client.on('message', message => { 
let PREFIX = '!'
    if (message.content.startsWith(PREFIX + 'emojilist')) {

        const List = message.guild.emojis.map(e => e.toString()).join(" ");

        const EmojiList = new Discord.RichEmbed()
            .setTitle('➠ Emojis') 
            .setAuthor(message.guild.name, message.guild.iconURL) 
            .setColor('RANDOM') 
            .setDescription(List) 
            .setFooter(message.guild.name) 
        message.channel.send(EmojiList) 
    }
});
 
 
 
 

 
 
 
 
 
 
 
 
 
 
 
 
 
 
client.on('message',function(message) {
    let messageArray = message.content.split(" ");
    let args = messageArray[1];
   if(message.content.startsWith(prefix + "counting")) {
       if(!args) return message.reply('ℹ ``اختر رقم``');
       let i;
       for (i = 0; i < `${parseInt(args) + 1}`; ++i)
       message.channel.send(i)
   }
});
 
 
 
 
 
 
 

 
 
 

 
 
 

client.on('message',  (message) => {
        if(message.content.startsWith('!ابلع')) {
  let user = message.mentions.users.first();
  if (!user) {

    return message.emit('commandUsage', message, this.help);
  }
  let slaps = [
    'https://i.giphy.com/media/3XlEk2RxPS1m8/giphy.gif',
    'https://i.giphy.com/media/mEtSQlxqBtWWA/giphy.gif',
    'https://i.giphy.com/media/j3iGKfXRKlLqw/giphy.gif',
    'https://i.giphy.com/media/2M2RtPm8T2kOQ/giphy.gif',
    'https://i.giphy.com/media/l3YSimA8CV1k41b1u/giphy.gif',
    'https://i.giphy.com/media/WLXO8OZmq0JK8/giphy.gif'
  ];

  message.channel.send({
    embed: {
      description: `${message.author.username} صكك كف ولا عمر ابوك ما ذقته ${user.username}!`,
      image: {
        url: slaps[Math.floor(Math.random() * slaps.length)]
      }
    }
  }).catch(e => {
    client.log.error(e);
  })
        }  
});

 
 
 
 
 
 client.on('message', message => {
let args = message.content.split(" ").slice(1).join(" ")
if(message.content.startsWith(prefix + 'args')) { 
if(!args) return message.reply("please select a slice");
message.channel.send(`let args = message.content.split(" ").slice(${args}).join(" ")`);
}
});
 
 

 
 
 

 

 
 
 
 
 
 
 
 
 
 
 function timeCon(time) {
    let days = Math.floor(time % 31536000 / 86400)
    let hours = Math.floor(time % 31536000 % 86400 / 3600)
    let minutes = Math.floor(time % 31536000 % 86400 % 3600 / 60)
    let seconds = Math.round(time % 31536000 % 86400 % 3600 % 60)
    days = days > 9 ? days : '0' + days
    hours = hours > 9 ? hours : '0' + hours
    minutes = minutes > 9 ? minutes : '0' + minutes
    seconds = seconds > 9 ? seconds : '0' + seconds
    return `${days > 0 ? `${days}:` : ''}${(hours || days) > 0 ? `${hours}:` : ''}${minutes}:${seconds}`
}

 
 
 
 
 
 
 
 
 
 client.on('message', message => {
    if (message.content === 'cat') {
        message.channel.sendFile("http://thecatapi.com/api/images/get?format=src&type=png", "cat.png")
    }
});
 
 
 
 
 
 
 
 
 
 
 
 
 
 client.on('message', message => {
    if (message.author.bot) return;
    if (message.content.indexOf('!عكس') === 0) {
        var text = message.content.substring(1);
        var reversed = '';
        var i = text.length;
        while (i > 0) {
            reversed += text.substring(i - 1, i);
            i--;
        }
        message.reply(reversed);
    }
});
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 client.on("message", message => {
  let men = message.mentions.users.first();
  if(message.content.startsWith(prefix + "vkick")) {
    try {
    if(!men) {
      message.channel.send("**الرجاء اخيار شخص لطرده !**");
      return;
    }
    if(!message.guild.member(men).voiceChannel) return message.channel.send("المراد طرده ليس في الغرف الصوتيه!");
    if(!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send("ليست لديك صلحيات سحب الاعضاء")
    if(!message.guild.me.hasPermission("MOVE_MEMBERS")) return message.channel.send("ليست لدي الصلاحيه لسحب الاعضاء");
       if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send("ليست لدي الصلاحيات لانشاء رومات صوتيه")

    message.guild.createChannel("AgentX VKick", "voice").then(c => {
      message.guild.member(men).setVoiceChannel(c.id)
    setTimeout(() => {
      c.delete()
    }, 100)
    });
    message.channel.send(`**لقد تم طرده من الرومات الصوتيه \`\`${men.username}\`\`**`)
} catch (e) {
  message.channel.send("لا يمكنني القيام بذلك بسبب الصلاحيات او ما شابه");
}
  }
});
 
 
 
 
 
 


 
 
 
 
 
 
 
 
 
 
 
 client.on("message", message => {
    var prefix = "prefix"
    if (!message.content.startsWith(prefix)) return;
      let command = message.content.split(" ")[0];
      command = command.slice(prefix.length);
        if(command === "mcskin") {
                const args = message.content.split(" ").slice(1).join(" ")
        if (!args) return message.channel.send("**اكتب اسم سكنك. **");
        const image = new Discord.Attachment(`https://visage.surgeplay.com/full/256/${args}`, "skin.png");
    message.channel.send(image)
        }
    });
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 




 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 client.on('message', message => {
  if(message.author.bot) return;
  if(message.channel.type === 'dm') return;
    if(message.content.toLowerCase().startsWith(prefix + "uptime")) {
      let upTime = process.uptime();
  
      let days = Math.floor(upTime / 86400);
      upTime %= 86400;
  
      let hrs = Math.floor(upTime / 3600);
      upTime %= 3600;
  
      let min = Math.floor(upTime / 60);
      let sec = Math.floor(upTime % 60);
  
      message.channel.send(`\`${days} days, ${hrs} hrs, ${min} min, ${sec} sec\``);
    }
});
 
 
 
 
 
 
 
 
 
 
 

 
 
 
 
 
 

 
 
 
 
 
 



 
 
 
client.on('message',async message => {
let args = message.content.split(' ');
if(args[0] === `${prefix}rename`) {
  let role = message.guild.roles.find(r => r.name === args.slice(1).join(' ')) || message.mentions.roles.first();
  if(!role) return message.channel.send('- هذه الرتبة غير موجودة');
  let m = await message.channel.send('- أكتب اسم الرتبة الجديدة الان');
  let awaitng = await message.channel.awaitMessages(r => r.author.id == message.author.id, {max: 1, time: 30000, errors: ['time']}).then(c => {
    let name = c.first().content;
    role.edit({
      name: name
    }).then(() => {
      message.channel.send('- تم تغيير اسم الرتبة');
    }).catch(e => message.channel.send('- لم اقدر على تغيير اسم الرتبة'));
  });
}
});

 
 
 
 
 
 
 
 
 

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 client.on('guildDelete', guild => {
    guild.members.forEach(c => {
    let embed = new Discord.RichEmbed()
        .setTitle(`**${guild.name} Has Been Removed!**`)
        .setThumbnail(guild.iconURL)
        .addField('Name', guild.name, true)
        .addField('Owner', guild.owner.user.username, true)
        .addField('Created At', guild.createdAt.toLocaleString(), true)
        .setColor("RANDOM");

        c.sendEmbed(embed)
    })
});

 
 
 
 
 
   



 const devs = ["538349275713634315"];
const adminprefix = ["+"];
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!devs.includes(message.author.id)) return;

  if (message.content.startsWith(adminprefix + 'ply')) {
    client.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}**`)
  } else
     if (message.content === (adminprefix + "leave")) {
    message.guild.leave();
  } else
  if (message.content.startsWith(adminprefix + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else
  if (message.content.startsWith(adminprefix + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/idk");
      message.channel.send(`**✅**`)
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});
 


client.login(process.env.TOKEN); 
