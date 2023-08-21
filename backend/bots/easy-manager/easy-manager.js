import dotenv from 'dotenv'
import discord, { GatewayIntentBits, Events, Embed } from 'discord.js'
import { InteractionHandler } from './interactions/interaction-handler.js'
import { CommandHandler } from './commands/command-handler.js'
import { onConnection } from './system/connection.js'
import commands from './commands/commands.js'
import interactions from './interactions/interactions.js'

// Initialize the .env file
dotenv.config()

// Creates the client with its permission
const client = new discord.Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
})

// Initializes collections where both interactions and 
// commands are going to be stored
client.commands = new discord.Collection(commands.map(cmd => [cmd.name, cmd.run]))
client.interactions = new discord.Collection(interactions.map(inter => [inter.name, inter.run]))

// Binds client events with handlers
client.on(Events.ClientReady, () => onConnection(client))
client.on(Events.InteractionCreate, InteractionHandler)
client.on(Events.MessageCreate, msg => CommandHandler(msg, client))
client.on(Events.MessageCreate, msg => {
    console.log(msg.channel.permissionsFor(msg.author))
})

// Connects the client to the discord server
client.login(process.env.BOT_TOKEN)