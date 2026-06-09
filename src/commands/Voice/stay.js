import { SlashCommandBuilder, MessageFlags } from 'discord.js';
import { joinVoiceChannel } from '@discordjs/voice';

export default {
    data: new SlashCommandBuilder()
        .setName('stay')
        .setDescription('Join and stay in your voice channel'),

    category: 'Voice',

    async execute(interaction) {

        const channel = interaction.member.voice.channel;

        if (!channel) {
            return await interaction.reply({
                content: '❌ ادخل لروم صوتية أولاً',
                flags: MessageFlags.Ephemeral
            });
        }

        joinVoiceChannel({
            channelId: channel.id,
            guildId: channel.guild.id,
            adapterCreator: channel.guild.voiceAdapterCreator,
            selfDeaf: false
        });

        await interaction.reply({
            content: `✅ دخلت إلى ${channel.name}`
        });
    }
};
