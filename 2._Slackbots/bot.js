const SlackBot = require('slackbots');
 
// create a bot
const bot = new SlackBot({
    token: 'xoxb-381642191939-767549478855-ravISUtI7rqAVIYB1U2TGFWx', // Add a bot https://my.slack.com/services/new/bot and put the token 
    name: 'anders_bot'
});
 
bot.on('start', function() {
    // more information about additional params https://api.slack.com/methods/chat.postMessage
    var params = {
        icon_emoji: ':heart:'
    };
    
    // define channel, where bot exist. You can adjust it there https://my.slack.com/services 
    bot.postMessageToChannel('general', 'does this!', params);
    
    // // define existing username instead of 'user_name'
    // bot.postMessageToUser('user_name', 'meow!', params); 
    
    // // If you add a 'slackbot' property, 
    // // you will post to another user's slackbot channel instead of a direct message
    // bot.postMessageToUser('user_name', 'meow!', { 'slackbot': true, icon_emoji: ':cat:' }); 
    
    // // define private group instead of 'private_group', where bot exist
    // bot.postMessageToGroup('private_group', 'meow!', params); 
});