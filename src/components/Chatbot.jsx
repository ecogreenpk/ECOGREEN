import { useState, useRef, useEffect } from 'react'
import '../styles/Chatbot.css'

const FAQ = [
  // Core Identity & CEO
  { q: 'What is EcoGreen?', a: 'EcoGreen (M/S ECO Waste Management) is a premier industrial waste management company in Pakistan. We specialize in transforming waste into resources for national and multinational clients.', suggestions: ['Who is the CEO?', 'What is your mission?', 'How many years of experience?'] },
  { q: 'Who is the CEO?', a: 'EcoGreen is led by our Founder & CEO, a visionary leader with over 20 years of experience in the environmental sector, dedicated to circular economy principles.', suggestions: ['What is the CEO message?', 'How many clients served?', 'What is your vision?'] },
  { q: 'How many years of experience?', a: 'We have over 20 years of industry-leading experience in waste management and environmental solutions across Pakistan.', suggestions: ['How many clients served?', 'What is your processing capacity?', 'Are you certified?'] },
  { q: 'How many clients served?', a: 'We have proudly served over 500+ national and multinational clients, providing reliable and compliant waste solutions.', suggestions: ['Which industries do you serve?', 'Do you provide certificates?', 'What is your mission?'] },

  // Facilities & Specs
  { q: 'Where are your facilities?', a: 'We operate state-of-the-art facilities: Our main Punjab hub is in Sahiwal (4-KM Hafiz Daim Road). In Sindh, we have recycling sites at Razzaqabad-Port Qasim and hazardous waste incineration at Northern Bypass, Karachi.', suggestions: ['What is your processing capacity?', 'Do you have a laboratory?', 'Is there CCTV monitoring?'] },
  { q: 'What is your processing capacity?', a: 'Our facilities are massive, covering 50+ acres with a processing capacity of over 500+ tons per day, operating 24/7.', suggestions: ['Do you have 24/7 monitoring?', 'How many employees?', 'Where are your shredders?'] },
  { q: 'Do you have a laboratory?', a: 'Yes! We have an on-site laboratory for testing and quality assurance to ensure all waste processing meets environmental standards.', suggestions: ['Are you ISO certified?', 'What about hazardous waste?', 'Do you provide certificates?'] },
  { q: 'Is there CCTV monitoring?', a: 'Absolutely. All our facilities feature 24/7 CCTV monitoring of waste collection, storage, and handling to ensure 100% transparency and security.', suggestions: ['What is the gate pass system?', 'Is your facility secure?', 'Do you provide reports?'] },

  // Services & 3R
  { q: 'What services do you offer?', a: 'We provide Hazardous Waste Management, Non-Hazardous Waste Collection, Aerobic Composting, Metal & Scrap Recycling, and 3R-based Disposal (Reduce, Reuse, Recycle).', suggestions: ['What is hazardous waste handling?', 'Tell me about composting.', 'Do you recycle plastic?'] },
  { q: 'Tell me about composting.', a: 'We convert food waste into high-quality compost through aerobic decomposition, effectively returning nutrients back to the environment.', suggestions: ['What is the 3R system?', 'Do you handle industrial waste?', 'How do I request a pickup?'] },
  { q: 'What is the 3R system?', a: 'Our "3R" methodology stands for Reduce, Reuse, and Recycle. It is the core of our sustainability strategy to minimize landfill waste.', suggestions: ['What is your mission?', 'Tell me about your facilities.', 'Do you recycle metal?'] },
  { q: 'What is hazardous waste handling?', a: 'We are government-licensed to handle toxic, medical, and chemical waste through incineration and chemical treatment with zero waste to landfill.', suggestions: ['Are you certified?', 'Do you have transport permits?', 'Which chemicals can you handle?'] },

  // Compliance & Certs
  { q: 'Are you ISO certified?', a: 'Yes, we are ISO 14001:2015 (Environmental Management) and ISO 45001:2018 (Occupational Health & Safety) certified.', suggestions: ['Do you have a government license?', 'Do you provide certificates?', 'What about transport permits?'] },
  { q: 'Do you provide certificates?', a: 'Yes! Every disposal/recycling load is documented with a unique Gate Pass number and an official Disposal Certificate for your audit trails.', suggestions: ['What is the gate pass system?', 'How do I request a pickup?', 'Do you provide weighing slips?'] },
  { q: 'What is the gate pass system?', a: 'Our gate pass system ensures full traceability. Every waste movement is logged with a gate pass number, weigh slip, and final disposal confirmation.', suggestions: ['Do you provide certificates?', 'Is your process transparent?', 'How do you track waste?'] },

  // Logistics & Contact
  { q: 'What areas do you serve?', a: 'We serve national and multinational companies nationwide across Pakistan, including major hubs in Karachi, Lahore, Sahiwal, and beyond.', suggestions: ['How do I request a pickup?', 'Where are your facilities?', 'Do you provide transport?'] },
  { q: 'How do I request a pickup?', a: 'You can request a pickup via our "Get a Quote" page, the Contact section, or by messaging our team directly on WhatsApp.', suggestions: ['How are materials priced?', 'What info do you need?', 'Do you serve industries?'] },
  { q: 'How are materials priced?', a: 'Pricing is based on material type, volume, and current PKR market rates. We provide competitive, transparent pricing models for all clients.', suggestions: ['How do I get a quote?', 'Do you buy scrap?', 'What is your capacity?'] }
];

