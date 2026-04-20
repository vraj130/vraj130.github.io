---
layout: post
title: LLM-Powered Sorting with TrueSkill
date: 2025-02-11 12:00:00
description: Using pairwise LLM comparisons and the TrueSkill ranking system to sort items that resist direct scoring.
tags: llm ranking
categories: ml
---

Some problems are easier to compare than to score. Ask someone to rate a photo from 1 to 10 and you usually get noise. Ask them to choose between two photos and you get a much cleaner signal. The same pattern shows up with LLMs acting as judges: pairwise comparisons are often more stable than absolute ratings.

TrueSkill, originally designed for Xbox Live matchmaking, gives you a principled Bayesian way to update rankings from head-to-head outcomes. Paired with an LLM judge, it becomes a useful sorting pipeline for anything that resists direct scoring: design options, writing samples, research ideas, or open-ended product directions.

The basic loop is straightforward. Sample a pair of candidates, ask the model for a winner under a clear rubric, feed the result into the ranking system, and repeat until the uncertainty narrows. You do not need a perfect judge for this to work. You need a judge that is reasonably consistent and a ranking system that can absorb uncertainty.

What matters in practice is prompt discipline. If the evaluation rubric shifts from comparison to comparison, the ranking becomes incoherent. Strong results come from fixed criteria, randomized order, and occasional human spot checks on edge cases. Without that, you end up ranking prompt sensitivity rather than the items themselves.

The other tradeoff is cost. Pairwise ranking scales better than exhaustive scoring for ambiguous tasks, but it still grows with the number of comparisons. That makes active sampling important: spend calls where uncertainty is high instead of comparing obviously separated items.

I like this approach because it treats LLMs as noisy preference engines instead of magical scorers. That framing is more honest, and it usually produces better rankings.
