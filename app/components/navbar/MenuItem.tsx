// createtime 2024-03-05

"use client";

import React from "react";

interface MenuItemProps {
    onClick: () => void;
    label: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ onClick, label }) => {
    return (
        <div
            onClick={onClick}
            className="py-3 px-4 hover:bg-neutral-100 transition font-semibold">
            {label}
        </div>
    );
};
export default MenuItem;
