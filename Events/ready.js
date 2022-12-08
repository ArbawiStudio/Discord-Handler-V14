const { Client } = require('discord.js')

/**
 * @param { Client } Client 
 */

module.exports = async function(Client) {
    Client.Logger(`${Client.user.username} is Online`)
}