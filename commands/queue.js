const Discord = require("discord.js")
const fs = require("fs")

module.exports.run = async (client, message, args) => {

    if(!message.member.voice.channel) return message.channel.send({embed: {color: client.colors.error, description: `${client.emotes.error} | 먼저  음성채널에 들어가주세요!` }})
  
    let queue = client.player.getQueue(message.guild.id);

    if(!queue) return message.channel.send({embed: {color: client.colors.error, description: `${client.emotes.error} | 아무것도 재생중이지 않아요!` }})

    let q = queue.songs.map((song, i) => {
        return `${i === 0 ? '현재 재생중' : `${i+1}`}- ${song.name} : ${song.author}`
    }).join('\n');  
       message.channel.send({embed: {color: client.colors.success, description: `${client.emotes.queue} | ${q}` }})


}

  
module.exports.config = {
  name: "대기열",
  aliases: ['queue',"큐"]
}
