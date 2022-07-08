const Discord = require('discord.js');
const bot = new Discord.Client({intents: 32767});
const config = require('./settings.json');
const { loadCommands } = require('./utils/loadCommands');
const { DisTube } = require('distube')
const { keep_alive } = require("./keep_alive");

bot.distube = new DisTube(bot, {
  leaveOnStop: true,
  emitNewSongOnly: true,
  emitAddSongWhenCreatingQueue: false,
  emitAddListWhenCreatingQueue: false,
  plugins: [],
  youtubeDL: false
})
bot.distube
.on('empty', queue =>
        queue.textChannel?.send(
            'Voice channel is empty! Leaving...',
        ),
    )

require('./utils/loadEvents')(bot);

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

bot.on("message", async message =>{
  if (message.content.startsWith("lix/play"))
  {
message.channel.send("**Song added to queue**\nUse lix/queue");
  }
});

loadCommands(bot);

bot.login(config.token);
