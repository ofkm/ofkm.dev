---
title: Installation
description: Build tally from source, or grab a prebuilt binary.
order: 1
---

# Installation

tally ships as a single binary with no runtime dependency.

## From source

With a Rust toolchain installed, build and install straight from the
repository:

```sh
cargo install --git https://github.com/ofkm/tally
```

Or clone it and build a release binary yourself:

```sh
git clone https://github.com/ofkm/tally
cd tally
cargo build --release
```

The binary lands at `target/release/tally`. Copy it somewhere on your `PATH`:

```sh
cp target/release/tally ~/.local/bin/
```

## Prebuilt binaries

Release builds are published on the
[releases page](https://github.com/ofkm/tally/releases) for:

- macOS — Apple silicon, Intel, and a universal build
- Linux — `x86_64` and `aarch64`
- Windows — `x86_64`

Download the archive for your platform, extract it, and put `tally` on your
`PATH`.

## Verifying

```sh
tally --version
```

You should see the version printed back:

```
tally 0.4.0
```
