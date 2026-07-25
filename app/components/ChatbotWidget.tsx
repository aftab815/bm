import { useEffect, useRef, useState } from "react";
import logo from "../../imports/image-2.png";

type Msg = { from: "bot" | "user"; text: string };

const mainQuestions = [
  { key: "about", label: "🏢 About BM Solicitors" },
  { key: "services", label: "🛠️ Our Services" },
  { key: "location", label: "📍 Office Location" },
  { key: "contact", label: "📞 Contact & WhatsApp" },
  { key: "hours", label: "⏰ Opening Hours" },
];

const relatedMap: Record<string, string[]> = {
  about: ["founded", "location", "awards"],
  services: ["pricing", "delivery", "custom"],
  team: ["chairman", "teamsize", "join"],
  contact: ["email", "phone", "hours"],
  careers: ["apply", "openings", "internship"],
  chairman: ["background", "experience", "contact"],
  pricing: ["discounts", "estimates", "contact"],
  custom: ["process", "timeline", "contact"],
};

const KB: Record<string, string> = {
  about:
    "We are BM Solicitors (Pvt) Limited, providing expert legal services across corporate, property, family, and litigation practice areas.",
  services:
    "Key services include:\n• Corporate & Commercial Law\n• Property & Conveyancing\n• Litigation & Dispute Resolution\n• Family & Personal Law\n• Regulatory & Compliance Advisory\n\nTell us your matter (visa, property, business, family) and we can guide you further.",
  team: "Our team contains skilled solicitors and advisors led by our Chairman.",
  contact:
    "You can reach BM Solicitors here:\n\nAddress: Punjab, Pakistan\nPhone: +92 324 7800007\nWhatsApp: +92 324 7800007\nEmail: info@bmsolicitor.pk",
  careers:
    "We hire legal professionals and support staff. Send your CV to careers@bmsolicitor.pk.",
  chairman:
    "Chairman: Syed Shabbiul Hassan Bukhari — seasoned legal professional with decades of experience.",
  pricing:
    "Our fees are matter-based and transparent. After understanding your issue we provide a clear estimate before starting work.",
  custom:
    "Yes, we build custom legal strategies and documentation tailored to each client's needs.",
  founded:
    "Founded with a mission to provide dependable legal services across sectors.",
  location:
    "Our registered office is in Punjab, Pakistan. Visit our Contact page for the map or message us on WhatsApp for directions.",
  awards: "Recognized for client service and successful project advisory.",
  delivery:
    "We follow clear timelines and keep clients updated throughout the project lifecycle.",
  email: "info@bmsolicitor.pk",
  phone: "+92 324 7800007",
  hours:
    "Office hours:\n• Monday – Friday: 9:00 AM – 6:00 PM\n• Saturday: 10:00 AM – 2:00 PM\n• Sunday: Closed\n\nEmergency appointments available by prior arrangement.",
  apply:
    "Send your CV to careers@bmsolicitor.pk or apply via the Careers page on our website.",
  openings:
    "Openings vary; contact HR or email careers@bmsolicitor.pk for current positions.",
  internship:
    "We offer internships from time to time; email internships@bmsolicitor.pk with your CV and area of interest.",
};

const WELCOME =
  "👋 Welcome to BM Solicitors.\n\nYou can ask about our services, office location, pricing, or any legal matter. Tap a question below or type your own message.";

function prettifyKey(k: string) {
  const found = mainQuestions.find((m) => m.key === k);
  if (found) return found.label;
  return k.charAt(0).toUpperCase() + k.slice(1);
}

function getBestKeyFromText(text: string): string | null {
  const t = text.toLowerCase();
  if (t.includes("service") || t.includes("help") || t.includes("case"))
    return "services";
  if (
    t.includes("where") ||
    t.includes("location") ||
    t.includes("address") ||
    t.includes("office")
  )
    return "location";
  if (
    t.includes("whatsapp") ||
    t.includes("phone") ||
    t.includes("contact") ||
    t.includes("number") ||
    t.includes("call")
  )
    return "contact";
  if (t.includes("time") || t.includes("open") || t.includes("hour"))
    return "hours";
  if (
    t.includes("fee") ||
    t.includes("price") ||
    t.includes("charges") ||
    t.includes("cost")
  )
    return "pricing";
  if (t.includes("job") || t.includes("career") || t.includes("intern"))
    return "careers";
  if (t.includes("chairman") || t.includes("owner") || t.includes("founder"))
    return "chairman";
  if (t.includes("about") || t.includes("firm") || t.includes("company"))
    return "about";
  return null;
}

