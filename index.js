/*
* DON'T FORGET TO FILL CONFIG.JS
*/
const Discord = require("discord.js-selfbot-v13");
const loadConfig = require("./config.js");
const client = new Discord.Client({
  checkUpdate: false,
});

console.log(loadConfig)
function validateConfig(loadConfig) {
    const requiredFields = [
        'clientOptions.token',
        'richPresence.applicationId',
        'richPresence.status',
        'richPresence.presenceName',
        'richPresence.presenceType',
        'richPresence.streamUrl',
        'richPresence.presenceDetails',
        'richPresence.presenceLargeImage',
        'richPresence.presenceLargeImageText',
        'buttons.button1Name',
        'buttons.button1Url',
        'buttons.button2Name',
        'buttons.button2Url',
    ];

    for (const field of requiredFields) {
        const keys = field.split('.');
        let value = loadConfig;

        for (const key of keys) {
            value = value[key];
            if (value === undefined) {
                console.error(`Error: Missing configuration field: ${field}`);
                return false;
            }
        }
    }
    return true;
}

if (!validateConfig(loadConfig)) {
	process.exit(1);
}

client.on("ready", async () => {
  	console.clear();
  	const colors = require("colors");
  	console.log(colors.blue(`┏╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾┓\n┃         </> All rights reserved to Beban Community           ┃\n┃    *Please respect our work by not removing the credits      ┃\n┗╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾┛`));
  	console.log(`Successfully logged in as ${colors.rainbow(`[${client.user.tag}]`)}`);

  	const RPC = new Discord.RichPresence(client)
		.setApplicationId(loadConfig.richPresence.applicationId)
		.setType(loadConfig.richPresence.presenceType)
		.setName(loadConfig.richPresence.presenceName)
		.setDetails(loadConfig.richPresence.presenceDetails)
		.setAssetsLargeImage(loadConfig.richPresence.presenceLargeImage)
		.setAssetsLargeText(loadConfig.richPresence.presenceLargeImageText)


	if (loadConfig.richPresence.presenceState) {
		RPC.setState(loadConfig.richPresence.presenceState)
	};
	if (loadConfig.richPresence.presenceSmallImage && loadConfig.richPresence.presenceSmallImageText) {
		RPC
		.setAssetsSmallImage(loadConfig.richPresence.presenceSmallImage)
		.setAssetsSmallText(loadConfig.richPresence.presenceSmallImageText);
	};
	if (loadConfig.richPresence.streamUrl) {
		RPC.setURL(loadConfig.richPresence.streamUrl);
	};
	if (loadConfig.buttons.button1Name && loadConfig.buttons.button1Url) {
		RPC.addButton(loadConfig.buttons.button1Name, loadConfig.buttons.button1Url);
	};
	if (loadConfig.buttons.button2Name && loadConfig.buttons.button2Url) {
		RPC.addButton(loadConfig.buttons.button2Name, loadConfig.buttons.button2Url);
	};

	client.user.setPresence({ activities: [RPC] });
});

client.login(loadConfig.clientOptions.token).catch(console.error);