const TextToParagraphs = ({ text }) => {
    const splitAndCleanText = (text) => {
        const sentences = text.split('\n');
        return sentences.map((sentence) => sentence.replace(/\n/g, ''));
    };

    const cleanedSentences = splitAndCleanText(text);

    const paragraphs = cleanedSentences.map((sentence, index) => (
        <p key={index}>{sentence}</p>
    ));

    return <div>{paragraphs}</div>;
};

export default TextToParagraphs;
