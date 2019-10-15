const {
	RichEmbed
} = require('discord.js')
const { region, verification } = require('../../Util/Functions/guildInfo.js')
module.exports = {
	Triggers: ['guildinfo', 'serverinfo'],
	Description: 'View the servers information',
	Category: 'information',
	Usage: '{c}',
	Permissions: {
		User: [],
		Bot: ['EMBED_LINKS', 'SEND_MESSAGES']
	},
	Options: {
		Dev: false,
		NSFW: false,
		Cooldown: {
			Enabled: false,
			Time: 0
		},
	},
	Run: async (client, message, paramaters) => {
		let afkChannel = message.guild.afkChannel
		if (afkChannel === null) {
			afkChannel = 'None'
		} else {
			afkChannel = `<#${afkChannel.id}>`
		}

		function checkDays(date) {
			let now = new Date();
			let diff = now.getTime() - date.getTime();
			let days = Math.floor(diff / 86400000);
			return days + (days == 1 ? " day" : " days") + " ago";
		};
		const embed = new RichEmbed()
		.setColor('RED')
		.setAuthor(message.guild.name, message.guild.iconURL)
		.addField("User Count!", `${message.guild.members.size} Users`, true)
		.addField("Channel Count!", `${message.guild.channels.size} channels`, true)
		.addField("Roles", `${message.guild.roles.size}`, true)
		.addField("Owner", `${message.guild.owner.user.tag}`, true)
		.addField("Region", `${region(message.guild.region)}`, true)
		.addField("Verification", `${verification(message.guild.verificationLevel)}`, true)
		.addField("Server ID", `${message.guild.id}`, true)
		.addField("AFK Channel", `${afkChannel}`, true)
		.setThumbnail(message.guild.iconURL)
		.setFooter(`Created On ${message.guild.createdAt.toLocaleString().split(",")[0]} (${checkDays(message.guild.createdAt)})`);
		message.channel.send({
			embed
		});
	}
}
