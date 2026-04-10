# Getting Started

## Option 1: AI-Assisted Interview (Recommended)

The fastest way to populate your Investment DNA is a structured interview. The protocol in `interview/interview-protocol.md` walks through 9 sessions — one per context file — with specific questions designed for institutional investors.

1. **Copy the system prompt** from `interview/interview-protocol.md` into your AI tool
2. **Go session by session** — each session produces one context file
3. **Review each draft** before moving on — the interviewer will ask for corrections
4. **Save completed files** into `context/`

The interview is designed to push past vague answers. "We look for great teams" becomes "technical founders with 2+ years of domain experience, $0 in paid acquisition, and a CTO who has scaled past $10M ARR before."

**Time estimate:** ~30-45 minutes per session if you're thorough. You don't need to do all 9 in one sitting.

### Session Order

| # | Session | Output File | What It Captures |
|---|---------|-------------|-----------------|
| 1 | Firm Identity | `firm-identity.md` | Structure, mandate, AUM, LPA constraints |
| 2 | Investment DNA | `investment-dna.md` | Core beliefs, return drivers, edge |
| 3 | Investment Criteria | `investment-criteria.md` | Hard filters, thresholds, deal-breakers |
| 4 | Sector Theses | `sector-theses.md` | Active themes, conviction levels, kill signals |
| 5 | Risk Framework | `risk-framework.md` | Concentration limits, sizing, exit triggers |
| 6 | Current Portfolio | `portfolio-current.md` | Every position with thesis and status |
| 7 | Market Views | `market-views.md` | Macro outlook, scenarios, deployment pace |
| 8 | Team & Decisions | `team-and-roles.md` | IC structure, process, culture |
| 9 | Decision Log | `decision-log.md` | Best/worst deals, passes, patterns |

## Vertical Adaptation

The default templates are equity-oriented. If your firm operates in **private credit** or **commercial real estate**, read [VERTICALS.md](VERTICALS.md) before starting. It covers:

- Which template fields to replace or add for your asset class
- Vertical-specific scorecard dimensions and weights
- How to adjust the interview questions for your strategy
- Return driver models and risk frameworks by vertical

Private equity firms can use the defaults with minor additions noted in the guide.

## Option 2: Self-Directed Setup

1. **Fork or clone this repo**
2. **Copy templates to context:**
   ```bash
   cp templates/*.md context/
   ```
3. **Fill in each file** using the templates as guides — start with `firm-identity.md` and `investment-dna.md`, then work outward
4. **Add your current portfolio** to `context/portfolio-current.md`
5. **Test it** — use the evaluation prompt in `evaluation/evaluation-prompt.md` with an incoming deal to see how well the context captures your thinking

## Using Your Context for Deal Evaluation

Once your context is populated, use the system prompt in `evaluation/evaluation-prompt.md` along with the relevant context files to evaluate incoming opportunities. At minimum, include:

- `firm-identity.md` — so the agent knows your mandate
- `investment-dna.md` — core beliefs that drive decisions
- `investment-criteria.md` — hard filters to screen against
- `portfolio-current.md` — to assess fit and concentration
- `deal-scorecard.md` — scoring framework

## Keeping It Current

| Trigger | Update |
|---------|--------|
| New investment made | `portfolio-current.md`, `decision-log.md` |
| Exit or write-down | `portfolio-current.md`, `decision-log.md` |
| IC meeting | `decision-log.md`, possibly `market-views.md` |
| Quarterly review | `market-views.md`, `sector-theses.md` |
| Strategy shift | `investment-dna.md`, `investment-criteria.md` |
| Team change | `team-and-roles.md` |
