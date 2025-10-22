import React from "react";
import "./Footer.scss";
import {FaInstagram, FaFacebookF, FaTelegramPlane, FaTiktok} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">
            <h2 className="footer__title">Приєднуйтесь до нас у соціальних мережах 🌸</h2>

            <div className="footer__socials">
                <a
                    href="https://www.instagram.com/sakura.language.school?igsh=aDVtdGluazRvcXFp&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="footer__icon"
                >
                    <FaInstagram/>
                </a>
                <a
                    href="https://t.me/+351912575693"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Telegram"
                    className="footer__icon"
                >
                    <FaTelegramPlane/>
                </a>
            </div>

            <p className="footer__text">
                © {new Date().getFullYear()} Sakura Language School. Всі права захищені.
            </p>
        </footer>
    );
};

export default Footer;
