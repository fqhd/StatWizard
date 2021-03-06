import DiscordJS, { Intents } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()
import { command_map } from './command_modules/command_handler.js';
import serverInfo from './command modules/infocmd.js'
import ping from './command modules/pingcmd.js'

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
    if(!message.content.startsWith('-') || message.author.bot) return;
    const tokens = message.content.split(' ');
    const command = tokens[0].slice(1);
    const args = tokens.slice(1).join(' ');
    if(command_map[command]){
        command_map[command](client, message, args);
    }
    
    switch(command){
        case 'info':
            message.reply({ embeds: [serverInfo(message)] });
            break;

        case 'ping':
            message.reply({ embeds: [ping(message, client)] });
            break;
    }
    
});


client.login(process.env.TOKEN)
