---
title: Reference
description: Flags, exit behaviour, and what gets skipped by default.
order: 3
---

# Reference

## Synopsis

```
Usage: tally [--tree] [PATH]...

Count source code lines by language.

With no paths, tally counts the current directory.
```

## Flags

| Flag              | Description                                       |
| ----------------- | ------------------------------------------------- |
| `--tree`          | Add per-directory totals underneath each language |
| `-h`, `--help`    | Print usage and exit                              |
| `-V`, `--version` | Print the version and exit                        |

Any other argument beginning with `-` is rejected as an invalid argument.
Everything else is treated as a path to count.

## Skipped by default

Directories that are almost never worth counting are ignored during the walk:

**Version control**

`.git`, `.hg`, `.svn`, `.jj`

**Dependencies and build output**

`node_modules`, `target`, `dist`, `build`, `out`, `coverage`

**Framework and tool caches**

`.next`, `.nuxt`, `.turbo`, `.cache`

A path passed explicitly on the command line is always counted, even if its
name is on this list — so `tally dist` does what you asked.

## How lines are classified

Each line falls into exactly one of three buckets:

- **Blank** — empty, or whitespace only
- **Comment** — entirely comment, including lines inside a block comment
- **Code** — everything else

A line with code followed by a trailing comment counts as code, not as both.
This matches cloc's behaviour, and it keeps the three columns summing to the
file's real line count.

## Language detection

Languages are matched by file extension, with around 45 recognised. A file
whose extension is not recognised is not counted, and does not appear in the
table.
