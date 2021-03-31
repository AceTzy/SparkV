const Discord = require("discord.js");

exports.run = async (Bot, message, Arguments) => {
  const User = message.mentions.users.first() || Bot.users.cache.get(Arguments[0]) || message.author

  if (Bot.Config.Debug === true) {
    return
  }

  if (!Arguments || !Arguments[0]) {
    return message.channel.send("Please provide text.")
  }

  const canvacord = require("canvacord");

  Arguments = Arguments.join(" ")

  const Avatar = User.displayAvatarURL({
    dynamic: false,
    format: "png"
  })

  const Image = await canvacord.Canvas.youtube({
    username: message.author.username,
    avatar: Avatar,
    content: Arguments
  })

  const YouTube = new Discord.MessageAttachment(Image, "youtube.png")

  message.channel.send(YouTube)
},

  exports.config = {
    name: "YouTube",
    description: "YouTube comment lol.",
    aliases: [],
    usage: "<optional user> <text>",
    category: "📷images📷",
    bot_permissions: ["SEND_MESSAGES", "EMBED_LINKS", "VIEW_CHANNEL"],
    member_permissions: [],
    enabled: true,
    cooldown: 2
  }