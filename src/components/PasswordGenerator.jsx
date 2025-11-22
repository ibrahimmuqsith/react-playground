import React, { useEffect, useState } from "react";
import { UPPERCASE_CHARS, LOWERCASE_CHARS, NUMBERS, SYMBOLS } from "../utils/constants";

const PasswordGenerator = () => {
    const [includeUpperCase, setIncludeUpperCase] = useState(false)
    const [includeLowerCase, setIncludeLowerCase] = useState(false)
    const [includeNumbers, setIncludeNumbers] = useState(false)
    const [includeSymbols, setIncludeSymbols] = useState(false)
    const [passwordLength, setPasswordLength] = useState(undefined)
    const [password, setPassword] = useState()

    useEffect(() => {
        if (password !== '') {
            setIncludeLowerCase(false)
            setIncludeUpperCase(false)
            setIncludeSymbols(false)
            setPasswordLength()
        }
    }, [password])

    const generatePassword = () => {
        let pool = '', randomString = ''
        if (includeUpperCase) {
            pool += UPPERCASE_CHARS
        }
        if (includeLowerCase) {
            pool += LOWERCASE_CHARS
        }
        if (includeNumbers) {
            pool += NUMBERS
        }
        if (includeSymbols) {
            pool += SYMBOLS
        }

        for (let i = 0; i < passwordLength; i++) {
            const randomIndex = Math.floor(Math.random() * pool.length)
            randomString += pool[randomIndex]
        }
        console.log(randomString)
        setPassword(randomString)
    }

    return (
        <div className="PasswordGenerator flex justify-around">
            <div className="grid text-lg">
                <label className="flex justify-between m-1 bg-blue-50 py-2 px-4 items-center rounded cursor-pointer">
                    Include Uppercase characters?
                    <input
                        type="checkbox"
                        value={includeUpperCase}
                        onChange={() => setIncludeUpperCase(!includeUpperCase)}
                    />
                </label>
                <label className="flex justify-between m-1 bg-blue-50 py-2 px-4 items-center rounded cursor-pointer">
                    Include Lowercase characters?
                    <input
                        type="checkbox"
                        value={includeLowerCase}
                        onChange={() => setIncludeLowerCase(!includeLowerCase)}
                    />
                </label>
                <label className="flex justify-between m-1 bg-blue-50 py-2 px-4 items-center rounded cursor-pointer">
                    Include Numbers?
                    <input
                        type="checkbox"
                        value={includeNumbers}
                        onChange={() => setIncludeNumbers(!includeNumbers)}
                    />
                </label>
                <label className="flex justify-between m-1 bg-blue-50 py-2 px-4 items-center rounded cursor-pointer">
                    Include Symbols?
                    <input
                        type="checkbox"
                        value={includeSymbols}
                        onChange={() => setIncludeSymbols(!includeSymbols)}
                    />
                </label>
                <label className="flex justify-between m-1 bg-blue-50 py-2 px-4 items-center rounded">
                    Password Length
                    <input
                        type='number'
                        id='number'
                        value={passwordLength}
                        onChange={(e) => setPasswordLength(Number(e.target.value))}
                        className=" border rounded px-2 py-2 h-12"
                    />
                </label>

                <button
                    type="button"
                    onClick={() => { generatePassword() }}
                    className="border rounded p-4 m-4 bg-pink-200 cursor-pointer"
                >
                    Generate Password
                </button>
            </div>
            <div className="mt-12">
                <p>
                    Generated Password is <br />
                </p>
                <p className="px-4 py-2 mt-2 border rounded-xl bg-blue-50 h-10">
                    {password}
                </p>

                <button
                    type="button"
                    className="border rounded p-2 m-4 bg-pink-200 cursor-pointer"
                >
                    Copy to Clipboard
                </button>
            </div>
        </div>
    )
}

export default PasswordGenerator