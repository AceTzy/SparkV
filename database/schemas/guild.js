const mongoose = require("mongoose");

const config = require("../../globalconfig.json");

const GuildSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  registrationDate: { type: Number, default: Date.now() },

  // Data //
  prefix: { type: String, required: true, trim: true, default: config.prefix || "^" },
  language: { type: String, default: "US-en" },
  timezone: { type: String, default: "US-en" },
  casesCount: { type: Number, default: 0 },
  autoRemoveCommands: { type: Boolean, default: false },

  plugins: {
    automod: {
      removeLinks: { type: Boolean, default: false },
      removeProfanity: { type: Boolean, default: false },
      removeDuplicateText: { type: Boolean, default: false }
    },
    leveling: {
      enabled: { type: Boolean, default: false },
      max: { type: Number, default: 25 },
      min: { type: Number, default: 5 }
    },
    chatbot: { type: String, default: false },
  }
});

const GuildData = new mongoose.model("Guild", GuildSchema);

module.exports = GuildData;
