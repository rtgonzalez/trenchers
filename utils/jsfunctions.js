// merge all strings of an arrarr split by blank

export function mergeStrings(arr) {
    arr.map((str) => `${str}`).join(' ');
}

export function formatTextSplitStr(text, splitStr, joinStr) {
    const lines = text.split(splitStr).map((sentence) => sentence.trim());
    const formattedText = lines.join(joinStr);
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

export const capitalizeSentences = (paragraph) => {
    const sentences = paragraph.split(/\.\s+/);
    const capitalizedSentences = sentences.map((sentence) => {
        return sentence.charAt(0).toUpperCase() + sentence.slice(1);
    });
    return capitalizedSentences.join('. ');
};

export const capitalizeWords = (str) => {
    const prepositions = [
        'of',
        'the',
        'and',
        'in',
        'on',
        'at',
        'for',
        'with',
        'as',
        '&',
        'Trenchers',
        'to'
    ];
    const words = str.toLowerCase().split(' ');

    for (let i = 0; i < words.length; i++) {
        if (i === 0 || !prepositions.includes(words[i])) {
            words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        }
    }

    return words.join(' ');
};

export const joinSentencesWithCommaAndBreak = (sentences) => {
    const joinedString = sentences.join(',<br>');
    return <div dangerouslySetInnerHTML={{ __html: joinedString }} />;
};

export const joinSentencesWithPeriodAndBreak = (sentences) => {
    const sentencesArray = sentences.split(/\.\s+/);
    const joinedString = sentencesArray.join('.<br><br>');
    return <div dangerouslySetInnerHTML={{ __html: joinedString }} />;
};

export function joinedStringWithBreakLine(json) {
    const joinedText = json
        .map((item) => `${capitalizeWords(item.name)}`)
        .join(' <br>');
    return <div dangerouslySetInnerHTML={{ __html: joinedText }} />;
}
