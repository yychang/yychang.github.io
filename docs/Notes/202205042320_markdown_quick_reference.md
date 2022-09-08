---
aliases: []
tags:
  - quick-ref
---

# Markdown Quick Reference

## Basic

The [original syntax of Markdown](https://www.markdownguide.org/basic-syntax) 

The [extended syntax of Markdown](https://www.markdownguide.org/extended-syntax/)

## Code blocks
Use a pair of N backticks (\`) to form a code block (N $\geq$ 3).

````
```some-language-tag
Use 4 backticks to form the code block
so that I can write 3 backticks in the code block
```
````

To show a code block inside a code block like the one above, use N=4 for outer code block so that the inner code block of N=3 will appear as plain text.

Simiarly, use a pair of M backtics (\`) to form an inline code (M $\geq$ 1). You can ``use 2 backticks for inline code so that you can write single backtick ` in it``.

## Escaping vertical bar in the table
```
| |
| - |
| use backslash to escape \| |
| <code>use \<code\> element and backslash to escape \| for inline code</code> |
```

| |
| - |
| use backslash to escape \| |
| <code>use \<code\> element and backslash to escape \| for inline code</code> |

