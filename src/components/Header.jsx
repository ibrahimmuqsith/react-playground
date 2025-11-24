import React, { useContext } from "react";
import HeaderNameContext from "../utils/HeaderNameContext";

const Header = () => {
    const { headerName } = useContext(HeaderNameContext)

    return (
        <div className="text-6xl p-4 bg-blue-200">
            {headerName}
        </div>
    )
}

export default Header