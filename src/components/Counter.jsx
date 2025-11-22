import React, { useState } from "react";

const Counter = () => {

    const [count, setCount] = useState(0)
    const [initValue, setInitValue] = useState()

    const submitInitValue = () => {
        setCount(initValue)
        setInitValue('')
    }


    return (
        <div className="counter">
            <div className="flex justify-around m-4">
                <button
                    onClick={() => setCount(Number(count) - 1)}
                    className="rounded border-0 bg-pink-400 px-8 py-4 text-white text-2xl hover:opacity-90"
                >
                    Minus
                </button>
                <p className="text-4xl">
                    {count}
                </p>
                <button
                    onClick={() => setCount(Number(count) + 1)}
                    className="rounded border-0 bg-green-400 px-8 py-4 text-white text-2xl hover:opacity-90"
                >
                    Plus
                </button>
            </div>
            <div className="flex justify-around mt-20">
                <div className="">
                    <input
                        name="input"
                        type="number"
                        value={initValue}
                        onChange={(e) => setInitValue(e.target.value)}
                        className="border rounder px-2 py-2 mr-2 min-h-15 max-w-26 text-2xl"
                    />
                    <button
                        onClick={() => submitInitValue()}
                        className="rounded border-0 bg-gray-400 px-8 py-4 text-white text-2xl hover:opacity-90"
                    >
                        Set Initial Value
                    </button>
                </div>

                <button
                    onClick={() => setCount(0)}
                    className="rounded border-0 bg-red-500 px-8 py-4 text-white text-2xl hover:opacity-90"
                >
                    Reset
                </button>
            </div>
        </div>
    )
}

export default Counter