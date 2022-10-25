const { Events } = require('discord.js');

module.exports = {
	name: Events.MessageCreate,
	async execute(interaction) {
		if (interaction.author.bot) return;
		try {
            if(interaction?.content?.toLowerCase()?.includes('not not')){
                await interaction.reply(
                    `Nice try.`
                  )
            }
            else if(interaction?.content?.toLowerCase()?.includes('not a furry')){
                await interaction.reply(
                    `Correct!`
                  )
            }
            else if(interaction?.content?.toLowerCase()?.includes('furry')){
                await interaction.reply(
                    `He is NOT a furry!`
                  )
            }
		} catch (error) {
			console.error(error);
		}
	},
};