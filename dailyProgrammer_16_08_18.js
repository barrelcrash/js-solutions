// solution to /r/dailyProgrammer challenge: https://www.reddit.com/r/dailyprogrammer/comments/4ybbcz/20160818_challenge_279_intermediate_text_reflow/
/* jshint node: true */
/* jshint esnext: true */

'use strict';
let input = 'In the beginning God created the heavens and the earth. Now the earth was \nformless and empty, darkness was over the surface of the deep, and the Spirit of\nGod was hovering over the waters.\n\nAnd God said, "Let there be light," and there was light. God saw that the light\nwas good, and he separated the light from the darkness. God called the light\n"day," and the darkness he called "night." And there was evening, and there was\nmorning - the first day.'

// custom splice function
function stringSplice(str, index, count, add) {
	let ar = str.split('');
	ar.splice(index, count, add);
	return ar.join('');
}

// add spaces to lines to reach justified length
// function padLine(line, length) {
//   while (line.length < 40) {
//     let singleSpace = line.match(/(\w{1}[ ])(?![ ])/);
//     singleSpace = singleSpace && singleSpace.index;
//     line = stringSplice(line, singleSpace + 2, 0, ' ');
//   }
//   return line.trim();
// }

// main function
function textReflow(text, maxLen) {
	text = text.replace(/\n(?!\n)/g, ' ');
    let lineStart = 0;
	let lineEnd = maxLen;
    let lines = [];
	while (lineEnd < text.length) {
        if (text[lineEnd] !== ' ') {
           while (text[lineEnd] !== ' ') {
             lineEnd = lineEnd - 1;
           }
        }
        lines.push(text.slice(lineStart, lineEnd));
        lineStart = lineEnd;
        lineEnd += maxLen;
	}
    lines.push(text.slice(lineStart, lineEnd));
//     lines = lines.map(line => {
//       console.log(padLine(line, maxLen));
//       return padLine(line, maxLen);
//     });
	return lines.join('\n');
}

console.log(textReflow(input, 40));
