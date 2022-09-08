---
aliases: []
tags:
  - git
---

# Make Git Status Show Chinese File Path

## Context
When running `git status`, it shows the octal utf8 for Chinese characters in the file path. For example, file `中文.txt` appears as follows:

```bash
Untracked files:
  (use "git add <file>..." to include in what will be committed)
        "\344\270\255\346\226\207.txt"
```

## Problem
How to make `git status` shows chinese characters in the file paths?

## Solution
Disable the quoted octal notation by running the following command:

```bash
git config --global core.quotepath off
```

## Reference

* [stackoverflow](https://stackoverflow.com/a/22828826)
