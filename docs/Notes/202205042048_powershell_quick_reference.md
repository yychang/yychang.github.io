---
aliases: []
tags:
  - quick-ref
---

# PowerShell Quick Reference 

## Dictionary/Map

### Initialization

```powershell
$MyTable = @{
    'Key1' = Value1;
    'Key2' = Value2;
    'Key3' = Value3;
}
```

### Useful Operations

```powershell
# Access individual item
$Value1 = $MyTable.'Key1';

# Iterate through the table
foreach($k in $MyTable.keys) {
    Write-Output $k + " => " + $MyTable.$k
}

```

## File I/O

### Creating a directory if it does not exist

```powershell
# Option 1
try {
  dir c:\temp *>$null
} catch {
  mkdir c:\temp
}

# Option 2
$tempstdout = dir c:\temp -ErrorAction SilentlyContinue
if( 1 -ne $? ) {
  mkdir c:\temp
}
```

### Check if a file/dir exists

```powershell
# Only works for file
[System.IO.File]::Exists("C:\temp\temp.txt")

# Works for both file and dir
Test-Path "C:\temp"
```

Note that these commands do not work on the remote device.

### Downloading File From Internet

```powershell
# Option 1
Invoke-WebRequest -Uri "$MyUrl" -OutFile "$MySaveTo"

# Option 2
(New-Object Net.WebClient).DownloadFile("$MyUrl", "$MySaveTo")
```

## Misc

### Redirecting outputs

```powershell
dir >$null 2>&1
dir *>$null
```

### Writing a PowerShell script that takes command line options

```powershell
param (
  [string]$WorkDir = "",
  [Parameter(Mandatory=$true)][string]$File = "",
  [string]$FileArg = "",
  [switch]$WaitExit = $false
)

# Beginning of the script body
# ...
```

### Running an executable in an elevated window

```powershell
$myArg = @{
  FilePath        = "$MyExePath"
  verb            = "RunAs"
  ArgumentList    = "$MyExeArgs"
}
Start-Process @myArg
```

### Misc

```powershell
# Convert the file path to the absolute path
$File = [System.IO.Path]::GetFullPath($File);

# Resolve some non-existent path (like "~")
$path = $ExecutionContext.SessionState.Path.GetUnresolvedProviderPathFromPSPath("~\.vimrc")
``` 