export function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [typing, setTyping] = useState(false);
  const [input, setInput] = useState("");
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bodyRef.current)
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [messages, typing, suggestions]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  function openChat() {
    setOpen(true);
    setMessages([{ from: "bot", text: WELCOME }]);
    setSuggestions(mainQuestions.map((m) => m.key));
    setTyping(false);
    setInput("");
  }

  function closeChat() {
    setOpen(false);
  }

  function addMessage(from: Msg["from"], text: string) {
    setMessages((m) => [...m, { from, text }]);
  }

  function showMainSuggestions() {
    setSuggestions(mainQuestions.map((m) => m.key));
  }

  function replyWithDelay(
    botText: string,
    relatedKeys: string[] = [],
    showMain = true
  ) {
    setTyping(true);
    setTimeout(
      () => {
        setTyping(false);
        addMessage("bot", botText);
        setTimeout(() => {
          if (relatedKeys.length) setSuggestions(relatedKeys);
          else if (showMain) showMainSuggestions();
        }, 300);
      },
      1000 + Math.random() * 400
    );
  }

  function handleKeyChoice(key: string, label: string) {
    setSuggestions([]);
    addMessage("user", label);
    replyWithDelay(
      KB[key] || "Sorry, I do not have details on that right now.",
      relatedMap[key] || []
    );
  }

  function handleFreeText(text: string) {
    setSuggestions([]);
    addMessage("user", text);
    const key = getBestKeyFromText(text);
    if (key && KB[key]) {
      replyWithDelay(KB[key], relatedMap[key] || [], true);
    } else {
      replyWithDelay(
        "Thank you for your message. A member of the BM Solicitors team will review it and get back to you. For urgent queries, please call or WhatsApp us on +92 324 7800007.",
        [],
        true
      );
    }
  }

  function sendInput() {
    const text = input.trim();
    if (!text) return;
    setInput("");
    handleFreeText(text);
  }

  return (
    <div
      className="bm-chat-root"
      onClick={(e) => e.stopPropagation()}
      role="presentation"
    >
      {open && (
        <div
          className="bm-chat-window"
          role="dialog"
          aria-label="BM Solicitors Assistant"
        >
          <div className="bm-chat-header">
            <div className="bm-chat-brand">
              <img src={logo} alt="BM Solicitors" className="bm-chat-logo" />
              <div>
                <div className="bm-chat-title">BM Solicitors</div>
                <div className="bm-chat-sub">
                  Online • Typically replies instantly
                </div>
              </div>
            </div>
            <div className="bm-chat-actions">
              <a
                href="https://wa.me/923247800007"
                target="_blank"
                rel="noopener noreferrer"
                title="Chat on WhatsApp"
                className="bm-chat-wa"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                >
                  <path
                    fill="#FFFFFF"
                    d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.149-.672.149-.198.297-.767.967-.94 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.885-.788-1.48-1.761-1.653-2.058-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.174.198-.298.297-.497.099-.198.05-.372-.025-.521-.075-.672-1.634-.921-2.218-.242-.579-.487-.48-.672-.505-.192-.02-.395-.022-.573-.022h-.006c-.198 0-.616.073-.942.372-.326.297-1.224 1.195-1.224 2.915 0 1.72 1.255 3.378 1.431 3.615.176.238 2.467 3.771 5.986 5.215.835.357 1.479.569 1.984.726.832.266 1.593.229 2.193.139.671-.099 2.065-.845 2.355-1.658.29-.813.29-1.509.203-1.659-.087-.149-.326-.238-.672-.415z"
                  />
                  <path
                    fill="#FFFFFF"
                    d="M12 0C5.374 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.75.75 0 00.917.917l4.497-1.495A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-1.268 0-2.496-.2-3.647-.574l-.262-.114-3.819 1.273 1.273-3.819-.114-.262A9.714 9.714 0 012.25 12C2.25 6.623 6.623 2.25 12 2.25S21.75 6.623 21.75 12 17.377 21.75 12 21.75z"
                  />
                </svg>
              </a>
              <button
                type="button"
                className="bm-chat-close"
                onClick={closeChat}
                aria-label="Close chat"
              >
                ✕
              </button>
            </div>
          </div>

          <div ref={bodyRef} className="bm-chat-body">
            <div className="bm-chat-messages">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`bm-chat-bubble ${m.from === "user" ? "user" : "bot"}`}
                >
                  {m.text}
                </div>
              ))}
            </div>

            {suggestions.length > 0 && (
              <div className="bm-chat-suggestions">
                {suggestions.map((key) => (
                  <button
                    key={key}
                    type="button"
                    className="bm-chat-suggest"
                    onClick={() =>
                      handleKeyChoice(key, prettifyKey(key))
                    }
                  >
                    {prettifyKey(key)}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="bm-chat-footer">
            {typing && (
              <div className="bm-chat-typing">
                <span>BM Solicitors is typing</span>
                <span className="bm-dot" />
                <span className="bm-dot" />
                <span className="bm-dot" />
              </div>
            )}
            <div className="bm-chat-input-row">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your question or choose a suggestion…"
                className="bm-chat-input"
                autoComplete="off"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    sendInput();
                  }
                }}
              />
              <button
                type="button"
                className="bm-chat-send"
                disabled={!input.trim()}
                onClick={sendInput}
                aria-label="Send message"
              >
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill="#ffffff"
                    d="M3.4 20.6l17.3-7.4c.8-.3.8-1.5 0-1.8L3.4 4c-.7-.3-1.5.4-1.3 1.2L4 11.2c.1.3.3.5.6.6l5 1.2-5 1.2c-.3.1-.5.3-.6.6l-1.9 6C1.9 20.2 2.7 20.9 3.4 20.6z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      <button
        type="button"
        className="bm-chat-launcher"
        aria-label={open ? "Close chat" : "Open BM Solicitors chat"}
        title="BM Solicitors Assistant"
        onClick={() => (open ? closeChat() : openChat())}
      >
        <img src={logo} alt="" className="bm-chat-launcher-logo" />
      </button>
    </div>
  );
}

export default ChatbotWidget;
