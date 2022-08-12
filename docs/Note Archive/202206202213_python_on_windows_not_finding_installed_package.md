---
aliases: []
tags:
  - troubleshooting
---

# Python on Windows Not Finding the Installed Package

## Context
When running the following command on Windows, it returns an error suggesting a module is not found:

```
> myscript.py 

Traceback (most recent call last):
  File "myscript.py", line 14, in <module>
    from azure.identity import AzureCliCredential
ModuleNotFoundError: No module named 'azure.identity'
```

The underlying Python is the Anaconda distribution, and `conda list` shows that the module in question is indeed installed.

## Problem
How to resolve the issue of the installed module not found?

## Solution
Two possible solutions.

### Solution 1
Run 
```
python myscript.py
```

instead of 
```
myscript.py
```

This is because on Windows, the `C:\Windows\py.exe` launcher is associated with .py files by default, and the launcher automatically [detects the Python installation](https://docs.python.org/3/using/windows.html#the-microsoft-store-package), which may not be the one that installs the module in question (i.e., it may detect the default conda enviornment instead of the virtual environment user is currently using.)

### Solution 2
Run the following command to find out where the module in question is installed (show in the `Location` field)
```
pip show azure-identity
```

Then run the following command to make sure the location of the module is included in the search path in Python:
```
python -c "import sys; print(sys.path)"
```

ref: https://stackoverflow.com/questions/34213764/unable-to-use-azure-sdk-in-python
