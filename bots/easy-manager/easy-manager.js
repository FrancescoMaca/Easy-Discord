import discord, {GatewayIntentBits, Events} from 'discord.js'
import { EasyManagerCommands } from './commands/easy-manager-commands.js'
import dotenv from 'dotenv'

dotenv.config()

const client = new discord.Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
})

const commandPrefix = '!'

client.commands = new discord.Collection()
client.commands.set('help', EasyManagerCommands.help)

client.on(Events.ClientReady, () => {
    console.log(`Logged in as ${client.user.tag}!`);
})

client.on(Events.MessageCreate, async msg => {

    if (msg.author.bot || !msg.content.startsWith(commandPrefix)) {
        return
    }

    const args = msg.content.slice(commandPrefix.length).trim().split(/ +/)
    const command = args.shift().toLowerCase()

    const action = client.commands.get(command)

    if (action) {
        action(msg, args)
    } else {
        await msg.channel.send({
            content: `\`\`\`The command '${command}' doesn't exist!\nIf you want to check out the available commands, you can use the !help command.\`\`\``,
            ephemeral: true 
        })
    }
})

client.login(process.env.BOT_TOKEN)