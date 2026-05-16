const BLUE = "#1E9DD9";

export default function Home() {
  return (
    <div style={{ fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif", background: "#fff", color: "#263547", minHeight: "100vh" }}>

      {/* ── Nav ── */}
      <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 40px", height: 64, borderBottom: "1px solid #E2E8F0", position: "sticky", top: 0, background: "#fff", zIndex: 50 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 30, height: 30, background: BLUE, borderRadius: 7, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: "#fff", fontWeight: 900, fontSize: 16 }}>O</span>
          </div>
          <span style={{ fontWeight: 700, fontSize: 18, letterSpacing: -0.5 }}>Opuz <span style={{ color: BLUE }}>AI</span></span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
          <a href="#features" style={{ fontSize: 14, color: "#64748B", textDecoration: "none" }}>Features</a>
          <a href="#pricing" style={{ fontSize: 14, color: "#64748B", textDecoration: "none" }}>Pricing</a>
          <a href="#roi" style={{ fontSize: 14, color: "#64748B", textDecoration: "none" }}>ROI</a>
        </div>
        <a href="#contact" style={{ padding: "9px 22px", borderRadius: 8, background: BLUE, color: "#fff", fontSize: 14, fontWeight: 600, textDecoration: "none" }}>
          Book a demo
        </a>
      </nav>

      {/* ── Hero ── */}
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 40px 60px", textAlign: "center" }}>
        <div style={{ display: "inline-block", background: "#EFF9FF", color: BLUE, fontSize: 13, fontWeight: 600, padding: "6px 16px", borderRadius: 20, marginBottom: 24, border: `1px solid ${BLUE}30` }}>
          Built for Indian B2B SaaS GTM teams
        </div>
        <h1 style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 800, lineHeight: 1.1, marginBottom: 24, letterSpacing: -1 }}>
          Your GTM team&apos;s<br /><span style={{ color: BLUE }}>AI content co-pilot</span>
        </h1>
        <p style={{ fontSize: 20, color: "#64748B", maxWidth: 620, margin: "0 auto 40px", lineHeight: 1.7 }}>
          Go from idea to published LinkedIn post in 3 minutes. Carousels, comments, engagement — all in your brand voice. Without hiring a content person.
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#contact" style={{ padding: "14px 32px", borderRadius: 10, background: BLUE, color: "#fff", fontSize: 16, fontWeight: 700, textDecoration: "none", boxShadow: `0 4px 20px ${BLUE}40` }}>
            Book a free demo
          </a>
          <a href="#features" style={{ padding: "14px 32px", borderRadius: 10, border: "1px solid #E2E8F0", color: "#263547", fontSize: 16, fontWeight: 600, textDecoration: "none" }}>
            See how it works →
          </a>
        </div>

        <div style={{ marginTop: 48, padding: "20px 32px", background: "#F8FAFC", borderRadius: 12, border: "1px solid #E2E8F0", display: "inline-flex", gap: 48, flexWrap: "wrap", justifyContent: "center" }}>
          {[
            { n: "3 min", label: "idea → published post" },
            { n: "10×", label: "more profile views in 30 days" },
            { n: "30 min", label: "content per week, not 5 hours" },
          ].map((s) => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div style={{ fontSize: 28, fontWeight: 800, color: BLUE }}>{s.n}</div>
              <div style={{ fontSize: 13, color: "#64748B", marginTop: 2 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Problem ── */}
      <section style={{ background: "#F8FAFC", padding: "72px 40px", borderTop: "1px solid #E2E8F0", borderBottom: "1px solid #E2E8F0" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: 36, fontWeight: 800, marginBottom: 16 }}>Your team is invisible on LinkedIn</h2>
          <p style={{ fontSize: 17, color: "#64748B", marginBottom: 48, lineHeight: 1.7 }}>
            Buyers check your AEs&apos; LinkedIn before taking a call. Most profiles are dead. You&apos;re losing deals before the first touchpoint.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24 }}>
            {[
              { icon: "⏱", title: "Content takes too long", body: "Writing one good post takes 2-3 hours. Multiply that by your team — it doesn't happen." },
              { icon: "🎯", title: "Generic content doesn't convert", body: "ChatGPT posts sound like ChatGPT. Buyers scroll past. You need your voice, not AI filler." },
              { icon: "📉", title: "No pipeline attribution", body: "You don't know which posts drive meetings. So you can't double down on what works." },
            ].map((c) => (
              <div key={c.title} style={{ background: "#fff", borderRadius: 12, border: "1px solid #E2E8F0", padding: "28px 24px", textAlign: "left" }}>
                <div style={{ fontSize: 32, marginBottom: 12 }}>{c.icon}</div>
                <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 8 }}>{c.title}</div>
                <div style={{ color: "#64748B", fontSize: 14, lineHeight: 1.7 }}>{c.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section style={{ maxWidth: 900, margin: "0 auto", padding: "72px 40px" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <h2 style={{ fontSize: 36, fontWeight: 800, marginBottom: 12 }}>How it works</h2>
          <p style={{ color: "#64748B", fontSize: 17 }}>Three steps. 30 minutes a week.</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {[
            { step: "01", title: "Tell us your topic or insight", body: "Paste a thought, a data point, or a trend you noticed. The AI turns it into a full LinkedIn post with carousel slides — in your voice.", badge: "AI Generate" },
            { step: "02", title: "Review, edit, post", body: "See a live preview before you post. Edit any slide, tweak the text, then hit Post. Goes directly to LinkedIn from the app.", badge: "One click" },
            { step: "03", title: "Engage while the algorithm does its job", body: "The app finds relevant posts from prospects and decision-makers. Generate a comment in your voice, post it in 10 seconds.", badge: "Engage" },
          ].map((s) => (
            <div key={s.step} style={{ display: "flex", gap: 24, background: "#F8FAFC", borderRadius: 16, border: "1px solid #E2E8F0", padding: "28px 32px", alignItems: "flex-start" }}>
              <div style={{ fontSize: 40, fontWeight: 900, color: "#E2E8F0", flexShrink: 0, lineHeight: 1 }}>{s.step}</div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8, flexWrap: "wrap" }}>
                  <span style={{ fontWeight: 700, fontSize: 18 }}>{s.title}</span>
                  <span style={{ background: "#EFF9FF", color: BLUE, fontSize: 11, fontWeight: 600, padding: "3px 10px", borderRadius: 12 }}>{s.badge}</span>
                </div>
                <p style={{ color: "#64748B", fontSize: 15, lineHeight: 1.7, margin: 0 }}>{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Features ── */}
      <section id="features" style={{ background: "#F8FAFC", padding: "72px 40px", borderTop: "1px solid #E2E8F0", borderBottom: "1px solid #E2E8F0" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontSize: 36, fontWeight: 800, marginBottom: 12 }}>Everything your GTM team needs</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {[
              { icon: "✦", title: "AI Post Generator", body: "Topic in, LinkedIn post out. Carousel slides included. Brand-consistent every time." },
              { icon: "🎨", title: "Branded Carousels", body: "Auto-generates 6-slide carousels in your company's brand colors. Download or post directly." },
              { icon: "💬", title: "Quick Comment", body: "Paste any LinkedIn post, get a thoughtful comment in your voice. Post in one click." },
              { icon: "🔍", title: "Prospect Engagement", body: "Finds posts by your ICP. Helps you comment strategically and stay top of mind." },
              { icon: "📊", title: "Content Analytics", body: "See which posts drive profile visits, connection requests, and pipeline conversations." },
              { icon: "🚀", title: "Multi-profile", body: "Manage founder + company pages simultaneously. One tool, two voices." },
            ].map((f) => (
              <div key={f.title} style={{ background: "#fff", borderRadius: 12, border: "1px solid #E2E8F0", padding: "24px" }}>
                <div style={{ fontSize: 24, marginBottom: 12 }}>{f.icon}</div>
                <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 6 }}>{f.title}</div>
                <div style={{ color: "#64748B", fontSize: 13, lineHeight: 1.7 }}>{f.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ROI ── */}
      <section id="roi" style={{ maxWidth: 900, margin: "0 auto", padding: "72px 40px" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <h2 style={{ fontSize: 36, fontWeight: 800, marginBottom: 12 }}>What does ROI look like?</h2>
          <p style={{ color: "#64748B", fontSize: 17 }}>Based on what early users are seeing in 30–90 days.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: 16, marginBottom: 40 }}>
          {[
            { metric: "10×", label: "LinkedIn profile views", sub: "Week 4 vs Week 1" },
            { metric: "3–8", label: "warm inbounds / month", sub: "from content alone" },
            { metric: "18%", label: "comment response rate", sub: "vs 3% cold outreach" },
            { metric: "₹5L", label: "one extra deal pays for", sub: "3 years of the tool" },
          ].map((r) => (
            <div key={r.label} style={{ background: "#EFF9FF", borderRadius: 12, border: `1px solid ${BLUE}30`, padding: "24px 20px", textAlign: "center" }}>
              <div style={{ fontSize: 36, fontWeight: 900, color: BLUE }}>{r.metric}</div>
              <div style={{ fontWeight: 600, fontSize: 14, marginTop: 4 }}>{r.label}</div>
              <div style={{ color: "#94A3B8", fontSize: 12, marginTop: 2 }}>{r.sub}</div>
            </div>
          ))}
        </div>
        <div style={{ background: "#263547", borderRadius: 16, padding: "32px 40px", color: "#fff", display: "flex", gap: 24, alignItems: "center", flexWrap: "wrap" }}>
          <div style={{ flex: 1, minWidth: 200 }}>
            <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 8 }}>The math is simple</div>
            <p style={{ color: "#94A3B8", fontSize: 15, lineHeight: 1.7, margin: 0 }}>
              Opuz AI costs ₹37,500 in month one. One enterprise deal at ₹3–5L ACV closes because a prospect saw your content, replied to your comment, and took a call. That&apos;s 8–13× ROI in month one.
            </p>
          </div>
          <a href="#contact" style={{ padding: "14px 28px", borderRadius: 10, background: BLUE, color: "#fff", fontSize: 15, fontWeight: 700, textDecoration: "none", whiteSpace: "nowrap" }}>
            Book a demo →
          </a>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section id="pricing" style={{ background: "#F8FAFC", padding: "72px 40px", borderTop: "1px solid #E2E8F0", borderBottom: "1px solid #E2E8F0" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: 36, fontWeight: 800, marginBottom: 12 }}>Simple pricing</h2>
          <p style={{ color: "#64748B", fontSize: 17, marginBottom: 48 }}>Done-with-you. We set it up, train your team, and stay accountable every month.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24, textAlign: "left" }}>
            <div style={{ background: "#fff", borderRadius: 16, border: "1px solid #E2E8F0", padding: "32px" }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: "#64748B", marginBottom: 8, letterSpacing: 1, textTransform: "uppercase" }}>One-time</div>
              <div style={{ fontSize: 40, fontWeight: 900, color: "#263547", marginBottom: 4 }}>₹25,000</div>
              <div style={{ color: "#64748B", fontSize: 14, marginBottom: 24 }}>Onboarding + setup</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {["Brand voice setup", "LinkedIn profile audit + optimization", "First 10 posts pre-generated", "Team walkthrough session (2 hrs)", "Workflow SOP document"].map((f) => (
                  <div key={f} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <span style={{ color: BLUE, fontWeight: 700, flexShrink: 0 }}>✓</span>
                    <span style={{ color: "#64748B", fontSize: 14 }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: BLUE, borderRadius: 16, padding: "32px", color: "#fff" }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.7)", marginBottom: 8, letterSpacing: 1, textTransform: "uppercase" }}>Monthly (3-month min)</div>
              <div style={{ fontSize: 40, fontWeight: 900, marginBottom: 4 }}>₹12,500</div>
              <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 14, marginBottom: 24 }}>per month</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {["Full platform access", "Unlimited post + carousel generation", "LinkedIn engagement tools", "Weekly content strategy call (30 min)", "Monthly performance review"].map((f) => (
                  <div key={f} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <span style={{ color: "rgba(255,255,255,0.85)", fontWeight: 700, flexShrink: 0 }}>✓</span>
                    <span style={{ color: "rgba(255,255,255,0.85)", fontSize: 14 }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p style={{ color: "#94A3B8", fontSize: 13, marginTop: 24 }}>3-month minimum commitment · Cancel after that, no questions asked</p>
        </div>
      </section>

      {/* ── CTA / Contact ── */}
      <section id="contact" style={{ maxWidth: 700, margin: "0 auto", padding: "80px 40px", textAlign: "center" }}>
        <h2 style={{ fontSize: 40, fontWeight: 800, marginBottom: 16 }}>Ready to turn LinkedIn into a pipeline source?</h2>
        <p style={{ color: "#64748B", fontSize: 17, marginBottom: 40, lineHeight: 1.7 }}>
          We&apos;re onboarding 10 founding teams in May 2026. Founding customers get locked-in pricing forever.
        </p>
        <div style={{ background: "#F8FAFC", borderRadius: 16, border: "1px solid #E2E8F0", padding: "40px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 16, textAlign: "left" }}>
            {[
              { label: "Name", placeholder: "Rahul Sharma", type: "text" },
              { label: "Company", placeholder: "Acme SaaS", type: "text" },
              { label: "LinkedIn URL", placeholder: "linkedin.com/in/yourprofile", type: "url" },
              { label: "Work email", placeholder: "you@company.com", type: "email" },
            ].map((f) => (
              <div key={f.label}>
                <label style={{ fontSize: 13, fontWeight: 600, color: "#263547", display: "block", marginBottom: 6 }}>{f.label}</label>
                <input
                  type={f.type}
                  placeholder={f.placeholder}
                  style={{ width: "100%", padding: "12px 16px", borderRadius: 8, border: "1px solid #E2E8F0", fontSize: 14, outline: "none", boxSizing: "border-box", fontFamily: "inherit" }}
                />
              </div>
            ))}
            <button style={{ width: "100%", padding: "14px", borderRadius: 10, background: BLUE, color: "#fff", fontSize: 16, fontWeight: 700, border: "none", cursor: "pointer", marginTop: 8 }}>
              Book my free demo
            </button>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ borderTop: "1px solid #E2E8F0", padding: "32px 40px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 24, height: 24, background: BLUE, borderRadius: 5, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: "#fff", fontWeight: 900, fontSize: 13 }}>O</span>
          </div>
          <span style={{ fontWeight: 700, fontSize: 15 }}>Opuz AI</span>
        </div>
        <span style={{ color: "#94A3B8", fontSize: 13 }}>Built by Penterra · david@penterra.in</span>
      </footer>

    </div>
  );
}
