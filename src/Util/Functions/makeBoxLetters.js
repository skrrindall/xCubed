function makeBoxLetter(word) {
      const numbers = [
            'one',
            'two',
            'three',
            'four',
            'five',
            'six',
            'seven',
            'eight',
            'nine',
            'zero'
      ]
      return word.replace(/\w/g, (w) => `:${isNaN(w) ? `regional_indicator_${w}` : numbers[w - 1]}:`)
}

module.exports = makeBoxLetter
