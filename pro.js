const Discord = require ("discord.js");
const client = new Discord.Client();
const prefix = "#"





client.on('ready', () => {
    console.log('ProLife BOT')
     
 
 
    client.user.setGame("ProLife | #help ..",'https://www.twitch.tv/TEST-Broadcast');
});
 
 


//#bc

client.on('message', message => { 
    if (message.author.id === client.user.id) return;

    if (message.guild) { 

   let embed = new Discord.RichEmbed()

    let args = message.content.split(' ').slice(1).join(' '); 

if(message.content.split(' ')[0] == '#bc') { 

    if (!args[1]) { 

message.channel.send("**📨 اكتب الرسالة**"); 

return;

}

        message.guild.members.forEach(m => {

   if(!message.member.hasPermission('ADMINISTRATOR')) return; 

            var bc = new Discord.RichEmbed()

            .setThumbnail(client.user.avatarURL)

            .addField('السيرفر  ', `${message.guild.name}`)

            .addField('المرسل ',`${message.author.username}#${message.author.discriminator}`)

            .addField('الرسالة ', args)

            .setFooter('#ProLife Server .') 

            .setColor('RANDOM')

           

            m.send(`${m}`,{embed: bc});

        });

    }

    } else {

        return;

    }

});


// ip

client.on('message', message => {
  if (message.content === "ip") {
      if(!message.channel.guild) return;
  let embed = new Discord.RichEmbed()
  .setAuthor(` ${message.author.username} `, message.author.avatarURL)      
  .setTitle(`◦ 51.83.57.32:30130`)
  .setURL(``)  
  .setThumbnail("https://d.top4top.net/p_1186kod3b1.png")
  .setDescription(`◦ Requested By - @${message.author.username}`)    
  .setColor('#6F316B')    
message.channel.sendEmbed(embed);
 }
});


//تصويت

client.on('message', message => {
    let command = message.content.split(" ")[0].slice(prefix.length);
    let args = message.content.split(" ").slice(1);
  
    
    if(!message.content.toLowerCase().startsWith(prefix)) return;
    if(command == "تصويت") {
        if(!message.channel.guild) return message.reply('**يمكنك استخدام هذا الامر بالسيرفرات فقط**');
        if(!message.member.hasPermission('ADMINISTRATOR')) return;
      if(!args.join(" ")) return message.channel.send(`**يرجي كتابة التصويت**`); 

      let channel = message.guild.channels.find(c => c.name == "🔹التصويتات");
      let embed = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.displayAvatarURL)
      .setTitle(``)
      .setFooter(`✩ ProLife - تصويت`)
      .setColor('#6F316B')
      .setDescription(args.join(" "));
      channel.send(embed).then(msg => {
        msg.react("✅").then(() => msg.react("❌"));
        message.delete()
        let embed3 = new Discord.RichEmbed()
        .setTitle(":diamond_shape_with_a_dot_inside:  |  تم ارسال تصويتك بنجاح")
        .setColor("#6F316B")
        message.channel.sendEmbed(embed3);    
      });
    }
});




//تذكرة 

