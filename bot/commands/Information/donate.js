const Discord = require(`discord.js`);

const cmd = require("../../templates/command");

module.exports = new cmd(
  (bot, message) => {
    message.reply(
      `${bot.config.Emojis.success} | If you want to support SparkV's developement, go to **https://sparkv.tk/donate**. Thank you!`,
    );
  },
  {
    description: `Donate in the form of robux to help SparkV's developement. Every donation is really appreciated!`,
    dirname: __dirname,
    usage: "",
    aliases: [],
    perms: ["EMBED_LINKS"],
  },
);
