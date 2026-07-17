---
title: 'Porting our Electron app to Tauri'
description: 'What actually happened when we moved our productivity tracker from Electron to Tauri: a 90% smaller install, a Rust backend, and a few sharp edges.'
date: 2026-04-15
tags: ['rust', 'tauri', 'electron', 'desktop']
---

Our productivity tracker started life as an Electron app. It worked, but it shipped a whole Chromium runtime to do a job that mostly runs quietly in the background. The port to Tauri cut the install size by about 90% and left us with a Rust backend that's easier to trust with always-on tracking.

## Why we moved

Electron was the fast way to ship v1: one codebase, web tech, done. But for a tool that sits in the tray all day, the costs compounded:

- **Install size.** Hundreds of megabytes for an app whose UI is open a few minutes a day.
- **Memory.** A full browser process for a background tracker is a bad trade.
- **Trust.** A privacy-focused tracker should feel light, not like it's hauling a browser around.

## What the port looked like

Tauri keeps the webview UI, so most of the front end came across intact. The real work was the backend: the Node main process became Rust, and the IPC surface between UI and core got redesigned rather than translated one-to-one.

## Sharp edges

Not everything was free. Platform webviews differ in ways bundled Chromium never did, and some Node-ecosystem conveniences don't have drop-in Rust equivalents. More on the specifics in a follow-up.

## Was it worth it?

Yes. Same UI, ~90% smaller install, three platforms, and a core language that matches how much we ask users to trust this app.
