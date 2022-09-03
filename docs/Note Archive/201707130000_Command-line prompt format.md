# Command-line prompt format

## Windows

<https://ss64.com/nt/prompt.html>

Example

```
PROMPT=$E[1;37;42m(%USERNAME%)$P$E[;m$_$E[1;37;42m[$T$H$H$H$H$H$H]$E[;m$+$G
```

```
(yyc) c:\Windows
[15:00]>
```

`$T` is the timestamp with two digits below the decimal points in seconds. `$H` is "backspace". 6 `$H` after `$T` removes the "second" information in the time stamp (15:00:12.34 --> 15:00)

## Bash

<https://www.cyberciti.biz/tips/howto-linux-unix-bash-shell-setup-prompt.html>
