import { motion } from 'motion/react';
import { Sparkles, Heart, Star, PartyPopper, BookOpen, HandHeart, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function App() {
  const [confetti, setConfetti] = useState<Array<{ id: number; x: number; color: string; delay: number }>>([]);

  // Generate confetti particles continuously
  useEffect(() => {
    const interval = setInterval(() => {
      const newConfetti = Array.from({ length: 5 }, (_, i) => ({
        id: Date.now() + i,
        x: Math.random() * 100,
        color: ['#0c0c42', '#232325', '#9333EA', '#10B981', '#F472B6'][Math.floor(Math.random() * 5)],
        delay: Math.random() * 0.5,
      }));
      
      setConfetti((prev) => [...prev, ...newConfetti]);
      
      // Clean up old confetti
      setTimeout(() => {
        setConfetti((prev) => prev.slice(newConfetti.length));
      }, 3000);
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black-700 to-indigo-900 flex items-center justify-center overflow-hidden relative">
      {/* Fireworks/Confetti particles */}
      {confetti.map((particle) => (
        <Firework key={particle.id} x={particle.x} color={particle.color} delay={particle.delay} />
      ))}



      {/* Floating stars in background */}
      <FloatingShape delay={0} />
      <FloatingShape delay={0.5} />
      <FloatingShape delay={1} />
      <FloatingShape delay={1.5} />
      <FloatingShape delay={2} />
        <FloatingShape delay={0} />
        <FloatingShape delay={0.5} />
        <FloatingShape delay={1} />
        <FloatingShape delay={1.5} />
        <FloatingShape delay={2} />
        <FloatingShape delay={0} />
        <FloatingShape delay={0.5} />
        <FloatingShape delay={1} />
        <FloatingShape delay={1.5} />
        <FloatingShape delay={2} />

      {/* Main content */}
      <div className="text-center z-10 px-4">
        {/* Animated crescent moon and star */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="flex justify-center items-center gap-2 mb-8"
        >
          <div className="relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Star className="w-16 h-16 text-yellow-300 fill-yellow-300" />
            </motion.div>
            <div className="absolute -right-8 top-2 w-16 h-16 border-8 border-yellow-300 rounded-full" 
                 style={{ clipPath: 'inset(0 0 0 50%)' }}
            />
          </div>
        </motion.div>

        {/* Main heading with stagger animation */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6"
        >
          Ramadan Mubarak
        </motion.h1>



        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-xl text-white/80 mb-12"
        >
          May this blessed month bring peace, joy, and prosperity ✨
        </motion.p>

        {/* Animated icons row */}
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


      </div>

      {/* Decorative corner elements */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute top-10 left-10"
      >
        <Star className="w-16 h-16 text-yellow-300/50 fill-yellow-300/50" />
      </motion.div>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 2.2 }}
        className="absolute bottom-10 right-10"
      >
        <Sparkles className="w-16 h-16 text-green-300/50" />
      </motion.div>
        {/* Ramadan Values Cards */}
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10"
        >
            <ValueCard
                icon={<Moon className="w-8 h-8 text-purple-300" />}
                title="Faith"
                description="Strengthen your Iman and grow spiritually."
            />

            <ValueCard
                icon={<BookOpen className="w-8 h-8 text-green-300" />}
                title="Quran"
                description="Reconnect with the words of Allah."
            />

            <ValueCard
                icon={<Sparkles className="w-8 h-8 text-yellow-300" />}
                title="Prayer"
                description="Increase devotion through Salah."
            />

            <ValueCard
                icon={<HandHeart className="w-8 h-8 text-pink-300" />}
                title="Respect"
                description="Spread kindness and compassion."
            />
        </motion.div>

    </div>
  );
}

// Firework/Confetti particle component that shoots upward
function Firework({ x, color, delay }: { x: number; color: string; delay: number }) {
  return (
    <motion.div
      initial={{ 
        bottom: -20,
        left: `${x}%`,
        scale: 0,
        opacity: 1
      }}
      animate={{ 
        bottom: '100vh',
        scale: [0, 1.5, 1, 0.5],
        opacity: [1, 1, 1, 0],
        rotate: [0, 180, 360, 540],
      }}
      transition={{
        duration: 2.5,
        delay,
        ease: "easeOut",
      }}
      className="absolute w-3 h-3 rounded-full z-0"
      style={{ backgroundColor: color }}
    />
  );
}

// Component for animated icons
function AnimatedIcon({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, rotate: -180 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 0.6, delay, type: "spring" }}
      whileHover={{ scale: 1.2, rotate: 360 }}
      className="cursor-pointer"
    >
      {children}
    </motion.div>
  );
}

// Component for floating background shapes
function FloatingShape({ delay }: { delay: number }) {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{
        y: [-20, 20, -20],
        opacity: [0.3, 0.6, 0.3],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute w-32 h-32 bg-white/20 rounded-full blur-xl"
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
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-xl text-center"
        >
            <div className="flex justify-center mb-4">{icon}</div>
            <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
            <p className="text-white/70 text-sm">{description}</p>
        </motion.div>
    );
}