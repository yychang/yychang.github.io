# Python subprocess.run() returns error code 3221226505

## Context

Implemented `test.py` with the following code:

```python
from pathlib import Path
import subprocess

def run_test():
    """
    """
    some_exe = Path('path/to/some/exe/file.exe')
    arg1 = 'some_arg'
    some_tag = 'something_something'
    arg2 = f'some_more_arg_{some_tag}_"someString"'

    some_cmd = [ str(some_exe), arg1, arg2 ]
    print(" ".join(some_cmd))
    results = subprocess.run(some_cmd)
    if(0 != results.returncode):
        print(f"error code: {results.returncode:d}")

if "__main__" == __name__:
    run_test()
```

When running the code with python (`python test.py`), `subprocess.run()` returns a Windows error code 3221226505. However, running the commands printed by `print(" ".join(some_cmd))` succeeded without error.

## Problem

How to run the command with Python without error?

## Solution

Remove the double quote (") in `arg2`:

```
arg2 = f'some_more_arg_{some_tag}_someString'
```

## Note

It's still unclear to me what's going on here, but it looks like the problem of the executable not able to properly handle the double quotes in the arguments.
