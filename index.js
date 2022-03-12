import DiscordJS, { Intents } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()
import { chartRegions } from './chart_regions.js';

const client = new DiscordJS.Client({
    intents:[
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});

client.on('ready', () =>{
    console.log('Bot is online');
})

client.on('messageCreate', (message) => {
    if(message.content == 'regions'){
        chartRegions(client, message);
    }
    if(!message.content.startsWith('-') || message.author.bot) return;

    var msg = message.content.toLowerCase().replace(/^\s+|\s+$/g, '').trim().substring(1);
    var cmd = msg.split(' ')[0];
    var args = msg.split(' ').slice(1).join(' ');
})

client.login(process.env.TOKEN)
