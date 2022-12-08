const { Client } = require('discord.js')
const Chalk = require('chalk')
const moment = require('moment')
const chalk = require('chalk')

/**
 * @param { Client } Client
 */

module.exports = async function(Client) {
    Client.Logger = async(Data) => {
        const Log = `${Chalk.greenBright.bold(String('TOBZiCoder'))}${Chalk.grey(' 〢 ')}${Chalk.yellowBright.bold(`${moment().format('LLL')}${' —› '}`)}`;
        if(typeof Data === 'string') {
            console.log(Log, Data.split('\n').map((Text) => chalk.cyan.bold(`${Text}`)).join(`\n${Log}`))
        } else if(typeof Data === 'object') {
            console.log(Log, Chalk.red.bold(JSON.stringify(Data, null, 3)))
        } else if(typeof Data === 'boolean') {
            console.log(Log, Chalk.cyanBright.bold(String(Data)))
        }
    }
}