import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import PageWrapper from "@/components/layout/page-wrapper/PageWrapper";
import FixedButton from "@/components/widgets/fixed-button/FixedButton";

const notoSans = Noto_Sans({
    subsets: ["latin", "cyrillic"],
    weight: ["400", "500", "700"],
    variable: "--font-noto",
});

export const metadata: Metadata = {
    title:
        "Sakura Language School — Курси японської, китайської та корейської мов онлайн і офлайн",
    description:
        "Sakura Language School — сучасна школа східних мов. Навчайся японської, китайської та корейської онлайн або в Києві. Індивідуальні уроки, групові заняття, підготовка до JLPT, TOPIK, HSK.",
    keywords: [
        "школа східних мов",
        "курси японської мови",
        "курси китайської мови",
        "курси корейської мови",
        "вивчення японської мови",
        "вивчення китайської мови",
        "вивчення корейської мови",
        "уроки японської",
        "уроки китайської",
        "уроки корейської",
        "JLPT",
        "HSK",
        "TOPIK",
        "онлайн школа мов",
        "Sakura Language School",
    ],
    authors: [
        {
            name: "Sakura Language School",
            url: "https://www.sakuralanguageschool.com",
        },
    ],
    creator: "Sakura Language School",
    publisher: "Sakura Language School",
    metadataBase: new URL("https://www.sakuralanguageschool.com"),
    alternates: {
        canonical: "https://www.sakuralanguageschool.com",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-snippet": -1,
            "max-image-preview": "large",
            "max-video-preview": -1,
        },
    },
    openGraph: {
        type: "website",
        locale: "uk_UA",
        url: "https://www.sakuralanguageschool.com",
        title:
            "Sakura Language School — Курси японської, китайської та корейської мов",
        description:
            "Онлайн та офлайн курси східних мов: японської, китайської та корейської. Підготовка до JLPT, TOPIK, HSK, розмовні клуби та культурні заходи.",
        siteName: "Sakura Language School",
        images: [
            {
                url: "https://www.sakuralanguageschool.com/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Sakura Language School — курси японської, китайської та корейської мов",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title:
            "Sakura Language School — Курси японської, китайської та корейської мов",
        description:
            "Вивчай японську, китайську та корейську мови онлайн або офлайн. Заняття з викладачами та носіями мови, підготовка до міжнародних іспитів.",
        images: ["https://www.sakuralanguageschool.com/og-image.jpd"],
        creator: "@sakura_school",
    },
    icons: { icon: "/favicon.ico" },
    category: "Education",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="uk" className={notoSans.variable}>
        <body>
        <Header />
        <PageWrapper>{children}</PageWrapper>
        <Footer />
        <FixedButton />

        {/* 🔎 Структуровані дані JSON-LD */}
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "EducationalOrganization",
                    name: "Sakura Language School",
                    url: "https://www.sakuralanguageschool.com",
                    logo: "https://www.sakuralanguageschool.com/logo.png",
                    sameAs: [
                        "https://www.facebook.com/sakuralanguageschool",
                        "https://www.instagram.com/sakuralanguageschool",
                    ],
                    description:
                        "Sakura Language School — школа японської, китайської та корейської мов. Індивідуальні та групові заняття, підготовка до JLPT, HSK, TOPIK.",
                    address: {
                        "@type": "PostalAddress",
                        addressLocality: "Київ, Україна",
                    },
                    contactPoint: {
                        "@type": "ContactPoint",
                        telephone: "+380000000000",
                        contactType: "Customer Support",
                        availableLanguage: [
                            "Ukrainian",
                            "English",
                            "Japanese",
                            "Chinese",
                            "Korean",
                        ],
                    },
                    hasCourse: [
                        {
                            "@type": "Course",
                            name: "Курс японської мови",
                            description:
                                "Навчання японської мови для всіх рівнів: від початківців до просунутих. Підготовка до JLPT, граматика, розмовна практика.",
                            provider: { "@type": "Organization", name: "Sakura Language School" },
                        },
                        {
                            "@type": "Course",
                            name: "Курс китайської мови",
                            description:
                                "Індивідуальні та групові заняття китайської мови. Підготовка до HSK, навчання письму, ієрогліфам і розмовній мові.",
                            provider: { "@type": "Organization", name: "Sakura Language School" },
                        },
                        {
                            "@type": "Course",
                            name: "Курс корейської мови",
                            description:
                                "Вивчення корейської мови з викладачами та носіями. Підготовка до TOPIK, культура Кореї, вимова, граматика.",
                            provider: { "@type": "Organization", name: "Sakura Language School" },
                        },
                    ],
                }),
            }}
        />
        </body>
        </html>
    );
}
