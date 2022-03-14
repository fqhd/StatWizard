import DiscordJS, { MessageEmbed } from 'discord.js'


export default function ping(message, client){
    const pingEmbed = new MessageEmbed()
    .setColor('#fc9403')
    .setTitle(`Latency: ${Date.now() - message.createdTimestamp}ms \nAPI Latency: ${Math.round(client.ws.ping)}ms`)
    .setFooter(`🏓 pong!`);

    return pingEmbed;
}