import { useEffect, useState } from "react";

const API_URL = "https://functions.poehali.dev/83571396-3363-42fe-906c-4a972b09af8f";

const GAMES = ["Brawl Stars", "PUBG Mobile", "Free Fire", "Clash Royale", "Clash of Clans", "Genshin Impact", "Roblox", "Звёзды Telegram"];

interface Review {
  id: number;
  name: string;
  game: string;
  text: string;
  rating: number;
  created_at: string;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <span>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < rating ? "text-yellow-400" : "text-neutral-600"}>★</span>
      ))}
    </span>
  );
}

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [form, setForm] = useState({ name: "", game: GAMES[0], text: "", rating: 5 });
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const load = () => {
    fetch(API_URL)
      .then((r) => r.json())
      .then((data) => setReviews(Array.isArray(data) ? data : JSON.parse(data)));
  };

  useEffect(() => { load(); }, []);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setSending(false);
    setSuccess(true);
    setForm({ name: "", game: GAMES[0], text: "", rating: 5 });
    load();
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="bg-neutral-950 py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="uppercase text-neutral-500 text-sm tracking-wide mb-4">Отзывы покупателей</p>
        <h2 className="text-white text-4xl lg:text-6xl font-bold mb-16">Что говорят клиенты</h2>

        <form onSubmit={submit} className="border border-neutral-800 p-8 mb-16">
          <p className="text-white text-xl font-bold mb-6">Оставить отзыв</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <input
              required
              placeholder="Ваше имя"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="bg-neutral-900 border border-neutral-700 text-white px-4 py-3 text-sm focus:outline-none focus:border-neutral-400 placeholder:text-neutral-500"
            />
            <select
              value={form.game}
              onChange={(e) => setForm({ ...form, game: e.target.value })}
              className="bg-neutral-900 border border-neutral-700 text-white px-4 py-3 text-sm focus:outline-none focus:border-neutral-400"
            >
              {GAMES.map((g) => <option key={g}>{g}</option>)}
            </select>
          </div>
          <textarea
            required
            placeholder="Ваш отзыв..."
            value={form.text}
            onChange={(e) => setForm({ ...form, text: e.target.value })}
            rows={3}
            className="w-full bg-neutral-900 border border-neutral-700 text-white px-4 py-3 text-sm focus:outline-none focus:border-neutral-400 placeholder:text-neutral-500 mb-4 resize-none"
          />
          <div className="flex items-center justify-between">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setForm({ ...form, rating: s })}
                  className={`text-2xl transition-colors ${s <= form.rating ? "text-yellow-400" : "text-neutral-600"}`}
                >
                  ★
                </button>
              ))}
            </div>
            <button
              type="submit"
              disabled={sending}
              className="bg-white text-black px-6 py-2 text-sm uppercase tracking-wide hover:bg-neutral-200 transition-colors duration-300 disabled:opacity-50"
            >
              {sending ? "Отправка..." : "Отправить"}
            </button>
          </div>
          {success && <p className="text-green-400 text-sm mt-4">Спасибо за отзыв!</p>}
        </form>

        {reviews.length === 0 ? (
          <p className="text-neutral-500 text-center">Пока нет отзывов. Будьте первым!</p>
        ) : (
          <div className="divide-y divide-neutral-800">
            {reviews.map((r) => (
              <div key={r.id} className="py-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <span className="text-white font-semibold">{r.name}</span>
                    <span className="text-neutral-500 text-sm">{r.game}</span>
                  </div>
                  <StarRating rating={r.rating} />
                </div>
                <p className="text-neutral-300 leading-relaxed">{r.text}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
