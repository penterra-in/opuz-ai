"use client";
import { useState } from "react";

const B = "#1E9DD9";
const DARK = "#263547";
const BODY = "#64748B";
const BORDER = "#E2E8F0";
const BG = "#F8FAFC";

const FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLSeeC4MpHWAGgf6OwG_-OUuD8jSMequazuTGsTnkpeOVrhLaxw/formResponse";

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 16px",
  borderRadius: 9,
  border: `1px solid ${BORDER}`,
  fontSize: 14,
  outline: "none",
  boxSizing: "border-box",
  fontFamily: "inherit",
  background: "#fff",
  color: DARK,
};

const labelStyle: React.CSSProperties = {
  fontSize: 13,
  fontWeight: 600,
  color: DARK,
  display: "block",
  marginBottom: 7,
};

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [plan, setPlan] = useState<"Individual" | "Team">("Individual");

  if (submitted) {
    return (
      <div style={{ background: BG, borderRadius: 20, border: `1px solid ${BORDER}`, padding: "56px 40px", textAlign: "center" }}>
        <div style={{ width: 56, height: 56, borderRadius: "50%", background: "#F0FFF4", border: "1px solid #BBF7D0", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", fontSize: 26 }}>
          ✓
        </div>
        <div style={{ fontWeight: 800, fontSize: 22, color: DARK, marginBottom: 10 }}>You&apos;re on the list</div>
        <p style={{ color: BODY, fontSize: 16, lineHeight: 1.7, marginBottom: 8 }}>
          David will personally reach out within 24 hours to schedule your onboarding call.
        </p>
        <p style={{ color: "#94A3B8", fontSize: 13 }}>Check your inbox at the email you provided.</p>
      </div>
    );
  }

  return (
    <>
      {/* Hidden iframe absorbs the Google Forms POST response so the page doesn't redirect */}
      <iframe name="hidden_iframe" style={{ display: "none" }} aria-hidden="true" />

      <form
        action={FORM_ACTION}
        method="POST"
        target="hidden_iframe"
        onSubmit={() => setTimeout(() => setSubmitted(true), 600)}
        style={{ background: BG, borderRadius: 20, border: `1px solid ${BORDER}`, padding: "40px", display: "flex", flexDirection: "column", gap: 18 }}
      >
        {/* Name */}
        <div>
          <label style={labelStyle}>Your name</label>
          <input type="text" name="entry.231195685" placeholder="Rahul Sharma" required style={inputStyle} />
        </div>

        {/* Company + Role — two columns */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          <div>
            <label style={labelStyle}>Company</label>
            <input type="text" name="entry.151012290" placeholder="Acme SaaS" required style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle}>Your role</label>
            <input type="text" name="entry.86255134" placeholder="Founder / VP Sales / CRO..." required style={inputStyle} />
          </div>
        </div>

        {/* LinkedIn */}
        <div>
          <label style={labelStyle}>LinkedIn profile URL</label>
          <input type="url" name="entry.2024730832" placeholder="https://linkedin.com/in/yourprofile" required style={inputStyle} />
        </div>

        {/* Email */}
        <div>
          <label style={labelStyle}>Work email</label>
          <input type="email" name="entry.1860461660" placeholder="you@company.com" required style={inputStyle} />
        </div>

        {/* Plan */}
        <div>
          <label style={labelStyle}>Which plan are you interested in?</label>
          <div style={{ display: "flex", gap: 10 }}>
            {(["Individual", "Team"] as const).map((p) => (
              <label
                key={p}
                onClick={() => setPlan(p)}
                style={{
                  flex: 1, display: "flex", alignItems: "center", gap: 10,
                  background: plan === p ? "#EFF9FF" : "#fff",
                  border: `1.5px solid ${plan === p ? B : BORDER}`,
                  borderRadius: 9, padding: "11px 16px", cursor: "pointer",
                  transition: "all 0.15s",
                }}
              >
                <input
                  type="radio"
                  name="entry.303294382"
                  value={p}
                  checked={plan === p}
                  onChange={() => setPlan(p)}
                  style={{ accentColor: B }}
                />
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: DARK }}>{p}</div>
                  <div style={{ fontSize: 11, color: BODY }}>
                    {p === "Individual" ? "₹3,999 setup · ₹2,999/mo" : "₹9,999 setup · ₹6,000/mo · min 3"}
                  </div>
                </div>
              </label>
            ))}
          </div>
        </div>

        <button
          type="submit"
          style={{ width: "100%", padding: "15px", borderRadius: 10, background: B, color: "#fff", fontSize: 16, fontWeight: 700, border: "none", cursor: "pointer", marginTop: 4, boxShadow: `0 4px 20px ${B}40` }}
        >
          Request early access
        </button>
        <p style={{ textAlign: "center", fontSize: 12, color: "#94A3B8", margin: 0 }}>
          David will personally reach out within 24 hours.
        </p>
      </form>
    </>
  );
}
