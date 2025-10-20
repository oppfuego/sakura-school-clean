"use client";

import React, { FC } from "react";
import { IoMdClose } from "react-icons/io";
import { headerContent } from "@/resources/content";
import Image from "next/image";
import Link from "next/link";
import "./Drawer.scss";

interface DrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

const Drawer: FC<DrawerProps> = ({ isOpen, onClose }) => {
    return (
        <>
            <div className={`drawer__overlay ${isOpen ? "open" : ""}`} onClick={onClose}></div>

            <div className={`drawer ${isOpen ? "open" : ""}`}>
                <div className="drawer__header">

                    <IoMdClose className="drawer__close" onClick={onClose} />
                </div>

                <nav className="drawer__nav">
                    <ul className="drawer__nav-list">
                        {headerContent.links.map((link, index) => (
                            <li key={index} className="drawer__nav-item">
                                <Link href={link.href} className="drawer__nav-link">
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <Image
                    src={headerContent.logo.src}
                    alt={headerContent.logo.alt}
                    width={250}
                    height={100}
                />
            </div>
        </>
    );
};

export default Drawer;
