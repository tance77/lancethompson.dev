---
title: 'Building a cross-platform Salesforce Data Loader'
description: 'SOQL Studio: why the official Data Loader needed replacing, and how Rust + Tauri got it down to a ~12MB install with zero Java.'
date: 2026-02-10
tags: ['rust', 'tauri', 'salesforce', 'desktop']
---

Salesforce's official Data Loader needs Java and only runs comfortably on Windows. Admins on macOS and Linux were stuck wrestling the JVM just to push a CSV, and remapping columns every single run. SOQL Studio is my answer: a cross-platform data loader built with Rust and Tauri, ~12MB installed, no Java anywhere.

## The problem

The official tool assumes a lot: a working JVM, a Windows-shaped environment, and your patience for re-doing column mappings on every import. None of those assumptions hold for the admins I watched use it.

## What SOQL Studio does instead

- **Bulk CSV import/export** with no Java required.
- **Auto column mapping** that persists across sessions — map once, reuse forever.
- **An object browser** with quick access to field formulas.
- **Remembered logins** and one-click switching between sandbox and production.

## Why Rust + Tauri

The same stack as my other desktop work: a Rust core talking to the Salesforce APIs, a webview UI on top. The result installs in seconds, starts fast, and runs the same on all three platforms.

## What's next

A deeper post on the auto-mapping design — how mappings are stored, matched, and survive schema drift — is coming.
