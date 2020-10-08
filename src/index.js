const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {
  let codedLetters = expr
    .split(/(.{10})/)
    .filter((O) => O)
    .map((el) => el.replace(/^0+/, ''));

  let morseArr = [];

  codedLetters.forEach((element) => {
    if (element === '**********') {
      morseArr.push(' ');
    } else {
      let morseSign = element
        .match(/.{1,2}/g)
        .map((el) => {
          if (el === '10') return '.';
          if (el === '11') return '-';
        })
        .join('');
      morseArr.push(morseSign);
    }
  });

  let decodedString = morseArr
    .map((el) => {
      return el
        .split(' ')
        .map((b) => MORSE_TABLE[b])
        .join('');
    })
    .reduce((sum, cur) => sum + (cur || ' '));

  return decodedString;
}

module.exports = {
  decode,
};
