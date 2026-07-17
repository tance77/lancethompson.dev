---
title: 'Terraform patterns for Aurora'
description: 'Patterns that kept our Terraform-managed Aurora clusters boring: module boundaries, parameter groups, and safe rollout habits.'
date: 2025-11-20
tags: ['terraform', 'aws', 'aurora', 'devops']
---

Managing Aurora with Terraform is easy to start and easy to get wrong. These are the patterns that kept our clusters boring — in the good way.

## Module boundaries

Keep the cluster, its parameter groups, and its security groups in one module with a small surface: environment name, instance class, and count. Everything else is an opinionated default inside the module, not a knob callers can turn.

## Parameter groups are code

Cluster and instance parameter groups live in the module, versioned like everything else. A parameter change is a PR with a diff, not a console click nobody remembers six months later.

## Safe rollout habits

- Plan output reviewed on every change that touches the cluster resource — Aurora replacements are expensive surprises.
- `lifecycle { prevent_destroy = true }` on production clusters.
- Instance class changes roll through readers before the writer.

## What I'd write more about

Snapshot-and-restore drills, and the seam between Terraform-managed infrastructure and migration-managed schema. Follow-up post material.
