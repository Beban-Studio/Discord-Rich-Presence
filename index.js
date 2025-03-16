/*
* DON'T FORGET TO FILL CONFIG.JS
*/
const Discord = require("discord.js-selfbot-v13");
const config = require("./config.js");
const client = new Discord.Client({
  checkUpdate: false,
});

client.on("ready", async () => {
  console.clear();
  const colors = require("colors");
  console.log(colors.blue(`┏╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾┓\n┃         </> All rights reserved to Beban Community           ┃\n┃    *Please respect our work by not removing the credits      ┃\n┗╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾┛`));
  console.log(`Succesfully logged in as ${colors.rainbow(`[${client.user.tag}]`)}`);

  const RPC = new Discord.RichPresence(client)
    .setApplicationId(config.rich_presence.application_id)
    .setType(config.rich_presence.presence_type)
    .setURL(config.rich_presence.stream_url)
    .setName(config.rich_presence.presence_title)
    .setDetails(config.rich_presence.presence_details)
    .setState(config.rich_presence.presence_state)
    .setAssetsLargeImage(config.rich_presence.presence_largeImage)
    .setAssetsLargeText(config.rich_presence.presence_largeImageText)
    .setAssetsSmallImage(config.rich_presence.presence_smallImage)
    .setAssetsSmallText(config.rich_presence.presence_smallImageText)
    .addButton(config.buttons.Button1_name, config.buttons.Button1_url)
    .addButton(config.buttons.Button2_name, config.buttons.Button2_url);

  client.user.setPresence({ activities: [RPC] });
});

client.login(config.client.token);

/*
┏╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾┓
┃         </> All rights reserved to Beban Community           ┃
┃    *Please respect our work by not removing the credits      ┃
┗╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾┛
*/