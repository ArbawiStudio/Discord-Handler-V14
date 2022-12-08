const { Client, Message } = require('discord.js')

/**
 * @param { Client } Client
 * @param { Message } Message
 * @param { String[] } Args
 */

module.exports = async(Client, Message) => {

    if(Message.author.bot) return;

    if(!Message.channel.guild) return;

    let Prefix = Client.Config.Prefix;

    if(Message.content.indexOf(Prefix) !== 0) return;

    const Args = Message.content.slice(Prefix.length).trim().split(/ +/g)

    const Command = Args.shift().toLowerCase()

    const CMD = Client.Commands.get(Command)

    if(!CMD) return;

    CMD.run(Client, Message, Args)
    
}