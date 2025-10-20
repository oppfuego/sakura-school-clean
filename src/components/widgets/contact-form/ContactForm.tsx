"use client";

import React from "react";
import {FaMapMarkerAlt, FaEnvelope, FaPhone} from "react-icons/fa";
import {contactContent} from "@/resources/content";
import "./ContactForm.scss";
import Button from "@/components/ui/button/Button";

const ContactForm = () => {
    const {info, form} = contactContent;

    return (
        <div className="contact-wrapper">
            <div className="contact-card">
                {/* Left side */}
                <div className="info-side">
                    <h2 dangerouslySetInnerHTML={{__html: info.title}}/>
                    <p dangerouslySetInnerHTML={{__html: info.description}}/>
                    <ul>
                        <li>
                            <FaMapMarkerAlt/> {info.address}
                        </li>
                        <li>
                            <FaEnvelope/> {info.email}
                        </li>
                        <li>
                            <FaPhone/> {info.phone}
                        </li>
                    </ul>
                </div>

                {/* Right side */}
                <div className="form-side">
                    <h3>{form.title}</h3>
                    <form className="form">
                        <div className="row">
                            <input
                                type="text"
                                placeholder={form.fields.firstName}
                                required
                            />
                            <input
                                type="text"
                                placeholder={form.fields.lastName}
                                required
                            />
                        </div>
                        <input
                            type="email"
                            placeholder={form.fields.email}
                            required
                        />
                        <input
                            type="tel"
                            placeholder={form.fields.phone}
                        />
                        <textarea
                            placeholder={form.fields.message}
                            rows={5}
                        ></textarea>
                        <Button
                            text="Надіслати"
                            bgColor="#c95a38"
                            textColor="#fff"
                            hoverEffect="scale"
                            shape="rounded"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
