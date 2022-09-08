# Customize Git Bash Prompt
## Context
When using [Git for Windows](https://gitforwindows.org/), the user wants to customize the Bash prompt. The customization should be done outside of the Git for Windows installation folder so that the change won't be overwritten when the user installs a new version of Git for Windows.

## Problem 
How to change the Bash prompt?

## Solution
Create a new `.sh` file at the following location:

```
~/.config/git/git-prompt.sh
```

then edit the newly created file to define the prompt variable `PS1`. An example for the file content:

```sh
PS1='\[\033]0;$TITLEPREFIX:$PWD\007\]' # set window title
PS1="$PS1"'\n'                 # new line
PS1="$PS1"'\[\033[32m\]'       # change to green
PS1="$PS1"'\u@\h '             # user@host<space>
PS1="$PS1"'\[\033[35m\]'       # change to purple
PS1="$PS1"'$MSYSTEM '          # show MSYSTEM
PS1="$PS1"'\[\033[33m\]'       # change to brownish yellow
PS1="$PS1"'\w'                 # current working directory
```

## Note
Git for Windows loads `/etc/profile.d/git-prompt.sh` for the prompt definition, which loads `~/.config/git/git-prompt.sh` for the `PS1` definition (if exists). As long as Git for Windows follows the same convention for the new versions, the customization will not be affected by the new version of Git for Windos.



