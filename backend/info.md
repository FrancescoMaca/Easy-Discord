
## Tools

### Frameworks
- React
- Discord.js (https://discord.js.org)
- Blockly (https://developers.google.com/blockly/guides/get-started/web)
- Git
- Bulma (https://bulma.io) (?) 
- Puppeteer (https://pptr.dev/) 
### Figma Collaboration Link
[Click here to join Figma's Easy Discord Team](https://www.figma.com/file/CUFgIn8IB08OqN0sUSQJMz/Easy-Discord?type=design&node-id=0%3A1&t=dYCPOwzNPzpY8MlE-1)

## Doubts??
- How to separate things in the application?
- ... 

## Specifications and why we are using each framework
- **React** For the UI
- **Blockly** Library required to create code blocks
- **Puppeteer** Used to automate bot creation and generally reduce clicks required to create a new bot.   

## Concerns 
- **Puppeteer** The Puppeteer library will have to go through maticulous regulation in order to confirm that we adhere to 
Discord's terms of service to prevent spam. Removing the possibility for a user to generate more than one instance of a bot 
inside a workspace may be a solution. We may also require a wait period before we allow the user to add another bot. 
