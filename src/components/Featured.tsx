const games = [
  { name: "Brawl Stars", desc: "Гемы, Brawl Pass, скины" },
  { name: "Clash of Clans", desc: "Самоцветы, ресурсы" },
  { name: "PUBG Mobile", desc: "UC, Royale Pass" },
  { name: "Genshin Impact", desc: "Примогемы, Welkin Moon" },
  { name: "Free Fire", desc: "Алмазы, пропуски" },
  { name: "Roblox", desc: "Robux, Premium" },
];

export default function Featured() {
  return (
    <div id="prices" className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2 grid grid-cols-2 gap-4 content-center px-4">
        {games.map((game) => (
          <div key={game.name} className="border border-neutral-200 p-5 hover:border-neutral-900 transition-colors duration-300">
            <p className="font-bold text-neutral-900 mb-1">{game.name}</p>
            <p className="text-sm text-neutral-500">{game.desc}</p>
          </div>
        ))}
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Поддерживаемые игры</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Донаты для мобильных и ПК игр — пополняем за считанные минуты после оплаты
        </p>
        <a
          href="https://t.me/"
          className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black w-fit uppercase tracking-wide"
        >
          Заказать в Telegram
        </a>
      </div>
    </div>
  );
}