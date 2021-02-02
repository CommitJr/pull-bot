const { Markup } = require('telegraf');

const keybordPrivate = Markup.keyboard([
    ['💻 Projetos', '🚧 Comercial'],
    ['🚧 Marketing', '🚧 Gestão']
]).resize().oneTime();

module.exports = { keybordPrivate };