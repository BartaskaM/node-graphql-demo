const feed = (root, args, context) => context.prisma.links();
const link = (parent, args, context) => context.prisma.link({id: args.id});
const votes = (parent, args, context) => context.prisma.votes();

module.exports = {
    feed,
    link,
    votes,
};