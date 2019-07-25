function firstUpper(string) {
const first = string.split("")[0].toUpperCase()
const rest = string.split("").slice(1).join("")
return first + rest
}

module.exports = firstUpper;