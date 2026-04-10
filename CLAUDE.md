# CLAUDE.md

Investment DNA — dynamic blueprint of how your firm thinks, decides, and deploys capital. A structured set of markdown files that capture an institutional investment firm's DNA, criteria, and active portfolio for use by AI agents.

## Repo structure
- `context/` — The firm's actual investment context (filled-in files)
- `templates/` — Blank templates with guidance for each section
- `interview/` — 9-session structured interview protocol for extracting firm DNA
- `evaluation/` — Deal scorecard and AI system prompts
- `examples/` — Example completed context for reference

## Key workflows
- **Deal evaluation**: Load context files + scorecard + deal materials, use evaluation prompt
- **Strategy review**: Load all context files, use strategy review prompt
- **Portfolio update**: Edit `context/portfolio-current.md` and `context/decision-log.md`

## Conventions
- All content is markdown
- Templates live in `templates/`, filled versions go in `context/`
- `portfolio-current.md` and `market-views.md` should always have a "Last updated" date
- Decision log captures both investments AND passes
