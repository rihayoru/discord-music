const Discord = require("discord.js")
const fs = require("fs")

module.exports.run = async (client, message, args) => {

    if(!message.member.voice.channel) return  message.channel.send({embed: {color: client.colors.error, description: `${client.emotes.error} | 먼저 음성채널에 들어가주세요!` }})

    if(!client.player.isPlaying(message.guild.id)) return message.channel.send({embed: {color: client.colors.error, description: `${client.emotes.error} | 현재 아무것도 재생중이지 않아요!` }})

    let song = await client.player.nowPlaying(message.guild.id);

    message.channel.send({embed: {color: client.colors.success, description: `${client.emotes.music} | 현재 재생중인 곡:\n${song.name} by \`${song.requestedBy}\`` }})
}

module.exports.config = {
  name: "현재",
  aliases: ['np','지금','재생중']
}
