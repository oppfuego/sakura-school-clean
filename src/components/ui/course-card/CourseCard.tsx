"use client";
import React from "react";
import Image from "next/image";
import Button from "@/components/ui/button/Button";
import "./CourseCard.scss";

interface CourseCardProps {
    title: string;
    subtitle?: string;
    price?: string;
    description?: string;
    image: string;
    color: string;
    type?: "classic" | "extended";
    buttonText?: string;
    hasButton?: boolean;
    onButtonClick?: () => void;
}

const CourseCard: React.FC<CourseCardProps> = ({
                                                   title,
                                                   subtitle,
                                                   price,
                                                   description,
                                                   image,
                                                   color,
                                                   type = "classic",
                                                   buttonText = "Детальніше",
                                                   hasButton = false,
                                                   onButtonClick,
                                               }) => {
    return (
        <article
            className={`course-card course-card--${type}`}
            style={{ borderColor: color }}
        >
            <div className="course-card__image-wrapper">
                <Image
                    className="course-card__image"
                    src={image}
                    alt={title}
                    width={400}
                    height={260}
                    priority
                />
            </div>

            <div className="course-card__body">
                <h3 className="course-card__title">{title}</h3>
                {subtitle && <p className="course-card__subtitle">{subtitle}</p>}
                {price && <p className="course-card__price">{price}</p>}
                {description && (
                    <p className="course-card__description">{description}</p>
                )}

                {hasButton && (
                    <Button
                        text={buttonText}
                        bgColor={color}
                        textColor="#fff"
                        hoverEffect="scale"
                        shape="rounded"
                        onClick={onButtonClick}
                    />
                )}
            </div>
        </article>
    );
};

export default CourseCard;
