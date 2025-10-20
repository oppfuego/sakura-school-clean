import { media } from "@/resources/media";
import HeroSection from "@/components/widgets/hero-section/HeroSection";
import CoursesGrid from "@/components/features/courses-grid/CoursesGrid";
import AdvantagesSection from "@/components/features/advantages-section/AdvantagesSection";
import FAQ from "@/components/widgets/faq/FAQ";
import {
    languageCoursesContent,
    studyFormatsContent,
} from "@/resources/content";
import MissionSection from "@/components/features/mission-section/MissionSection";

export default function Home() {
    return (
        <>
            <HeroSection

            />

            <CoursesGrid
                data={languageCoursesContent}
                title="Мови, які ми викладаємо"
                layout={3}
                backgroundImage={media.menoki}
                backgroundSide="left"
                showButtons={true}
                id="courses"
            />

            <AdvantagesSection id="advantages"/>
            <MissionSection id="mission"/>

            <CoursesGrid
                data={studyFormatsContent}
                title="Формати навчання"
                layout={2}
                backgroundImage={media.panda}
                backgroundSide="right"
                showButtons={false}
                id="formats"
            />
            <FAQ id="faq"/>
        </>
    );
}
