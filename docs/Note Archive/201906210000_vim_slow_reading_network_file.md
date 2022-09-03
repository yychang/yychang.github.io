# Vim is very slow when switching to the buffer reading network file

## Context

When Vim switches to a buffer that shows a UNC path like `\\server\dir1\file.txt` on Windows, Vim can be very slow loading the buffer. One possible reason is that there are some autocommands that try to read the network path, which is usually very slow. For example, the following Vim autocommand tries to change the current directory to where the file is:

```
au BufEnter * execute "chdir ".escape(expand("%:p:h"), ' ')
```

It is desired to keep such autocommands for local files but not activate them for files on the network.

## Problem

How to modify the autocommands so that it applies to only the local files?

## Solution

Upgrade to ver 8.2

## Reference

*   <https://github.com/vim/vim/commit/8bb41b3d062cd315fdd0626dfd6fa68474a96b50>
*   <http://vimdoc.sourceforge.net/htmldoc/autocmd.html#{pat}>
*   <http://vimdoc.sourceforge.net/htmldoc/pattern.html#pattern>
