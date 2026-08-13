type VercelRequest = { method?: string; body?: unknown };
type VercelResponse = {
  status: (code: number) => VercelResponse;
  json: (body: unknown) => void;
};

const GROQ_URL = "https://api.groq.com/openai/v1/chat/completions";
const MODEL = "llama-3.3-70b-versatile";

const SYSTEM_PROMPT = `You are "Konkan Assistant", a warm, helpful AI assistant for Konkan Palace Lodge, a family-run budget lodge in Chiplun, Maharashtra, India.
Answer guests in a friendly, concise tone (1-4 sentences). Only answer questions related to the lodge, its rooms, pricing, amenities, location, or local travel. For anything unrelated, politely say you can only help with lodge questions and suggest calling +91 78450 83016.
NEVER invent prices, facilities, or contact details that are not listed below. If unsure, advise calling or WhatsApp-ing +91 78450 83016.

ABOUT THE LODGE:
- Name: Konkan Palace Lodge
- Address: 1648, Behind Juna Bus Stand, Bazaarpeth, Chiplun, Maharashtra 415605, India
- Phone / WhatsApp: +91 78450 83016 (call anytime — open 24 hours, 7 days a week)
- Email: Nurmuhamed.mohideen@gmail.com
- Type: Clean, budget-friendly rooms that are naturally cool and well-ventilated with ceiling fans (no air-conditioning). Perfect for families, business travelers, pilgrims, and transit guests.
- Free WiFi, free parking for cars and bikes, 24/7 hot water with power backup, daily housekeeping, fresh linens, attached bathrooms, city views.

ROOMS & RATES (per night):
- Standard Single Room — ₹550 (1 guest): single bed, ceiling fan, attached bathroom, city view, work desk, free WiFi.
- Standard Double Room — ₹700 (2 guests): double bed, ceiling fan, attached bathroom, city view, wardrobe, free WiFi.
- Family Room (Triple Bed) — ₹1300 (3 guests): three beds, ceiling fan, attached bathroom, balcony & city view, free WiFi.
Bookings are by phone or WhatsApp: call +91 78450 83016 for instant confirmation and the best rates.

LOCATION & NEARBY:
- Juna Bus Stand: right behind the lodge (0 min walk)
- Chiplun Railway Station: ~8 min drive (~2.5 km)
- Parshuram Temple: ~12 min drive (~6 km)
- Sawatsada Waterfall: ~25 min drive (~15 km)
- Bazaarpeth Market: ~2 min walk

Response style: warm, concise, encouraging direct booking by phone/WhatsApp. Use simple language. Avoid markdown tables.`;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const messages = (req.body as { messages?: unknown[] } | undefined)?.messages;
  if (!Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: "messages array is required" });
  }

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "AI service is not configured" });
  }

  try {
    const groq = await fetch(GROQ_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: MODEL,
        messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
        temperature: 0.6,
        max_tokens: 600,
      }),
    });

    const data = await groq.json();
    if (!groq.ok) {
      return res.status(groq.status).json({ error: data?.error?.message ?? "AI request failed" });
    }

    return res.status(200).json(data);
  } catch (err) {
    console.error("Groq API error:", err);
    return res.status(502).json({ error: "AI service unavailable" });
  }
}
