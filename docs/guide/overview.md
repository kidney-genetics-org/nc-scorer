# Overview

## Scoring Framework: Nephro Candidate Score (NCS)

NC-Scorer integrates three complementary evidence layers into a single interpretable metric on a $[0, 10]$ scale:

$$\text{NCS} = (N\text{-GS} \times 4) + (N\text{-VS} \times 4) + (\text{IS} \times 2)$$

| Component                                |  Range   | Description                                                                   | Method                                                                  |
| :--------------------------------------- | :------: | :---------------------------------------------------------------------------- | :---------------------------------------------------------------------- |
| **Nephro Gene Score ($N\text{-GS}$)**    | $[0, 1]$ | Prior probability that the gene is implicated in kidney disease               | XGBoost classifier trained on functional genomics features              |
| **Nephro Variant Score ($N\text{-VS}$)** | $[0, 1]$ | Pathogenicity likelihood of the specific variant                              | Regularized Logistic Regression trained on variant features             |
| **Inheritance Score ($\text{IS}$)**      | $[0, 1]$ | Compatibility of variant zygosity with the expected disease inheritance model | Rule-based scoring heuristic (with 20% penalty for missing segregation) |

### Score Interpretation Tiers

- **High Priority ($[7.0, 10.0]$):** Strong candidate requiring high-priority clinical and functional review.
- **Moderate Priority ($[3.0, 7.0)$):** Moderate evidence; warrants investigation in secondary analysis or combined cohorts.
- **Low Priority ($[0.0, 3.0)$):** Limited evidence under current disease and variant annotations.

## Key Features

- **Multi-Format Input:** Accepts standard HGVS notation (e.g. `NM_001009944.3:c.11798G>A`), genomic coordinates (`chr16:2138253:G:A`), and dbSNP rsIDs (`rs121913240`).
- **Dual Genome Build Support:** Fully supports both **GRCh37 (hg19)** and **GRCh38 (hg38)** via dedicated backend Ensembl proxy endpoints.
- **Batch Processing:** Evaluate up to 200 variants simultaneously with interactive sorting, filtering, and real-time computation.
- **Flexible Export:** Download complete scoring results in **JSON**, **CSV**, **TSV**, or annotated **VCF** format.
- **Client-Side Privacy:** Variant queries and score evaluations run directly in the user's browser without storing patient data on remote servers.
