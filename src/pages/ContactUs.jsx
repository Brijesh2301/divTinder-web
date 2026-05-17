
import {react, useState, useEffect} from "react"
const C = {
  bg: "#0A0F1E",
  surface: "#111827",
  card: "#1A2235",
  border: "rgba(99,179,237,0.12)",
  blue: "#3B82F6",
  cyan: "#06B6D4",
  glow: "rgba(59,130,246,0.18)",
  text: "#E2E8F0",
  muted: "#64748B",
  accent: "#38BDF8",
};
 
const glassCard = {
  background: `linear-gradient(135deg, ${C.card}, rgba(26,34,53,0.7))`,
  border: `1px solid ${C.border}`,
  backdropFilter: "blur(12px)",
};
 


export function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", type: "integration", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const submit = () => {
    if (!form.name || !form.email || !form.message) return;
    setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); }, 1500);
  };

  const channels = [
    { icon: "📧", label: "Email Support", value: "support@razorsuite.in", sub: "Response within 4 hours" },
    { icon: "💬", label: "Live Chat", value: "Available 9AM–9PM IST", sub: "Mon–Sat" },
    { icon: "📞", label: "Phone (Enterprise)", value: "+91 80 4567 8900", sub: "Dedicated account manager" },
    { icon: "📖", label: "Documentation", value: "docs.razorsuite.in", sub: "Guides, APIs, SDKs" },
  ];

  return (
    <div className="relative min-h-screen" style={{ background: C.bg, color: C.text }}>
      {/* <GridBg /> */}
      <div className="relative z-10 px-8 pt-16 pb-20 max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-5"
            style={{ background: "rgba(6,182,212,0.12)", border: `1px solid rgba(6,182,212,0.25)`, color: C.cyan }}>
            We reply fast ⚡
          </div>
          <h1 className="text-4xl font-black text-white mb-4">Get in Touch</h1>
          <p className="text-sm" style={{ color: C.muted }}>Questions about integration, billing, or enterprise plans? We're here.</p>
        </div>

        <div className="grid grid-cols-5 gap-8">
          {/* Form */}
          <div className="col-span-3 rounded-3xl p-8" style={glassCard}>
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-10">
                <div className="text-5xl">✉️</div>
                <h3 className="text-xl font-black text-white">Message Received!</h3>
                <p className="text-sm" style={{ color: C.muted }}>Our team will reach out to <strong className="text-white">{form.email}</strong> within 4 hours.</p>
                <button onClick={() => { setSent(false); setForm({ name: "", email: "", type: "integration", message: "" }); }}
                  className="btn btn-sm border-0 text-white mt-4"
                  style={{ background: `linear-gradient(135deg, ${C.blue}, ${C.cyan})` }}>
                  Send Another
                </button>
              </div>
            ) : (
              <div className="space-y-5">
                <h2 className="text-lg font-bold text-white mb-6">Send us a message</h2>
                <div className="grid grid-cols-2 gap-4">
                  {[{ key: "name", label: "Your Name", placeholder: "Arjun Sharma", type: "text" },
                    { key: "email", label: "Email Address", placeholder: "arjun@startup.in", type: "email" }].map(({ key, label, placeholder, type }) => (
                    <div key={key}>
                      <label className="block text-xs font-semibold mb-2" style={{ color: "#94A3B8" }}>{label}</label>
                      <input type={type} placeholder={placeholder} value={form[key]}
                        onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl text-sm text-white placeholder-gray-600 outline-none transition-all"
                        style={{ background: "#0A0F1E", border: `1px solid ${C.border}` }}/>
                    </div>
                  ))}
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-2" style={{ color: "#94A3B8" }}>Topic</label>
                  <select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl text-sm text-white outline-none"
                    style={{ background: "#0A0F1E", border: `1px solid ${C.border}` }}>
                    <option value="integration">Integration Help</option>
                    <option value="billing">Billing & Pricing</option>
                    <option value="bug">Bug Report</option>
                    <option value="enterprise">Enterprise Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-2" style={{ color: "#94A3B8" }}>Message</label>
                  <textarea rows={5} placeholder="Describe your issue or question in detail..."
                    value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-gray-600 outline-none resize-none"
                    style={{ background: "#0A0F1E", border: `1px solid ${C.border}` }}/>
                </div>
                <button onClick={submit} disabled={loading}
                  className="btn w-full border-0 text-white font-bold"
                  style={{ background: `linear-gradient(135deg, ${C.blue}, ${C.cyan})` }}>
                  {loading ? <span className="loading loading-spinner loading-sm"></span> : "Send Message →"}
                </button>
              </div>
            )}
          </div>

          {/* Channels */}
          <div className="col-span-2 space-y-4">
            {channels.map(({ icon, label, value, sub }) => (
              <div key={label} className="rounded-2xl p-5 hover:scale-[1.02] transition-all" style={glassCard}>
                <div className="text-2xl mb-3">{icon}</div>
                <div className="text-xs font-bold mb-1" style={{ color: C.accent }}>{label}</div>
                <div className="text-sm font-semibold text-white">{value}</div>
                <div className="text-xs mt-1" style={{ color: C.muted }}>{sub}</div>
              </div>
            ))}
            <div className="rounded-2xl p-5" style={{ background: `linear-gradient(135deg, rgba(59,130,246,0.15), rgba(6,182,212,0.08))`, border: `1px solid rgba(59,130,246,0.25)` }}>
              <div className="text-sm font-bold text-white mb-1">Office — Bengaluru</div>
              <div className="text-xs leading-relaxed" style={{ color: C.muted }}>
                RazorSuite Technologies Pvt Ltd<br/>
                4th Floor, Prestige Tech Park,<br/>
                Marathahalli, Bengaluru — 560037<br/>
                Karnataka, India
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default ContactPage;