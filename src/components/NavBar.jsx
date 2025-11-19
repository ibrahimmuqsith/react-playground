import React from "react";
import { Link } from "react-router-dom";
import { NAV_LIST } from "../utils/constants";

const NavBar = () => {

    return (
        <div className="">
            {NAV_LIST.map(item => (
                <div
                    className="w-full p-2 m-2 border-2 rounded-2xl bg-amber-100 cursor-pointer"
                    key={item.id}
                >
                    <Link
                        className="w-full py-2.5 px-25"
                        to={item.path}
                    >
                        {item.navItem}
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default NavBar
