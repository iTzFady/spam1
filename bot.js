﻿const Discord = require("discord.js");
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
const client4 = new Discord.Client();
const myid = ['540831711722995722'];
const prefix = ['-'];

client.on('ready', () => {
   console.log(`----------------`);
   console.log(`Credit Farmm - Script By : FADY `);
   console.log(`----------------`);
   console.log(`Loadinng`);
   console.log(`Loadinng.`);
   console.log(`Loadinng..`);
   console.log(`Loadinng...`);
   console.log(`This Bots Online ' `);
   console.log(`----------------`);
});

client2.on('ready', () => {
   console.log(`----------------`);
   console.log(`4 Account Online ✩' `);
   console.log(`----------------`);
});


client3.on('ready', () => {
   console.log(`----------------`);
   console.log(`4 Account Online ✩' `);
   console.log(`----------------`);
});



client4.on('ready', () => {
   console.log(`----------------`);
   console.log(`4 Account Online ✩' `);
   console.log(`----------------`);
});



client.on('message', message => {
    if(message.content === prefix+'d'){
        message.channel.send('#daily')
    }
});

client.on('message', message => {
    if(message.content === prefix+'c'){
        message.channel.send('#credits')
    }
});

client.on('message', message => {
    if(message.content === prefix+'rep'){
        message.channel.send("#rep "+"<@" + myid + ">")
    }
});

client.on('message', message => {
if (message.content === prefix+'spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**Credit Spam , Frame , Credit By ANGRY , Farm Credit By ANGRY, ez Farm - Go Bot Spam GO GO 
GO to Give me Credits **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);



if (command == "talk") {
let rank = message.guild.member(message.author).roles.find('name', 'Role.Spam Bot');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});

client2.on('message', message => {
    if(message.content === prefix+'d'){
        message.channel.send('#daily')
    }
});

client2.on('message', message => {
    if(message.content === prefix+'c'){
        message.channel.send('#credits')
    }
});

client2.on('message', message => {
    if(message.content === prefix+'rep'){
        message.channel.send("#rep "+"<@" + myid + ">")
    }
});

client2.on('message', message => {
if (message.content === prefix+'spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**Credit Spam , Frame , Credit By ANGRY , Farm Credit By ANGRY, ez Farm - Go Bot Spam GO GO 
GO to Give me Credits **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client2.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);



if (command == "talk") {
let rank = message.guild.member(message.author).roles.find('name', 'Role.Spam Bot');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});

client3.on('message', message => {
    if(message.content === prefix+'d'){
        message.channel.send('#daily')
    }
});

client3.on('message', message => {
    if(message.content === prefix+'c'){
        message.channel.send('#credits')
    }
});

client3.on('message', message => {
    if(message.content === prefix+'rep'){
        message.channel.send("#rep "+"<@" + myid + ">")
    }
});

client3.on('message', message => {
if (message.content === prefix+'spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**Credit Spam , Frame , Credit By ANGRY , Farm Credit By ANGRY, ez Farm - Go Bot Spam GO GO 
GO to Give me Credits **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client3.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);



if (command == "talk") {
let rank = message.guild.member(message.author).roles.find('name', 'Role.Spam Bot');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});

client4.on('message', message => {
    if(message.content === prefix+'d'){
        message.channel.send('#daily')
    }
});

client4.on('message', message => {
    if(message.content === prefix+'c'){
        message.channel.send('#credits')
    }
});

client4.on('message', message => {
    if(message.content === prefix+'rep'){
        message.channel.send("#rep "+"<@" + myid + ">")
    }
});

client4.on('message', message => {
if (message.content === prefix+'spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**Credit Spam , Frame , Credit By ANGRY , Farm Credit By ANGRY, ez Farm - Go Bot Spam GO GO 
GO to Give me Credits **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client4.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);



if (command == "talk") {
let rank = message.guild.member(message.author).roles.find('name', 'Role.Spam Bot');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});

client.login(process.env.TOKEN);
client2.login(process.env.TOKEN2);
client3.login(process.env.TOKEN3);
client4.login(process.env.TOKEN4);
