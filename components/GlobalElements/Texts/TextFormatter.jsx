import { capitalizeSentences } from 'utils/jsfunctions';

import React from 'react';

const TextFormatter = ({ text, dynamicDivTextClass, dynamicPTextClass }) => {
    const capitalText = capitalizeSentences(text);
    // Split the text by period into an array of sentences
    const sentences = capitalText.split('.').filter(Boolean);

    return (
        <div className={`${dynamicDivTextClass}`}>
            {sentences.map((sentence, index) => (
                // Map each sentence to a paragraph tag
                <p className={`${dynamicPTextClass}`} key={index}>
                    {sentence.trim()}.
                </p>
            ))}
        </div>
    );
};

export default TextFormatter;
