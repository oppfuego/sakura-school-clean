"use client";
import React from "react";
import "./HeroSection.scss";
import Button from "@/components/ui/button/Button";
import Image from "next/image";
import { heroContent } from "@/resources/content";
import Link from "next/link";

interface KanjiItem {
    top: string | number;
    left: string | number;
    size: number;
    opacity?: number;
    rotate?: number;
    char: string;
}

const KanjiLayer: React.FC = () => (
    <div className="hero__kanji-bg">
        {heroContent.kanjiLayer.map((k: KanjiItem, i: number) => (
            <span
                key={i}
                className="hero__kanji"
                style={{
                    top: k.top,
                    left: k.left,
                    fontSize: `${k.size}px`,
                    opacity: k.opacity,
                    transform: k.rotate ? `rotate(${k.rotate}deg)` : undefined,
                }}
            >
        {k.char}
      </span>
        ))}
    </div>
);

const HeroSection: React.FC = () => {
    const { title, subtitle, button, image } = heroContent;

    const petals = Array.from({ length: 14 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        size: 18 + Math.random() * 20,
        duration: 10 + Math.random() * 10,
        delay: Math.random() * 10,
        rotation: Math.random() * 360,
    }));

    return (
        <section className="hero">
            <KanjiLayer />
            <div className="hero__overlay" />

            {/* 🌸 Пелюстки */}
            <div className="hero__petals">
                {petals.map((p) => (
                    <div
                        key={p.id}
                        className="hero__petal"
                        style={{
                            left: p.left,
                            width: p.size,
                            height: p.size,
                            animationDuration: `${p.duration}s`,
                            animationDelay: `${p.delay}s`,
                            transform: `rotate(${p.rotation}deg)`,
                        }}
                    />
                ))}
            </div>

            <div className="hero__content">
                <div className="hero__text">
                    <h1
                        className="hero__title"
                        dangerouslySetInnerHTML={{ __html: title }}
                    />
                    <p className="hero__subtitle">{subtitle}</p>
                    <Link href="#courses" aria-label="Переглянути Курси" className="hero__button-link">
                        <Button
                            text={button.text}
                            textColor="var(--white)"
                            bgColor="var(--secondary-color)"
                            hoverEffect="scale"
                            shape="rounded"
                        />
                    </Link>

                </div>

                    <div className="hero__pagoda-wrapper">
                        <Image
                            src={image.src}
                            alt={image.alt}
                            width={680}
                            height={680}
                            priority
                            className="hero__pagoda"
                        />
                    </div>
            </div>
        </section>
    );
};

export default HeroSection;
