import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="/images/mountain-landscape.jpg"
          alt="Mountain landscape"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6">
        <p className="text-sm uppercase tracking-widest mb-4 opacity-80">Донаты в игры через Telegram и ВКонтакте</p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-tight">
          ЗАРЯДИ<br />ИГРУ
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 mb-8">
          Пополнение игровых аккаунтов и покупка внутриигровых ресурсов — быстро, безопасно, удобным способом
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="https://t.me/fazdinovvv"
            className="inline-block bg-white text-black px-8 py-3 text-sm uppercase tracking-wide font-semibold hover:bg-neutral-200 transition-colors duration-300"
          >
            Пиши в Telegram
          </a>
          <a
            href="https://vk.com/fazdinovvv"
            className="inline-block bg-transparent text-white border border-white px-8 py-3 text-sm uppercase tracking-wide font-semibold hover:bg-white hover:text-black transition-colors duration-300"
          >
            Пиши в ВКонтакте
          </a>
        </div>
      </div>
    </div>
  );
}