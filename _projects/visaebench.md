---
layout: page
title: visaebench
description: Cross-architecture Sparse Autoencoder evaluation across ViT backbones
img: assets/img/proj_visaebench.jpg
importance: 1
category: research
related_publications: false
---

**visaebench** is a cross-architecture evaluation study for Sparse Autoencoders (SAEs) trained on vision transformers. We train TopK SAEs on ImageNet patch representations across five ViT backbones and systematically evaluate the quality, sparsity, and transferability of the learned features.

## Backbones

- **DINOv2-B** — self-supervised with self-distillation
- **CLIP ViT-B/16** — contrastive image-language pretraining
- **SigLIP** — sigmoid loss image-language pretraining
- **MAE ViT-B** — masked autoencoder pretraining
- **DeiT** — supervised distillation training

## Motivation

Sparse Autoencoders have emerged as a promising tool for mechanistic interpretability in language models, decomposing activations into human-interpretable features. This project extends that lens to vision transformers, asking: do SAE features differ meaningfully across pretraining objectives? Are certain backbones more interpretable than others?

## Target

NeurIPS 2026.
