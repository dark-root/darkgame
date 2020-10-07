const Discord = require("discord.js");
const { Server } = require("http");
const client = new Discord.Client();
prefix = "-";

require('events').EventEmitter.defaultMaxListeners = 100;

client.on("ready", () => { 
console.log("DARK BOT ON -developed by Dark-");

client.user.setActivity(prefix + "help").catch(console.error)
});

/// WELCOME ///
client.on("guildMemberAdd", member => {
  member.send("**¡Bienvenido a " + member.guild.name + "!**");
});

/// ROLL ///
client.on("message", (message) => {
if(message.content.startsWith(prefix + "roll")) {
var random = Math.floor(Math.random() * 7);
message.channel.send("<@" + message.author.id + ">" + " rolls 1d" + 6 + " and gets " + random + " ("+random+")")
}
});

/// PRNT ///
client.on("message", (message) => {
  if(message.content.startsWith(prefix + "prnt")){
    var letras = Array('a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z');
    var numeros = Array('0','1','2','3','4','5','6','7','8','9');

    var letra1 = letras[Math.floor(Math.random() * letras.length)]
    var letra2 = letras[Math.floor(Math.random() * letras.length)]
    var letra3 = letras[Math.floor(Math.random() * letras.length)]
    var numero1 = numeros[Math.floor(Math.random() * numeros.length)]
    var numero2 = numeros[Math.floor(Math.random() * numeros.length)]
    var numero3 = numeros[Math.floor(Math.random() * numeros.length)]

    message.channel.send("https://prnt.sc/" + letra1 + letra2 + letra3 + numero1 + numero2 + numero3)
  }
});

/// HELP EMBED ///
client.on("message", (message) => {
    if(message.content.startsWith(prefix + "help")) {
      const helpEmbeds = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Custom Commands')
        .setAuthor('DarkGame', 'https://i.imgur.com/YCmrpwy.jpg', 'https://www.nodo313.net/members/dark.79/')
        .setDescription('Those are the custom commands')
        .addFields(
          {
            name: ':game_die:' + prefix + 'roll', value: 'Tira un :game_die: de 6.'
          },
          {
            name: ':printer:' + prefix + 'prnt', value:  'Envía una foto aleatoria de prnt.sc'
          }
        )
        .setTimestamp()
        .setFooter("Bot developed by Darkz#8288>");

        message.channel.send(helpEmbeds);
    }
  });

/// CONSOLE LOG ///

  client.on('message', message => {
    let {guild} = message;
    console.log(guild ? `[${guild.name} - ${message.channel.name}] ${message.author.username}: ${message.content}` : "Mensaje de " + message.author.username + ": " + message.content);
    }
  );

client.login("secret");