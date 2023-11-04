# Fix "Open File Security Warning"

## Context

On Windows, when user clicks a user-created shortcut, the Windows always pops up a security warning window, asking user to confirm the execution.

While it is undesirable to reduce the global security level to suppress such warning, the repeated confirmation on certain known shortcuts is a bad user experience.

## Problem

How to disable/suppress the security warning from opening certain known, benign shortcuts?

## Solution

Change the file's security integrity level to medium using Windows command ICACLS

```
ICACLS "%userprofile%\favorites" /SETINTEGRITYLEVEL (OI)(CI)M
ICACLS "%userprofile%\favorites\links" /SETINTEGRITYLEVEL (OI)(CI)M
ICACLS "%userprofile%\favorites\links\mylink.lnk" /SETINTEGRITYLEVEL (OI)(CI)M
```

Note: It seems necessary to run all 3 commands to set the integrity for the favorites directory, the favorites/links directory, and the link itself. Maybe there are some other ways to set the integrity so that only the link file has to be set, but how to do so is currently unknown.

## Reference

*   http://www.winhelponline.com/blog/fix-start-menu-shortcuts-open-file-security-warning-windows-7-vista/
