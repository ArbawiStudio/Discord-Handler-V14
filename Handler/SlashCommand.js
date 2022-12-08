const { Client } = require('discord.js')
const fs = require('fs')

/**
 * @param { Client } Client
 */

module.exports = async function(Client) {
    const ApplicationCommands = []
    fs.readdirSync('./SlashCommands/').forEach((Dir) => {
        fs.readdir(`./SlashCommands/${Dir}`, async(Err, Folders) => {
            Folders.forEach((Value) => {
                if(!Value.endsWith('.js')) return;
                const Commands = require(`../SlashCommands/${Dir}/${Value}`)
                const Command = Value.split('.')[0]
                Client.Logger(`${Command} has been Loaded!`)
                Client.SlashCommands.set(Commands.name, Commands)
                ApplicationCommands.push({
                    name: Commands.name,
                    description: Commands.description,
                    type: Commands.type,
                    options: Commands.options ? Commands.options : null
                })
            })
        })
    })

    Client.on('ready', async() => {
        await Client.application.commands.set(ApplicationCommands)
    })
}