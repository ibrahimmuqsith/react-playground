import React, { useState } from "react";
import OpenAI from "openai";


const QuoteGenerator = () => {
    const [quote, setQuote] = useState('')

    const generateQuote = async () => {
        const prompt = "generate a quote of the day for me"

        const openai = new OpenAI({
            apiKey: import.meta.env.VITE_OPENAI_API_KEY,
            dangerouslyAllowBrowser: true
        })

        try {
            const completion = await openai.chat.completions.create({
                model: "gpt-3.5-turbo",
                messages: [{ role: "user", content: prompt }],
                temperature: 1.0,
                max_tokens: 200,
            })

            const responseContent = completion.choices[0].message.content;
            console.log(responseContent)
            setQuote(responseContent)

        } catch (err) {
            console.error("err from openAI", err)
        }

    }

    return (
        <div className="">
            <p className="text-2xl text-center font-semibold font-serif my-4">
                "{quote}"
            </p>
            <button
                type="button"
                className="px-8 py-4 mt-10 borde rounded bg-amber-100 cursor-pointer"
                onClick={() => generateQuote()}
            >
                Generate Quote of the Day
            </button>

        </div>
    )
}

export default QuoteGenerator