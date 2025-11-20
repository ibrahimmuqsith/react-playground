import React, { useState } from 'react'
import Confetti from 'react-confetti'
import { QUIZ } from '../utils/constants'

const Quiz = () => {
    const [currentId, setCurrentId] = useState(0)
    const [score, setScore] = useState(0)
    const [finished, setFinished] = useState(false)

    const handleOptionClick = (ans) => {
        console.log(ans, QUIZ[currentId].answer)
        if (ans === QUIZ[currentId].answer) {
            setScore(score + 1)
        }

        if (currentId + 1 === QUIZ.length) {
            setFinished(true)
        } else {
            setCurrentId(currentId + 1)
        }
    }

    const retakeTest = () => {
        setScore(0)
        setCurrentId(0)
        setFinished(false)
    }


    return (
        <div className='bg-pink-200 px-4 py-4'>
            {finished &&
                <div className='relative'>
                    {score === QUIZ.length
                        &&
                        <div className='absolute right-250 top-0'>
                            <Confetti
                                width={'1000px'}
                                height={'500px'}
                            />
                        </div>
                    }
                    <p className='text-2xl font-bold mb-4'>
                        Thanks for taking the Quiz. <br /> Summary:
                    </p>
                    <p className='text-4xl font-bold mb-4'>
                        {score}/{QUIZ.length}
                    </p>
                    <button
                        onClick={() => { retakeTest() }}
                        className='border-2 rounded bg-amber-200 my-4 px-4 py-4 cursor-pointer'
                    >
                        Retake Test
                    </button>
                </div>
            }

            {!finished &&
                <>
                    <p className='text-2xl font-bold mb-4'>
                        {QUIZ[currentId]?.question}
                    </p>
                    <ul>
                        {QUIZ[currentId]?.options.map(item => (
                            <li
                                key={item}
                                className='text-xl border-2 rounded m-1 pt-1 h-10 hover:bg-amber-200'
                                onClick={(e) => handleOptionClick(item)}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </>
            }
        </div>
    )
}
export default Quiz