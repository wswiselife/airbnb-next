// createtime 2024-03-01

"use client";

import logo from "@/public/images/logo.png";
import Image from "next/image";

const Logo = () => {
    return (
        <div>
            <Image
                src={logo}
                alt="logo"
                width="100"
                height="100"
                className="hidden md:block cursor-pointer"></Image>
        </div>
    );
};

export default Logo;
