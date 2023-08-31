
export const InteractionHandler = async interaction => {
    if (!interaction.isCommand()) return

    const { default: int } = await import(`./handlers/debug/${interaction.commandName}.js`)

    try {
        await int.execute(interaction);
    } catch (error) {
        console.error(error);
        await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
    }
}