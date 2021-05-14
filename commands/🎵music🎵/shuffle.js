const Discord = require("discord.js");

exports.run = async (Bot, message, Arguments) => {
  if (!message.member.voice.channel){
    return message.lineReply("You must be in a __**voice channel**__ to use this command!").then(m => m.delete({ timeout: 5000 }))
  }
  
  if (!Bot.distube.isPlaying(message)){
    return message.lineReply("A song must be playing to use this command!").then(m => m.delete({ timeout: 5000 }))
  }
  
  Bot.distube.shuffle(message)
  
  message.lineReplyNoMention("Okay, I'll shuffle the queue.")
},

exports.config = {
  name: "Shuffle",
  description: "Shuffles the queue. Requires administartor to prevent abuse.",
  aliases: [],
  usage: "",
  category: "🎵music🎵",
  bot_permissions: ["SEND_MESSAGES", "READ_MESSAGE_HISTORY", "EMBED_LINKS", "VIEW_CHANNEL", "CONNECT", "SPEAK"],
  member_permissions: ["ADMINISTRATOR"],
  enabled: true,
  cooldown: 5
}