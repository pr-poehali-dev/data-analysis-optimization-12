const steps = [
  {
    number: "01",
    title: "Напиши нам",
    desc: "Выбери игру и нужный пакет из прайса, затем напиши нам в Telegram или ВКонтакте",
  },
  {
    number: "02",
    title: "Оплати удобным способом",
    desc: "Принимаем оплату картой, СБП, криптовалютой и другими популярными способами",
  },
  {
    number: "03",
    title: "Получи донат",
    desc: "После оплаты донат поступает на твой аккаунт в течение нескольких минут",
  },
];

export default function HowTo() {
  return (
    <div className="bg-white py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="uppercase text-neutral-500 text-sm tracking-wide mb-4">Просто и быстро</p>
        <h2 className="text-neutral-900 text-4xl lg:text-6xl font-bold mb-16">Как заказать</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:divide-x divide-neutral-200">
          {steps.map(({ number, title, desc }) => (
            <div key={number} className="flex flex-col gap-6 px-0 md:px-10 py-8 md:py-0 first:pl-0 last:pr-0 border-b md:border-b-0 border-neutral-200 last:border-b-0">
              <span className="text-6xl font-bold text-neutral-200">{number}</span>
              <div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">{title}</h3>
                <p className="text-neutral-500 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mt-16">
          <a
            href="https://t.me/fazdinovvv"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white border border-black px-8 py-3 text-sm uppercase tracking-wide hover:bg-white hover:text-black transition-colors duration-300 text-center"
          >
            Написать в Telegram
          </a>
          <a
            href="https://vk.com/fazdinovvv"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black border border-black px-8 py-3 text-sm uppercase tracking-wide hover:bg-black hover:text-white transition-colors duration-300 text-center"
          >
            Написать в ВКонтакте
          </a>
        </div>
      </div>
    </div>
  );
}
