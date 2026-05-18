const B = "#1E9DD9";
const DARK = "#263547";
const BODY = "#64748B";
const BORDER = "#E2E8F0";
const BG = "#F8FAFC";
const LIGHT_BLUE = "#EFF9FF";

export default function Home() {
  return (
    <div style={{ fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif", background: "#fff", color: DARK, minHeight: "100vh" }}>

      {/* ── Nav ── */}
      <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 clamp(20px,5vw,60px)", height: 64, borderBottom: `1px solid ${BORDER}`, position: "sticky", top: 0, background: "#fff", zIndex: 50 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 32, height: 32, background: B, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: "#fff", fontWeight: 900, fontSize: 17, letterSpacing: -1 }}>O</span>
          </div>
          <span style={{ fontWeight: 800, fontSize: 18, letterSpacing: -0.5 }}>Opuz <span style={{ color: B }}>AI</span></span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          {["#who", "#how", "#pricing"].map((href, i) => (
            <a key={href} href={href} style={{ fontSize: 14, color: BODY, textDecoration: "none", display: i === 2 ? undefined : "none" }}>
              {["Who it's for", "How it works", "Pricing"][i]}
            </a>
          ))}
          <a href="#who" style={{ fontSize: 14, color: BODY, textDecoration: "none" }}>Who it&apos;s for</a>
          <a href="#how" style={{ fontSize: 14, color: BODY, textDecoration: "none" }}>How it works</a>
          <a href="#pricing" style={{ fontSize: 14, color: BODY, textDecoration: "none" }}>Pricing</a>
        </div>
        <a href="#contact" style={{ padding: "9px 22px", borderRadius: 8, background: B, color: "#fff", fontSize: 14, fontWeight: 600, textDecoration: "none" }}>
          Get early access
        </a>
      </nav>

      {/* ── Hero ── */}
      <section style={{ maxWidth: 1140, margin: "0 auto", padding: "88px clamp(20px,5vw,60px) 72px", textAlign: "center" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: LIGHT_BLUE, color: B, fontSize: 13, fontWeight: 600, padding: "6px 16px", borderRadius: 20, marginBottom: 28, border: `1px solid ${B}25` }}>
          <span>✦</span> All-in-one AI content system · LinkedIn + X
        </div>
        <h1 style={{ fontSize: "clamp(38px, 5.5vw, 72px)", fontWeight: 900, lineHeight: 1.08, marginBottom: 28, letterSpacing: -2, maxWidth: 900, margin: "0 auto 28px" }}>
          Build your audience.<br />
          <span style={{ color: B }}>Sound like yourself.</span><br />
          <span style={{ color: "#94A3B8", fontSize: "0.75em", fontWeight: 700 }}>Without the hours.</span>
        </h1>
        <p style={{ fontSize: "clamp(17px, 2vw, 21px)", color: BODY, maxWidth: 660, margin: "0 auto 44px", lineHeight: 1.75 }}>
          Opuz AI turns your thoughts into high-quality LinkedIn posts, X threads, and branded carousels — in your voice — in minutes. Built for founders, CXOs, GTM leaders, and sales teams who want inbound leads without a content team.
        </p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#contact" style={{ padding: "15px 36px", borderRadius: 10, background: B, color: "#fff", fontSize: 16, fontWeight: 700, textDecoration: "none", boxShadow: `0 6px 24px ${B}45` }}>
            Get early access →
          </a>
          <a href="#how" style={{ padding: "15px 32px", borderRadius: 10, border: `1px solid ${BORDER}`, color: DARK, fontSize: 16, fontWeight: 600, textDecoration: "none" }}>
            See how it works
          </a>
        </div>

        {/* Metric bar */}
        <div style={{ marginTop: 56, display: "flex", gap: 0, justifyContent: "center", flexWrap: "wrap", background: BG, borderRadius: 16, border: `1px solid ${BORDER}`, overflow: "hidden", maxWidth: 780, marginLeft: "auto", marginRight: "auto" }}>
          {[
            { n: "3 min", label: "thought → published post" },
            { n: "10×", label: "more profile views in 30 days" },
            { n: "6×", label: "faster than writing yourself" },
            { n: "100%", label: "your voice, not AI filler" },
          ].map((s, i) => (
            <div key={s.label} style={{ flex: "1 1 160px", padding: "24px 16px", textAlign: "center", borderRight: i < 3 ? `1px solid ${BORDER}` : "none" }}>
              <div style={{ fontSize: 30, fontWeight: 900, color: B }}>{s.n}</div>
              <div style={{ fontSize: 12, color: BODY, marginTop: 4, lineHeight: 1.4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Infographic: The system ── */}
      <section style={{ background: DARK, padding: "80px clamp(20px,5vw,60px)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: B, letterSpacing: 2, textTransform: "uppercase", marginBottom: 14 }}>The System</div>
            <h2 style={{ fontSize: "clamp(28px,4vw,48px)", fontWeight: 800, color: "#fff", lineHeight: 1.2, marginBottom: 16 }}>
              One input. Multiple platforms. Zero hours wasted.
            </h2>
            <p style={{ color: "#94A3B8", fontSize: 17, maxWidth: 580, margin: "0 auto", lineHeight: 1.7 }}>
              Drop a thought, a data point, or a rough idea. Opuz AI does the rest — writing, formatting, scheduling across LinkedIn and X in your exact voice.
            </p>
          </div>

          {/* Flow diagram */}
          <div style={{ display: "flex", alignItems: "center", gap: 0, justifyContent: "center", flexWrap: "wrap" }}>

            {/* Input */}
            <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 16, padding: "28px 24px", width: 200, flexShrink: 0 }}>
              <div style={{ fontSize: 28, marginBottom: 16 }}>💡</div>
              <div style={{ color: "#fff", fontWeight: 700, fontSize: 15, marginBottom: 12 }}>Your raw thought</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {['"AEs need LinkedIn presence"', '"Our Q1 pipeline was 30% content-driven"', '"Just got off a call and noticed..."'].map((t) => (
                  <div key={t} style={{ background: "rgba(255,255,255,0.07)", borderRadius: 8, padding: "8px 10px", fontSize: 11, color: "#94A3B8", fontStyle: "italic" }}>{t}</div>
                ))}
              </div>
            </div>

            {/* Arrow */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "0 20px", flexShrink: 0 }}>
              <div style={{ width: 60, height: 2, background: `linear-gradient(to right, rgba(255,255,255,0.1), ${B})` }} />
              <div style={{ width: 0, height: 0, borderTop: "6px solid transparent", borderBottom: "6px solid transparent", borderLeft: `8px solid ${B}`, marginLeft: -1 }} />
            </div>

            {/* Opuz AI engine */}
            <div style={{ background: `linear-gradient(135deg, ${B} 0%, #1565C0 100%)`, borderRadius: 20, padding: "32px 28px", width: 220, flexShrink: 0, textAlign: "center", boxShadow: `0 20px 60px ${B}50` }}>
              <div style={{ width: 52, height: 52, background: "rgba(255,255,255,0.2)", borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                <span style={{ color: "#fff", fontWeight: 900, fontSize: 26 }}>O</span>
              </div>
              <div style={{ color: "#fff", fontWeight: 800, fontSize: 18, marginBottom: 8 }}>Opuz AI</div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.75)", lineHeight: 1.6 }}>Understands your voice, ICP, and brand. Generates platform-native content.</div>
              <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 6 }}>
                {["✦ Your tone & voice", "✦ Platform-native format", "✦ ICP-targeted angle"].map((f) => (
                  <div key={f} style={{ fontSize: 11, color: "rgba(255,255,255,0.85)", fontWeight: 600 }}>{f}</div>
                ))}
              </div>
            </div>

            {/* Arrow */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "0 20px", flexShrink: 0 }}>
              <div style={{ width: 60, height: 2, background: `linear-gradient(to right, ${B}, rgba(255,255,255,0.1))` }} />
              <div style={{ width: 0, height: 0, borderTop: "6px solid transparent", borderBottom: "6px solid transparent", borderLeft: `8px solid rgba(255,255,255,0.3)`, marginLeft: -1 }} />
            </div>

            {/* Outputs */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12, flexShrink: 0 }}>
              {[
                { icon: "💼", platform: "LinkedIn", content: "Long-form post + 6-slide carousel", color: "#0077B5" },
                { icon: "𝕏", platform: "X (Twitter)", content: "Thread + standalone tweet", color: "#000" },
                { icon: "🎨", platform: "Branded visuals", content: "Download-ready PNG slides", color: "#7C3AED" },
              ].map((o) => (
                <div key={o.platform} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12, padding: "14px 18px", display: "flex", alignItems: "center", gap: 14, width: 260 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 9, background: o.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, color: "#fff", flexShrink: 0 }}>
                    {o.icon}
                  </div>
                  <div>
                    <div style={{ color: "#fff", fontWeight: 700, fontSize: 13 }}>{o.platform}</div>
                    <div style={{ color: "#94A3B8", fontSize: 11, marginTop: 2 }}>{o.content}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Who it's for ── */}
      <section id="who" style={{ padding: "80px clamp(20px,5vw,60px)", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: B, letterSpacing: 2, textTransform: "uppercase", marginBottom: 14 }}>Who it&apos;s for</div>
            <h2 style={{ fontSize: "clamp(28px,4vw,44px)", fontWeight: 800, lineHeight: 1.2, marginBottom: 16 }}>Built for people who drive revenue</h2>
            <p style={{ color: BODY, fontSize: 17, maxWidth: 540, margin: "0 auto" }}>
              If your personal brand on LinkedIn or X is tied to pipeline, Opuz AI is your unfair advantage.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
            {[
              {
                icon: "🚀", title: "Founders & CEOs",
                body: "You have the insights. Opuz AI turns them into consistent thought leadership that attracts investors, customers, and top talent — without you spending 4 hours a week writing.",
                outcomes: ["Inbound customer DMs", "Media & speaking invites", "Investor visibility"],
              },
              {
                icon: "🎯", title: "CXOs & Revenue Leaders",
                body: "CROs, VP Sales, CMOs — your presence on LinkedIn signals authority to your entire market. Opuz AI keeps you visible even when you're heads-down in a quarter.",
                outcomes: ["Brand credibility", "Warm pipeline influence", "Analyst & peer recognition"],
              },
              {
                icon: "⚡", title: "GTM & Sales Teams",
                body: "AEs and SDRs with a LinkedIn presence get 18% better response rates on cold outreach. Opuz AI gives your entire team a content system that takes 15 minutes a week.",
                outcomes: ["Higher reply rates", "Shorter deal cycles", "Warm inbounds from content"],
              },
              {
                icon: "📈", title: "Growth & Marketing",
                body: "Organic content is your highest-ROI channel when done consistently. Opuz AI is the infrastructure that makes consistency possible at team scale.",
                outcomes: ["Audience growth", "Content-led SEO signals", "Reduced agency dependency"],
              },
            ].map((c) => (
              <div key={c.title} style={{ background: BG, borderRadius: 16, border: `1px solid ${BORDER}`, padding: "28px 24px", display: "flex", flexDirection: "column" }}>
                <div style={{ fontSize: 36, marginBottom: 16 }}>{c.icon}</div>
                <div style={{ fontWeight: 800, fontSize: 18, marginBottom: 10, color: DARK }}>{c.title}</div>
                <p style={{ color: BODY, fontSize: 14, lineHeight: 1.75, marginBottom: 20, flex: 1 }}>{c.body}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                  {c.outcomes.map((o) => (
                    <div key={o} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <div style={{ width: 6, height: 6, borderRadius: "50%", background: B, flexShrink: 0 }} />
                      <span style={{ fontSize: 13, color: DARK, fontWeight: 500 }}>{o}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Before / After infographic ── */}
      <section style={{ background: BG, padding: "80px clamp(20px,5vw,60px)", borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h2 style={{ fontSize: "clamp(28px,4vw,44px)", fontWeight: 800, marginBottom: 16 }}>Before Opuz AI vs After</h2>
            <p style={{ color: BODY, fontSize: 17 }}>The same person. A completely different output.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: 0, alignItems: "start" }}>

            {/* Before */}
            <div style={{ background: "#fff", borderRadius: 16, border: `1px solid ${BORDER}`, overflow: "hidden" }}>
              <div style={{ background: "#FFF1F2", padding: "14px 20px", borderBottom: `1px solid #FFD6D9` }}>
                <span style={{ fontWeight: 700, fontSize: 14, color: "#BE123C" }}>✕  Before Opuz AI</span>
              </div>
              <div style={{ padding: "20px" }}>
                {[
                  { icon: "⏱", text: "3–4 hours to write one post (if it even gets done)" },
                  { icon: "😩", text: "Blank-page paralysis — you know what you want to say but can't start" },
                  { icon: "📅", text: "Inconsistent posting — once a month, maybe" },
                  { icon: "🎭", text: "Posts sound like they were written by someone else (or ChatGPT)" },
                  { icon: "📉", text: "LinkedIn profile shows no activity — buyers wonder if you're even active" },
                  { icon: "🔇", text: "X account completely dark" },
                ].map((item) => (
                  <div key={item.text} style={{ display: "flex", gap: 12, padding: "10px 0", borderBottom: `1px solid ${BORDER}`, alignItems: "flex-start" }}>
                    <span style={{ fontSize: 18, flexShrink: 0 }}>{item.icon}</span>
                    <span style={{ fontSize: 14, color: BODY, lineHeight: 1.5 }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Middle arrow */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", paddingTop: 80 }}>
              <div style={{ width: 44, height: 44, borderRadius: "50%", background: B, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: `0 4px 20px ${B}40` }}>
                <span style={{ color: "#fff", fontWeight: 900, fontSize: 20 }}>→</span>
              </div>
            </div>

            {/* After */}
            <div style={{ background: "#fff", borderRadius: 16, border: `1px solid ${BORDER}`, overflow: "hidden" }}>
              <div style={{ background: "#F0FFF4", padding: "14px 20px", borderBottom: `1px solid #BBF7D0` }}>
                <span style={{ fontWeight: 700, fontSize: 14, color: "#15803D" }}>✓  With Opuz AI</span>
              </div>
              <div style={{ padding: "20px" }}>
                {[
                  { icon: "⚡", text: "3 minutes — idea to published post, done" },
                  { icon: "✦", text: "AI generates from a rough thought or bullet points you jot down" },
                  { icon: "📆", text: "4–5 posts a week, every week, without thinking about it" },
                  { icon: "🎙", text: "Sounds exactly like you — your words, your perspective, your style" },
                  { icon: "📈", text: "Active, credible profile that buyers trust before the first call" },
                  { icon: "𝕏", text: "X threads auto-generated from the same content input" },
                ].map((item) => (
                  <div key={item.text} style={{ display: "flex", gap: 12, padding: "10px 0", borderBottom: `1px solid ${BORDER}`, alignItems: "flex-start" }}>
                    <span style={{ fontSize: 18, flexShrink: 0 }}>{item.icon}</span>
                    <span style={{ fontSize: 14, color: DARK, lineHeight: 1.5 }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section id="how" style={{ padding: "80px clamp(20px,5vw,60px)", background: "#fff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: B, letterSpacing: 2, textTransform: "uppercase", marginBottom: 14 }}>How it works</div>
            <h2 style={{ fontSize: "clamp(28px,4vw,44px)", fontWeight: 800, marginBottom: 16 }}>Four steps. 30 minutes a week.</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              {
                step: "01", icon: "💡", title: "Drop a thought or topic",
                body: "Type a rough idea, a data point, a hot take, or paste an article. No formatting needed. Opuz AI understands context.",
                detail: "e.g. 'AEs with 0 posts lose deals to ones with active profiles' — that's enough.",
              },
              {
                step: "02", icon: "✦", title: "AI writes in your voice",
                body: "Using your brand voice setup from onboarding, Opuz AI generates a full LinkedIn post, an X thread, and 6 carousel slides — all platform-native.",
                detail: "Not ChatGPT-generic. Calibrated to your vocabulary, your POV, your typical post style.",
              },
              {
                step: "03", icon: "👁", title: "Review and edit in seconds",
                body: "See a live preview. Edit any line, swap a slide, tweak the hook. Or hit post directly if it's already right.",
                detail: "Most users post without editing. That's the point.",
              },
              {
                step: "04", icon: "🚀", title: "Post to LinkedIn and X in one click",
                body: "Connected directly to your LinkedIn and X accounts. One click posts to both platforms simultaneously.",
                detail: "No copy-pasting. No Buffer. No Hootsuite. Just post.",
              },
            ].map((s) => (
              <div key={s.step} style={{ display: "flex", gap: 24, background: BG, borderRadius: 16, border: `1px solid ${BORDER}`, padding: "28px 32px", alignItems: "flex-start" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: LIGHT_BLUE, border: `1px solid ${B}25`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>
                    {s.icon}
                  </div>
                  <span style={{ fontSize: 11, fontWeight: 700, color: "#CBD5E1" }}>{s.step}</span>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 800, fontSize: 18, color: DARK, marginBottom: 8 }}>{s.title}</div>
                  <p style={{ color: BODY, fontSize: 15, lineHeight: 1.7, margin: "0 0 8px" }}>{s.body}</p>
                  <p style={{ color: "#94A3B8", fontSize: 13, margin: 0, fontStyle: "italic" }}>{s.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Platform coverage ── */}
      <section style={{ background: DARK, padding: "72px clamp(20px,5vw,60px)" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(26px,3.5vw,40px)", fontWeight: 800, color: "#fff", marginBottom: 16 }}>
            One tool. Two platforms. One voice.
          </h2>
          <p style={{ color: "#94A3B8", fontSize: 17, marginBottom: 56, lineHeight: 1.7 }}>
            Your content is platform-native — not copy-pasted. LinkedIn posts read like LinkedIn. X threads read like X. Same idea, different format, both published in 3 minutes.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, textAlign: "left" }}>
            {/* LinkedIn */}
            <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 20, padding: "32px", overflow: "hidden", position: "relative" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                <div style={{ width: 44, height: 44, borderRadius: 10, background: "#0077B5", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ color: "#fff", fontWeight: 900, fontSize: 20 }}>in</span>
                </div>
                <div>
                  <div style={{ color: "#fff", fontWeight: 700, fontSize: 18 }}>LinkedIn</div>
                  <div style={{ color: "#94A3B8", fontSize: 12 }}>Professional audience · B2B gold</div>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  "Long-form posts (up to 3,000 chars)",
                  "6-slide branded carousels (1080×1080)",
                  "Direct posting from the app",
                  "Comment generation for prospect engagement",
                  "Profile view & engagement analytics",
                ].map((f) => (
                  <div key={f} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <span style={{ color: B, fontWeight: 700, fontSize: 14, flexShrink: 0 }}>✓</span>
                    <span style={{ color: "#CBD5E1", fontSize: 14 }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* X */}
            <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 20, padding: "32px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                <div style={{ width: 44, height: 44, borderRadius: 10, background: "#000", border: "1px solid rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ color: "#fff", fontWeight: 900, fontSize: 18 }}>𝕏</span>
                </div>
                <div>
                  <div style={{ color: "#fff", fontWeight: 700, fontSize: 18 }}>X (Twitter)</div>
                  <div style={{ color: "#94A3B8", fontSize: 12 }}>Real-time audience · Broad reach</div>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  "Threads auto-generated from your topic",
                  "Standalone tweets for quick ideas",
                  "Direct posting from the app",
                  "Same voice calibration as LinkedIn",
                  "Coming Q3 2026: X analytics",
                ].map((f) => (
                  <div key={f} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <span style={{ color: f.includes("Coming") ? "#94A3B8" : B, fontWeight: 700, fontSize: 14, flexShrink: 0 }}>
                      {f.includes("Coming") ? "○" : "✓"}
                    </span>
                    <span style={{ color: f.includes("Coming") ? "#64748B" : "#CBD5E1", fontSize: 14 }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ROI numbers ── */}
      <section style={{ padding: "80px clamp(20px,5vw,60px)", background: "#fff" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h2 style={{ fontSize: "clamp(28px,4vw,44px)", fontWeight: 800, marginBottom: 16 }}>What users are seeing in 90 days</h2>
            <p style={{ color: BODY, fontSize: 17 }}>Real outcomes from consistent content with Opuz AI.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16, marginBottom: 40 }}>
            {[
              { metric: "10×", label: "LinkedIn profile views", sub: "Week 4 vs Week 1" },
              { metric: "3–8", label: "warm DMs / month", sub: "from content alone" },
              { metric: "18%", label: "comment response rate", sub: "vs 3% cold outreach" },
              { metric: "85%", label: "time saved on content", sub: "vs writing manually" },
              { metric: "4–5×", label: "posting frequency", sub: "vs before Opuz AI" },
            ].map((r) => (
              <div key={r.label} style={{ background: LIGHT_BLUE, borderRadius: 14, border: `1px solid ${B}25`, padding: "24px 18px", textAlign: "center" }}>
                <div style={{ fontSize: 34, fontWeight: 900, color: B }}>{r.metric}</div>
                <div style={{ fontWeight: 600, fontSize: 13, marginTop: 6, color: DARK }}>{r.label}</div>
                <div style={{ color: "#94A3B8", fontSize: 12, marginTop: 3 }}>{r.sub}</div>
              </div>
            ))}
          </div>
          <div style={{ background: DARK, borderRadius: 20, padding: "36px 44px", display: "flex", gap: 28, alignItems: "center", flexWrap: "wrap" }}>
            <div style={{ flex: 1, minWidth: 220 }}>
              <div style={{ fontWeight: 800, fontSize: 20, color: "#fff", marginBottom: 10 }}>One deal closes. Tool pays for 3 years.</div>
              <p style={{ color: "#94A3B8", fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                If one extra meeting books from a LinkedIn comment, and that deal closes at ₹3L+ ACV, Opuz AI has paid for itself 5–10× over. Most teams see this in the first 60 days.
              </p>
            </div>
            <a href="#contact" style={{ padding: "14px 28px", borderRadius: 10, background: B, color: "#fff", fontSize: 15, fontWeight: 700, textDecoration: "none", whiteSpace: "nowrap", boxShadow: `0 4px 20px ${B}40` }}>
              Start your 30-day trial →
            </a>
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section id="pricing" style={{ background: BG, padding: "80px clamp(20px,5vw,60px)", borderTop: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: B, letterSpacing: 2, textTransform: "uppercase", marginBottom: 14 }}>Pricing</div>
            <h2 style={{ fontSize: "clamp(28px,4vw,44px)", fontWeight: 800, marginBottom: 16 }}>Simple. Transparent. Done-with-you.</h2>
            <p style={{ color: BODY, fontSize: 17, maxWidth: 540, margin: "0 auto" }}>
              We onboard you personally, set up your brand voice, and make sure you actually use it. This isn&apos;t a self-serve SaaS you forget about.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>

            {/* Individual */}
            <div style={{ background: "#fff", borderRadius: 20, border: `1px solid ${BORDER}`, padding: "36px 32px", position: "relative" }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: BODY, letterSpacing: 1, textTransform: "uppercase", marginBottom: 12 }}>Individual</div>
              <div style={{ fontSize: 13, color: BODY, marginBottom: 24 }}>For founders, CXOs, and individual sales professionals</div>

              <div style={{ display: "flex", gap: 32, marginBottom: 28 }}>
                <div>
                  <div style={{ fontSize: 11, color: BODY, fontWeight: 600, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 4 }}>One-time setup</div>
                  <div style={{ fontSize: 36, fontWeight: 900, color: DARK }}>₹3,999</div>
                </div>
                <div style={{ width: 1, background: BORDER }} />
                <div>
                  <div style={{ fontSize: 11, color: BODY, fontWeight: 600, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 4 }}>Monthly</div>
                  <div style={{ fontSize: 36, fontWeight: 900, color: DARK }}>₹2,999</div>
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 28 }}>
                {[
                  "1 LinkedIn + 1 X account",
                  "Unlimited post & carousel generation",
                  "Brand voice setup session (1 hr)",
                  "Quick Comment tool",
                  "Basic analytics dashboard",
                  "Email support",
                ].map((f) => (
                  <div key={f} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <span style={{ color: B, fontWeight: 700, flexShrink: 0, fontSize: 14 }}>✓</span>
                    <span style={{ color: BODY, fontSize: 14 }}>{f}</span>
                  </div>
                ))}
              </div>
              <a href="#contact" style={{ display: "block", width: "100%", padding: "13px", borderRadius: 10, border: `2px solid ${B}`, color: B, fontSize: 15, fontWeight: 700, textDecoration: "none", textAlign: "center", boxSizing: "border-box" }}>
                Get started →
              </a>
            </div>

            {/* Team */}
            <div style={{ background: B, borderRadius: 20, padding: "36px 32px", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 20, right: 20, background: "rgba(255,255,255,0.2)", borderRadius: 20, padding: "4px 12px", fontSize: 11, fontWeight: 700, color: "#fff" }}>
                MOST POPULAR
              </div>
              <div style={{ fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,0.75)", letterSpacing: 1, textTransform: "uppercase", marginBottom: 12 }}>Team</div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.75)", marginBottom: 24 }}>For GTM teams, sales orgs, and company + founder combos (min. 3 members)</div>

              <div style={{ display: "flex", gap: 32, marginBottom: 28 }}>
                <div>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.65)", fontWeight: 600, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 4 }}>One-time setup</div>
                  <div style={{ fontSize: 36, fontWeight: 900, color: "#fff" }}>₹9,999</div>
                </div>
                <div style={{ width: 1, background: "rgba(255,255,255,0.2)" }} />
                <div>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.65)", fontWeight: 600, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 4 }}>Monthly</div>
                  <div style={{ fontSize: 36, fontWeight: 900, color: "#fff" }}>₹6,000</div>
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 28 }}>
                {[
                  "Up to 5 profiles (LinkedIn + X each)",
                  "Unlimited generation across all profiles",
                  "Team brand voice + individual voice calibration",
                  "Full onboarding workshop (2 hrs)",
                  "Quick Comment for all team members",
                  "Team analytics & content calendar",
                  "Monthly strategy call (30 min)",
                  "Priority WhatsApp support",
                ].map((f) => (
                  <div key={f} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <span style={{ color: "rgba(255,255,255,0.9)", fontWeight: 700, flexShrink: 0, fontSize: 14 }}>✓</span>
                    <span style={{ color: "rgba(255,255,255,0.85)", fontSize: 14 }}>{f}</span>
                  </div>
                ))}
              </div>
              <a href="#contact" style={{ display: "block", width: "100%", padding: "13px", borderRadius: 10, background: "#fff", color: B, fontSize: 15, fontWeight: 700, textDecoration: "none", textAlign: "center", boxSizing: "border-box" }}>
                Get the team plan →
              </a>
            </div>
          </div>

          <p style={{ color: "#94A3B8", fontSize: 13, textAlign: "center", marginTop: 24 }}>
            3-month minimum · Cancel after that, no questions asked · All prices in INR · GST applicable
          </p>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" style={{ maxWidth: 680, margin: "0 auto", padding: "80px clamp(20px,5vw,60px)", textAlign: "center" }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: B, letterSpacing: 2, textTransform: "uppercase", marginBottom: 16 }}>Early access</div>
        <h2 style={{ fontSize: "clamp(28px,4vw,44px)", fontWeight: 800, marginBottom: 16 }}>Join the founding batch</h2>
        <p style={{ color: BODY, fontSize: 17, marginBottom: 44, lineHeight: 1.7 }}>
          We&apos;re onboarding 20 users in May 2026. Founding members get locked-in pricing forever and direct access to David for strategy.
        </p>
        <div style={{ background: BG, borderRadius: 20, border: `1px solid ${BORDER}`, padding: "40px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 18, textAlign: "left" }}>
            {[
              { label: "Your name", placeholder: "Rahul Sharma", type: "text" },
              { label: "Company / role", placeholder: "Founder at Acme SaaS / VP Sales at...", type: "text" },
              { label: "LinkedIn profile URL", placeholder: "linkedin.com/in/yourprofile", type: "url" },
              { label: "Work email", placeholder: "you@company.com", type: "email" },
            ].map((f) => (
              <div key={f.label}>
                <label style={{ fontSize: 13, fontWeight: 600, color: DARK, display: "block", marginBottom: 7 }}>{f.label}</label>
                <input
                  type={f.type}
                  placeholder={f.placeholder}
                  style={{ width: "100%", padding: "12px 16px", borderRadius: 9, border: `1px solid ${BORDER}`, fontSize: 14, outline: "none", boxSizing: "border-box", fontFamily: "inherit", background: "#fff" }}
                />
              </div>
            ))}
            <div>
              <label style={{ fontSize: 13, fontWeight: 600, color: DARK, display: "block", marginBottom: 7 }}>Which plan? <span style={{ color: BODY, fontWeight: 400 }}>(optional)</span></label>
              <div style={{ display: "flex", gap: 10 }}>
                {["Individual", "Team"].map((p) => (
                  <label key={p} style={{ flex: 1, display: "flex", alignItems: "center", gap: 8, background: "#fff", border: `1px solid ${BORDER}`, borderRadius: 9, padding: "11px 16px", cursor: "pointer" }}>
                    <input type="radio" name="plan" value={p} style={{ accentColor: B }} />
                    <span style={{ fontSize: 14, fontWeight: 500 }}>{p}</span>
                  </label>
                ))}
              </div>
            </div>
            <button style={{ width: "100%", padding: "15px", borderRadius: 10, background: B, color: "#fff", fontSize: 16, fontWeight: 700, border: "none", cursor: "pointer", marginTop: 4, boxShadow: `0 4px 20px ${B}40` }}>
              Request early access
            </button>
            <p style={{ textAlign: "center", fontSize: 12, color: "#94A3B8", margin: 0 }}>David will personally reach out within 24 hours.</p>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ borderTop: `1px solid ${BORDER}`, padding: "28px clamp(20px,5vw,60px)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 26, height: 26, background: B, borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: "#fff", fontWeight: 900, fontSize: 14 }}>O</span>
          </div>
          <span style={{ fontWeight: 800, fontSize: 15 }}>Opuz AI</span>
        </div>
        <div style={{ display: "flex", gap: 24 }}>
          <a href="#who" style={{ fontSize: 13, color: BODY, textDecoration: "none" }}>Who it&apos;s for</a>
          <a href="#pricing" style={{ fontSize: 13, color: BODY, textDecoration: "none" }}>Pricing</a>
          <a href="mailto:david@penterra.in" style={{ fontSize: 13, color: BODY, textDecoration: "none" }}>david@penterra.in</a>
        </div>
        <span style={{ color: "#94A3B8", fontSize: 13 }}>Built by Penterra</span>
      </footer>

    </div>
  );
}
