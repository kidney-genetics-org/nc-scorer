# NC-Scorer

[![CI](https://github.com/kidney-genetics-org/nc-scorer/actions/workflows/ci.yml/badge.svg)](https://github.com/kidney-genetics-org/nc-scorer/actions/workflows/ci.yml)
[![Release](https://img.shields.io/github/v/release/kidney-genetics-org/nc-scorer)](https://github.com/kidney-genetics-org/nc-scorer/releases)
[![Docs](https://img.shields.io/badge/docs-nc--scorer.kidney--genetics.org-blue.svg)](https://nc-scorer.kidney-genetics.org/docs/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![DOI](https://img.shields.io/badge/DOI-10.1101%2F2025.09.29.25336840-0072b2.svg)](https://doi.org/10.1101/2025.09.29.25336840)

**NC-Scorer** (Nephro Candidate Scorer) is an open-source, web-based platform for standardized, automated prioritization of candidate genetic variants and novel disease gene discovery in patients with suspected inherited kidney disease (IKD) and chronic kidney disease of unknown etiology (CKDu).

It combines a gene score, a variant score and an inheritance score into the Nephro Candidate Score (NCS, 0-10). Variant queries and score evaluations run in the user's browser.

Research use only.

## Quick start

Use the web application at [https://nc-scorer.kidney-genetics.org/](https://nc-scorer.kidney-genetics.org/), or run it locally:

```bash
git clone https://github.com/kidney-genetics-org/nc-scorer.git
cd nc-scorer
npm install
npm run dev
```

## Documentation

- [Documentation site](https://nc-scorer.kidney-genetics.org/docs/)
  - [Getting Started](https://nc-scorer.kidney-genetics.org/docs/guide/)
  - [Scoring System & Methodology](https://nc-scorer.kidney-genetics.org/docs/guide/scoring-system)
  - [Batch Processing Guide](https://nc-scorer.kidney-genetics.org/docs/guide/batch-processing)
  - [API Reference](https://nc-scorer.kidney-genetics.org/docs/api/)
  - [Citation & Reproducibility Guide](https://nc-scorer.kidney-genetics.org/docs/guide/citation)
- In this repository: [overview and key features](docs/guide/overview.md), [installation](docs/guide/installation.md), [contributing and verification commands](docs/guide/contributing.md)

Related repositories:

- [kidney-genetics-org/nephro_candidate_score](https://github.com/kidney-genetics-org/nephro_candidate_score) — N-GS feature preprocessing and N-VS machine learning model training pipelines.
- [kidney-genetics-org/kidney-genetics-v1](https://github.com/kidney-genetics-org/kidney-genetics-v1) — Curated evidence base for genetic kidney diseases.

## Citing

If you use NC-Scorer or the Nephro Candidate Score framework in academic work, please cite:

> Rank N, Lukassen S, Anderegg MA, Eckardt KU, Halbritter JP, Popp B.\
> **Automatic variant prioritization in suspected genetic kidney disease using the Nephro Candidate Score (N-CS).**\
> _medRxiv_ 2025.\
> DOI: [10.1101/2025.09.29.25336840](https://doi.org/10.1101/2025.09.29.25336840)

```bibtex
@article{rank2025nephro,
  author    = {Rank, Nina and Lukassen, S{\"o}ren and Anderegg, Manuel A. and Eckardt, Kai-Uwe and Halbritter, Jan P. and Popp, Bernt},
  title     = {Automatic variant prioritization in suspected genetic kidney disease using the Nephro Candidate Score (N-CS)},
  journal   = {medRxiv},
  year      = {2025},
  doi       = {10.1101/2025.09.29.25336840},
  url       = {https://doi.org/10.1101/2025.09.29.25336840},
  publisher = {Cold Spring Harbor Laboratory Press}
}
```

For citing a specific software release, see the [citation guide](docs/guide/citation.md). Machine-readable metadata is in [`CITATION.cff`](CITATION.cff) and [`.zenodo.json`](.zenodo.json).

## License

[MIT](LICENSE). See [CONTRIBUTING.md](CONTRIBUTING.md) and [AGENTS.md](AGENTS.md) for contribution guidelines.
