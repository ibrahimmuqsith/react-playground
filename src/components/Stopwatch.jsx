import React, { useEffect, useState } from "react";

const Stopwatch = () => {
    const [running, setRunning] = useState(false)
    const [timer, setTimer] = useState(0)

    useEffect(() => {
        let timerId
        if (running) {
            timerId = setInterval(() => {
                // setTimer(timer + 1)
                setTimer(prev => prev + 1)
            }, 10)
        }

        return (() => {
            clearInterval(timerId)
        })
    }, [running, timer])

    const startStopStopwatch = () => {
        if (running) {
            setRunning(false)
            console.log("stop timer")
        } else {
            setRunning(true)
            console.log("start timer")
        }
    }

    const resetStopwatch = () => {
        setTimer(0)
        console.log("reset timer")
    }

    // 1 sec = 1000 milliseconds
    const hours = Math.floor(timer / 360000);
    const minutes = Math.floor((timer % 360000) / 6000);
    const seconds = Math.floor((timer % 6000) / 100);
    const milliseconds = timer % 100;

    return (
        <div className="container grid grid-cols-3 gap-4 text-2xl">
            <button
                className="bg-green-400 p-2 border-2 rounded-2xl cursor-pointer"
                onClick={() => { startStopStopwatch() }}
            >
                {running ? 'Stop' : 'Start'}
            </button>

            <p className="p-2 text-2xl text-center">
                {hours} h : {minutes} m : {seconds} s : {milliseconds} ms
            </p>

            <button
                className={
                    running
                        ? 'bg-gray-400 p-2 border-2 rounded-2xl cursor-pointer'
                        : 'bg-red-400 p-2 border-2 rounded-2xl cursor-pointer'
                }
                disabled={running}
                onClick={() => { resetStopwatch() }}
            >
                Reset
            </button>
        </div>
    )
}

export default Stopwatch