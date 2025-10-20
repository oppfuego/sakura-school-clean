"use client";

import React, {FC} from "react";
import Image from "next/image";
import "./MissionSection.scss";
import { missionContent } from "@/resources/content";

interface MissionSectionProps {
    id?: string;
}

const MissionSection:FC<MissionSectionProps> = ({id}) => {
    const { title, description, image, facts } = missionContent;

    return (
        <section className="mission" id={id}>
            <div className="mission__container container">
                <div className="mission__image-wrapper">
                    <Image
                        src={image}
                        alt="Sakura mission illustration"
                        width={500}
                        height={500}
                        priority
                        className="mission__image"
                    />
                </div>

                <div className="mission__content">
                    <h2 className="mission__title">{title}</h2>
                    <p className="mission__subtitle">{description}</p>

                    <ul className="mission__facts">
                        {facts.map((fact, i) => (
                            <li key={i} className="mission__fact">
                                <div className="mission__fact-icon">
                                    <Image
                                        src={fact.icon}
                                        alt={`Іконка ${i + 1}`}
                                        width={40}
                                        height={40}
                                        className="mission__fact-icon-img"
                                    />
                                </div>
                                <div className="mission__fact-text">
                                    <span className="mission__fact-value">{fact.value}</span>
                                    <p>{fact.text}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default MissionSection;
