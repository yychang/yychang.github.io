# Running Windows Command  in Perl and in Windows CMD yield different results

## Context

When running a "build" command from a CMD window using the following two different approaches, the first one succeeds while the second one fails:

```bat
> build
> perl -e "system(\"build\");"
```

There are multiple "build" executable found when running "where build" in the CMD window:

```bat
path1\build.cmd
path2\build.exe
path3\build.exe
```

## Root Cause

It appears that `system()` in Perl omits `path1\build.cmd` and executes `path2\build.exe`, resulting in different build outcomes.

One hypothesis is that `*.cmd` is not considered as an executable by Perl's `system()`. But the hypothesis is to be further confirmed.

## Solution

Explicitly invoking `build.cmd` in Perl

```
> perl -e "system(\"build.cmd\");"
```
