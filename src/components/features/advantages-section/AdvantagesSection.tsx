"use client";

import React, {FC} from "react";
import Image from "next/image";
import { advantagesContent } from "@/resources/content";
import { media } from "@/resources/media";
import "./AdvantagesSection.scss";

interface AdvantagesSection{
    id?: string;
}

const AdvantagesSection:FC<AdvantagesSection> = ({id}) => {
    const { title, subtitle, items } = advantagesContent;

    return (
        <section className="advantages" id={id}>
            <div className="advantages__bg">
                <Image
                    src={media.pagoda}
                    alt="Asian pagoda background"
                    fill
                    priority
                    sizes="100vw"
                    className="advantages__bg-image"
                />
            </div>

            <div className="advantages__inner">
                <div className="advantages__head">
                    <h2 className="advantages__title">{title}</h2>
                    <p
                        className="advantages__subtitle"
                        dangerouslySetInnerHTML={{ __html: subtitle }}
                    />
                </div>

                <div className="advantages__grid">
                    {items.map((item, index) => (
                        <div key={index} className="advantages__card">
                            <div className="advantages__icon">{item.icon}</div>
                            <h3 className="advantages__card-title">{item.title}</h3>
                            <p className="advantages__card-text">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AdvantagesSection;
