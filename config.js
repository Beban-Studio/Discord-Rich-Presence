require("dotenv").config();

const defaultConfig = {
    clientOptions: {
        // The token for the Discord self-bot. Replace with your actual token.
        token: ""
    },
    richPresence: {
        // The application ID for your Discord application. Obtain it from the Discord Developer Portal.
        applicationId: "1185217182041374770",
        
        // The status of the user. Options include: online, idle, dnd (Do Not Disturb), invisible.
        status: "idle",
        
        // The presence activity name
        presenceName: "Spotify",

        // The type of activity. Options: PLAYING, COMPETING, WATCHING, LISTENING, CUSTOM, STREAMING.
        presenceType: "LISTENING",

        // The presence stream url if applicable
        streamUrl: "",

        // The presence details text
        presenceDetails: "",

        // The presene state
        presenceState: "",
        
        // Large image to display in the rich presence.
        presenceLargeImage: "https://cdn.discordapp.com/attachments/1298982484423213076/1365346714365460491/generated-image.png?ex=680ef3f7&is=680da277&hm=62a51e6fea54dbeed81403d7f62a99d71297c9de8c955e63e3cb83433fbbca63&",
        
        // Text that appears when hovering over the large image.
        presenceLargeImageText: "Large Image Text",
        
        // Small image to display in the rich presence.
        presenceSmallImage: "",
        
        // Text that appears when hovering over the small image.
        presenceSmallImageText: "",
    },
    buttons: {
        // Name for the first button in the rich presence.
        button1Name: "",
        
        // URL that the first button links to.
        button1Url: "",
        
        // Name for the second button in the rich presence.
        button2Name: "",
        
        // URL that the second button links to.
        button2Url: "",
    }
};

function loadConfig() {
    return {
        clientOptions: {
            token: process.env.TOKEN || defaultConfig.clientOptions.token
        },
        richPresence: {
            applicationId: process.env.APPLICATION_ID || defaultConfig.richPresence.applicationId,
            status: process.env.STATUS || defaultConfig.richPresence.status,
            presenceName: process.env.PRESENCE_NAME || defaultConfig.richPresence.presenceName,
            presenceType: process.env.PRESENCE_TYPE || defaultConfig.richPresence.presenceType,
            streamUrl: process.env.STREAM_URL || defaultConfig.richPresence.streamUrl,
            presenceDetails: process.env.PRESENCE_DETAILS || defaultConfig.richPresence.presenceDetails,
            presenceState: process.env.PRESENCE_STATE || defaultConfig.richPresence.presenceState,
            presenceLargeImage: process.env.LARGE_IMAGE || defaultConfig.richPresence.presenceLargeImage,
            presenceLargeImageText: process.env.LARGE_IMAGE_TEXT || defaultConfig.richPresence.presenceLargeImageText,
            presenceSmallImage: process.env.SMALL_IMAGE || defaultConfig.richPresence.presenceSmallImage,
            presenceSmallImageText: process.env.SMALL_IMAGE_TEXT || defaultConfig.richPresence.presenceSmallImageText,
        },
        buttons: {
            button1Name: process.env.BUTTON1_NAME || defaultConfig.buttons.button1Name,
            button1Url: process.env.BUTTON1_URL || defaultConfig.buttons.button1Url,
            button2Name: process.env.BUTTON2_NAME || defaultConfig.buttons.button2Name,
            button2Url: process.env.BUTTON2_URL || defaultConfig.buttons.button2Url,
        }
    };
}

module.exports = loadConfig();

/**
  * Discord Rich Presence Source Code
  * Author : Juna
  * This is just a simple discord selftbot. Use it at your own risk
  * Feel free to edit this source code, but please leave some credit for the author
  */