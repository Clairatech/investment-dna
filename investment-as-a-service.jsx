import { useState } from "react";

const DATA = {
  pillars: [
    {
      id: "ingest",
      num: "01",
      name: "Ingestion",
      short: "Capture everything. Miss nothing.",
      today: "Analysts spend 60–80 hours per deal organizing documents before analysis begins. Information is scattered across emails, data rooms, and broker portals.",
      vision: "Every document — CIM, financial model, legal agreement, market report — is parsed, classified, and indexed automatically. The analyst's job shifts from organizing to analyzing.",
      items: [
        "CIMs, teasers, pitch decks",
        "Data rooms — financials, legal, ops",
        "Market and sector reports",
        "Third-party feeds (ratings, comps)",
        "Broker and advisor submissions",
      ],
    },
    {
      id: "standard",
      num: "02",
      name: "Standardization",
      short: "Same rigor. Every deal. Every time.",
      today: "Memo quality depends on which associate wrote it. Financial models use different assumptions deal to deal. The IC reviews inconsistently prepared materials.",
      vision: "Every deal gets the same analytical baseline — consistent financial models, systematic risk flagging, comparable depth. Judgment gets applied to uniformly prepared materials.",
      items: [
        "Financial models (DCF, LBO, credit analysis)",
        "Standardized company overview",
        "Systematic risk identification",
        "Comparable transaction analysis",
        "Investment memo drafting",
      ],
    },
    {
      id: "decide",
      num: "03",
      name: "Decision Engine",
      short: "Your best investor. On every deal.",
      today: "The firm's investment DNA lives in partners' heads. It's applied inconsistently and is hard to articulate to new team members or LPs.",
      vision: "Return thresholds, sector preferences, structural requirements, and risk appetite are codified and scored against every opportunity — alongside current portfolio concentration and the full history of deals seen.",
      items: [
        "Portfolio fit (concentration, correlation)",
        "Investment DNA alignment scoring",
        "Capital allocation optimization",
        "Pattern matching across deal history",
        "IC preparation and conviction scoring",
      ],
    },
  ],
  adjacent: {
    name: "Post-Investment",
    desc: "Portfolio monitoring, covenant tracking, follow-on detection, exit timing. The feedback loop that makes the decision engine sharper every quarter.",
  },
  human: [
    { name: "Deal Sourcing", desc: "Relationships, proprietary networks, and the trust that earns a seat at the table" },
    { name: "Capital Raising", desc: "LP relationships, fund strategy, and the storytelling that raises the next fund" },
    { name: "Final Judgment", desc: "The IC vote. The conviction call on a deal that scores well but feels wrong — or vice versa" },
  ],
};

