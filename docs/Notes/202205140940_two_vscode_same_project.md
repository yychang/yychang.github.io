---
tags:
  - vscode
---
# Open the same project in two VSCode instances

## Context

When working on a software project, user wants to see file `MyClassA.cpp` on one monitor and see file `MyClassB.cpp` on the other monitor. The "split window" feature puts two files on the same monitor and is less desirable. 

If user tries to open the same software project in another VSCode instance, VSCode will switch to the already-opened project instead of opening a duplicated instance. 

One option is to open `MyClassA.cpp` in another editor such as vim, but it is preferred to open the file in VSCode to unify the editing experience (syntax highlighting, searching, etc).

## Problem

How to view two files in the same project on different monitors using VSCode?

## Solution

Duplicate the workspace so the same project can be opened by a separate VSCode instance: `Ctrl+Shift+P`
