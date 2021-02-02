const env = require('../.env');
const { Telegraf, Markup } = require('telegraf');
const bot = new Telegraf(env.token);

const { start } = require('./middlewares/start');
const { private } = require('./middlewares/private');
const { project } = require('./middlewares/project');

bot.start(start);

bot.command('private', private);

/* Esta errado fazer isso, apenas os membros devem ter acesso a essa função
   para resolver isso deve fazer uma seção private */
bot.hears('💻 Projetos', project);

bot.startPolling();