import { useState } from "react";

const faqs = [
  {
    q: "Сколько времени занимает пополнение?",
    a: "В большинстве случаев донат поступает в течение 5–15 минут после подтверждения оплаты.",
  },
  {
    q: "Как оплатить заказ?",
    a: "Оплата принимается только через СБП (Система Быстрых Платежей). Реквизиты выдаются после оформления заказа.",
  },
  {
    q: "Безопасно ли это?",
    a: "Да. Мы не запрашиваем пароль от вашего аккаунта. Для большинства игр достаточно только вашего игрового ID или никнейма.",
  },
  {
    q: "Что если донат не пришёл?",
    a: "Напишите нам в Telegram или ВКонтакте — разберёмся и решим вопрос. Все заказы выполняются или деньги возвращаются.",
  },
  {
    q: "Какие игры поддерживаются?",
    a: "Brawl Stars, PUBG Mobile, Free Fire, Clash Royale, Clash of Clans, Genshin Impact, Roblox и звёзды Telegram. Список постоянно пополняется.",
  },
  {
    q: "Можно ли сделать заказ ночью?",
    a: "Пишите в любое время — стараемся отвечать как можно быстрее. Время обработки может быть чуть дольше в ночные часы.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="bg-white py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="uppercase text-neutral-500 text-sm tracking-wide mb-4">Вопросы и ответы</p>
        <h2 className="text-neutral-900 text-4xl lg:text-6xl font-bold mb-16">FAQ</h2>

        <div className="divide-y divide-neutral-200">
          {faqs.map(({ q, a }, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex justify-between items-center py-6 text-left gap-4"
              >
                <span className="text-neutral-900 text-lg font-medium">{q}</span>
                <span className="text-2xl text-neutral-400 shrink-0">
                  {open === i ? "−" : "+"}
                </span>
              </button>
              {open === i && (
                <p className="text-neutral-500 pb-6 leading-relaxed">{a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
