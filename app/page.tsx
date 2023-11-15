"use client";
import { LogoBox, HeroSection, SocialProof, Benefit, Fqa, UserForm } from "@/components";

export default function Home() {
    return (
        <div className="w-full h-full bg-[#f4f9f2]">
            <LogoBox />
            <div className="px-5 flex flex-col justify-center items-center pb-[120px]">
                <HeroSection />
                <SocialProof />
                <Benefit />
                <Fqa />
                <UserForm />
            </div>
        </div>
    );
}
