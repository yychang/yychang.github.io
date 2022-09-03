# Windows 10 Puts a dummy python.exe in `AppData\Local\Microsoft\WindowsApps`

## Context

When a user installs a python distribution on Windows 10 and tries to run python from the CMD, Windows uses the dummy python.exe found in `%USERPROFILE%\\AppData\\Local\\Microsoft\\WindowsApps` instead of the installed python.exe

The dummy python.exe in WindowsApps folder is just a link that opens the Microsoft Store instead of a real python executable.

## Problem

How to get rid of this dummy python.exe?

## Solution

Do the followings:

1.  Go to "Settings" --> "Apps"
2.  Under "Apps & features", click "App execution aliases"
3.  In the "App execution aliases" menu, turn off App installers for "python.exe" and "python3.exe"

## Reference

*   <https://superuser.com/questions/1437590/typing-python-on-windows-10-version-1903-command-prompt-opens-microsoft-stor>
