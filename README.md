# Investment DNA

> Built by [Claira.io](https://claira.io) — AI infrastructure for investment teams

Dynamic blueprint of how your firm thinks, decides, and deploys capital.

A structured context package that captures an institutional investment firm's DNA, criteria, and active portfolio — designed to be consumed by AI agents for deal evaluation, portfolio review, and strategy alignment.

Works across **private equity**, **private credit**, and **commercial real estate** — see [VERTICALS.md](VERTICALS.md) for vertical-specific adaptation guidance, scorecard weights, and interview adjustments.

Inspired by [personal-context-portfolio](https://github.com/nlwhittemore/personal-context-portfolio), adapted for investment management.

## Why This Exists

Every time you ask an AI to evaluate a deal, review a position, or stress-test your portfolio, you re-explain your firm from scratch. This repo solves that by maintaining a living, modular context package that any AI system can reference.

**Use cases:**
- Evaluate incoming deals against your stated DNA and criteria
- Check whether new opportunities fit your current portfolio construction
- Identify drift between your stated strategy and actual positions
- Score and compare opportunities using a consistent scorecard
- Generate IC memos grounded in your firm's voice and framework

## Structure

```
investment-dna/
├── context/                    # Your firm's investment context (fill these in)
│   ├── firm-identity.md        # Fund structure, mandate, AUM, stage
│   ├── investment-dna.md       # Core beliefs, return targets, time horizons
│   ├── investment-criteria.md  # Hard filters, must-haves, deal-breakers
│   ├── sector-theses.md        # Sector/theme views and conviction levels
│   ├── risk-framework.md       # Concentration limits, risk tolerances
│   ├── portfolio-current.md    # Active positions, allocations, entry thesis
│   ├── market-views.md         # Current macro outlook and assumptions
│   ├── team-and-roles.md       # IC structure, decision-making process
│   └── decision-log.md         # Past decisions with reasoning and outcomes
├── templates/                  # Blank templates with guidance
├── interview/                  # Structured interview protocol
│   └── interview-protocol.md   # 9-session interview with specific questions
├── evaluation/                 # Deal evaluation framework
│   ├── deal-scorecard.md       # Weighted scoring framework
│   └── evaluation-prompt.md    # System prompt for AI deal evaluation
├── examples/                   # Example completed context for reference
├── VERTICALS.md               # Adaptation guide for PE, credit, CRE
└── GETTING-STARTED.md
```

## Design Principles

1. **Markdown-first** — Universal format readable by any AI system
2. **Modular** — Agents pull only the files relevant to the task
3. **Living document** — Update after every IC meeting, portfolio change, or market shift
4. **Vendor-agnostic** — Works with Claude, ChatGPT, Gemini, or custom tooling
5. **Opinionated** — Captures what you *actually* believe, not what sounds good in a pitch deck

## Example

See [`examples/summit-peak-capital/`](examples/summit-peak-capital/) for a complete example of a fictional growth equity firm with all 9 context files filled in — including portfolio positions, decision log with passes, and sector theses with conviction levels.

## Getting Started

See [GETTING-STARTED.md](GETTING-STARTED.md) for setup instructions.

## Built by Claira

[Claira.io](https://claira.io) builds AI infrastructure for investment teams. Investment DNA is our open-source contribution to the ecosystem — a structured way to make any AI system understand your firm before it tries to help you.

If you're looking to go beyond static context files and into automated deal evaluation, portfolio monitoring, and IC workflow automation, [check out what we're building](https://claira.io).

## Contributing

We welcome contributions — see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## License

[MIT](LICENSE) — free to use, modify, and distribute. Attribution required.
