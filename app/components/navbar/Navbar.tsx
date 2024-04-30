// createtime 2024-03-01

"use client";

import Container from "../Container";
import React from "react";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";

function Navbar() {
    return (
        <div className="fixed w-full bg-white z-10 shadow-sm">
            <div className="border-b-[1px] py-4">
                <Container>
                    <div className="flex flex-row justify-between items-center gap-3 md:gap-0">
                        <Logo></Logo>
                        <Search></Search>
                        <UserMenu></UserMenu>
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default Navbar;
