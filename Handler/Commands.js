const fs = require('fs')
const chalk = require('chalk')
const { Client } = require('discord.js')

/**
 * @param { Client } Client
 */

module.exports = async function(Client) {
    fs.readdirSync('./Commands/').forEach(async Dir => {
        fs.readdir(`./Commands/${Dir}`, async(Err, Files) => {
            if(Err) return console.error(Err)
            Files.forEach(async File => {
                if(!File.endsWith('.js')) return;
                const Commands = require(`../Commands/${Dir}/${File}`)
                const Command = File.split('.')[0]
                Client.Logger(`${Command} has been Loaded!`)
                Client.Commands.set(Command, Commands)
            })
        })
    })
}