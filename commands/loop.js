module.exports.run = async (bot, message, args) => {
    if (!message.member.voice.channel) return message.channel.send('You must be in a voice channel to use this command.');
    
    const music = args.join(" ");

     const mode = bot.distube.setRepeatMode(message)
        message.channel.send(
            `Set repeat mode to \`${
                mode
                    ? mode === 2
                        ? 'All Queue'
                        : 'This Song'
                    : 'Off'
            }\``
        );
		
}

module.exports.config = {
    name: "loop",
    aliases: ['lp', 'repeat', 'rp']
}