client.on("message", (message) => {
 
    if (message.content.startsWith("تذكرة#")) {  
        if(!message.channel.guild) return message.reply('**يمكنك استخدام هذا الامر بالسيرفرات فقط**');
         const reason = message.content.split(" ").slice(1).join(" ");  
         if (!message.guild.roles.exists("name", "support"))
         if (message.guild.channels.exists("name", `تذكرة-${message.author.id}` + message.author.id))
         return message.channel.send(`لديك تذكرة مفتوحه بالفعل`);    
         message.guild.createChannel(`تذكرة-${message.author.username}`, "text").then(c => {
             let role = message.guild.roles.find("name", "support");
             let role2 = message.guild.roles.find("name", "@everyone");
             c.overwritePermissions(role, {
                 SEND_MESSAGES: true,
                 READ_MESSAGES: true
             });  
             c.overwritePermissions(role2, {
                 SEND_MESSAGES: false,
                 READ_MESSAGES: false
             });
             c.overwritePermissions(message.author, { 
                 SEND_MESSAGES: true,
                 READ_MESSAGES: true
             });
             message.channel.send(`**(${c.name}) تم انشاء تذكرتك بنجاح .**`);
             let embed = new Discord.RichEmbed()
                 .setTitle(`**#ProLife - اكتب استفسارك او شكوتك**`)
                 .addField('** تم انشاء التذكرة بنجاح**',' لاغلاق التذكرة اكتب #اغلاق ')
                 .setColor('#6F316B')
                 .setAuthor(`${message.author.username}`,message.author.avatarURL)   
                 .setTimestamp();
                 c.send({
                 embed
             });
         }).catch(console.error);
     }
  
  
   if (message.content.startsWith("اغلاق#")) { 
         if (!message.channel.name.startsWith(`تذكرة-`)) return message.channel.send(`**لاتستطيع استخدام هذا الامر خارج التذكرة**`);
  
      message.channel.send(`**اذا كنت متاكد اكتب : تاكيد**`) 
          .then((m) => {
              message.channel.awaitMessages(response => response.content === 'تاكيد', {
                      max: 1,
                      time: 10000,
                      errors: ['time'],
                  })  
                  .then((collected) => {
                      message.channel.delete();
                  })  
                  .catch(() => {
                      m.edit('**لقد انتهى الوقت**').then(m2 => {
                          m2.delete();
                      }, 3000);
                  });
          });
  }
  
}); 



//رابط
client.on('message', message => {
    if (message.content === 'رابط') {
      message.reply('https://discord.gg/2BXw3J4');
    }
    
});

//تقديم
client.on("message", (message) => {
 
    if (message.content.startsWith("تقديم#")) {  
        if(!message.channel.guild) return message.reply('**يمكنك استخدام هذا الامر بالسيرفرات فقط**');
         const reason = message.content.split(" ").slice(1).join(" ");  
         if (!message.guild.roles.exists("name", "support"))
         if (message.guild.channels.exists("name", `تقديم-${message.author.id}` + message.author.id))
         return message.channel.send(`لديك تقديم مفتوحه بالفعل`);    
         message.guild.createChannel(`تقديم-${message.author.username}`, "text").then(c => {
             let role = message.guild.roles.find("name", "support");
             let role2 = message.guild.roles.find("name", "@everyone");
             c.overwritePermissions(role, {
                 SEND_MESSAGES: true,
                 READ_MESSAGES: true
             });  
             c.overwritePermissions(role2, {
                 SEND_MESSAGES: false,
                 READ_MESSAGES: false
             });
             c.overwritePermissions(message.author, { 
                 SEND_MESSAGES: true,
                 READ_MESSAGES: true
             });
             message.channel.send(`**(${c.name}) تم انشاء تقديمك بنجاح .**`);
             let embed = new Discord.RichEmbed()
                 .setTitle(`**#Support- اكتب معلومات عنك وعن خبرتك**`)
                 .addField('** تم انشاء التقديم بنجاح**',' لاغلاق التقديم اكتب $اغلاق ')
                 .setColor('#6F316B')
                 .setAuthor(`${message.author.username}`,message.author.avatarURL)   
                 .setTimestamp();
                 c.send({
                 embed
             });
         }).catch(console.error);
     }
  
  
   if (message.content.startsWith("اغلاق$")) { 
      if (!message.channel.name.startsWith(`تقديم-`)) return message.channel.send(`**لاتستطيع استخدام هذا الامر خارج التقديم**`);
  
       message.channel.send(`**اذا كنت متاكد اكتب : تاكيد**`) 
          .then((m) => {
              message.channel.awaitMessages(response => response.content === 'تاكيد', {
                      max: 1,
                      time: 10000,
                      errors: ['time'],
                  })  
                  .then((collected) => {
                      message.channel.delete();
                  })  
                  .catch(() => {
                      m.edit('**لقد انتهى الوقت**').then(m2 => {
                          m2.delete();
                      }, 3000);
                  });
          });
  }
  
}); 




//ProLife logs . -


//leave 
client.on('guildMemberRemove', member => {
    const c = member.guild.channels.find('name', '🔸اللوق');
    if(!c) return;
    if(c) {
      var wEmbed = new Discord.RichEmbed()
      .setAuthor(member.user.username, member.user.avatarURL)
      .setTitle('{**غادر السيرفر**}')
      .setColor('RED')
      .setThumbnail(member.user.avatarURL)
      .addField('» العضو:', member,true)
      .addField('» عدد الاعضاء:', member.guild.memberCount,true)
      .setFooter('ProLife logs..')
      .setTimestamp();
      c.send(wEmbed);
    } else {
      return;
    }
}); 

