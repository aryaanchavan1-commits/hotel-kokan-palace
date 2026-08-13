import { useEffect, useRef, useState } from "react";

type Message = { role: "user" | "assistant"; content: string };

const SUGGESTIONS = [
  "What are your room prices?",
  "Do you have parking and WiFi?",
  "How do I reach the lodge?",
  "Hot water and power backup?",
  "I want to book a room",
];

const WELCOME =
  "Namaskar! 👋 Welcome to Konkan Palace Lodge. Ask me about rooms, prices, facilities, or getting here — or call +91 78450 83016 for instant booking.";

const ChatIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const SendIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);

const CloseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export default function AiAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([{ role: "assistant", content: WELCOME }]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, loading, open]);

  const send = async (text: string) => {
    const clean = text.trim();
    if (!clean || loading) return;
    const history: Message[] = [...messages, { role: "user", content: clean }];
    setMessages(history);
    setInput("");
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error ?? "Request failed");
      const reply = data?.choices?.[0]?.message?.content;
      if (!reply) throw new Error("Empty reply");
      setMessages((m) => [...m, { role: "assistant", content: reply }]);
    } catch {
      setError("Sorry, I couldn't reach the assistant just now. Please call +91 78450 83016 for instant help.");
      setMessages((m) => [
        ...m,
        { role: "assistant", content: "Sorry, I couldn't reach the assistant just now. Please call or WhatsApp +91 78450 83016 — we're available 24/7." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close AI assistant" : "Open AI assistant"}
        className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-gold to-goldDark text-white shadow-2xl shadow-gold/40 flex items-center justify-center hover:scale-110 active:scale-95 transition-transform"
      >
        {open ? <CloseIcon /> : <ChatIcon />}
        {!open && <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-emerald-400 animate-pulse shadow" />}
      </button>

      {open && (
        <div className="fixed bottom-24 left-6 z-50 w-[min(24rem,calc(100vw-2.5rem))] glass-card-strong rounded-[1.75rem] shadow-2xl shadow-black/10 flex flex-col overflow-hidden" style={{ maxHeight: "min(34rem, calc(100dvh - 10rem))" }}>
          <div className="px-5 py-4 bg-gradient-to-r from-ink to-ink/95 text-white flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold/30 to-gold/60 flex items-center justify-center font-display text-lg font-semibold text-goldLight shadow-lg shadow-black/20 shrink-0">KP</div>
            <div className="flex-1 min-w-0">
              <h3 className="font-display text-lg leading-tight truncate">Konkan Assistant</h3>
              <p className="text-[11px] text-white/60 truncate">Rooms, prices &amp; travel tips &middot; instant answers</p>
            </div>
            <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-emerald-300 bg-emerald-400/10 px-2.5 py-1 rounded-full shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Online
            </span>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-cream/60">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] px-4 py-2.5 text-sm leading-relaxed whitespace-pre-wrap shadow-sm ${
                    m.role === "user"
                      ? "bg-ink text-white rounded-2xl rounded-br-md"
                      : "bg-white text-ink border border-white/60 rounded-2xl rounded-bl-md"
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white border border-white/60 rounded-2xl rounded-bl-md px-4 py-3 shadow-sm inline-flex items-center gap-1.5">
                  {[0, 1, 2].map((d) => (
                    <span key={d} className="w-2 h-2 rounded-full bg-goldDark animate-bounce" style={{ animationDelay: `${d * 0.15}s` }} />
                  ))}
                </div>
              </div>
            )}
            {error && <p className="text-[11px] text-red-500 text-center">{error}</p>}
            <div ref={bottomRef} />
          </div>

          {messages.length <= 1 && (
            <div className="px-4 pb-2 flex flex-wrap gap-2 shrink-0">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => send(s)}
                  className="text-xs font-medium px-3 py-1.5 rounded-full bg-white border border-gold/30 text-goldDark hover:bg-gold/10 transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="p-3 border-t border-white/40 bg-white/70 shrink-0"
          >
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about rooms, prices, location…"
                className="flex-1 min-w-0 px-4 py-2.5 rounded-xl text-sm bg-cream border border-white/60 text-ink placeholder:text-inkMuted focus:outline-none focus:ring-2 focus:ring-gold/40"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                aria-label="Send message"
                className="w-10 h-10 shrink-0 rounded-xl bg-ink text-white flex items-center justify-center hover:bg-goldDark disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                <SendIcon />
              </button>
            </div>
            <p className="text-[10px] text-inkMuted mt-2 text-center">AI assistant &middot; call +91 78450 83016 for bookings</p>
          </form>
        </div>
      )}
    </>
  );
}
