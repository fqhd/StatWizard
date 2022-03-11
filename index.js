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

// code for command handler
const fs = require('fs');
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endwith(',js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name,command);
}

// test code
client.on('ready', () =>{
    console.log('Hello');
    console.log('StatWizard is up and runnnig.')
})

// code for calling functions
client.on('messageCreate', (message) => {
  
    if(message.content == 'regions'){
        client.commands.get('regions').execute(chartRegions, args)
        //chartRegions(client, message);
    }

    if(!message.content.startsWith('-') || message.author.bot) return;

    var msg = message.content.toLowerCase().replace(/^\s+|\s+$/g, '').trim().substring(1);
    var cmd = msg.split(' ')[0];
    var args = msg.split(' ').slice(1).join(' ');
})

client.login(process.env.TOKEN)