function getSuggestions(answer) {
  for (const item of FAQ) {
    if (item.a === answer && item.suggestions) {
      return item.suggestions;
    }
  }
  return ['What services do you offer?', 'How do I request a pickup?', 'Where are your facilities located?'];
}

function matchAnswer(text) {
  const t = text.toLowerCase().trim();
  if (t.length < 2) return null;

  let bestMatch = null;
  let highestScore = 0;

  // Keyword Scorer
  for (const item of FAQ) {
    const question = item.q.toLowerCase();
    const words = question.split(/[^a-z0-9]+/).filter(w => w.length > 2);
    let score = 0;

    // Direct matches score higher
    if (t === question) score += 10;

    // Pattern Matching
    for (const word of words) {
      if (t.includes(word)) score += 2;
    }

    if (score > highestScore) {
      highestScore = score;
      bestMatch = item.a;
    }
  }

  // Fallback Logic for Very Specific Keywords
  if (highestScore < 2) {
    if (t.includes('ceo') || t.includes('founder') || t.includes('leader') || t.includes('boss'))
      return FAQ.find(f => f.q.includes('CEO')).a;
    if (t.includes('capacity') || t.includes('ton') || t.includes('volume') || t.includes('amount'))
      return 'Our processing capacity is over 500+ tons per day across our 50+ acre facilities.';
    if (t.includes('sahiwal') || t.includes('punjab') || t.includes('hafiz daim'))
      return 'Our Punjab facility is located at 4-KM Hafiz Daim Road, Sahiwal. It features advanced shredding and composting systems.';
    if (t.includes('karachi') || t.includes('sindh') || t.includes('port qasim') || t.includes('northern bypass'))
      return 'In Karachi, we have recycling sites at Razzaqabad-Port Qasim and a hazardous waste incineration plant at Northern Bypass.';
    if (t.includes('iso') || t.includes('14001') || t.includes('45001'))
      return 'Yes, we are ISO 14001:2015 and ISO 45001:2018 certified for environmental and safety management.';
    if (t.includes('years') || t.includes('experience') || t.includes('since') || t.includes('old'))
      return 'EcoGreen has over 20 years of experience in the industrial waste management sector.';
    if (t.includes('500') || t.includes('clients'))
      return 'We have served over 500+ clients, ranging from small local businesses to large national and multinational corporations.';
  }

  return highestScore >= 2 ? bestMatch : null;
}

function Chatbot() {
  const [open, setOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hi! I am your EcoGreen assistant. How can I help you with recycling today?' }
  ]);
  const [suggestions, setSuggestions] = useState(['What services do you offer?', 'How do I request a pickup?', 'Where are your facilities located?']);
  const [input, setInput] = useState('');
  const bottomRef = useRef(null);
  const inputRef = useRef(null);
  const replyTimerRef = useRef(null);

  useEffect(() => {
    if (open && bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, open, isTyping]);

  useEffect(() => {
    return () => {
      if (replyTimerRef.current) {
        clearTimeout(replyTimerRef.current);
      }
    };
  }, []);

  const send = (text) => {
    if (!text.trim()) return;

    setMessages(prev => [...prev, { from: 'user', text }]);
    setInput('');
    setIsTyping(true);

    if (replyTimerRef.current) {
      clearTimeout(replyTimerRef.current);
    }
    replyTimerRef.current = setTimeout(() => {
      const auto = matchAnswer(text);
      const reply = auto ?? "I'm not sure about that. Would you like to speak with our team via WhatsApp for more details?";
      setMessages(prev => [...prev, { from: 'bot', text: reply }]);
      setSuggestions(getSuggestions(reply));
      setIsTyping(false);
    }, 800);
  };

  return (
    <div className={`chatbot ${open ? 'open' : ''}`}>
      <div className="chat-toggle" onClick={() => setOpen(!open)}>
        <span className="chat-icon">{open ? '✕' : '💬'}</span>
        {!open && <span className="chat-label">Questions?</span>}
      </div>

      <div className="chat-panel">
        <button className="chat-close-btn" onClick={() => setOpen(false)}>✕</button>

        <div className="chat-header">
          <div className="header-info">
            <div className="online-indicator" />
            <strong>EcoGreen Assistant</strong>
          </div>
          <button className="close-btn" onClick={() => setOpen(false)}>×</button>
        </div>

        <div className="chat-body">
          {messages.map((m, i) => (
            <div key={i} className={`chat-msg ${m.from}`}>
              <div className="msg-text">{m.text}</div>
            </div>
          ))}
          {isTyping && (
            <div className="chat-msg bot">
              <div className="msg-text typing-dots"><span>.</span><span>.</span><span>.</span></div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        <div className="chat-actions">
          {suggestions.length > 0 && (
            <div className="quick-questions">
              {suggestions.map((s, i) => (
                <button key={i} className="quick-btn" onClick={() => send(s)}>{s}</button>
              ))}
            </div>
          )}
          <div className="chat-input-wrap">
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') send(input) }}
              placeholder="Type your message..."
            />
            <button className="send-btn" onClick={() => send(input)}>
              <svg viewBox="0 0 24 24" width="20" height="20"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" fill="currentColor" /></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;