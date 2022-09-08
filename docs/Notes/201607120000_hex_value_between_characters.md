---
tags:
  - vim
---

# Hex 0x00 (^@) value between characters

## Context

A TXT file opened in Vim shows something like
```
^@V^@e^@r^@i^@f^@y
```

while it is supposed to be
```
Verify
```

## Root Cause
The characters are written in UTF-16 while the file is opened as UTF-8. This is probably because there are other UTF-8 content in the file that leads the text editor to parse the file in UTF-8 format.

## Solution
Set the encoding to UTF-16.

In Vim, this can be done by executing
```vim
:e ++enc=utf-16
```

Or
```vim
:e ++enc=utf-16le
```

## Reference
http://stackoverflow.com/questions/16301705/hex-00-value-between-characters
