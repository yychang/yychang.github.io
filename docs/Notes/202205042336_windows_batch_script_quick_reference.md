---
aliases: []
tags:
  - quick-ref
---

# Windows Batch Script Quick Reference

## Start a program in a new, separate session

```batch
start "WINDOW_TITLE" "COMMAND" COMMAND_ARGUMENTS
start "COMMAND"
```

Without `start`, the batch script will hang until the command returns.

`start` regards the first quoted parameter as the window-title, unless it's the only parameter. In order to run `COMMAND` with some argument, one can enter

```batch
start "" "COMMAND" COMMAND_ARGUMENTS
```

which specifies empty string for the window title.

For example, to run `dir` with two arguments `/s` and `/b` with `start`, one can write

```batch
start "" dir /s /b
start "" "dir" "/s" "/b"
```

Quoting `/s` and `/b` together (`"/s /b"`) results in it being treated as one argument to `dir`, which leads to an error.

## Call one batch program from another without stopping the parent batch program

```batch
call ANOTHER_BATCH
```

## Hibernate/Reboot/Shutdown

```batch
REM Hibernate
RUNDLL32.EXE PowrProf.dll,SetSuspendState

REM Reboot
shutdown -r -t 01

REM Shutdown
shutdown -s -t 01
```

## Map to Drive

```batch
subst O: /D
subst O: DESTINATION_PATH
```

This command maps `DESTINATION_PATH` to Drive `O:`. The option `/D` is to delete the existing mapping

## Change Power Plan

```batch
REM saver
C:/Windows/System32/powercfg.exe /setactive a1841308-3541-4fab-bc81-f71556f20b4a  

REM Balanced
C:/Windows/System32/powercfg.exe /setactive 381b4222-f694-41f0-9685-ff5bb260df2e

REM Performance
C:/Windows/System32/powercfg.exe /setactive 8c5e7fda-e8bf-4a96-9a85-a6e23a8c635c
```

## Pipe the output of one command to the other command

```batch
@REM cd to the root of git repo
for /f %%i in ('git rev-parse --show-toplevel') do cd %%i
```

## Backup Redmine

```batch
REM ######## Define the date ########
for /f "tokens=2-4 delims=/ " %%a in ('date /T') do set year=%%c
for /f "tokens=2-4 delims=/ " %%a in ('date /T') do set month=%%a
for /f "tokens=2-4 delims=/ " %%a in ('date /T') do set day=%%b
set TODAY=%year%_%month%%day%

mysqldump -u REDMINE_USERNAME -pREDMINE_PASSWORD REDMINE_DBNAME > redmine_%TODAY%
```

## Zip Files by 7z

```batch
"C:\Program Files\7-zip\7z.exe" a -tzip -mx9 outfile.zip targetfiles
```

## Exit code of the last command

```batch
REM This line executes cmd.exe and exit with exit code 0
CMD /C EXIT 0

REM When there is no "ERRORLEVEL" environment variable, %ERRORLEVEL% will be the internal state "error level", which is the exit code of the last command, which is 0.
echo Exit code is %ERRORLEVEL%

REM If there is "ERRORLEVEL" environment variable, %ERRORLEVEL% will be the environment variable instead of the internal state.
Set ERRORLEVEL=1
echo Environment Variable ERRORLEVEL is %ERRORLEVEL%

REM However, the "IF ERRORLEVEL" command directly reads the internal state, and it won't be affected by the "ERRORLEVEL" environment variable
IF ERRORLEVEL 1 echo This line will not print.
```

## Conditional Execution

Execute command2 after command1  has finished

```batch
command1 & command2
DOSKEY RunTwoCommands=command1 ^& command2
DOSKEY RunTwoCommands=command1 $T command2
```

Execute command2 only if execution of command1 has finished successfully

```batch
command1 && command2
DOSKEY RunTwoCommands=command1 ^&^& command2
```

Execute command2 only if execution of command1 has finished unsuccessfully

```batch
command1 || command2
DOSKEY RunTwoCommands=command1 ^|^| command2
```

Note that sometimes `command1` may invoke subroutines or spawn another batch script, and the corresponding failure/error may not be caught when `command1` finishes. In such case, use `call command1`

## Pause/Wait

```batch
REM Pause; wait for any key
pause

REM wait for 10 seconds or until any key is pressed
timeout 10

REM wait for 10 seconds (may not work on some Windows)
sleep 10
```

## Get the path of the batch file being executed

```batch
REM %0 will be the full path to the batch file, like path\to\myscript.bat
SET mypath=%0

REM %~dp0 will be the directory of the batch file, like path\to\
SET mydir=%~dp0

REM Use substring syntax to remove the trailing backslash in %mydir%
echo %mydir:~0,-1%
``` 