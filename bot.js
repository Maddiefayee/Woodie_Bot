var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
    
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `.`
    if (message.substring(0, 1) == '.') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
            break;
            // Just add any case commands if you want to..
              case 'disclaimer':
                    bot.sendMessage({
                    to: channelID,
                    message: 'Please be aware that unless otherwise specified by the Moderator in the chat room, that all signal setups are used for hypothetical and educational purposes only, that the Moderator unless otherwise noted is trading in simulation(or not trading at all) and that we do not guarantee future results of any kind in relation to the patterns and strategies. Trading Futures and Forex involves risk; please consult a licensed financial professional. woodies cci club llc is not responsible for any trades you execute or any charts problems. by remaining here you agree to this. Nothing is to be taken as advice, Past performance is not indicative of future results'
                });
            break;
            // Help Command for trying to see the charts.
            case 'help':
            bot.sendMessage({
                to: channelID,
                message: 'If you are trying to see the charts Woodie has up, you first need to make sure you are actually in the voice chat channel! You do this by clicking on the charts channel. Then you go to #link-to-screen and click the link. You will be immediately be taken to the shared screen. NOTE: you cannot see the shared screen and type in chat. If you have any questions, please do not hesitate to reach out. Thanks!'
            });
            break;
            // Twitter
            case 'twitter':
                bot.sendMessage({
                    to: channelID,
                    message: 'See Woodies latest tweets on Twitter at: "https://twitter.com/woodie9" '
                });
            break;
            // Facebook
            case 'facebook':
            bot.sendMessage({
                to: channelID,
                message: 'See Woodies latest posts on Facebook at: "https://www.facebook.com/WoodiesBars1/" '
            });
            break;
            // Stocktwits
            case 'stocktwits':
                bot.sendMessage({
                    to: channelID,
                    message: 'See Woodies latest posts on Stocktwits at "https://stocktwits.com/woodiescciclub" '
                });
                break;
         }
     }
});