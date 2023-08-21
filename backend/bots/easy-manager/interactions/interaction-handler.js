
export const InteractionHandler = async interaction => {
    if (!interaction.isCommand()) return

    const { default: command } = await import(`./cat1/${interaction.commandName}.js`)

    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(error);
        await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
    }
}