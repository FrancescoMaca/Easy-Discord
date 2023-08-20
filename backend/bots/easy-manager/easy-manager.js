import dotenv from 'dotenv'
import discord, { GatewayIntentBits, Events } from 'discord.js'
import { InteractionHandler } from './interactions/interaction-handler.js'
import { CommandHandler } from './commands/command-handler.js'
import { onConnection } from './system/connection.js'

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
client.commands = new discord.Collection()
client.interactions = new discord.Collection()

// Binds client events with handlers
client.on(Events.ClientReady, () => onConnection(client))
client.on(Events.InteractionCreate, InteractionHandler)
client.on(Events.MessageCreate, CommandHandler)

// Connects the client to the discord server
client.login(process.env.BOT_TOKEN)