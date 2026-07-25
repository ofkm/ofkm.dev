---
title: Usage
description: Counting a directory, specific paths, and per-directory totals.
order: 2
---

# Usage

## Counting the current directory

Run tally with no arguments and it counts the directory you are standing in:

```sh
tally
```

## Counting specific paths

Pass any number of files or directories to count those instead:

```sh
tally src tests Cargo.toml
```

Directories are walked recursively. Files are counted as given, even if they
sit inside a directory that would normally be skipped.

## Reading the output

tally leads with the number most people came for — total lines of code — then
breaks it down by language:

```
Code: 4,182

Language      Files   Blank  Comment    Code
--------------------------------------------
Rust             28     412      196   3,241
TOML              3      14        2      88
Markdown          5      96        0     853
--------------------------------------------
TOTAL            36     522      198   4,182
```

Languages are sorted by code lines, so the biggest part of the codebase is
always at the top. Each language name is coloured to match its usual brand
colour, which makes the table easy to scan once you are used to it.

## Per-directory totals

Add `--tree` to break each language down by directory:

```sh
tally --tree
```

The normal table is printed first, then a `Tree:` section with per-directory
totals grouped under each language:

```
Tree:

Rust
  src/counter        8     142       74   1,106
  src/language       6      88       41     902
  src/discovery      5      64       28     618
```

This is the quickest way to find where the weight of a codebase actually sits.

## Piping and redirecting

Output goes to standard out, so it redirects like anything else:

```sh
tally > counts.txt
```

Language names are coloured with ANSI escapes when writing to a terminal, so
strip them if you are feeding the output to another tool.
