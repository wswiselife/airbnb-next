// createtime 2024-03-01

"use client";

import React from "react";
import { BiSearch } from "react-icons/bi";

export default function Search() {
    return (
        <div className="border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer">
            <div className="flex flex-row justify-between items-center">
                <div className="text-sm px-6 font-semibold text-rose-500">
                    locationLabel
                </div>
                <div className="hidden sm:block text-sm font-semibold px-6 text-rose-500 border-x-[1px] text-center flex-1">
                    durationLabel
                </div>
                <div className="text-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3">
                    <div className="hidden sm:block text-rose-500">
                        guestLabel
                    </div>
                    <div className="p-2 bg-rose-500 rounded-full text-white">
                        <BiSearch size={18}></BiSearch>
                    </div>
                </div>
            </div>
        </div>
    );
}
