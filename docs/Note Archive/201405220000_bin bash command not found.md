# bash: ?#!/bin/bash : command not found

## Context
When programming a bash script and/or .bashrc, the first line of the script is written as 
```bash
#!/bin/bash
```

But when executing the script, it prints the following error message:
```bash
bash: ?#!/bin/bash : command not found
```

## Root Cause
The script is probably stored as a UTF-8 file and there is a BOM added to the header. The BOM may read as '`EF BB BF`' in HEX mode. 

See 

*   <http://stackoverflow.com/questions/4676053/cygwin-command-not-found-bad-characters-found-in-bashrc-357-273-277>
*   <http://developer.nokia.com/Community/Discussion/showthread.php/4193-The-header-of-utf-8-file-Why-there-is-extra-char-quot-quot-when-saving-a-file-as>

## Solution
Remove the header using some advanced text editor features. Or create a new file and copy the content of the old script into the new file, hoping that the newly created file does not contain the BOM.

In Vim, run the following commands to remove BOM:
```vim
:set nobomb
```
