// createtime 2024-03-05

"use client";

import React from "react";
import Image from "next/image";
import avatar from "@/public/images/placeholder.jpg";

export default function Avatar() {
    return (
        <div>
            <Image
                src={avatar}
                alt="Avatar"
                width="30"
                height="30"
                className="rounded-full"></Image>
        </div>
    );
}
