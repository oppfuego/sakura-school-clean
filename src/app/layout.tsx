import type {Metadata} from "next";
import {Noto_Sans} from "next/font/google";
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
    title: "Sakura Language School — Школа японської мови",
    description:
        "Sakura Language School — сучасна школа японської мови. Курси для початківців, індивідуальні заняття, культурні події.",
    icons: {icon: "/favicon.ico"},
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="uk" className={notoSans.variable}>
        <body>
        <Header/>
        <PageWrapper>
            {children}
        </PageWrapper>
        <Footer/>
        <FixedButton/>
        </body>
        </html>
    );
}
