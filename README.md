# Easy-Discord

Welcome to EasyDiscord, the official repository for an open-source project aimed at simplifying Discord management and reducing the time spent on administrative tasks.

## About EasyDiscord

EasyDiscord is a project initiated by Francesco Macaluso with the goal of providing a comprehensive solution for Discord server management. Whether you're a server owner, administrator, or a Discord enthusiast, EasyDiscord aims to make your experience more enjoyable and efficient.

## Timeline
The following task are ordered chronologically, so you shouldn't work on the next step if the previous was is not done. The parts that can be done in parallel are marked by an '**\***'. <br>
This is what the current goals are:

**Webpage**:
To have access to the Figma project click [here](https://www.figma.com/file/CUFgIn8IB08OqN0sUSQJMz/Easy-Discord---0001---External?type=design&mode=design&t=D0rYs0AyHaDIPrcd-1)
The only preference there are on this website is the use of Tailwind and Nextjs, nothing else.
- [ ] Make the wireframe of the mobile and desktop app.
- [ ] Make the design of the mobile and desktop app.

**EasyDiscord Bot**:
- [x] Created a working bot
- [x] Create Interaction Loaders: loads all the intent found in the `interactions/handlers/` folder.
- [x] Create Command Loader: loads all the messages found in the `commands/handlers/` folder. <br>
--------
**WARNING:** The main difference between these two is that intents are used for external services (outside Discord), (i.e. Fetch a song from YouTube, etc...). On the other hand messages are used to
handle the main commands that will be affect changes in the server settings (i.e. Create backups, edit server permissions, adding roles, loading templates, etc...)
Implement the following commands:
- [ ] `!help`: shows all the commands with their different options and description
- [ ] `!backup`: creates a backup of the server. (1)
- [ ] `!hide-channel` / `!show-channell`: hides or displays a channel for a particular individual or role.
- [ ] `!hide-category` / `!show-category`: hides or display an entire chategory for a particular individual or role.
- [ ] `!perms`: main command to handle permissions of individuals or roles.
- [ ] `!roles`: main command to create, remove roles. These commands have the benefit of managing automatically
- [ ] `!settings`: manages some of the server
Implement the following interactions:
- [ ] `/gpt`: ask a question to ChatGPT.
- [ ] `/img`: returns the top image result for the given query.
- [ ] More to be added
## How to Contribute

We appreciate and welcome contributions from the community to help make EasyDiscord even better. If you'd like to get involved, here's how you can contribute:

- **Fork the Repository**: Start by forking this repository to your GitHub account.

- **Clone Your Fork**: Clone your forked repository to your local machine.

    ```bash
    git clone https://github.com/your-username/Easy-Discord.git
    ```

- **Create a Branch**: Create a new branch for your contributions.

    ```bash
    git checkout -b feature/your-feature
    ```

- **Make Changes**: Implement your desired features, improvements, or bug fixes.

- **Commit Changes**: Commit your changes with clear and concise commit messages.

    ```bash
    git commit -m "Add feature: your feature description"
    ```

- **Push Changes**: Push your changes to your fork on GitHub.

    ```bash
    git push origin feature/your-feature
    ```

- **Create a Pull Request**: Open a pull request to the `main` branch of the Easy-Discord repository. Please provide a detailed description of your changes in the pull request.

Once your pull request is submitted, it will be reviewed and merged if it aligns with the project's goals and standards. Be sure to follow our [Contributing Guidelines](CONTRIBUTING.md) for more details.

## Timeline

In the **Timeline** section, you can find information on what has already been implemented and what is currently being worked on. We encourage you to check this section regularly for updates on the project's progress.

## Getting Started

If you're new to EasyDiscord, you can quickly get started by following the installation and usage instructions in the [Getting Started Guide](docs/getting-started.md). This guide will help you set up the bot and explore its features.

## Community

Join our community of Discord enthusiasts and developers on our official Discord server: [EasyDiscord Community](https://discord.gg/easydiscord).

## License

Easy-Discord is released under the [MIT License](LICENSE).

---

Thank you for your interest in EasyDiscord. Together, we can make Discord management easier and more enjoyable for everyone. Happy coding!