//join
client.on('guildMemberAdd', member => {
    const c = member.guild.channels.find('name', '🔸اللوق');
    if(!c) return;
    if(c) {
      var wEmbed = new Discord.RichEmbed()
      .setAuthor(member.user.username, member.user.avatarURL)
      .setTitle('{**دخل السيرفر**}')
      .setColor('GREEN')
      .setThumbnail(member.user.avatarURL)
      .addField('» العضو:', member,true)
      .addField('» عدد الاعضاء:', member.guild.memberCount,true)
      .setFooter('ProLife logs..')
      .setTimestamp();
      c.send(wEmbed);
    } else {
      return;
    }
}); 

//Delete
client.on('messageDelete', message => {
 
    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;
    if(!message.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!message.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return;
 
    var logChannel = message.guild.channels.find(c => c.name === '🔸اللوق');
    if(!logChannel) return;
 
    let messageDelete = new Discord.RichEmbed()
    .setTitle('**[حذف الرساله]**')
    .setColor('RED')
    .setThumbnail(message.author.avatarURL)
    .setDescription(`**\n**:wastebasket: Successfully \`\`DELETE\`\` **MESSAGE** In ${message.channel}\n\n**Channel:** \`\`${message.channel.name}\`\` (ID: ${message.channel.id})\n**Message ID:** ${message.id}\n**Sent By:** <@${message.author.id}> (ID: ${message.author.id})\n**Message:**\n\`\`\`${message}\`\`\``)
    .setTimestamp()
    .setFooter(message.guild.name, message.guild.iconURL)
 
    logChannel.send(messageDelete);
});

//edit
client.on('messageUpdate', (oldMessage, newMessage) => {
 
    if(oldMessage.author.bot) return;
    if(!oldMessage.channel.type === 'dm') return;
    if(!oldMessage.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!oldMessage.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return;
 
    var logChannel = oldMessage.guild.channels.find(c => c.name === '🔸اللوق');
    if(!logChannel) return;
 
    if(oldMessage.content.startsWith('https://')) return;
 
    let messageUpdate = new Discord.RichEmbed()
    .setTitle('**[عدل على رسالة]**')
    .setThumbnail(oldMessage.author.avatarURL)
    .setColor('BLUE')
    .setDescription(`**\n**:wrench: Successfully \`\`EDIT\`\` **MESSAGE** In ${oldMessage.channel}\n\n**Channel:** \`\`${oldMessage.channel.name}\`\` (ID: ${oldMessage.channel.id})\n**Message ID:** ${oldMessage.id}\n**Sent By:** <@${oldMessage.author.id}> (ID: ${oldMessage.author.id})\n\n**Old Message:**\`\`\`${oldMessage}\`\`\`\n**New Message:**\`\`\`${newMessage}\`\`\``)
    .setTimestamp()
    .setFooter(oldMessage.guild.name, oldMessage.guild.iconURL)
 
    logChannel.send(messageUpdate);
});



// Admin help . 
client.on('message', message => {
    if (message.content === '#admin') {
        if(!message.channel.guild) return message.reply('**يمكنك استخدام هذا الامر بالسيرفرات فقط**');
        if(!message.member.hasPermission('ADMINISTRATOR')) return;
        let helpEmbed = new Discord.RichEmbed()
        .setTitle('**قائمة اوامر الادارة **')
        .addField('#تصويت','لارسال تصويت بروم التصويتات')
        .addField('#bc',' لارسال برودكاست')
        .addField('#mute',' لاعطاء شخص ميوت')
        .addField('#unmute',' لإزالة الميوت')
        .setColor('#ff0000')
        .setThumbnail(message.author.avatarURL)
      message.channel.send(helpEmbed);
    }
});


//help
client.on('message', message => {
    if (message.content === '#help') {
        let helpEmbed = new Discord.RichEmbed()
        .setTitle('**Welcome to ProLife Server . -**')
        .addField('تذكرة#','لفتح تذكرة للشكاوى والاستفسارات')
        .addField('رابط',' رابط الدسكورد')
        .addField('ip','ايبي السيرفر')
        .setColor('#ff0000')
        .setThumbnail(message.author.avatarURL)
      message.channel.send(helpEmbed);
    }
});


//mute
client.on('message', async message =>{
    if (message.author.boss) return;
      var prefix = "#";
 
  if (!message.content.startsWith(prefix)) return;
      let command = message.content.split(" ")[0];  
       command = command.slice(prefix.length);
      let args = message.content.split(" ").slice(1);
      if (command == "mute") {
          if (!message.channel.guild) return;
          if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("**لايمكنك استخدام هذا الامر** ").then(msg => msg.delete(5000));
          if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply(" **لا استطيع استخدام هذا الامر **").then(msg => msg.delete(5000));;
          let user = message.mentions.users.first();
          let muteRole = message.guild.roles.find("name", "Muted");
          if (!muteRole) return message.reply("** `Muted`رتبة **").then(msg => {msg.delete(5000)});
          if (message.mentions.users.size < 1) return message.reply('**اكتب اسم الشخص **').then(msg => {msg.delete(5000)});
          let reason = message.content.split(" ").slice(2).join(" ");
          message.guild.member(user).addRole(muteRole);
          const muteembed = new Discord.RichEmbed()
          .setColor("RANDOM") 
          .setAuthor(`Muted!`, user.displayAvatarURL)
          .setThumbnail(user.displayAvatarURL)
          .addField("**:busts_in_silhouette:  الاسم**",  '**[ ' + `${user.tag}` + ' ]**',true)
          .addField("**:hammer:  من قبل**", '**[ ' + `${message.author.tag}` + ' ]**',true)
          .addField("**:book:  السبب**", '**[ ' + `${reason}` + ' ]**',true)
          .addField("User", user, true)
          message.channel.send({embed : muteembed});
          var muteembeddm = new Discord.RichEmbed()
          .setAuthor(`Muted!`, user.displayAvatarURL)
          .setDescription(`      
  ${user} Muted .
  ${message.author.tag} من قبل
  [ ${reason} ] : السبب
  `)
          .setFooter(`السيرفر : ${message.guild.name}`)
          .setColor("RANDOM")
      user.send( muteembeddm);
    } 
  if(command === `unmute`) { 
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("** لايمكنك استعمال هذا الامر**").then(m => m.delete(5000));
  if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("** لا استطيع استخدام هذا الامر**").then(msg => msg.delete(6000))
 
    let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if(!toMute) return message.channel.sendMessage("** اكتب اسم الشخص **");
 
    let role = message.guild.roles.find (r => r.name === "Muted");
   
    if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("..")
 
    await toMute.removeRole(role)
    message.channel.sendMessage(":white_check_mark:  تمت ازالة الميوت بنجاح");
 
    return;
 
    }
 
}); 


//تسجيل دخول


client.on('message', message => {
    if (message.content === "تسجيل دخول") {
        if(!message.channel.guild) return;
    let embed = new Discord.RichEmbed()
    .setAuthor(` ${message.author.username} `, message.author.avatarURL)      
    .setTitle(`@${message.author.username} تم تسجيل دخولك ↑`)
    .setURL(``)  
    .setThumbnail("https://d.top4top.net/p_1186kod3b1.png")
    .setFooter('#ProLife - تسجيل الدخول ◦')
    .setColor('GREEN')    
  message.channel.sendEmbed(embed);
   }
});

//تسجيل الخروج

client.on('message', message => {
    if (message.content === "تسجيل خروج") {
        if(!message.channel.guild) return;
    let embed = new Discord.RichEmbed()
    .setAuthor(` ${message.author.username} `, message.author.avatarURL)      
    .setTitle(`@${message.author.username} تم تسجيل خروجك ↓`)
    .setURL(``)  
    .setThumbnail("https://d.top4top.net/p_1186kod3b1.png")
    .setFooter('#ProLife - تسجيل الخروج ◦')
    .setColor('RED')    
  message.channel.sendEmbed(embed);
   }
});





client.login('NTU3MDc5NTk4MTYxMDY4MDQz.D34iYg.-8OTQ3e8Blx6BDD5BWiz8KfcGdA');
