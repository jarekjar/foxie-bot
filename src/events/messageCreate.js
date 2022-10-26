const { Events } = require('discord.js')

const messageJson = [
  {
    match: 'not not',
    response: 'Nice Try.',
  },
  {
    match: 'not a furry',
    response: 'Correct!',
  },
  {
    match: 'furry',
    response: 'He is NOT a furry!',
  },
  {
    match: 'baby',
    fileResponse: 'https://i.imgur.com/FEfzYwy.png',
  },
  {
    match: 'fortnite',
    fileResponse: 'https://media2.giphy.com/media/RJAjTowsU0K1a/giphy.gif',
  },
]

module.exports = {
  name: Events.MessageCreate,
  async execute(interaction) {
    if (interaction.author.bot) return
    try {
      const match = Object.values(messageJson).find((val) =>
        interaction?.content?.toLowerCase()?.includes(val?.match)
      )
      if (match) {
        match?.fileResponse
          ? await interaction.reply({
              files: [match?.fileResponse],
            })
          : await interaction.reply(match?.response)
      }
    } catch (error) {
      console.error(error)
    }
  },
}
