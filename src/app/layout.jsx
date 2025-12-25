import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

export const metadata = {
    title: "Aether X | The Future of Neural Interface",
    description: "A cinematic, story-driven landing page for a futuristic neural interface, featuring GSAP-powered scroll animations, parallax effects, and a dark futuristic aesthetic.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${inter.variable} antialiased`}>
                {children}
            </body>
        </html>
    );
}
