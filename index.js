// https://discord.gg/t2g
const Discord = require('discord.js-selfbot-v13');
const config = require('./config.json')

const clients = []
const platforms = {
  desktop: { properties: { $os: 'Windows', $browser: 'Discord Client' } },
    web: { properties: { $os: 'Windows', $browser: 'Discord Web' } },
    mobile: { properties: { $os: 'Windows', $browser: 'Discord iOS' } },
    console: { properties: { $os: 'Windows', $browser: 'Discord Embedded' } }
}
Object.entries(platforms).forEach(([ { properties }]) => {
    const client = new Client({
        ws: { properties }
    });
    clients.push(client)
});

clients.forEach(client => {
    client.login(config.token)
});
