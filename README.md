<img src="Simple Rich Presence.svg" />

---

<p align="center">
  <strong>A simple discord selfbot to give your Discord account a rich presence.</strong>
  </p>

<p align="center">
    <a href="https://github.com/Beban-Studio/Discord-Rich-Presence	"><b>Github</b></a> •
    <a href="https://discord.gg/9eCgpGuZAa"><b>Support</b></a>
</p>

<div align="center">
  <a href="https://www.npmjs.com/package/discord.js-selfbot-v13"><img src="https://img.shields.io/badge/discord.js_selfbot_v13-v3.6.1-blue" />
</div>
<p align="center"> 
  <a href="https://discord.gg/9eCgpGuZAa" target="_blank"> <img src="https://discordapp.com/api/guilds/1215235509958479894/widget.png?style=banner2"/> </a>
</p>

#

### `⚙` Configuration & Installation
-   Clone this repository.
```
https://github.com/Beban-Studio/Discord-Rich-Presence.git
```
-   Open the main folder then install all the package.
```
npm install
```
-   Rename `.env.example` to `.env` and fill out these variables according to yours.
```
#########################################################
# CHECK CONFIG.JS FOR WHAT TO FILL
#########################################################

# Your Discord self-bot token
TOKEN=YOUR_DISCORD_SELF_BOT_TOKEN

# Rich Presence configuration
APPLICATION_ID=YOUR_APPLICATION_ID
STATUS=idle  # Options: online, idle, dnd, invisible

# Rich Presence activities
PRESENCE_NAME=Your presence name here
PRESENCE_TYPE=Your presence type here

# Rich Presence details
PRESENCE_DETAILS=Your presence details here
PRESENCE_STATE=Your presence state here
STREAM_URL=Your stream URL here (if applicable)

# Rich Presence images
PRESENCE_LARGE_IMAGE=URL_TO_LARGE_IMAGE
PRESENCE_LARGE_IMAGE_TEXT=Text for large image
PRESENCE_SMALL_IMAGE=URL_TO_SMALL_IMAGE
PRESENCE_SMALL_IMAGE_TEXT=Text for small image

# Button configuration
BUTTON1_NAME=Button 1 Name
BUTTON1_URL=Button 1 URL
BUTTON2_NAME=Button 2 Name
BUTTON2_URL=Button 2 URL
```
-   Starts the bot by running
```
node index.js
```
### `🔒️` Licensed
Distributed under the MIT License. See [LICENSE](https://github.com/BebanCode/Simple-Discord-Rich-Presence/blob/master/LICENSE) for more information.

## Contributors
We really appreciated if any of you can contribute to this project. To contribute to this project you can fork this repository and make a pull request, we will gladly check it out. If you have any suggestion or want to report any bug you can join this server: [Beban Community](https://discord.gg/9eCgpGuZAa)

<a href="https://github.com/Beban-Studio/Discord-Rich-Presence/graphs/contributors">
  <img src="https://contributors-img.web.app/image?repo=beban-studio/discord-rich-presence" />
</a>