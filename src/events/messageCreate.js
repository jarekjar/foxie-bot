const { Events } = require('discord.js')
const fs = require('node:fs')

const getJson = () => {
  try {
    return JSON.parse(fs.readFileSync('./src/json/message.json', 'utf8'))
  } catch (err) {
    console.error(err)
    return {};
  }
}

module.exports = {
  name: Events.MessageCreate,
  async execute(interaction) {
    if (interaction.author.bot) return
    try {
      const match = Object.values(getJson()).find((val) =>
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
