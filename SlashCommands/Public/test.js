const { Client, ApplicationCommandType, ChatInputCommandInteraction } = require('discord.js')

module.exports = {
    name: 'test',
    type: ApplicationCommandType.ChatInput,
    description: 'Test Command',

    /**
     * @param { Client } Client
     * @param { ChatInputCommandInteraction } Interaction
     */

    run: async(Client, Interaction) => {
       Interaction.reply({ content: `Hello ${Interaction.user}` })
    }
}