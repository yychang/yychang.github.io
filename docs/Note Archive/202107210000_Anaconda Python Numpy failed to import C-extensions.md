# Anaconda Python Numpy failed to import C-extensions

## Context

When running Anaconda Python with Numpy, the script errors out with the following message:

```
Importing the numpy c-extensions failed. This error can happen for
different reasons, often due to issues with your setup.
```

## Problem

How to resolve the problem?

## Solution

Make sure the following Anaconda folders are in the `PATH` .

*   `<Anaconda_Root>`
*   `<Anaconda_Root>/Library/bin`
*   `<Anaconda_Root>/Scripts`

Example of `<Anaconda_Root>` : `%USERPROFILE%\Anaconda3`

## Related
* [[201908130001_conda update fails with an error related to _SSL module is not available_]]

