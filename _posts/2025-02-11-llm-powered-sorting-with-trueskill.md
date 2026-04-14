---
layout: post
title: LLM-Powered Sorting with TrueSkill
date: 2025-02-11 12:00:00
description: Using pairwise LLM comparisons and the TrueSkill ranking system to sort items that resist direct scoring.
tags: llm ranking
categories: ml
---

Some things are easier to compare than to score. Ask someone to rate a photo from 1–10 and you'll get noise; ask them which of two photos they prefer and you'll get signal. The same dynamic shows up when using LLMs as judges: pairwise comparisons tend to be more reliable than absolute scores.

TrueSkill — originally designed for Xbox Live matchmaking — offers a principled Bayesian framework for maintaining skill estimates from pairwise outcomes. Pair it with an LLM judge and you get a surprisingly effective sorting pipeline for anything that resists direct scoring: creative writing, research directions, design options, and more.

This post walks through the approach, the tradeoffs, and some practical lessons from building it.

_Full write-up coming soon._
