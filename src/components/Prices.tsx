

const games = [
  {
    id: "pubg",
    name: "PUBG Mobile",
    emoji: "🎯",
    currency: "UC",
    items: [
      { label: "60 UC", price: 91 },
      { label: "300 + 25 UC", price: 443 },
      { label: "600 + 60 UC", price: 954 },
      { label: "1500 + 300 UC", price: 2380 },
      { label: "3000 + 850 UC", price: 4749 },
      { label: "6000 + 2100 UC", price: 9486 },
    ],
  },
  {
    id: "freefire",
    name: "Free Fire",
    emoji: "🔥",
    currency: "Алмазы",
    items: [
      { label: "100 + 10 алмазов", price: 81 },
      { label: "310 + 31 алмазов", price: 261 },
      { label: "520 + 52 алмазов", price: 423 },
      { label: "1060 + 106 алмазов", price: 850 },
      { label: "2180 + 218 алмазов", price: 1701 },
      { label: "5600 + 560 алмазов", price: 4081 },
    ],
  },
  {
    id: "roblox",
    name: "Roblox",
    emoji: "🟥",
    currency: "Robux",
    items: [
      { label: "50 Robux", price: 36 },
      { label: "100 Robux", price: 71 },
      { label: "200 Robux", price: 143 },
      { label: "300 Robux", price: 213 },
      { label: "400 Robux", price: 284 },
      { label: "500 Robux", price: 354 },
      { label: "600 Robux", price: 426 },
      { label: "700 Robux", price: 497 },
      { label: "800 Robux", price: 567 },
      { label: "900 Robux", price: 643 },
      { label: "1000 Robux", price: 712 },
      { label: "2000 Robux", price: 1425 },
      { label: "3000 Robux", price: 2127 },
      { label: "4000 Robux", price: 2839 },
      { label: "5000 Robux", price: 3541 },
    ],
  },
  {
    id: "genshin",
    name: "Genshin Impact",
    emoji: "✨",
    currency: "Примогемы",
    items: [
      { label: "60 примогемов", price: 36 },
      { label: "300 примогемов", price: 71 },
      { label: "980 примогемов", price: 143 },
      { label: "1980 примогемов", price: 284 },
      { label: "3280 примогемов", price: 497 },
      { label: "6480 примогемов", price: 712 },
      { label: "12960 примогемов", price: 1425 },
      { label: "Welkin Moon (30 дней)", price: 213 },
    ],
  },
  {
    id: "brawl",
    name: "Brawl Stars",
    emoji: "⚡",
    currency: "Гемы",
    items: [
      { label: "30 гемов", price: 222 },
      { label: "80 гемов", price: 530 },
      { label: "170 гемов", price: 1068 },
      { label: "360 гемов", price: 2149 },
      { label: "950 гемов", price: 5347 },
      { label: "2000 гемов", price: 10706 },
      { label: "4000 гемов", price: 21447 },
      { label: "6000 гемов", price: 32165 },
    ],
  },
  {
    id: "coc",
    name: "Clash of Clans",
    emoji: "🏰",
    currency: "Гемы",
    items: [
      { label: "80 гемов", price: 113 },
      { label: "500 гемов", price: 535 },
      { label: "1200 гемов", price: 1068 },
      { label: "2500 гемов", price: 2161 },
      { label: "6500 гемов", price: 5392 },
      { label: "14000 гемов", price: 10797 },
    ],
  },
  {
    id: "cr",
    name: "Clash Royale",
    emoji: "👑",
    currency: "Гемы",
    items: [
      { label: "80 гемов", price: 113 },
      { label: "500 гемов", price: 535 },
      { label: "1200 гемов", price: 1068 },
      { label: "2500 гемов", price: 2161 },
      { label: "6500 гемов", price: 5392 },
      { label: "14000 гемов", price: 10797 },
    ],
  },
];

interface PricesProps {
  activeGame: string;
  onGameChange: (id: string) => void;
}

export default function Prices({ activeGame, onGameChange }: PricesProps) {
  const game = games.find((g) => g.id === activeGame) ?? games[0];

  return (
    <div className="bg-neutral-950 py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="uppercase text-neutral-500 text-sm tracking-wide mb-4">Прайс-лист</p>
        <h2 className="text-white text-4xl lg:text-6xl font-bold mb-12">🎮 Донат в игры</h2>

        <div className="flex flex-wrap gap-2 mb-12">
          {games.map((g) => (
            <button
              key={g.id}
              onClick={() => onGameChange(g.id)}
              className={`px-4 py-2 text-sm uppercase tracking-wide border transition-colors duration-300 ${
                activeGame === g.id
                  ? "bg-white text-black border-white"
                  : "bg-transparent text-neutral-400 border-neutral-700 hover:border-neutral-400 hover:text-white"
              }`}
            >
              {g.emoji} {g.name}
            </button>
          ))}
        </div>

        <div className="divide-y divide-neutral-800">
          {game.items.map(({ label, price }) => (
            <div key={label} className="flex items-center justify-between py-5">
              <span className="text-white text-lg">{label}</span>
              <div className="flex items-center gap-4">
                <span className="text-white text-xl font-bold">{price} ₽</span>
                <a
                  href="https://t.me/fazdinovvv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-neutral-600 text-neutral-300 px-3 py-2 text-xs uppercase tracking-wide hover:border-white hover:text-white transition-colors duration-300"
                >
                  TG
                </a>
                <a
                  href="https://vk.com/fazdinovvv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-neutral-600 text-neutral-300 px-3 py-2 text-xs uppercase tracking-wide hover:border-white hover:text-white transition-colors duration-300"
                >
                  ВК
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}