"use client";

import React, { useEffect, useState } from "react";
import "./Header.scss";
import Link from "next/link";
import Image from "next/image";
import { headerContent } from "@/resources/content";
import { RxHamburgerMenu } from "react-icons/rx";
import Drawer from "@/components/ui/drawer/Drawer";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleMenuToggle = () => setIsMenuOpen((p) => !p);

    return (
        <>
            <header className={`header ${isScrolled ? "header--scrolled" : ""}`}>
                <Link href={headerContent.logo.href} className="header__logo">
                    <Image
                        src={headerContent.logo.src}
                        alt={headerContent.logo.alt}
                        width={400}
                        height={100}
                        priority
                        className="header__logo-image"
                    />
                </Link>

                <nav className="header__nav">
                    <ul className="header__nav-list">
                        {headerContent.links.map((link, index) => (
                            <li key={index} className="header__nav-item">
                                <Link href={link.href} className="header__nav-link">
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <RxHamburgerMenu
                    className="header__burger-menu"
                    onClick={handleMenuToggle}
                />
            </header>

            <Drawer isOpen={isMenuOpen} onClose={handleMenuToggle} />
        </>
    );
};

export default Header;
