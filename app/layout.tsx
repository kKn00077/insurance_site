import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import { Providers } from "@/util/provider";
import { backgroundColor } from "@/style";

const notoKR = Noto_Sans_KR({ weight: ["500", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
    title: "보험 관련 페이지",
    description: "보험 관련 페이지입니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ko" className="light h-full w-full">
            <body className={`${notoKR.className} h-full w-full bg-[#f4f9f2]`}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
