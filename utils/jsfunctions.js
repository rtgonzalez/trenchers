// merge all strings of an arrarr split by blank

export function mergeStrings(arr) {
    arr.map((str) => `${str}`).join(' ');
}

export function formatTextSplitStr(text, splitStr, joinStr) {
    const lines = text.split(splitStr).map((sentence) => sentence.trim());
    const formattedText = lines.join(joinStr);
    return formattedText;
}
export function joinedString(json) {
    const formattedText = json.map((item) => `${item.name}`).join('\n');
    return formattedText;
}

function capitalizeSentence(sentence) {
    // Trim leading and trailing whitespace, then capitalize the first letter
    return (
        sentence.trim().charAt(0).toUpperCase() +
        sentence.slice(1).toLowerCase()
    );
}

export function formatParagraph(paragraph) {
    // Split the paragraph into sentences based on periods
    const sentences = paragraph.split('. ');

    // Capitalize the first letter of each sentence and join them back
    const formattedSentences = sentences.map(capitalizeSentence).join('. ');

    return formattedSentences;
}

export function capitalizeWordsExcept(word, exceptions) {
    if (exceptions.includes(word.toLowerCase())) {
        return word.toLowerCase();
    } else {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }
}

export function formatSentenceExcept(sentence, exceptions) {
    const words = sentence.split(' ');
    const formattedWords = words.map((word) =>
        capitalizeWordsExcept(word, exceptions)
    );
    return formattedWords.join(' ');
}

export function formatParagraphExcept(paragraph, exceptions) {
    const sentences = paragraph.split('. ');
    const formattedSentences = sentences.map((sentence) =>
        formatSentenceExcept(sentence, exceptions)
    );
    return formattedSentences.join('. ');
}
