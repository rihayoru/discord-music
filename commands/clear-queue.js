const Discord = require("discord.js")
const fs = require("fs")

module.exports.run = async (client, message, args) => {
 
  if(!message.member.voice.channel) return message.channel.send({embed: {color: client.colors.error, description: `${client.emotes.error} | 먼저 음성채널에 들어가주세요!` }})

  if(!client.player.isPlaying(message.guild.id)) return message.channel.send({embed: {color: client.colors.error, description: `${client.emotes.error} | 현재 아무것도 재생중이지 않아요!` }})

  client.player.clearQueue(message.guild.id);

   message.channel.send({embed: {color: client.colors.success, description: `${client.emotes.success} | 대기열을 비웠어요` }})

}

module.exports.config = {
  name: "대기열 비워",
  aliases: ['삭제','클리어','큐삭제']
}
