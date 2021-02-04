async function start(ctx, next) {
    const name = ctx.update.message.from.first_name;
    console.log(ctx.update.message.from);

    await ctx.reply(`Seja bem vindo, ${name}`);
    await ctx.replyWithMarkdown('**🚧 Em desenvolvimento 🚧**');

    next && next();
}

module.exports = {
    start
};