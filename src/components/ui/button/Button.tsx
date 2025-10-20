"use client";

import React from "react";
import clsx from "clsx";
import "./Button.scss";

type Shape = "rounded" | "square" | "circle" | "outline";
type IconPosition = "left" | "right" | "only";
type HoverEffect = "scale" | "shadow" | "color" | "all" | "none";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text?: string;
    bgColor?: string;
    textColor?: string;
    shape?: Shape;
    hoverEffect?: HoverEffect;
    icon?: React.ReactNode;
    iconPosition?: IconPosition;
}

const Button: React.FC<ButtonProps> = ({
                                           text,
                                           bgColor = "#0070f3",
                                           textColor = "#fff",
                                           shape = "rounded",
                                           hoverEffect = "all",
                                           icon,
                                           iconPosition = "left",
                                           className,
                                           ...props
                                       }) => {
    const styles = {
        backgroundColor: shape === "outline" ? "transparent" : bgColor,
        color: textColor,
        border: shape === "outline" ? `2px solid ${bgColor}` : "none",
    } as React.CSSProperties;

    return (
        <button
            className={clsx(
                "button",
                `button--${shape}`,
                `button--hover-${hoverEffect}`,
                icon && `button--icon-${iconPosition}`,
                className
            )}
            style={styles}
            {...props}
        >
            {icon && iconPosition === "left" && <span className="button__icon">{icon}</span>}
            {text && <span className="button__text">{text}</span>}
            {icon && iconPosition === "right" && <span className="button__icon">{icon}</span>}
            {icon && iconPosition === "only" && <span className="button__icon-only">{icon}</span>}
        </button>
    );
};

export default Button;
