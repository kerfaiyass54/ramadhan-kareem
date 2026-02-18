import { motion } from "motion/react";
import {
    Sparkles,
    Heart,
    Star,
    BookOpen,
    HandHeart,
    Moon,
} from "lucide-react";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function App() {
    const { t, i18n } = useTranslation();

    const [confetti, setConfetti] = useState<
        Array<{ id: number; x: number; color: string; delay: number }>
    >([]);

    /* ---------------- CONFETTI ---------------- */
    useEffect(() => {
        const interval = setInterval(() => {
            const newConfetti = Array.from({ length: 5 }, (_, i) => ({
                id: Date.now() + i,
                x: Math.random() * 100,
                color: ["#9333EA", "#10B981", "#F472B6", "#FACC15"][
                    Math.floor(Math.random() * 4)
                    ],
                delay: Math.random() * 0.5,
            }));

            setConfetti((prev) => [...prev, ...newConfetti]);

            setTimeout(() => {
                setConfetti((prev) => prev.slice(newConfetti.length));
            }, 3000);
        }, 800);

        return () => clearInterval(interval);
    }, []);

    /* ---------------- RTL + SAVE LANGUAGE ---------------- */
    useEffect(() => {
        document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
        localStorage.setItem("lang", i18n.language);
    }, [i18n.language]);

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-indigo-900 flex items-center justify-center overflow-hidden relative px-4">

            {/* -------- Language Switcher -------- */}
            <div className="absolute top-6 right-6 flex gap-2 z-20">
                <LangButton code="en" label="EN 🇬🇧" onClick={changeLanguage} />
                <LangButton code="fr" label="FR 🇫🇷" onClick={changeLanguage} />
                <LangButton code="de" label="DE 🇩🇪" onClick={changeLanguage} />
                <LangButton code="ar" label="AR 🇹🇳" onClick={changeLanguage} />
            </div>

            {/* -------- Confetti -------- */}
            {confetti.map((particle) => (
                <Firework
                    key={particle.id}
                    x={particle.x}
                    color={particle.color}
                    delay={particle.delay}
                />
            ))}

            {/* -------- Floating Background -------- */}
            {[...Array(8)].map((_, i) => (
                <FloatingShape key={i} delay={i * 0.5} />
            ))}

            {/* -------- Main Content -------- */}
            <div className="text-center z-10 max-w-4xl">

                {/* Moon + Star */}
                <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, type: "spring" }}
                    className="flex justify-center items-center gap-2 mb-8"
                >
                    <Star className="w-16 h-16 text-yellow-300 fill-yellow-300" />
                    <Moon className="w-16 h-16 text-yellow-200" />
                </motion.div>

                {/* Title */}
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-5xl md:text-7xl font-bold text-white mb-6"
                >
                    {t("Ramadan Mubarak")}
                </motion.h1>

                {/* Message */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-xl text-white/80 mb-12"
                >
                    {t("May")}
                </motion.p>

                {/* Icons */}
                <div className="flex gap-8 justify-center mb-12">
                    <AnimatedIcon delay={0.9}>
                        <Sparkles className="w-12 h-12 text-yellow-300" />
                    </AnimatedIcon>
                    <AnimatedIcon delay={1.1}>
                        <Star className="w-12 h-12 text-yellow-400 fill-yellow-400" />
                    </AnimatedIcon>
                    <AnimatedIcon delay={1.3}>
                        <Heart className="w-12 h-12 text-green-300" />
                    </AnimatedIcon>
                </div>

                {/* Value Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    <ValueCard
                        icon={<Moon className="w-8 h-8 text-purple-300" />}
                        title={t("Faith")}
                        description={t("Strengthen your Iman and grow spiritually")}
                    />

                    <ValueCard
                        icon={<BookOpen className="w-8 h-8 text-green-300" />}
                        title={t("Q")}
                        description={t("Quran")}
                    />

                    <ValueCard
                        icon={<Sparkles className="w-8 h-8 text-yellow-300" />}
                        title={t("Prayer")}
                        description={t("Salah")}
                    />

                    <ValueCard
                        icon={<HandHeart className="w-8 h-8 text-pink-300" />}
                        title={t("Respect")}
                        description={t("Kindness")}
                    />
                </motion.div>
            </div>
        </div>
    );
}

/* ---------------- Components ---------------- */

function LangButton({
                        code,
                        label,
                        onClick,
                    }: {
    code: string;
    label: string;
    onClick: (lng: string) => void;
}) {
    return (
        <button
            onClick={() => onClick(code)}
            className="bg-white/20 hover:bg-white/30 backdrop-blur px-3 py-1 rounded-lg text-white text-sm transition"
        >
            {label}
        </button>
    );
}

function Firework({
                      x,
                      color,
                      delay,
                  }: {
    x: number;
    color: string;
    delay: number;
}) {
    return (
        <motion.div
            initial={{ bottom: -20, left: `${x}%`, scale: 0 }}
            animate={{
                bottom: "100vh",
                scale: [0, 1.5, 1, 0.5],
                opacity: [1, 1, 1, 0],
            }}
            transition={{ duration: 2.5, delay }}
            className="absolute w-3 h-3 rounded-full"
            style={{ backgroundColor: color }}
        />
    );
}

function AnimatedIcon({
                          children,
                          delay,
                      }: {
    children: React.ReactNode;
    delay: number;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay }}
            whileHover={{ scale: 1.2 }}
        >
            {children}
        </motion.div>
    );
}

function FloatingShape({ delay }: { delay: number }) {
    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: [-20, 20, -20], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, delay, repeat: Infinity }}
            className="absolute w-32 h-32 bg-white/10 rounded-full blur-xl"
            style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
            }}
        />
    );
}

function ValueCard({
                       icon,
                       title,
                       description,
                   }: {
    icon: React.ReactNode;
    title: string;
    description: string;
}) {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center"
        >
            <div className="flex justify-center mb-4">{icon}</div>
            <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
            <p className="text-white/70 text-sm">{description}</p>
        </motion.div>
    );
}
