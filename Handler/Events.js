const fs = require('fs')
const chalk = require('chalk')
const { Client } = require('discord.js')

/**
 * @param { Client } Client
 */

module.exports = async function(Client) {
    fs.readdir('./Events/', async (Err, Files) => {
        Files.forEach(async Events => {
            const EventsFind = require(`../Events/${Events}`)
            const Event = Events.split('.')[0]
            Client.Logger(`${Event} has been Loaded!`)
            Client.on(Event, EventsFind.bind(null, Client))
        })
    })
}