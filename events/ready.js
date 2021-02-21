module.exports = async (client) => {
  console.log(`[API] Logged in as ${client.user.username}`);
  await client.user.setActivity("${client.config.prefix}",{ type: 'STREAMING'});
};
