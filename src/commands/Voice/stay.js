const { SlashCommandBuilder } = require('discord.js');
const { joinVoiceChannel } = require('@discordjs/voice');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('stay')
        .setDescription('Keep the bot in your voice channel'),

    async execute(interaction) {
        const channel = interaction.member.voice.channel;

        if (!channel) {
            return interaction.reply({
                content: '❌ ادخل لروم صوتية أولاً',
                ephemeral: true
            });
        }

        joinVoiceChannel({
            channelId: channel.id,
            guildId: channel.guild.id,
            adapterCreator: channel.guild.voiceAdapterCreator
        });

        return interaction.reply('✅ البوت دخل للروم');
    }
};
