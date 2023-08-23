# Windows: Filter Command Output to Show Only Few Lines Around A Matched Pattern

## Context

In Windows, user may use some commands such as `sc.exe` to look up certain information. While user knows the keyword to search for, what user wants to see is the entire chunk of information around the keyword, instead of just the lines that contains the keyword.

For example, when user uses `sc` to look for the services that are related to "print", user may actually want to know the status of the corresponding services, which is expected to be a few lines above or below the line containing "print" in the screen output.

## Problem

How does user uses a command-line command to filter the STDOUT of another command so that only a few lines around a matched pattern are shown?

## Solution

Run a command like the following in the CMD

```pwsh
powershell -command " & <CMD-COMMAND> <COMMAND-ARG1> <COMMAND-ARG2> <...> | Select-String -Pattern <PATTERN> -Context <N1>,<N2> "
```

Explanations:

* The command above runs the following PowerShell command:

    ```
    & <CMD-COMMAND> <COMMAND-ARG1> <COMMAND-ARG2> <...> | Select-String -Pattern <PATTERN> -Context <N1>,<N2>
    ```

* The PowerShell command means "Run the command `<CMD-COMMAND> <COMMAND-ARG1> <COMMAND-ARG2> <...>`, find a line that contains `<PATTERN>`, and then print `<N1>` lines before the match and `<N2>` lines after the match."

For example, if user wants to find the keyword `print` in the `sc query` output and print 2 lines before the match as well as 4 lines after the match, user can issue the following command in CMD:

```
powershell -command " & 'C:\Windows\System32\sc.exe' query | Select-String -Pattern print -Context 2,4 "
```