import React from "react";
import HamburgerButton from "./HamburgerButton";

const Navbar = () => {
    return (
        <nav className="w-full h-[5vh] bg-gray-800 flex items-center justify-between">
            <input type="text" 
            placeholder="Search City Here"
            className="w-[95%] h-[85%] border border-gray-700 bg-gray-700 text-gray-200 placeholder-gray-400 rounded-md px-3 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <HamburgerButton />
        </nav>
    );
};

export default Navbar;