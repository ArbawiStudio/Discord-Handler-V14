require('dotenv').config()
const { Client, IntentsBitField, Collection } = require('discord.js')
const fs = require('fs')
const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent
    ]
})

fs.readdirSync('./Handler/').forEach((Handler) => {
    require(`./Handler/${Handler}`)(client)
})

const Config = require('./config')

client.Commands = new Collection()
client.SlashCommands = new Collection()
client.Config = Config;



client.login(process.env.Token)