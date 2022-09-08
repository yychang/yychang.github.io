# conda update fails with an error related to "SSL module is not available"

## Context

With Anaconda v4.7.11, `conda update --all` fails with error messages involving

```
Max retries exceeded with url: / (Caused by SSLError("Can't
connect to HTTPS URL because the SSL module is not available."))
```

## Problem

How to resolve the problem?

## Solution

Add the followings to the `$PATH`

```
/path/to/Anaconda3
/path/to/Anaconda3/scripts
/path/to/Anaconda3/Library/bin
```

See <https://stackoverflow.com/questions/54135206/requests-caused-by-sslerrorcant-connect-to-https-url-because-the-ssl-module>

## Related
* [[202107210000_Anaconda Python Numpy failed to import C-extensions]]
