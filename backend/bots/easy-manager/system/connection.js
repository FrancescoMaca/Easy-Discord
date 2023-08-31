import { REST, Routes} from "discord.js";
import interactions from "../interactions/interactions.js";

export const onConnection = async (client) => {
    console.log(`Logged in as the beautiful ${client.user.tag}!`);

    // Once the bot is connect it's going to load all the commands and interactions
    await initializeInteractions()
}

const initializeInteractions = async () => {

    try {
        const rest = new REST().setToken(process.env.BOT_TOKEN)

        const res = await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
            {
                body: interactions
            }
        )
    } catch (error) {
        console.error(error);
    }
}