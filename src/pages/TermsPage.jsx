import {react, useState } from "react"
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
 


function TermsPage() {
  const [active, setActive] = useState(0);
 
  const sections = [
    {
      title: "Acceptance of Terms",
      icon: "📋",
      content: `By accessing or using the RazorSuite platform ("Service"), you agree to be bound by these Terms and Conditions. If you do not agree, please discontinue use immediately.
 
These Terms apply to all merchants, developers, and users who access the Service. RazorSuite reserves the right to update these Terms at any time with reasonable notice.
 
Your continued use of the Service after updates constitutes acceptance of the modified Terms.`
    },
    {
      title: "Payment Processing",
      icon: "💳",
      content: `RazorSuite integrates with Razorpay Payment Gateway. All payment processing is subject to Razorpay's Terms of Service, RBI guidelines, and applicable Indian law.
 
You must not use the Service to process payments for prohibited goods or services including illegal items, adult content, gambling (unless licensed), or anything that violates Indian regulations.
 
Settlement timelines depend on your Razorpay account configuration. RazorSuite is not responsible for delays caused by banking partners.`
    },
    {
      title: "Razorpay Integration",
      icon: "🔗",
      content: `API keys provided through RazorSuite must be kept confidential. You are solely responsible for any unauthorized use of your credentials.
 
Webhook endpoints must be secured with HTTPS. RazorSuite will sign all outgoing webhook payloads using HMAC-SHA256. You must verify this signature before processing any payment event.
 
Rate limits apply: 300 API calls per minute for standard plans, 1,000 for Enterprise. Exceeding these limits will result in temporary throttling.`
    },
    {
      title: "Fees & Billing",
      icon: "🧾",
      content: `Platform fees are charged as a percentage of transaction volume processed through RazorSuite, in addition to Razorpay's standard processing fees.
 
Subscription fees are billed monthly or annually in advance. All fees are exclusive of GST (18%). Tax invoices are issued within 7 business days.
 
Refunds for subscription fees are not provided unless the Service has been materially unavailable for more than 72 continuous hours in a billing period.`
    },
    {
      title: "Data & Privacy",
      icon: "🔐",
      content: `RazorSuite stores transaction metadata to provide the dashboard and analytics features. No full card numbers or CVVs are stored — we are PCI-DSS Level 1 compliant.
 
User data is stored in servers located in India (AWS Mumbai region) in compliance with the Digital Personal Data Protection Act, 2023.
 
We do not sell, share, or rent your merchant or customer data to any third parties without explicit consent, except as required by law.`
    },
    {
      title: "Limitation of Liability",
      icon: "⚖️",
      content: `RazorSuite's total liability arising out of or in connection with the Service shall not exceed the fees paid by you in the three (3) months preceding the claim.
 
We are not liable for indirect, incidental, special, or consequential damages, including loss of revenue, goodwill, or data, even if advised of the possibility.
 
Force majeure events including RBI policy changes, banking system outages, natural disasters, or Razorpay service interruptions are excluded from liability.`
    },
    {
      title: "Termination",
      icon: "🚪",
      content: `Either party may terminate the agreement with 30 days' written notice. Immediate termination may occur if you breach these Terms, engage in fraudulent activity, or violate applicable law.
 
Upon termination, your access to the dashboard and API will be revoked. Transaction history will be available for export for 90 days post-termination.
 
Outstanding balances must be settled within 15 business days of termination.`
    },
    {
      title: "Governing Law",
      icon: "🏛️",
      content: `These Terms are governed by the laws of India. Disputes shall first be attempted to be resolved through good-faith negotiation within 30 days.
 
Unresolved disputes shall be subject to arbitration under the Arbitration and Conciliation Act, 1996, with a single arbitrator appointed by mutual agreement. The seat of arbitration shall be Bengaluru, Karnataka.
 
Notwithstanding the above, RazorSuite may seek injunctive relief in any court of competent jurisdiction.`
    },
  ];
 
  return (
    <div className="relative min-h-screen" style={{ background: C.bg, color: C.text }}>
      {/* <GridBg /> */}
      <div className="relative z-10 px-8 pt-16 pb-20 max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-5"
            style={{ background: "rgba(59,130,246,0.12)", border: `1px solid rgba(59,130,246,0.25)`, color: C.accent }}>
            Last updated: 1 May 2025
          </div>
          <h1 className="text-4xl font-black text-white mb-3">Terms & Conditions</h1>
          <p className="text-sm" style={{ color: C.muted }}>Please read these terms carefully before using RazorSuite.</p>
        </div>
 
        <div className="grid grid-cols-4 gap-8">
          {/* TOC sidebar */}
          <div className="col-span-1">
            <div className="sticky top-24 rounded-2xl p-4 space-y-1" style={glassCard}>
              <p className="text-xs font-bold uppercase tracking-widest mb-3 px-2" style={{ color: C.muted }}>Contents</p>
              {sections.map(({ title, icon }, i) => (
                <button key={i} onClick={() => setActive(i)}
                  className="w-full text-left px-3 py-2.5 rounded-xl text-xs transition-all flex items-center gap-2"
                  style={active === i
                    ? { background: `rgba(59,130,246,0.15)`, color: C.accent, borderLeft: `2px solid ${C.blue}` }
                    : { color: C.muted }}>
                  <span>{icon}</span>{title}
                </button>
              ))}
            </div>
          </div>
 
          {/* Content */}
          <div className="col-span-3 space-y-4">
            {sections.map(({ title, icon, content }, i) => (
              <div key={i} id={`section-${i}`} className="rounded-2xl p-7 transition-all"
                style={{ ...glassCard, ...(active === i ? { borderColor: `rgba(59,130,246,0.3)`, boxShadow: `0 0 30px rgba(59,130,246,0.08)` } : {}) }}
                onClick={() => setActive(i)}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{icon}</span>
                  <div>
                    <div className="text-xs font-bold" style={{ color: C.accent }}>Section {String(i + 1).padStart(2, "0")}</div>
                    <h2 className="text-base font-black text-white">{title}</h2>
                  </div>
                </div>
                <div className="text-sm leading-7 whitespace-pre-line" style={{ color: "#94A3B8" }}>{content}</div>
              </div>
            ))}
 
            {/* Acceptance box */}
            <div className="rounded-2xl p-6" style={{ background: `linear-gradient(135deg, rgba(59,130,246,0.15), rgba(6,182,212,0.08))`, border: `1px solid rgba(59,130,246,0.3)` }}>
              <p className="text-sm font-semibold text-white mb-3">By using RazorSuite, you confirm that you have read and agree to these Terms.</p>
              <p className="text-xs" style={{ color: C.muted }}>For questions, contact <span style={{ color: C.accent }}>legal@razorsuite.in</span> · CIN: U72900KA2021PTC123456</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default TermsPage;