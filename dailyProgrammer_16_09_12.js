// https://www.reddit.com/r/dailyprogrammer/comments/52enht/20160912_challenge_283_easy_anagram_detector/

function detectAnagram(input1, input2) {
  
  function cleanString(input) {
    return input.toLowerCase().replace(/([^a-z])/g, '').split('').sort().toString();
  }

  return cleanString(input1) === cleanString(input2) ?
    console.log([input1, 'is an anagram of', input2].join(' ')) :
    console.log([input1, 'is NOT an anagram of', input2].join(' '))
}

detectAnagram("wisdom", "mid sow");
detectAnagram("Seth Rogan", "Gathers No");
detectAnagram("Reddit", "Eat Dirt");
detectAnagram("Schoolmaster", "The classroom");
detectAnagram("Astronomers", "Moon starer");
detectAnagram("Vacation Times", "I'm Not as Active");
detectAnagram("Dormitory", "Dirty Rooms");
