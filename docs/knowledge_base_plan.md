# Knowledge-Base Plan for the RAG System

## 1. Recommended source categories

1. **Public-health and clinical psychoeducation:** stable, plain-language information on mental health, conditions, treatment types, prevention, and help-seeking.
2. **Psychology science and practice:** evidence-based explanations of cognition, emotion, development, behavior, assessment, and psychotherapy.
3. **Neuroscience foundations:** brain anatomy, neural systems, learning, memory, sleep, and brain-behavior relationships.
4. **Scientific evidence:** systematic reviews, meta-analyses, clinical guidelines, and landmark primary studies for questions needing greater depth.
5. **Classification and terminology:** public diagnostic terminology and definitions, used for orientation rather than individual diagnosis.

## 2-3. Authoritative sources and intended retrieval

| Source | Use in the knowledge base | Retrieve |
| --- | --- | --- |
| [WHO](https://www.who.int/health-topics/mental-health) | Global mental-health authority | Definitions, burden, prevention, rights, public-health guidance, and condition fact sheets; public ICD-11 terminology where appropriate. |
| [NIH / NINDS Brain Basics](https://www.ninds.nih.gov/health-information/public-education/brain-basics) and [NIH BRAIN Initiative](https://www.nih.gov/brain) | Neuroscience education and research context | Introductory neuroanatomy, neurons, brain systems, sleep, neuroplasticity, and research explanations. |
| [NIMH Health Topics](https://www.nimh.nih.gov/health/topics) | U.S. federal mental-health research authority | Plain-language overviews of conditions, symptoms, treatments, psychotherapy, medication classes, research, and crisis-related education. |
| [APA Psychology Topics](https://www.apa.org/topics) and the APA Dictionary | Psychology concepts and practice | Evidence-based explanations of cognition, emotion, development, stress, relationships, testing, and psychotherapy concepts. |
| [CDC Mental Health](https://www.cdc.gov/mental-health/) | U.S. public-health information | Population-level prevention, social determinants, youth and community mental health, and surveillance context. |
| [PubMed](https://pubmed.ncbi.nlm.nih.gov/) / PubMed Central | Discovery and permitted full-text research | Curated peer-reviewed systematic reviews, meta-analyses, guidelines, and high-quality primary research; retain PMID/PMCID, DOI, publication date, study design, and population. |
| [Cochrane](https://www.cochrane.org/evidence) and professional clinical guidelines | Evidence synthesis | Carefully scoped intervention effectiveness, benefits, harms, and certainty of evidence. Use the original licensed material and preserve version/date. |

**Source order of preference:** official primary guidance and fact sheets -> systematic reviews/guidelines -> strong peer-reviewed studies. News, blogs, social posts, and unsourced summaries should not be included as evidence sources.

## 4. Safety requirements for high-stakes information

- Position the system as educational, not as a clinician: no diagnosis, personalized treatment plan, medication dosing, or instruction to start/stop medication.
- Add a visible safety layer for self-harm, suicide, violence, psychosis, severe substance withdrawal, and medical emergencies: encourage immediate local emergency/crisis support and a qualified professional; do not rely on RAG text alone.
- Retrieve condition-specific information only with its source, date, jurisdiction, and clear uncertainty. Prefer recent guidelines and flag conflicting evidence.
- Separate symptom education from diagnostic criteria; do not present a checklist as a diagnosis. Do not ingest copyrighted diagnostic-manual text without permission.
- Use non-stigmatizing, person-first language and account for age, culture, pregnancy, comorbidity, and local care differences without making assumptions about a user.
- Include provenance and review metadata on every chunk. Set expiry/review intervals for clinical, epidemiological, treatment, and crisis content.
- Ensure the ingestion process respects copyright, licences, robots rules, and source terms; store excerpts only where permitted and link back to the source.

## 5. Proposed organization

Organize documents with both a topic hierarchy and retrieval metadata:

```text
01_public_health_and_psychoeducation/
02_psychology_foundations/
03_neuroscience_foundations/
04_mental_health_conditions/
05_treatments_and_support/
06_research_evidence/
07_safety_and_crisis_resources/
```

Each document/chunk should carry: `title`, `source organization`, `canonical URL`, `publication/review date`, `jurisdiction`, `topic`, `content type`, `audience`, `evidence level`, `licence`, `safety tier`, and `last verified`. Keep safety/crisis resources separately indexed so they can be retrieved with the highest priority when relevant.
