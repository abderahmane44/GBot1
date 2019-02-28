const prefix ="+";
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
 console.log("bot online"); 
console.log("log");
});


client.on("message", message => {
	var prefix = "+";
 if (message.content === ("+help ") {
	 message.channel.send('**تم ارسالك في الخاص** :mailbox_with_mail: ');
  const embed = new Discord.RichEmbed() 
      .setColor("#000000")
      .setDescription(`
			  اوامر عامة
❖+allbots ~ لعرض جميع البوتات الي بالسيرفر
❖server ~يعرض لك معلومات عن السيرفر
❖+bot ~ يعرض لك كل معلومات البوت
❖+count ~ يعرض لك عدد الاشخاص بالسيرفر بدون بوتات
❖+invites ~ يعرض لك  عدد انفايتاتك بالسيرفر 
❖+invite-codes ~ يعرض لك روابط الانفايتات حكك في السيرفر 
❖+cal ~ اله حاسبة
❖+trans <language> <any thing> ~ يترجم لك الي تبيه من اي لغة
❖+short ~ يختصر لك رابط كبير الى رابط صغير
❖+tag ~ يكتب لك الكلمة بشكل جميل وكبير
❖+google ~ للبحث في قوقل عن طريق الدسكورد
❖+perms ~ يعرض لك برمشناتك بالسيرفر
❖+za5 ~ يزخرف لك كلمة او جملة
❖+rooms ~ يعرض لك كل الرومات الي بالسيرفر مع عددها
❖+roles ~ يعرض لك كل الرانكات بالسيرفر بشكل جميل
❖+emojilist ~ يعرض لك كل الايموجيات الي بالسيرفر
❖+say ~ يكرر الكلام الي تكتبو
❖+image ~ صورة السيرفر
❖+members ~ يعرض لك عدد كل حالات الاشخاص وعدد البوتات وعدد الاشخاص
❖+id ~ معلومات عنك
❖+bans ~ عدد الاشخاص المبندة 
❖+avatar ~ صورتك او صورة الي تمنشنو
❖+embed ~ يكرر الي تقولو بشكل حلو
❖+emoji <any things> ~ لتحويل اي كلمه تقولها الي ايموجي
❖+invite ~ لدعوة البوت الى سيرفرك
❖+support ~ سيرفر الدعم
❖+contact ~ ارسال اقتراح او لمراسلة صاحب البوت
❖+topinv لعرض اكثر الاعضاء الذين يدعون

`)
   message.author.sendEmbed(embed)
    
   }
   }); 
   





client.on("message", msg => {//Alpha Codes 
    var Alpha = '+';//البرفكس
    if(msg.content.startsWith(Alpha + "invite")){//Alpha Codes 
        let e = new Discord.RichEmbed()//Alpha Codes 
        .setTitle("**اضافه البوت لسيرفرك**")//Alpha Codes 
       .setDescription(`**📬 | اذا تريد البوت يرسلك الرابط بخاصك
       📇 | اذا تريد البوت يرسلك الرابط هنا بالشات**`)
        msg.channel.send(e).then(b => {
            b.react('📇')
            .then(() => b.react('📬'))
            .then(() =>b.react('📇'))
            let reaction1Filter = (reaction, user) => reaction.emoji.name === '📇' && user.id === msg.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '📬' && user.id === msg.author.id;

let reaction1 = b.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = b.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
msg.reply(`https://discordapp.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=0&scope=bot`)
b.delete(2000)
})
reaction2.on("collect", r => {
    msg.author.send(`${msg.author} https://discordapp.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=0&scope=bot`)
    b.delete(2000)
    msg.reply("**تم ارسال الرابط في خاصك 📬**").then(d => {
        d.delete(2000)
    })
    })
        })
    }
});


client.on('message', function(msg) {
var prefix = '+';//البرفكس
    if(msg.content.startsWith (prefix + 'server')) {
      if(!msg.channel.guild) return msg.reply('**❌ اسف لكن هذا الامر للسيرفرات فقط **');
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .addField('🌐 **اسم السيرفر : **' , `**[ ${msg.guild.name} ]**`,true)
      .addField('🌍 ** موقع السيرفر :**',`**[ ${msg.guild.region} ]**`,true)
      .addField('🎖** الرتب :**',`**[ ${msg.guild.roles.size} ]**`,true)
      .addField('👤** عدد الاعضاء :**',`**[ ${msg.guild.memberCount} ]**`,true)
      .addField('✅** عدد الاعضاء الاونلاين :**',`**[ ${msg.guild.members.filter(m=>m.presence.status == 'online').size} ]**`,true)
      .addField('📝** الرومات الكتابية :**',`**[ ${msg.guild.channels.filter(m => m.type === 'text').size} ]**`,true)
      .addField('🔊** رومات الصوت :**',`**[ ${msg.guild.channels.filter(m => m.type === 'voice').size} ]**`,true)
      .addField('👑** حبي الاونر :**',`**[ ${msg.guild.owner} ]**`,true)
      .addField('🆔** ايدي السيرفر :**',`**[ ${msg.guild.id} ]**`,true)
      .addField('📅** تم عمل السيرفر في : **',msg.guild.createdAt.toLocaleString())
      .addField('😴** روم AFK**',`**${msg.guild.afkChannel || 'None'}**`, true)
      .addField('🙃** الايموجيات :**', `**${msg.guild.emojis.size}** \`[\` **${msg.guild.emojis.map(m => m).join('**|**')} \`]\`**`, true);
      msg.channel.send({embed:embed});
    }
  });///////////////ALPHA CODES //// MAHMOUD QUSTYLE

 
   



 
