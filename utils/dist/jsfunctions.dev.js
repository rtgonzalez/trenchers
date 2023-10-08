"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeStrings = mergeStrings;
exports.formatTextSplitStr = formatTextSplitStr;
exports.joinedString = joinedString;
exports.formatParagraph = formatParagraph;
exports.capitalizeWordsExcept = capitalizeWordsExcept;
exports.formatSentenceExcept = formatSentenceExcept;
exports.formatParagraphExcept = formatParagraphExcept;

// merge all strings of an arrarr split by blank
function mergeStrings(arr) {
  arr.map(function (str) {
    return "".concat(str);
  }).join(' ');
}

function formatTextSplitStr(text, splitStr, joinStr) {
  var lines = text.split(splitStr).map(function (sentence) {
    return sentence.trim();
  });
  var formattedText = lines.join(joinStr);
  return formattedText;
}

function joinedString(json) {
  var formattedText = json.map(function (item) {
    return "".concat(item.name);
  }).join('\n');
  return formattedText;
}

function capitalizeSentence(sentence) {
  // Trim leading and trailing whitespace, then capitalize the first letter
  return sentence.trim().charAt(0).toUpperCase() + sentence.slice(1).toLowerCase();
}

function formatParagraph(paragraph) {
  // Split the paragraph into sentences based on periods
  var sentences = paragraph.split('. '); // Capitalize the first letter of each sentence and join them back

  var formattedSentences = sentences.map(capitalizeSentence).join('. ');
  return formattedSentences;
}

function capitalizeWordsExcept(word, exceptions) {
  if (exceptions.includes(word.toLowerCase())) {
    return word.toLowerCase();
  } else {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }
}

function formatSentenceExcept(sentence, exceptions) {
  var words = sentence.split(' ');
  var formattedWords = words.map(function (word) {
    return capitalizeWordsExcept(word, exceptions);
  });
  return formattedWords.join(' ');
}

function formatParagraphExcept(paragraph, exceptions) {
  var sentences = paragraph.split('. ');
  var formattedSentences = sentences.map(function (sentence) {
    return formatSentenceExcept(sentence, exceptions);
  });
  return formattedSentences.join('. ');
}