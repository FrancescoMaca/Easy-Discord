import config from '../config.json' assert { type: 'json' }

// Method that runs all the commands if they are valid
export const CommandHandler = message => {

    if (message.author.bot || !message.content.startsWith(config.commandPrefix)) return;
    
    console.log('user req a command');

    const args = message.content.slice(config.commandPrefix.length).trim().split(/ +/)
    const command = args.shift().toLowerCase()

    // const action = client.commands.get(command)
}