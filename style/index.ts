export const fullScreen = "h-full w-full";
export const mainColor = "#1c8549";
export const mainColorHeader = "text-[#1c8549]";
export const backgroundColor = "bg-[#f4f9f2]";
export const mainColorBorderBottom = "border-b-[#1c8549]";
export const mainBackgroundColor = "bg-[#1c8549]";

// animation
export const fadeIn = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
};

export const fromRight = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8 },
};

export const fromLeft = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8 },
};
