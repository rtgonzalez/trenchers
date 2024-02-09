/*******************Strings******************/

// merge all strings of an arrarr split by blank
import { format } from 'date-fns';

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
    const joinedString = sentencesArray.join('.<br>');
    return (
        <p
            className="cstm-par-text"
            dangerouslySetInnerHTML={{ __html: joinedString }}
        />
    );
};

export function joinedStringWithBreakLine(json) {
    const joinedText = json
        .map((item) => `${capitalizeWords(item.name)}`)
        .join(' <br>');
    return <div dangerouslySetInnerHTML={{ __html: joinedText }} />;
}

export function splitAndCleanText(text) {
    // Split the text into sentences based on '\n'
    const sentences = text.split('\n');

    // Remove all '\n' from each sentence
    const cleanedSentences = sentences.map((sentence) =>
        sentence.replace(/\n/g, '')
    );

    return cleanedSentences;
}

export const filterByMonthAndYear = (data, year, month) => {
    return data.filter((item) => {
        const itemDate = new Date(item.date);
        return (
            itemDate.getFullYear() === year && itemDate.getMonth() === month - 1
        );
    });
};
/******************dates and times********************/

export const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export function convertTo24Hour(time) {
    if (time) {
        const [hours, minutes] = time.split(':');
        const period = hours >= 12 ? 'PM' : 'AM';
        const convertedHours =
            period === 'PM' && hours < 12 ? parseInt(hours, 10) + 12 : hours;
        return `${convertedHours}:${minutes}`;
    } else return '';
}

export function convertAMPMHours(time24) {
    if (time24) {
        const [hours, minutes] = time24.split(':');
        const hoursIn12HourFormat = hours % 12 || 12;
        const amOrPm = hours >= 12 ? 'PM' : 'AM';
        return `${hoursIn12HourFormat}:${minutes} ${amOrPm}`;
    } else return '';
}

export const diffWeeksDays = (currentDate) => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    // Getting the last day of the current month
    const lastDayOfMonth = new Date(year, month + 1, 0);

    // Getting the day of the week for the last day of the month
    const dayOfWeek = lastDayOfMonth.getDay();

    return 6 - dayOfWeek;
};
