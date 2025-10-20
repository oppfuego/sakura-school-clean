"use client";
import React, {useState} from "react";
import Image from "next/image";
import CourseCard from "@/components/ui/course-card/CourseCard";
import ModalWrapper from "@/components/widgets/modal-wrapper/ModalWrapper";
import "./CoursesGrid.scss";

interface Course {
    id?: string;
    title: string;
    image: string;
    color: string;
    subtitle?: string;
    description?: string;
    price?: string;
    modalText?: string;
}

interface CoursesGridProps {
    data: Course[];
    title: string;
    layout?: 2 | 3 | 4;
    backgroundImage?: string;
    backgroundSide?: "left" | "right";
    showButtons?: boolean;
    id?: string;
}

const CoursesGrid: React.FC<CoursesGridProps> = ({
                                                     data,
                                                     title,
                                                     layout = 3,
                                                     backgroundImage,
                                                     backgroundSide = "left",
                                                     showButtons = false,
                                                     id
                                                 }) => {
    const [openModal, setOpenModal] = useState(false);
    const [activeCourse, setActiveCourse] = useState<Course | null>(null);

    const handleOpenModal = (course: Course) => {
        setActiveCourse(course);
        setOpenModal(true);
    };

    return (
        <section className={`courses courses--${layout}`} id={id}>
            {backgroundImage && (
                <div className={`courses__bg courses__bg--${backgroundSide}`}>
                    <Image
                        src={backgroundImage}
                        alt="Background decoration"
                        fill
                        className="courses__bg-image"
                    />
                </div>
            )}

            <div className="courses__content-container">
                <h2 className="courses__title">{title}</h2>

                <div className="courses__grid" role="list">
                    {data.map((card, i) => (
                        <CourseCard
                            key={i}
                            {...card}
                            color={card.color}
                            hasButton={showButtons}
                            onButtonClick={() => handleOpenModal(card)}
                        />
                    ))}
                </div>
            </div>

            <ModalWrapper isOpen={openModal} onClose={() => setOpenModal(false)}>
                {activeCourse && (
                    <div className="modal-course">
                        <div className="modal-course__image-wrapper">
                            <Image
                                src={activeCourse.image}
                                alt={activeCourse.title}
                                width={320}
                                height={180}
                                className="modal-course__image"
                            />
                        </div>

                        <div className="modal-course__content">
                            <h3 className="modal-course__title">{activeCourse.title}</h3>
                            <p className="modal-course__text">{activeCourse.modalText}</p>
                        </div>
                    </div>
                )}
            </ModalWrapper>

        </section>
    );
};

export default CoursesGrid;
