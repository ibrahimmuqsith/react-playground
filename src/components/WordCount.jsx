import React, { useState } from "react";

const WordCount = () => {
    const [wordCount, setWordCount] = useState(0)
    const [characterCount, setCharacterCount] = useState(0)

    const count = (data) => {
        /**
         * for word count:
         * split the data with regex \s (space) + (one or more)
         * filter words which do not have lenght, i.e empty strings
         */
        setCharacterCount(data.length)
        let words = data.split(/\s+/).filter(word => word.length !== 0)
        setWordCount(words.length)
    }

    return (
        <div className="WordCount">
            <textarea
                className="bg-amber-50 text-lg border rounded"
                onChange={(e) => count(e.target.value)}
                type="textarea"
                id="textarea"
                cols="50"
                rows="10"
            />
            <div className="">
                Word Count is: {wordCount} <br />
                Character Count is: {characterCount}
            </div>
        </div>
    )
}

export default WordCount