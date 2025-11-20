import React, { useState } from "react";

const FormValidation = () => {
    const [errors, setErrors] = useState({})
    const [submitted, setSubmitted] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: ''
    })

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const formSubmit = (e) => {
        e.preventDefault()
        const formValidation = validateForm()
        if (Object.keys(formValidation).length > 0) {
            setErrors(formValidation)
        } else {
            setErrors({})
            setSubmitted(true)
        }
    }

    const validateForm = () => {
        let error = {}
        if (formData.name.trim() === '') {
            error.name = 'Enter a valid name'
        }
        if (formData.mobile.length < 10) {
            error.mobile = 'Enter a valid Number'
        }
        if (!formData.email.includes('@')) {
            error.email = 'Enter a valid email'
        }
        return error
    }


    return (
        <div className="formValidation">
            {submitted &&
                <p className="text-4xl bg-green-400 text-black font-semibold h-60 pt-28">
                    Your request submitted sucessfully !!
                </p>
            }
            {!submitted &&
                <form className="w-sm m-auto">
                    <label className="flex justify-between items-center">
                        Full Name:
                        <input
                            name="name"
                            type="text"
                            onChange={(e) => handleInputChange(e)}
                            className="border rounded m-1 p-1"
                        />
                    </label>
                    <p className="text-right font-medium text-red-600 text-xs">
                        {errors?.name}
                    </p>

                    <label className="flex justify-between items-center">
                        Mobile Number:
                        <input
                            name="mobile"
                            type="text"
                            className="border rounded m-1 p-1"
                            onChange={(e) => handleInputChange(e)}
                        />
                    </label>
                    <p className="text-right font-medium text-red-600 text-xs">
                        {errors?.mobile}
                    </p>

                    <label className="flex justify-between items-center">
                        Email Address:
                        <input
                            name="email"
                            type="text"
                            className="border rounded m-1 p-1"
                            onChange={(e) => handleInputChange(e)}
                        />
                    </label>
                    <p className="text-right font-medium text-red-600 text-xs">
                        {errors?.email}
                    </p>

                    <button
                        type="submit"
                        onClick={(e) => formSubmit(e)}
                        className="border rounded py-2 px-4 mt-8 w-full bg-amber-200 hover:bg-amber-300">
                        Submit
                    </button>
                </form>
            }
        </div>
    )
}

export default FormValidation
