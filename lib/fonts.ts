import { 
    Bricolage_Grotesque, 
    Space_Mono, 
    Manrope, 
    Poppins, 
    Onest, 
    Space_Grotesk
} from "next/font/google";

export const bricolage = Bricolage_Grotesque({
    subsets: ["latin"],
    variable: "--font-bricolage",
});

export const spaceMono = Space_Mono({
    weight: ["400", "700"],
    subsets: ["latin"],
    variable: "--font-space-mono",
});

export const manrope = Manrope({
    subsets: ["latin"],
    variable: "--font-manrope",
});

export const poppins = Poppins({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
    variable: "--font-poppins",
});

export const onset = Onest({
    subsets: ["latin"],
    variable: "--font-onset"
});

export const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    variable: "--font-space-grotesk",
});