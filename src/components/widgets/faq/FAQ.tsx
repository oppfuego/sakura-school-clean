"use client";
import React, {FC, useState} from "react";
import { IoIosArrowDown } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import "./FAQ.scss";
import { faqContent } from "@/resources/content";

interface FAQProps {
    id?: string;
}

const FAQ: FC<FAQProps> = ({id}) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const toggle = (idx: number) => setOpenIndex(openIndex === idx ? null : idx);

    return (
        <section className="faq" id={id}>
            <div className="faq__container">
                <div className="faq__left">
                    <h2 className="faq__title">Поширені запитання</h2>

                    <div className="faq__list">
                        {faqContent.items.map((item, idx) => {
                            const isOpen = openIndex === idx;
                            return (
                                <motion.div
                                    key={idx}
                                    className={`faq__item ${isOpen ? "faq__item--active" : ""}`}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1, duration: 0.4 }}
                                    viewport={{ once: true }}
                                >
                                    <button
                                        className="faq__question"
                                        onClick={() => toggle(idx)}
                                        aria-expanded={isOpen}
                                    >
                                        <span>{item.question}</span>
                                        <motion.span
                                            animate={{ rotate: isOpen ? 180 : 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="faq__arrow"
                                        >
                                            <IoIosArrowDown />
                                        </motion.span>
                                    </button>

                                    <AnimatePresence initial={false}>
                                        {isOpen && (
                                            <motion.div
                                                key="answer"
                                                className="faq__answer"
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.35, ease: "easeInOut" }}
                                            >
                                                <div className="faq__answer-text">{item.answer}</div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {faqContent.image && (
                    <div className="faq__right">
                        <div className="faq__image-wrapper">
                            <Image
                                src={faqContent.image}
                                alt="Sakura FAQ Illustration"
                                width={500}
                                height={600}
                                className="faq__image"
                            />
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default FAQ;
