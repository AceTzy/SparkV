const Discord = require("discord.js");

exports.run = async (Bot, message, Arguments) => {
  if (!message.member.voice.channel) {
    return message.lineReply(`${Bot.Config.Bot.Emojis.error} | You must be in a __**voice channel**__ to use this command!`).then(m => m.delete({ timeout: 5000 }))
  }

  Arguments = Arguments.join(" ")

  if (!Arguments) {
    return message.lineReply(`${Bot.Config.Bot.Emojis.error} | Please enter a song URL or query to search!`)
  }

  try {
    Bot.distube.play(message, Arguments)
  } catch (err) {
    console.error(err)

    message.lineReplyNoMention(`${Bot.Config.Bot.Emojis.error} | Uh oh! An error occured.`)
  }
},

  exports.config = {
    name: "Play",
    description: "Plays a song with the given name or URL.",
    aliases: ["p"],
    usage: "<song title or URL>",
    category: "🎵music🎵",
    bot_permissions: ["SEND_MESSAGES", "READ_MESSAGE_HISTORY", "EMBED_LINKS", "VIEW_CHANNEL", "CONNECT", "SPEAK"],
    member_permissions: [],
    enabled: true,
    cooldown: 5
  }