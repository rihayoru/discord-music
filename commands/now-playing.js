const Discord = require("discord.js")
const fs = require("fs")

module.exports.run = async (client, message, args) => {

    if(!message.member.voice.channel) return  message.channel.send({embed: {color: client.colors.error, description: `${client.emotes.error} | You must be in a voice channel!` }})

    if(!client.player.isPlaying(message.guild.id)) return message.channel.send({embed: {color: client.colors.error, description: `${client.emotes.error} | There is nothing playing!` }})

    let song = await client.player.nowPlaying(message.guild.id);

    message.channel.send({embed: {color: client.colors.success, description: `${client.emotes.music} | 현재 재생중익 곡:\n${song.name}` }})
}

module.exports.config = {
  name: "현재곡",
  aliases: ['now',"뭐틀어","무슨곡"]
}
