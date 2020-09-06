const Discord = require("discord.js")
const fs = require("fs")

module.exports.run = async (client, message, args) => {

  if(!message.member.voice.channel) return message.channel.send({embed: {color: client.colors.error, description: `${client.emotes.error} | 먼저 음성채널에 들어가주세요!` }})
    
  if(!client.player.isPlaying(message.guild.id)) return message.channel.send({embed: {color: client.colors.error, description: `${client.emotes.error} | 현재 아무것도 재생중이지 않아요!` }})
  let volume = parseInt(args.join(" "));
  if (!volume) return message.channel.send({embed: {color: client.colors.error, description: `${client.emotes.error} | 숫자만 입력해주세요!` }})
  if (isNaN(args[0])) return message.channel.send({embed: {color: client.colors.error, description: `${client.emotes.error} | 유효한 숫자만 입력해주세요!` }})
  
  client.player.setVolume(message.guild.id, volume);
    
  message.channel.send({embed: {color: client.colors.success, description: `${client.emotes.success} | 볼륨 설정됨 : \`${args.join(" ")}\` ` }})


}

module.exports.config = {
  name: "볼륨",
  aliases: ['소리','소리크기']
}
