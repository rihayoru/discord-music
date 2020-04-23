const Discord = require("discord.js")
const fs = require("fs")

module.exports.run = async (client, message, args) => {

  if(!message.member.voice.channel) return message.channel.send({embed: {color: client.colors.error, description: `${client.emotes.error} | You must be in a voice channel!` }})
    
  if(!client.player.isPlaying(message.guild.id)) return message.channel.send({embed: {color: client.colors.error, description: `${client.emotes.error} | There is nothing playing!` }})
  
  let song = await client.player.pause(message.guild.id);
            
  message.channel.send({embed: {color: client.colors.success, description: `${client.emotes.pause} | 노래를 잠시멈췄어요!` }})
    
}

module.exports.config = {
  name: "일시정지",
  aliases: ["pause"]
}
