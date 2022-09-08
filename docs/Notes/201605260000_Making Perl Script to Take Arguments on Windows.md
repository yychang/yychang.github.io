# Making Perl Script to Take Arguments on Windows

## Context

On Windows (10), with ActivePerl, while the OS recognizes \*.pl as the Perl script and executes the file with perl.exe, no arguments are accepted.

In other words, running

```
myScript.pl arg1 arg2 arg3
```

is the same as running

```
myScript.pl
```

One workaround for this is to explicitly invoke the script with perl.exe:

```
path/to/perl.exe path/to/myScript.pl arg1 arg2 arg3
```

However, this is inconvenient because the full path to myScript.pl has to be provided.

## Solution

The root cause is that "some" file association setting on Windows fails to account for the arguments coming with the Perl script command. But the problem is that there are multiple places that all seem to attempt to define the file association of Perl. Before there is a document elaborating how the file association works on the latest Windows, the recommendation is to empirically try all of the potential solutions and find out which one works.

### Solution 1: `HKEY_CLASSES_ROOT\Applications\perl.exe`

The full path to the registry is  `HKEY_CLASSES_ROOT\Applications\perl.exe\shell\open\command` ,  and the value may be  `"C:\Perl64\bin\perl.exe" "%1"`

In such case, change the value to `"C:\Perl64\bin\perl.exe" "%1" %*` 

The "`%1`" in the command refers to "the first argument", which is the Perl script itself. The "`%*`" refers to "the rest arguments". Without "`%*`", Windows just omits all the arguments following the Perl script.

**NOTE:** The registry key "`Applications\perl.exe`" is created by Windows when user manually chooses specific program to execute the Perl script via the "Open With" option in the File Explorer. This seems to determine how `*.pl` file will be treated when entered in the CMD window.

### Solution 2: `HKEY_CLASSES_ROOT\pl_auto_file`

There may be a registry key `pl_auto_file\shell\open\command` that also defines how Perl script is executed. If its value misses "`%*`", add it to the register value like suggested in Solution 1.

Note that this pl_auto_file may be present in multiple places. It's unclear whether all of them have to be modified.

```
HKEY_CURRENT_USER\SOFTWARE\Classes
HKEY_CLASSES_ROOT\
HKEY_USERS\S-X-X-XX-XXXXXXX-XXXXXX-XXXXXXX-XXXX\Software\Classes
```

**NOTE:** The registry key "pl_auto_file" is created by Windows when user manually chooses specific program to execute the Perl script via the "Open With" option in the File Explorer.  Strawberry Perl seems to use a registry key of different name "Perl_program_file".

### Solution 3: FTYPE and ASSOC
Run the following command to confirm if .pl is associated with Perl file type:
```
ASSOC | FINDSTR /snip perl
```

The expected output is something like
```
 .pl=Perl
```

Run the following command to confirm how the Perl file type will be executed:
```
FTYPE | FINDSTR /snip perl
```

The expected output is something like
```
Perl="C:\Perl64\bin\perl.exe" "%1" %*
```

Similarly, if "`%*`" is missing in FTYPE, run the following command to fix the association.
```
FTYPE Perl="C:\Perl64\bin\perl.exe" "%1" %*
```

**NOTE**: ASSOC may return something like "`.pl=Perl_program_file`" while FTYPE has no definition for "`Perl_program_file`". In such case, refer to Solution 2 and see if "`Perl_program_file`" can be found under  `HKEY_CLASSES_ROOT`.

## See Also
* https://stackoverflow.com/questions/51715292/best-way-to-get-file-type-association-in-windows-10-from-command-line
