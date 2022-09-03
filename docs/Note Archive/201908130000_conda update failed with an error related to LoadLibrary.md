# conda update failed with an error related to LoadLibrary()

## Context

With Anaconda v4.7.11, `conda update --all` fails with error messages involving

```
    libarchive = ctypes.cdll.LoadLibrary(libarchive_path)
  File "E:\prg\py\Anaconda3_64\lib\ctypes\__init__.py", line 434, in LoadLibrary
    return self._dlltype(name)
  File "E:\prg\py\Anaconda3_64\lib\ctypes\__init__.py", line 356, in __init__
    self._handle = _dlopen(self._name, mode)
TypeError: LoadLibrary() argument 1 must be str, not None
```

## Problem

How to resolve the problem?

## Solution

Open an Anaconda Prompt (which can be found in the Start menu) and run the following command:

```
conda install python-libarchive-c=2.8=py37_13.
```

See <https://github.com/conda/conda/issues/8865> for more details about the bug.
