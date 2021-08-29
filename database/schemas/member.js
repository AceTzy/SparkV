const mongoose = require("mongoose");

const config = require("../../globalconfig.json");

const Schema = new mongoose.Schema({
  // User Information //
  id: { type: String },
  guildID: { type: String },

  // Information //
  bio: { type: String },
  birthday: { type: Number },

  // Stats //
  registrationDate: { type: Number, default: Date.now() },

  // Data //
  cooldown: { type: Number, default: null },
  afk: {
    type: Object,
    default: { enabled: false, reason: "No reason supplied." },
  },

  money: { type: Number, default: 0 },
  bank: { type: Number, default: 0 },
  bankSpace: { type: Number, default: 1000 },

  xp: { type: Number, default: 0 },
  level: { type: Number, default: 0 },

  infractions: { type: Array, default: [] },
  mute: {
    type: Object,
    default: { muted: false, case: null, endDate: null },
  },
});

Schema.method("GenerateAPIToken", async () => {
    this.APIToken = GenerateToken();

    await this.save();
    return this.APIToken;
});

module.exports = mongoose.model("Member", Schema);
