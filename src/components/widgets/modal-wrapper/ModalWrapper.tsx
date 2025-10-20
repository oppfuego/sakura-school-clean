import React, {FC, useEffect} from 'react';
import './ModalWrapper.scss'
import {ModalWrapperProps} from "@/types/modal-wrapper";
import Button from "@/components/ui/button/Button";
import {IoMdClose} from "react-icons/io";

const ModalWrapper: FC<ModalWrapperProps> = ({isOpen, onClose, children}) => {

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        }

        if (isOpen) document.addEventListener("keydown", handleEsc);
        return () => document.removeEventListener("keydown", handleEsc);

    }, [isOpen, onClose]);

    useEffect(() => {
        const previous = document.body.style.overflow;
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.body.style.overflow = previous;
        };
    }, [isOpen]);

    if (!isOpen) return null

    return (
        <div className="modal" onClick={onClose}>
            <div className="modal__overlay"></div>
            <div className="modal__content" onClick={(e) => e.stopPropagation()}>
                <div className="modal__button">
                    <Button onClick={onClose} shape="circle" icon={<IoMdClose/>} iconPosition="only" bgColor="#c95a38"
                            hoverEffect="all"/>
                </div>

                {children}
            </div>

        </div>
    );
};

export default ModalWrapper;