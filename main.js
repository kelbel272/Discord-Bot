

//import discord package 
const { Client, Intents } = require('discord.js');

//this is the bot  
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

//this is our bot prefix 
const prefix = '%';


//Print out in console when the bot is live 
client.once('ready', () => {

    console.log('Botboi is alive!')

});

//The Commands for the bot 
client.on('message', message => {

    //if message doesnt start with prefix 
    //if the message was from another bot 
    if(!message.content.startsWith(prefix) || message.author.bot)  return;

    //slice the message take prefix out of the message and set to arguement 
    const args = message.content.slice(prefix.length).split(/ + /);

    //command for the bot 
    //set it to lowercase 
    const command = args.shift().toLowerCase();

    if(command === 'ping'){

        message.channel.send('pong!');

    } else if(command === 'youtube'){

        message.channel.send('https://youtube.com');
    }


});










//password for bot 
client.login('ODkzNTYyMjUyNDM3ODk3Mjg2.YVdQsg.XPc17b7xEQ_9rI1otKNm0BGrg3w');