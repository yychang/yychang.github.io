# Make Gitk Show Chinese Characters in Diff

## Context
When running `gitk`, the diff results show the Chinese characters incorrectly. It seems that the Chinese characters are displayed by a font that does not support Unicode.

## Problem
How to properly display the Chinese characters in gitk?

## Solution
Set the GUI encoding by the following command:

```bash
git config --global gui.encoding utf-8 
```

## Reference

* [stackoverflow](https://stackoverflow.com/questions/23151339/set-utf-8-display-for-git-gui-differences-window)
