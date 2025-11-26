import React, { useEffect, useState } from "react";
import {
    ENDPOINT_PROFILE_GITHUB,
    URL_PROFILE_LINKEDIN
} from "../utils/constants";

const Home = () => {
    const [userData, setUserData] = useState({})

    useEffect(() => {
        getuserData()
    }, [])

    const getuserData = async () => {
        const json = await fetch(ENDPOINT_PROFILE_GITHUB)
        const data = await json.json()
        setUserData(data)
    }

    const {
        name,
        location,
        company,
        html_url,
        avatar_url,
        login: userName = '',
    } = userData

    return (
        <div className="w-full flex justify-between">
            <div className="rounded-lg shadow-md w-md px-3 py-3">
                <p className="text-xl text-left my-2 flex justify-between">
                    <span> Name: </span>
                    <span className="font-semibold">
                        {name}
                    </span>
                </p>
                <p className="text-xl text-left my-2 flex justify-between">
                    <span> UserName: </span>
                    <span className="font-semibold">
                        {userName}
                    </span>
                </p>
                <p className="text-xl text-left my-2 flex justify-between">
                    <span> Location: </span>
                    <span className="font-semibold">
                        {location}
                    </span>
                </p>
                <p className="text-xl text-left my-2 flex justify-between">
                    <span> Company: </span>
                    <span className="font-semibold">
                        {company}
                    </span>
                </p>
                <p className="text-xl text-left mt-6 mb-2 hover:text-blue-400">
                    <a href={html_url} target="blank">
                        View GitHub Profile
                    </a>
                </p>
                <p className="text-xl text-left my-2 hover:text-blue-400">
                    <a href={URL_PROFILE_LINKEDIN} target="blank">
                        View LinkedIn Profile
                    </a>
                </p>
            </div>
            <img
                className=""
                src={avatar_url}
                alt="avtr"
            >
            </img>
        </div>
    )
}

export default Home