export default function InvestmentAsAService() {
  const [open, setOpen] = useState(null);
  const [view, setView] = useState("vision");

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#fafaf8",
        fontFamily: '"Georgia", "Times New Roman", serif',
        color: "#1a1a1a",
      }}
    >
      {/* Nav */}
      <div
        style={{
          borderBottom: "1px solid #e0ddd8",
          padding: "14px 40px",
          fontFamily: '"Helvetica Neue", Arial, sans-serif',
          fontSize: 11,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "#999",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ color: "#1a1a1a", fontWeight: 600 }}>claira</span>
          <span style={{ color: "#ccc" }}>/</span>
          <span>investment-dna</span>
        </div>
        <a
          href="https://github.com/Claira-AI/investment-dna"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#999",
            textDecoration: "none",
            borderBottom: "1px solid #ddd",
            paddingBottom: 1,
          }}
        >
          View on GitHub
        </a>
      </div>

      {/* Hero */}
      <div style={{ padding: "72px 40px 20px", maxWidth: 720 }}>
        <div
          style={{
            fontFamily: '"Helvetica Neue", Arial, sans-serif',
            fontSize: 10,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#b0ada6",
            marginBottom: 16,
          }}
        >
          Open source by Claira
        </div>
        <h1
          style={{
            fontSize: 46,
            fontWeight: 400,
            lineHeight: 1.12,
            margin: 0,
            letterSpacing: "-0.025em",
          }}
        >
          The Full-Stack
          <br />
          Investment Firm
        </h1>
        <div
          style={{
            width: 48,
            height: 2,
            background: "#1a1a1a",
            margin: "28px 0",
          }}
        />
        <p
          style={{
            fontSize: 18,
            lineHeight: 1.65,
            color: "#555",
            margin: "0 0 12px",
            maxWidth: 580,
          }}
        >
          An idealized framework for how investment firms could work — where
          ingestion, standardization, and decision-making become infrastructure,
          and human energy goes entirely to sourcing and capital.
        </p>
        <p
          style={{
            fontSize: 15,
            lineHeight: 1.6,
            color: "#999",
            margin: 0,
            maxWidth: 580,
            fontStyle: "italic",
          }}
        >
          We're not there yet. But this is the direction — and Investment DNA is
          the first building block. A structured, open-source way to codify how
          your firm thinks, decides, and deploys capital.
        </p>
      </div>

      {/* Toggle: Today vs Vision */}
      <div style={{ padding: "32px 40px 12px" }}>
        <div
          style={{
            display: "inline-flex",
            border: "1px solid #e0ddd8",
            fontFamily: '"Helvetica Neue", Arial, sans-serif',
            fontSize: 12,
            letterSpacing: "0.04em",
          }}
        >
          {["today", "vision"].map((v) => (
            <button
              key={v}
              onClick={() => setView(v)}
              style={{
                padding: "8px 20px",
                border: "none",
                background: view === v ? "#1a1a1a" : "transparent",
                color: view === v ? "#fafaf8" : "#888",
                cursor: "pointer",
                fontFamily: "inherit",
                fontSize: "inherit",
                letterSpacing: "inherit",
                textTransform: "uppercase",
              }}
            >
              {v === "today" ? "How it works today" : "Where this is going"}
            </button>
          ))}
        </div>
      </div>

      {/* Pipeline label */}
      <div
        style={{
          padding: "16px 40px 8px",
          fontFamily: '"Helvetica Neue", Arial, sans-serif',
          fontSize: 10,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "#b0ada6",
        }}
      >
        Core pipeline
      </div>

      {/* Three pillars */}
      <div
        style={{
          display: "flex",
          borderTop: "1px solid #e0ddd8",
          borderBottom: "1px solid #e0ddd8",
        }}
      >
        {DATA.pillars.map((p, i) => {
          const isOpen = open === p.id;
          return (
            <div
              key={p.id}
              onClick={() => setOpen(isOpen ? null : p.id)}
              style={{
                flex: 1,
                padding: "36px 32px 28px",
                borderRight: i < 2 ? "1px solid #e0ddd8" : "none",
                cursor: "pointer",
                background: isOpen ? "#f4f3f0" : "transparent",
                transition: "background 0.2s",
              }}
            >
              <div
                style={{
                  fontFamily: '"Helvetica Neue", Arial, sans-serif',
                  fontSize: 11,
                  color: "#b0ada6",
                  marginBottom: 12,
                  letterSpacing: "0.08em",
                }}
              >
                {p.num}
              </div>
              <h2
                style={{
                  fontSize: 26,
                  fontWeight: 400,
                  margin: "0 0 6px",
                  letterSpacing: "-0.015em",
                }}
              >
                {p.name}
              </h2>
              <p
                style={{
                  fontSize: 14,
                  fontStyle: "italic",
                  color: "#888",
                  margin: "0 0 20px",
                  lineHeight: 1.5,
                }}
              >
                {p.short}
              </p>

              {/* Context block: today vs vision */}
              <div
                style={{
                  fontSize: 14,
                  lineHeight: 1.6,
                  color: view === "today" ? "#996" : "#468",
                  margin: "0 0 20px",
                  padding: "12px 14px",
                  background: view === "today" ? "#f9f6ee" : "#f0f4f8",
                  borderLeft: view === "today"
                    ? "3px solid #ddb"
                    : "3px solid #aac8e0",
                }}
              >
                {view === "today" ? p.today : p.vision}
              </div>

              {/* Items */}
              <div style={{ marginBottom: isOpen ? 20 : 0 }}>
                {p.items.map((item, j) => (
                  <div
                    key={j}
                    style={{
                      fontFamily: '"Helvetica Neue", Arial, sans-serif',
                      fontSize: 13,
                      color: "#666",
                      padding: "6px 0",
                      borderBottom:
                        j < p.items.length - 1
                          ? "1px solid #eae8e3"
                          : "none",
                      lineHeight: 1.45,
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>

              {/* Toggle hint */}
              <div
                style={{
                  fontFamily: '"Helvetica Neue", Arial, sans-serif',
                  fontSize: 11,
                  color: "#b0ada6",
                  marginTop: 16,
                  letterSpacing: "0.04em",
                }}
              >
                {isOpen ? "— collapse" : "+ expand"}
              </div>
            </div>
          );
        })}
      </div>

      {/* Flow */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 12,
          padding: "20px 40px",
          fontFamily: '"Helvetica Neue", Arial, sans-serif',
          fontSize: 11,
          color: "#b0ada6",
          letterSpacing: "0.06em",
        }}
      >
        <span>Ingest</span>
        <span style={{ color: "#ccc" }}>&rarr;</span>
        <span>Standardize</span>
        <span style={{ color: "#ccc" }}>&rarr;</span>
        <span>Decide</span>
        <span style={{ color: "#ccc", margin: "0 4px" }}>|</span>
        <span style={{ borderBottom: "1px dashed #ccc", paddingBottom: 1 }}>
          feedback loop
        </span>
        <span style={{ color: "#ccc" }}>&larr;</span>
        <span>Post-Investment</span>
      </div>

      {/* Adjacent */}
      <div
        style={{
          margin: "0 40px",
          padding: "24px 32px",
          border: "1px dashed #d6d3cc",
          background: "#f8f7f4",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: 16,
            marginBottom: 8,
          }}
        >
          <h3 style={{ fontSize: 18, fontWeight: 400, margin: 0 }}>
            {DATA.adjacent.name}
          </h3>
          <span
            style={{
              fontFamily: '"Helvetica Neue", Arial, sans-serif',
              fontSize: 10,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "#b0ada6",
              border: "1px solid #d6d3cc",
              padding: "2px 8px",
            }}
          >
            Adjacent
          </span>
        </div>
        <p
          style={{
            fontSize: 15,
            lineHeight: 1.65,
            color: "#666",
            margin: 0,
          }}
        >
          {DATA.adjacent.desc}
        </p>
      </div>

      {/* Divider */}
      <div
        style={{
          margin: "56px 40px 0",
          borderTop: "1px solid #e0ddd8",
          paddingTop: 8,
          fontFamily: '"Helvetica Neue", Arial, sans-serif',
          fontSize: 10,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "#b0ada6",
        }}
      >
        What stays human
      </div>

      {/* Human roles */}
      <div style={{ display: "flex", padding: "28px 40px 0", gap: 0 }}>
        {DATA.human.map((h, i) => (
          <div
            key={h.name}
            style={{
              flex: 1,
              paddingRight: i < 2 ? 32 : 0,
              borderRight: i < 2 ? "1px solid #e0ddd8" : "none",
              marginRight: i < 2 ? 32 : 0,
            }}
          >
            <h4 style={{ fontSize: 20, fontWeight: 400, margin: "0 0 6px" }}>
              {h.name}
            </h4>
            <p
              style={{
                fontSize: 14,
                color: "#888",
                margin: 0,
                lineHeight: 1.55,
              }}
            >
              {h.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Thesis */}
      <div
        style={{
          margin: "64px 40px 0",
          padding: "40px 0 32px",
          borderTop: "2px solid #1a1a1a",
        }}
      >
        <p
          style={{
            fontSize: 21,
            lineHeight: 1.6,
            margin: "0 0 20px",
            maxWidth: 660,
            letterSpacing: "-0.01em",
          }}
        >
          We believe the investment process has three layers that can become
          infrastructure. Not today — the tooling isn't mature enough and the
          trust isn't built yet. But the trajectory is clear, and the firms that
          start codifying their DNA now will have a structural edge when the
          infrastructure catches up.
        </p>
        <p
          style={{
            fontSize: 15,
            lineHeight: 1.6,
            color: "#888",
            margin: 0,
            maxWidth: 660,
          }}
        >
          Investment DNA is our open-source starting point — a structured way to
          capture how your firm thinks, so that as tooling matures, your
          decision-making process is ready to plug in. Not a black box. A
          blueprint.
        </p>
      </div>

      {/* CTA */}
      <div style={{ padding: "20px 40px 24px" }}>
        <a
          href="https://github.com/Claira-AI/investment-dna"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            fontFamily: '"Helvetica Neue", Arial, sans-serif',
            fontSize: 13,
            letterSpacing: "0.06em",
            padding: "12px 28px",
            background: "#1a1a1a",
            color: "#fafaf8",
            textDecoration: "none",
            textTransform: "uppercase",
          }}
        >
          Get started on GitHub
        </a>
        <a
          href="https://claira.io"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            fontFamily: '"Helvetica Neue", Arial, sans-serif',
            fontSize: 13,
            letterSpacing: "0.06em",
            padding: "12px 28px",
            color: "#888",
            textDecoration: "none",
            marginLeft: 12,
          }}
        >
          About Claira &rarr;
        </a>
      </div>

      {/* Footer */}
      <div
        style={{
          padding: "24px 40px 40px",
          borderTop: "1px solid #e0ddd8",
          marginTop: 40,
          fontFamily: '"Helvetica Neue", Arial, sans-serif',
          fontSize: 11,
          color: "#ccc",
          letterSpacing: "0.06em",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span>Claira &middot; Investment DNA &middot; Open Source</span>
        <span>MIT License &middot; 2026</span>
      </div>
    </div>
  );
}
