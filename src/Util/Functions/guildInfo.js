const region = (region) => {
		if (region === "us-south") {
			region = 'U.S South'
		} else if (region === 'us-east') {
			region = 'U.S East'
		} else if (region === 'us-west') {
			region = 'U.S West'
		} else if (region === 'us-central') {
			region = 'U.S Central'
		} else if (region === 'brazil') {
			region = 'Brazil'
		} else if (region === 'eu-central') {
			region = 'Central Europe'
		} else if (region === 'hongkong') {
			region = 'Hong Kong'
		} else if (region === 'india') {
			region = 'India'
		} else if (region === 'japan') {
			region = 'Japan'
		} else if (region === 'russia') {
			region = 'Russia'
		} else if (region === 'singapore') {
			region = 'Singapore'
		} else if (region === 'southafrica') {
			region = 'South Africa'
		} else if (region === 'sydney') {
			region = 'Sydney'
		} else if (region === 'eu-west') {
			region = 'Western Europe'
		}
  return region
}

const verification = (verif) => {
  		if (verif === 0) {
			verif = 'None'
		} else if (verif === 1) {
			verif = 'Must have a verified email'
		} else if (verif === 2) {
			verif = 'Must be registered to Discord for more than 5 minutes'
		} else if (verif === 3) {
			verif = 'Must be a member of the server for longer than 10 minutes'
		} else if (verif === 4) {
			verif = 'Must have a phone linked with Discord'
		}
  return verif
}

module.exports = {
  verification,
  region
}
