const{ Client, GatewayIntentBits } = require("discord.js");
worker: node index.js
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.on("ready", () => {
    console.log("bot is ready");
});

client.login("");
client.on("messageCreate", message => {
    if(message.author.bot) return;

    console.log(message)
    if(message.content === ".codebreaker version"){
        message.reply("actual version is 3.0");
    
    }
    else if(message.content === ".help"){
        message.reply("for download = .codebreaker download \nfor melon download = .codebreaker download(melon client) \nfor codebreaker version = .codebreaker version \nfor getting a girl friend = .get a life")
    }

});
client.on("messageCreate", message => {
    if(message.author.bot) return;

    console.log(message)
    if(message.content === ".codebreaker download"){
        message.reply("hehhe your not gonna have it like that");
    
    }
});
client.on("messageCreate", message => {
    if(message.author.bot) return;

    if(message.content === ".codebreaker download(melon client)"){
        message.reply("https://mega.nz/folder/hCMFQD5S#GmuFCdbdaS63iHc7V54Hqw");
    
    }
});
client.on("messageCreate", message => {
    if(message.author.bot) return;

    if(message.content === ".get a life"){
        message.reply("go touch grass");
    
    }
});
client.on("messageCreate", message => {
    if(message.author.bot) return;

    if(message.content === ".download or die"){
        message.reply("ok ok description to this >https://www.youtube.com/watch?v=dQw4w9WgXcQ>");
    
    }
});
client.on("messageCreate", message => {
    if(message.author.bot) return;

    if(message.content === ".pls download"){
        message.reply("ok take this https://mega.nz/folder/wT8SVQKR#Ugu1-_e_B-WbE-ip3DPKFQ");
    
    }
});
client.on("messageCreate", message => {
    if(message.author.bot) return;

    if(message.content === ".william a dit"){
        message.reply("/ban Sitylist94");
    
    }
});
client.on("messageCreate", message =>{
    if(message.author.bot) return;

    if(message.content === "hello world"){
        message.reply("gg you found an estear egg");

    }
});
client.on("messageCreate", message => {
    if(message.author.bot) return;

    if(message.content === "quoi"){
        message.reply("feur");
    
    }
});
client.on("messageCreate", message => {
    if(message.author.bot) return;

    if(message.content === "oui"){
        message.reply("fi");
    
    }
});
client.on("messageCreate", message => {
    if(message.author.bot) return;

    if(message.content === "non"){
        message.reply("brill");
    
    }
});
client.on("messageCreate", message => {
    if(message.author.bot) return;

    if(message.content === "Non"){
        message.reply("brill");
    
    }
});
client.on("messageCreate", message => {
    if(message.author.bot) return;

    if(message.content === "Oui"){
        message.reply("fi");
    
    }
});
client.on("messageCreate", message => {
    if(message.author.bot) return;

    if(message.content === "Quoi"){
        message.reply("feur");
    
    }
});
