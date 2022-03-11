import DiscordJS, { Intents } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()

const client = new DiscordJS.Client({
    intents:[
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})

client.on('ready', () =>{
    console.clear();
    console.log('Hello World');
})

client.on('messageCreate', (message) => {

    if(!message.content.startsWith('-') || message.author.bot) return;

    var msg = message.content.toLowerCase().replace(/^\s+|\s+$/g, '').trim().substring(1);
    var cmd = msg.split(' ')[0];
    var args = msg.split(' ').slice(1).join(' ');
})

client.login(process.env.TOKEN)