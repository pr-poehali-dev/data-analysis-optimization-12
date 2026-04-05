const prices = [
  { stars: 50, price: 82 },
  { stars: 75, price: 120 },
  { stars: 100, price: 160 },
  { stars: 150, price: 232 },
  { stars: 250, price: 380 },
  { stars: 350, price: 525 },
  { stars: 500, price: 750 },
];

export default function Stars() {
  return (
    <div className="bg-neutral-950 py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="uppercase text-neutral-500 text-sm tracking-wide mb-4">Прайс-лист</p>
        <h2 className="text-white text-4xl lg:text-6xl font-bold mb-2">⭐ Звёзды Telegram</h2>
        <p className="text-neutral-400 mb-12 text-lg">Пополнение звёзд — быстро и без лишних вопросов</p>

        <div className="divide-y divide-neutral-800">
          {prices.map(({ stars, price }) => (
            <div key={stars} className="flex items-center justify-between py-5 group">
              <div className="flex items-center gap-4">
                <span className="text-2xl">⭐</span>
                <span className="text-white text-xl font-semibold">{stars} звёзд</span>
              </div>
              <div className="flex items-center gap-6">
                <span className="text-white text-xl font-bold">{price} ₽</span>
                <a
                  href="https://t.me/fazdinovvv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-neutral-600 text-neutral-300 px-4 py-2 text-sm uppercase tracking-wide hover:border-white hover:text-white transition-colors duration-300"
                >
                  Telegram
                </a>
                <a
                  href="https://vk.com/fazdinovvv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-neutral-600 text-neutral-300 px-4 py-2 text-sm uppercase tracking-wide hover:border-white hover:text-white transition-colors duration-300"
                >
                  ВКонтакте
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}