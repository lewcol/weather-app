import React from "react";
import HamburgerIconBar from "./HamburgerIconBar";

export default function HamburgerButton() {
    return (
        <button className="flex flex-col items-center justify-between py-1 gap-1 w-[3%] h-[95%] border border-gray-700 rounded-md px-2 focus:ring-2 focus:ring-gray-500">
            <HamburgerIconBar />
            <HamburgerIconBar />
            <HamburgerIconBar />
        </button>
    );
};