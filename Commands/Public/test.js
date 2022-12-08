const { Message, Client, MessageEmbed } = require('discord.js')

module.exports = {
    name: 'test', 

    /**
     * @param { Client } Client
     * @param { Message } Message
     * @param { String[] } Args
     */

    run: async(Client, Message, Args) => {
       Message.channel.send({ content: `${Message.author}, Hi` })
    }
}