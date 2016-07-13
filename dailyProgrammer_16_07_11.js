// solution to /r/dailyProgrammer challenge: https://www.reddit.com/r/dailyprogrammer/comments/4savyr/20160711_challenge_275_easy_splurthian_chemistry/
function testSymbol(element, symbol) {
  let el = element.toLowerCase();
  let symbs = symbol.toLowerCase().split('');
  
  if (symbs.length === 2) {
    if (symbs.every(char => el.indexOf(char) >-1)) {
      if (symbs[0] === symbs[1]) {
        if (el.split(symbs[0]).length <= 2) {
          return false;
        }
      }
      
      let seqPass = el.lastIndexOf(symbs[1]) > el.indexOf(symbs[0]);
      if (seqPass) {
        return true;
      }
    }
  }
  return false;
}

function runTest(element, symbol) {
  console.log([element, symbol, '->', testSymbol(element, symbol)].join(' '));
}

runTest('Spenglerium', 'Ee');
runTest('Zeddemorium', 'Zr');
runTest('Venkmine', 'Kn');
runTest('Stantzon', 'Zt');
runTest('Melintzum', 'Nn');
runTest('Tullium', 'Ty');
