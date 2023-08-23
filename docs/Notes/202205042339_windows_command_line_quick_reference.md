---
aliases: []
tags:
  - quick-ref
---

# Windows Command Line Quick Reference 

## Alias

### Using `Alias.exe`

```batch
REM Define individual alias
alias.exe vi "C:\Tools\vim74\gvim.exe" --remote-tab-silent "$*"

REM Batch define aliases using a text file
alias.exe -f myalias.txt

REM Example myalias.txt content
vi "C:\Tools\vim74\gvim.exe" --remote-tab-silent "$*"
```

### Using `DOSKEY` command

```batch
DOSKEY vi=C:\vim80\gvim.exe --remote-tab-silent $*
```

The special symbol `$*` is the string after the alias in the command line. For example,

```batch
vi ~/.vimrc
```

will be executed as

```batch
C:\vim80\gvim.exe --remote-tab-silent ~/.vimrc
```

## Diff

```batch
fc.exe file1.txt file2.txt
```

## grep

```batch
findstr.exe /snip /c:"string to find" *.cpp *.h *.c
```

## dir

Recursively search

```batch
dir.exe myfile /S
```

## Processes

List the processes (on the current machine)

```batch
tasklist

REM List the process as well as the services loaded by the process
tasklist /svc   

REM List the processes that load sapi_onecore.dll
tasklist /FI "MODULES eq sapi_onecore.dll"  

REM List the processes that load any service whose name starts with "audio"
tasklist /FI "SERVICES eq audio*"

REM List the processes that load any service whose name starts with "audio", and show all the services loaded by each of such processes
tasklist /FI "SERVICES eq audio*" /SVC      
```

List the processes that load a specific DLL `abc.dll`

```batch
tlist -m *abc.dll
```

Note

* Option `-m` requires a match to the full path. As a result, the wildcard char `*` is necessary because we usually don't know (or don't want to type) the full path to `abc.dll`.


(Powershell) List the processes on the remote device

```batch
tlistd

REM List the process as well as the services loaded by the process
tlistd -s      
```

Kill the process (on the current machine)

```batch
kill <PID>
```

(Powershell) Kill the process (on the current machine)

```batch
Stop-Process <PID>
Stop-Process -name <ProcessName>
```

(Powershell) Kill the processes on the remote device

```batch
killd <PID>
```

## sc

Show the services that are dependent on a given `<TargetService>`

```
sc enumdepend <TargetService>
```

!!! note
    It seems that `sc enumdepend` will show the nested dependencies.  If service A depends on service B, which depends on service C, which depends on service D, then `sc enumdepend D` will show service A, B, and C in order.  

## Setting for Computer and User

(elevated Powershell) Set the computer to join a domain

```batch
Add-Computer -domain MyDomainName -cred MyDomainName\MyUserName
```

Add the user `MyDomainName\MyUserName` as local admin

```batch
net localgroup administrators MyDomainName\MyUserName /add
```

* Note: If the user account belongs to the local machine instead of a domain, user `.` as `MyDomainName` (for example, `.\yyc`).

Enabling/disabling the remote desktop feature

```batch
REM Enabling
reg add "HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Terminal Server" /v fDenyTSConnections /t REG_DWORD /d 0 /f

REM Disabling
reg add "HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Terminal Server" /v fDenyTSConnections /t REG_DWORD /d 1 /f
```

## Registry

Query registry

```batch
REM query the key HKLM. This will only list the subkeys and values under the key HKLM.
reg query HKLM                       

REM recursively query the pattern "*microsoft*" under all subkeys under HKLM
reg query HKLM /f "*microsoft*" /s   
```

## Mapping directory to Drive

```batch
subst x: %USERPROFILE%\Downloads
subst x: /D
```

## Open URL in IE/Edge

```batch
REM open in Microsoft IE
"c:\Program Files\Internet Explorer\iexplore.exe" <url>

REM open in Microsoft Edge
start microsoft-edge:<url>
```

## Redirection

```batch
dir > a.txt 2>&1
```

## ftp

Specify a script for the ftp client to run:
```batch
ftp -i -s:<script_filename>
```

An example of the script file to login ftp server `example.com` as user `uname` with password `pword` to upload `file1.exe`

```batch
open example.com
uname
pword
cd ./Folder1
binary
put file1.exe
quit
```

## Shutdown/sleep/hibernate

```batch
REM Shutdown
%windir%\System32\shutdown.exe -s

REM Reboot
%windir%\System32\shutdown.exe -r
%windir%\System32\shutdown.exe -r -t 0

REM Logoff
%windir%\System32\shutdown.exe -l

REM Sleep
%windir%\System32\rundll32.exe powrprof.dll,SetSuspendState 0,1,0

REM Hibernate
%windir%\System32\rundll32.exe powrprof.dll,SetSuspendState Hibernate
```

## powercfg

Change power plan

```batch
REM Disable hibernation
powercfg -hibernate off

REM List available power plans
powercfg -list

REM Change to "high performance" power plan
powercfg -setactive 8c5e7fda-e8bf-4a96-9a85-a6e23a8c635c
```

## PROMPT

Change the cmd.exe command prompt.

List of special code:

```batch
   $A  &           (Ampersand)
   $B  |           (pipe)
   $C  (           (Left parenthesis)
   $D Current date
   $E Escape code  (ASCII code 27)
   $F  )           (Right parenthesis)
   $G  >           (greater-than sign)
   $H  Backspace   (erases previous character)
   $L  <           (less-than sign)
   $M  Display the remote name for Network drives
   $N  Current drive
   $P  Current drive and path
   $Q  =           (equal sign)
   $S              (space)
   $T  Current time
   $V  Windows version number
   $_  Carriage return and linefeed
   $$  $           (dollar sign)
   $+  Will display plus signs (+) one for each level of the PUSHD directory stack
```

For example:

```batch
REM Show the time (HH:MM) at the prompt
PROMPT=[$T$H$H$H$H$H$H]

REM Show the time (HH:MM) at the prompt, with color
PROMPT=$E[1;37;42m[$T$H$H$H$H$H$H]$E[;m

REM Reset to default
PROMPT=
```

Ref: https://ss64.com/nt/prompt.html

## Environment Variable

Set a variable in the current environment

```batch
set FOOBAR=1
```

Remove a variable in the current environment (not permanently)

```batch
set FOOBAR=
```

Permanently remove the variable from the user environment (require logout/reboot to take effect):

```batch
REG delete HKCU\Environment /F /V FOOBAR
```

Permanently remove the variable from the system environment (require logout/reboot to take effect):

```batch
REG delete "HKLM\SYSTEM\CurrentControlSet\Control\Session Manager\Environment" /F /V FOOBAR
```

## Windows System Info

```batch
ver
systeminfo
``` 