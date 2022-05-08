---
aliases: []
tags:
  - quick-ref
---

# Linux Command Quick Reference
## Search Specific Types of Files that Contains a Keyword

```bash
# Case sensitive
grep -r -e <RegExpPattern> --include=*.{cpp,h}
grep -r -e <RegExpPattern> --include="*.cpp" --include="*.h"

# Case insensitive
grep -r -i -e <RegExpPattern> --include=*.{cpp,h}
```

Note: The following syntax does not work

```bash
grep -r -e <RegExpPattern> --include="*.{cpp,h}"
```

## Search a Binary File or UTF-16 File

Convert utf-16 file to utf-8 before using grep

```bash
iconv -f utf-16 -t utf-8 file.txt | grep -e <RegExpPattern>
```

Search a binary file as text
```bash
grep --text -e <RegExpPattern> file.bin
```

## Split a String (e.g. `$PATH`) into Multiple Lines

```bash
echo $PATH | tr ':' '\n'
```

## Count the lines of CPP codes in a folder

```bash
find . -name '*.cpp' -o -name '*.h' | xargs wc -l
```

## Use of `xargs`

Delete all the `.c` files

```bash
find . -name "*.c" -print0 | xargs -0 rm -rf
```

Append `.bak` to all the `.c` files

```bash
find . -name "*.c" -print0 | xargs -0 -I '{}' mv '{}' '{}'.bak
```

Find all `.c` files that contain string 'stdlib.h'

```bash
find . -name '*.c' | xargs grep 'stdlib.h'
```

## Use of `sed`

(To be edited)

## Reading Binary file

Print the first 44 bytes in hex, starting from 20th byte, 16 bytes each line

```bash
xxd -s 20 -l 44 -c 16 MyFile.bin
```

## Reading text file/pipe

Print the first 3 lines or the last 3 lines of the file

```bash
head -n 3 MyFile.txt
tail -n 3 MyFile.txt
```

Print the first 100 bytes or the last 100 bytes of the file

```bash
head -c 100 MyFile.txt
tail -c 100 MyFile.txt
```

Print only the first 3 `ls -l` result

```bash
ls -l *.txt | head -n 3
```

## Diff the STDOUT of two commands

```bash
diff <(command1) <(command2)
diff <(ll *.wav) <(ll *.txt)
``` 