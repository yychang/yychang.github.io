---
aliases: []
tags:
  - math
---

# List of rounding methods

| y    | round down | round up | round towards zero | round away from zero | round to nearest |
| ---- | ---------- | -------- | ------------------ | -------------------- | ---------------- |
| +23.67 |  23 |  24 |  23 |  24 | See below for differeint tie-breaking rules |
| +23.50 |  23 |  24 |  23 |  24 | See below for differeint tie-breaking rules |
| +23.35 |  23 |  24 |  23 |  24 | See below for differeint tie-breaking rules |
| +23.00 |  23 |  23 |  23 |  23 | See below for differeint tie-breaking rules |
|      0 |   0 |   0 |   0 |   0 | See below for differeint tie-breaking rules |
| -23.00 | -23 | -23 | -23 | -23 | See below for differeint tie-breaking rules |
| -23.35 | -24 | -23 | -23 | -24 | See below for differeint tie-breaking rules |
| -23.50 | -24 | -23 | -23 | -24 | See below for differeint tie-breaking rules |
| -23.67 | -24 | -23 | -23 | -24 | See below for differeint tie-breaking rules |

## Different tie-breaking rules for "round to nearest"

| y    | round half down | round half up | round half away from zero | round half towards zero |
| ---- | --------------- | ------------- | ------------------------- | ----------------------- |
| +23.67 |  24 |  24 |  24 |  24 |
| +23.50 |  23 |  24 |  24 |  23 |
| +23.35 |  23 |  23 |  23 |  23 |
| +23.00 |  23 |  23 |  23 |  23 |
|      0 |   0 |   0 |   0 |   0 |
| -23.00 | -23 | -23 | -23 | -23 |
| -23.35 | -23 | -23 | -23 | -23 |
| -23.50 | -24 | -23 | -24 | -23 |
| -23.67 | -24 | -24 | -24 | -24 |

| y    | round half to even | round half to odd |
| ---- | ------------------ | ----------------- |
|  24.5  | 24 |  25 |
|  23.5  | 24 |  23 |
|   0.5  |  0 |   1 |
|  -0.5  |  0 |  -1 |
| -23.5  | 24 | -23 |
| -24.5  | 24 | -25 |

## Reference

* [Wikipedia: Rounding](https://en.wikipedia.org/wiki/Rounding) 