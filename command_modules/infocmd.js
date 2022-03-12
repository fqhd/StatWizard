import DiscordJS, { MessageEmbed } from 'discord.js'

export default function serverInfo(client, message, args){

    var server = message.guild;

    const  infoEmbed = new MessageEmbed()
    .setColor('#b6f542')
    .setTitle(`**Info about ${server.name}**`)
    .setAuthor(server.name, server.iconURL({dynamic: true}))
    .addFields(
        {
            name: "📚 | GENERAL INFO:",
            value:
            `

‣ Name: ${server.name}
‣ Owner: <@${server.ownerId}>

‣ Description: ${server.description}
            `
        },
        {
            name: "👥 | USERS:",
            value:
            `
‣ Members: ${server.members.cache.filter((m) => !m.user.bot).size}
‣ Bots: ${server.members.cache.filter((m) => m.user.bot).size}

• Total: ${server.members.cache.size}
            `
        },
        {
            name: "📋 | CHANNELS:",
            value:
            `
‣ Text: ${server.channels.cache.filter((c) => c.type === 'GUILD_TEXT').size}
‣ Voice: ${server.channels.cache.filter((c) => c.type === 'GUILD_VOICE').size}
‣ Threads: ${server.channels.cache.filter((c) => c.type === 'GUILD_NEW_THREAD' && 'GUILD_PRIVATE_THREAD' && 'GUILD_PUBLIC_THREAD').size}
‣ Categories: ${server.channels.cache.filter((c) => c.type === 'GUILD_CATEGORY').size}
‣ Stages: ${server.channels.cache.filter((c) => c.type === 'GUILD_STAGE_VOICE').size}

• Total: ${server.channels.cache.size}
            `
        },
        {
            name: "🎭 | EMOJIS & STICKERS:",
            value:
            `
‣ Static: ${server.emojis.cache.filter((e) => !e.animated).size}
‣ Animated: ${server.emojis.cache.filter((e) => e.animated).size}
‣ Stickers: ${server.stickers.cache.size}

• Total: ${server.emojis.cache.size + server.stickers.cache.size}
            `
        }

    )
    .setFooter(`last updated on: ${new Date().toLocaleString()}`)
    message.reply({ embeds: [infoEmbed] });
}