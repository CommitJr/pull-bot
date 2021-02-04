const { Markup } = require('telegraf');

const keyboardPrivate = Markup.keyboard([
    ['💻 Projetos', '🚧 Comercial'],
    ['🚧 Marketing', '🚧 Gestão']
]).resize().oneTime();

module.exports = { keyboardPrivate };