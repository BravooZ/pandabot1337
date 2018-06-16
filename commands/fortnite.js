const Discord = require('discord.js');
const Client = require('fortnite');
const fortnite = new Client('1278ded7-4614-4d9b-9378-ec24ba1df4e7');

module.exports.run = async (bot, message, args) => {
    await message.delete();
    let username = args[0];
    let platform = args[2] || 'pc';
    let gamemode = args[1];
    if(gamemode != 'solo' && gamemode != 'duo' && gamemode != 'squad' && gamemode != 'lifetime') return message.reply("Como usar: `»fortnite <nick> <modo> <plataforma>`\n Os modos são `Solo | Duo | Squad | Lifetime`");


    if(!username) return message.reply("Por favor, forneça um nome de usuário.")

    let data = fortnite.user(username, platform).then(data => {

        let stats = data.stats;

        if (gamemode === 'solo'){
            let solostats = stats.solo;
            let score = solostats.score;
            let kd = solostats.kd;
            let matches = solostats.matches;
            let kills = solostats.kills;
            let wins = solostats.wins;
            let top3 = solostats.top_3;

            let fortniteEmbed = new Discord.RichEmbed()
            .setTitle('Fortnite Stats')
            .setAuthor(data.username,'https://i.imgur.com/m80SLcM.jpg')
            .setImage('https://i.imgur.com/7XYR2Pl.jpg')
            .setColor(0x19d1af)
            .addField('Wins', wins, true)
            .addField('Partidas Jogadas', matches, true)
            .addField('Kills', kills, true)
            .addField('Score', score, true)
            .addField('Top 3', top3, true)
            .addField('K/d', kd, true)
            .setTimestamp()
            .setFooter('Feito por BravooZ', 'https://i.imgur.com/GhhhkZU.jpg');

            return message.channel.send(fortniteEmbed);
        }else if (gamemode === 'duo'){
            let duostats = stats.duo;
            let score = duostats.score;
            let kd = duostats.kd;
            let matches = duostats.matches;
            let kills = duostats.kills;
            let wins = duostats.wins;
            let top3 = duostats.top_3;

            let fortniteEmbed = new Discord.RichEmbed()
            .setTitle('Fortnite Stats')
            .setAuthor(data.username,'https://i.imgur.com/m80SLcM.jpg')
            .setImage('https://i.imgur.com/7XYR2Pl.jpg')
            .setColor(0x19d1af)
            .addField('Wins', wins, true)
            .addField('Partidas Jogadas', matches, true)
            .addField('Kills', kills, true)
            .addField('Score', score, true)
            .addField('Top 3', top3, true)
            .addField('K/d', kd, true)
            .setTimestamp()
            .setFooter('Feito por BravooZ', 'https://i.imgur.com/GhhhkZU.jpg');

          return message.channel.send(fortniteEmbed);
        }else if (gamemode === 'squad'){
            let squadstats = stats.squad;
            let score = squadstats.score;
            let kd = squadstats.kd;
            let matches = squadstats.matches;
            let kills = squadstats.kills;
            let wins = squadstats.wins;
            let top3 = squadstats.top_3;

            let fortniteEmbed = new Discord.RichEmbed()
            .setTitle('Fortnite Stats')
            .setAuthor(data.username,'https://i.imgur.com/m80SLcM.jpg')
            .setImage('https://i.imgur.com/7XYR2Pl.jpg')
            .setColor(0x19d1af)
            .addField('Wins', wins, true)
            .addField('Partidas Jogadas', matches, true)
            .addField('Kills', kills, true)
            .addField('Score', score, true)
            .addField('Top 3', top3, true)
            .addField('K/d', kd, true)
            .setTimestamp()
            .setFooter('Feito por BravooZ', 'https://i.imgur.com/GhhhkZU.jpg');

          return message.channel.send(fortniteEmbed);
        }else if (gamemode === 'lifetime'){
            let lifetime = stats.lifetime;
            let score = lifetime[6]['Score'];
            let matplayed = lifetime[7]['Matches Played'];
            let wins = lifetime[8]['Wins'];
            let winper = lifetime[9]['Win%'];
            let kills = lifetime[10]['Kills'];
            let kd = lifetime[11]['K/d'];

            let fortniteEmbed = new Discord.RichEmbed()
            .setTitle('Fortnite Stats')
            .setAuthor(data.username,'https://i.imgur.com/m80SLcM.jpg')
            .setImage('https://i.imgur.com/7XYR2Pl.jpg')
            .setColor(0x19d1af)
            .addField('Wins', wins, true)
            .addField('Partidas Jogadas', matplayed, true)
            .addField('Kills', kills, true)
            .addField('Score', score, true)
            .addField('Percentagem de Win', winper, true)
            .addField('K/d', kd, true)
            .setTimestamp()
            .setFooter('Feito por BravooZ', 'https://i.imgur.com/GhhhkZU.jpg');

            return message.channel.send(fortniteEmbed);
        }

    }).catch(e => {
        console.log(e);
        message.channel.send('Não foi possível encontrar o nome de usuário no banco de dados.');
    });

}

module.exports.help = {
    name: "fortnite"
}
