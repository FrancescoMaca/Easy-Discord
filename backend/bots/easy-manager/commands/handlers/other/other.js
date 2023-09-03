export default {
    name: 'other',
    description: 'test command',
    options: [],
    async run() {
        // Executes the LOCAL command (NOT INTERACTION)
        console.log('other called');
    }
}