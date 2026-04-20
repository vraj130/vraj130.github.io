---
layout: page
title: Vision-SAEBench
description: Cross-architecture Sparse Autoencoder evaluation across ViT backbones
importance: 1
category: research
related_publications: false
---

**Vision-SAEBench** is a cross-architecture evaluation study for sparse autoencoders trained on vision transformers. The project compares TopK SAE behavior on ImageNet patch representations across several widely used ViT backbones and measures how feature quality, sparsity, and transferability change across pretraining regimes.

## Backbones

- **DINOv2-B** — self-supervised with self-distillation
- **CLIP ViT-B/16** — contrastive image-language pretraining
- **SigLIP** — sigmoid loss image-language pretraining
- **MAE ViT-B** — masked autoencoder pretraining
- **DeiT** — supervised distillation training

## Motivation

Sparse autoencoders have become a promising tool for mechanistic interpretability in language models by decomposing activations into more interpretable features. This project brings the same lens to vision transformers and asks whether different pretraining objectives produce measurably different interpretability profiles.

## Scope

- Backbone families: DINOv2, CLIP, SigLIP, MAE, and DeiT
- Core evaluations: reconstruction quality, sparsity, transfer, and qualitative feature inspection
- Goal: build a more rigorous benchmark for comparing interpretability methods across vision models
