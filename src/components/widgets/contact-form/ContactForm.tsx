'use client'
import React, { useState } from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import { contactContent } from "@/resources/content";
import "./ContactForm.scss";
import Button from "@/components/ui/button/Button";

const ContactForm = () => {
    const { info, form } = contactContent;
    const [loading, setLoading] = useState(false);
    const [sent, setSent] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setSent(false);
        setError(null);

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            const res = await fetch("/api/send-contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (res.ok) {
                setSent(true);
                (e.target as HTMLFormElement).reset();
            } else {
                const response = await res.json();
                setError(response.error || "Не вдалося надіслати форму");
            }
        } catch (err: unknown) {
            const message = err instanceof Error ? err.message : String(err);
            console.error("Contact form error:", message);
            setError("Сталася помилка при відправці: " + message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="contact-wrapper">
            <div className="contact-card">
                {/* Left side */}
                <div className="info-side">
                    <h2 dangerouslySetInnerHTML={{ __html: info.title }} />
                    <p dangerouslySetInnerHTML={{ __html: info.description }} />
                    <ul>
                        <li><FaMapMarkerAlt /> {info.address}</li>
                        <li><FaEnvelope /> {info.email}</li>
                        <li><FaPhone /> {info.phone}</li>
                    </ul>
                </div>

                {/* Right side */}
                <div className="form-side">
                    <h3>{form.title}</h3>
                    <form className="form" onSubmit={handleSubmit}>
                        <div className="row">
                            <input
                                type="text"
                                name="firstName"
                                placeholder={form.fields.firstName}
                                required
                            />
                            <input
                                type="text"
                                name="lastName"
                                placeholder={form.fields.lastName}
                            />
                        </div>
                        <input
                            type="email"
                            name="email"
                            placeholder={form.fields.email}
                            required
                        />
                        <input
                            type="tel"
                            name="phone"
                            placeholder={form.fields.phone}
                        />
                        <textarea
                            name="message"
                            placeholder={form.fields.message}
                            rows={5}
                            required
                        ></textarea>

                        <Button
                            text={
                                loading
                                    ? "Відправка..."
                                    : sent
                                        ? "Відправлено ✅"
                                        : "Надіслати"
                            }
                            bgColor="#c95a38"
                            textColor="#fff"
                            hoverEffect="scale"
                            shape="rounded"
                        />
                    </form>

                    {error && (
                        <p style={{ color: "red", marginTop: "10px" }}>❌ {error}</p>
                    )}
                    {sent && !error && (
                        <p style={{ color: "green", marginTop: "10px" }}>
                            ✅ Ваша заявка успішно надіслана!
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ContactForm;