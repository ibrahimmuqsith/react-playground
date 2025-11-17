import React from "react";
import { Link } from "react-router-dom";
import { NAV_LIST } from "../utils/constants";

const NavBar = () => {

    return (
        <div className="">
            {NAV_LIST.map(item => (
                <div className="w-full p-2 m-2 border-2 rounded-2xl bg-amber-100 cursor-pointer">
                    <Link
                        className="w-full"
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

// 8242422612
// Subramanya