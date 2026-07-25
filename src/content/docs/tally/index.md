---
title: Overview
description: What tally is, and what it gives you.
order: 0
---

# tally

tally is a command-line tool that counts what is actually in a codebase: files,
blank lines, comment lines and code lines, broken down by language. It is
written in Rust and scans in parallel, so pointing it at a large repository
stays fast.

If you have used [cloc](https://github.com/AlDanial/cloc), you already know the
shape of the output. tally is a smaller, faster take on the same idea.

## Why another line counter

Most line counters are either slow on large trees or need a runtime installed.
tally is a single static binary with no runtime dependency, and it parallelises
across files, so counting a monorepo takes about as long as listing it.

It also tries to be right by default: build output, dependency folders and VCS
metadata are skipped without being told, so the first number you see is the one
you actually wanted.

## What it counts

For every language it finds, tally reports four numbers:

| Column      | Meaning                                            |
| ----------- | -------------------------------------------------- |
| **Files**   | How many files of that language were counted       |
| **Blank**   | Lines that are empty or whitespace only            |
| **Comment** | Lines that are entirely comment                    |
| **Code**    | Everything else — the number most people are after |

Around 45 languages are recognised out of the box, matched by file extension.

## Next steps

- [Installation](/docs/tally/installation) — get the binary
- [Usage](/docs/tally/usage) — run it and read the output
- [Reference](/docs/tally/reference) — flags and default exclusions
