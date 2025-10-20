"use client";

import React, {useState} from "react";
import "./FixedButton.scss";
import {FaCommentDots} from "react-icons/fa";
import Button from "@/components/ui/button/Button";
import ModalWrapper from "@/components/widgets/modal-wrapper/ModalWrapper";
import ContactForm from "@/components/widgets/contact-form/ContactForm";

const FixedButton = () => {

    const [openModal, setOpenModal] = useState(false);

    const handleClick = () => {
        setOpenModal(true);
    };

    return (
        <div className="fixed-button">
            <Button onClick={handleClick} icon={<FaCommentDots/>} iconPosition="only" bgColor="#c95a38" shape="circle"
                    hoverEffect="all"/>

            <ModalWrapper isOpen={openModal} onClose={() => setOpenModal(false)}>
                <ContactForm />
            </ModalWrapper>
        </div>
    );
};

export default FixedButton;
