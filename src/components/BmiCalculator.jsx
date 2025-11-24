import React, { useState } from "react"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";


const BmiCalculator = () => {
    const [bmi, setBmi] = useState(null)
    const [height, setHeight] = useState(0)
    const [weight, setWeight] = useState(0)
    const [errors, setErrors] = useState({})
    const [categoryStatus, setCategoryStatus] = useState()
    const [categoryColor, setCategoryColor] = useState()

    const calculateBmi = () => {
        let err = {}
        if (!Number(height) || Number(height) < 1) {
            err.height = 'Please enter valid height'
        }
        if (!Number(weight) || Number(weight) < 1) {
            err.weight = 'Please enter valid weight'
        }
        setErrors(err)
        if (!Object.keys(err).length) {
            let convertedHeight = height / 100
            let bmiVal = weight / (convertedHeight * convertedHeight)
            setBmi(Number(bmiVal.toFixed(2)))
            fetchCategory(bmiVal)
        }
    }

    const fetchCategory = (bmiVal) => {
        if (bmiVal < 18) {
            setCategoryStatus('Under weight')
            setCategoryColor('#fddf47')
        } else if (bmiVal < 25) {
            setCategoryStatus('Normal weight')
            setCategoryColor('#4ade80')
        } else if (bmiVal < 30) {
            setCategoryStatus('Over weight')
            setCategoryColor('yellow')
        } else {
            setCategoryStatus('Obese')
            setCategoryColor('#ef4444')
        }
    }

    return (
        <div className="BmiCalculator flex">
            <div className="grid max-w-3/5 m-auto">
                <label>
                    Enter your Height (in cm):
                    <input
                        type="text"
                        id='height'
                        className="border rounded p-2 m-2 text-lg"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                    />
                </label>
                {console.log("errors", errors)}
                {errors?.height &&
                    <p className="text-xs text-red-400 text-right">
                        {errors?.height}
                    </p>}

                <label>
                    Enter your weight (in kgs):
                    <input
                        type="text"
                        id='weight'
                        className="border rounded p-2 m-2 text-lg"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                    />
                </label>
                <p className="text-xs text-red-400 text-right">
                    {errors.weight}
                </p>

                <button
                    type="button"
                    className="border rounded text-lg p-4 m-6 cursor-pointer bg-amber-100 hover:bg-amber-200"
                    onClick={() => calculateBmi()}
                >
                    Calculate BMI
                </button>
            </div>

            <div className="m-auto">
                {bmi &&
                    <div className="text-2xl font-semibold">
                        Your BMI is {bmi}
                    </div>
                }
                {categoryStatus &&
                    <div className="text-2xl font-semibold mb-8">
                        Your body health is in {categoryStatus}
                    </div>
                }
                {categoryStatus &&
                    <div className="max-w-4/5 m-auto">
                        <CircularProgressbar
                            value={bmi}
                            text={`${bmi}`}
                            circleRatio={0.6}
                            styles={buildStyles({
                                rotation: 0.7,
                                strokeLinecap: "round",
                                trailColor: "#eee",
                                pathColor: categoryColor,
                                textColor: "#000",
                            })}
                            minValue={0}
                            maxValue={40}
                        />
                    </div>
                }

            </div>
        </div>
    )
}

export default BmiCalculator