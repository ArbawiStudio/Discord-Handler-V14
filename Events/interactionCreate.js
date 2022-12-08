const { ApplicationCommandOptionType, ChannelType } = require('discord.js');

module.exports = async function(Client, Interaction) {
    if(Interaction.isChatInputCommand()) {
        const Command = Client.SlashCommands.get(Interaction.commandName)
        if(!Command) return Interaction.reply({ content: `The Command is Disabled`, ephemeral: true })
        const Applications = []
        for(let option of Interaction.options.data) {
            if(option.type === ApplicationCommandOptionType.Subcommand) {
                if(option.name) Applications.push(option.name)
                options.options?.forEach((x) => {
                    if(x.value) Applications.push(x.value)
                })
            } else if(option.value) Applications.push(option.value)
        }

        if(Interaction.channel.type === ChannelType.DM) return Interaction.reply({ content: `The Command Enabled for Servers Only`, ephemeral: true })
        Command.run(Client, Interaction)
    }

    Client.emit('ButtonBuilder', (Client, Interaction))
}