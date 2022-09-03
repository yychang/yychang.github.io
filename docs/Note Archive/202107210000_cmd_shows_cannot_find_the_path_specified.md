# Running CMD.exe shows "The system cannot find the path specified" in the beginning

## Context

When starting a new command line window in Windows, it always shows the following error:

```
The system cannot find the path specified
```

## Problem

How to resolve the error?

## Solution

Open the registry editor (`regedit.exe`) and find the following keys:

* `HKEY_CURRENT_USER\Software\Microsoft\Command Processor\AutoRun`
* `HKEY_LOCAL_MACHINE\Software\Microsoft\Command Processor\AutoRun`

If their values are not empty, check if they point to some files that no longer exist.

## Note

* Some version of Anaconda puts its `conda_hook.bat` under the mentioned `AutoRun` reg key value. When Anaconda is uninstalled, the reg key is not cleared properly and causes the error.
* Running `FOR /F ["options"] %variable IN ('command1') DO command2` will invoke a CMD to run `command1`, hence showing the error in the result.

## Reference 

* https://superuser.com/questions/727316/error-in-command-line-the-system-cannot-find-the-path-specified
