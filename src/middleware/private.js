const { keyboardPrivate } = require('../utils/keyboard');
const { idMembers, isMember } = require('../private/members');

async function private (ctx, next) {
    const id = ctx.update.message.from.id; //id do usuário.
    if(idMembers.find(m => isMember(m, id))){
        await ctx.reply("Área Privada (exclusiva para membros)");
        await ctx.reply('Diretorias: ', keyboardPrivate);
    }else{
        await ctx.reply('Desculpe seu usuário não esta cadastrado no nosso banco de membros :C \nCaso seja um membro da Commit solicite suporte.');
    }

    next && next();
}

module.exports = {
    private
};