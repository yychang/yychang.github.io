# WinDbg Quick Reference

## Basics

### Stepping

| Command | Description |
| --- | ----------- |
| `g` | go |
| ``g `:123` `` | Run to source line 123 of the current source file |
| ``g `MyModule!path/to/myfile.c:123` `` | Run to source line 123 of `path/to/myfile.c` |
| `g MyModule!MyClass::Func` | Run to the beginning of `MyClass::Func` |
| ``g 00007ff6`74ba5f84 `` | Run to address ``00007ff6`74ba5f84`` | 
| `gu` | Go up = execute until the current function is complete  |
| `p` | step over |
| `t` | step into |

### Browsing Information

| Command | Description |
| --- | ----------- |
| `k` | display call stack |
| `kd` | display raw stack data |
| `lm` | display all loaded and unloaded modules |
| `lmv` | verbose mode for `lm` |
| `lm m kernel32` | display information for `kernel32.dll` |
| `dt MyModule!MyVar*` | display all variables containing `MyVar` in `MyModule.dll` |
| `dt MyModule!MyVar* -v` | verbose mode for `dt MyModule!MyVar*` |
| `dt MyModule!MyVar* -s 8` | Same as `dt MyModule!MyVar*` but show only whose size is 8 bytes |
| `dt MyModule!MyVar -r2` | display the information of `MyVar` recursively for 2 layers |
| `dv /t /V /i` | List all local variables with type information (/t), address offset (/V), and classify them into categories (/i) |

### Expression

| Cmd | Description |
| --- | ----------- |
| `? Expression` | evaluates an expression |
| `? 30 + 40` | Show the result of 0x30 + 0x40, in DEC and in HEX |
| `? 0n100` | Show the result of 100, in DEC and in HEX |
| `?? Expression` | evaluates and displays the value of an expression according to the C++ expression rules |
| `?? @@c++(Expression)` | Use C++ expression parser to evaluates and displays the value of an expression |

Example:

```
?? @@c++( ((MyStruct*)ptr)->MyField )
```

### Break points

| Cmd | Description |
| --- | ----------- |
| `bp [address]` | set breakpoint at the specified address |
| ``bp `MyModule!file.c:12` `` | set breakpoint at the specific line in the source code |
| `bp MyModule!MyClass::MyFunc` | set breakpoint at the specified function. (May hit ambiguity issue if MyFunc is overloaded) |
| `bp @@( MyClass::MyFunc )` | set breakpoint at the specified functions. (Good for overloaded functions) |
| `bp /w "MyVar > 20" [address]` | Conditional breakpoint, triggerred when `MyVar > 20` |
| `bu [address]` | set unresolved breakpoint |
| `bu MyModule!MyClass::MyFunc` | set breakpoint at the specified function before MyModule is loaded |
| <code>ba [r\|w\|e][Size] [address]</code> | set breakpoint upon access to specified address |
| `ba r4 0x3e1f6c` | break when reading/writing the variable at specified address |
| `bp [address] [count]` | set breakpoint that will be hit after being passed by `[count]` times |
| `bl` | List all the breakpoints, along with their remaining pass counts | 

Notes:

* `MyModule` is usually the name of the executable or the DLL where the function is executed.
* To look up the address of a variable, use the command `dx &MyVariable` or `dx MyPtr`
* `bl` shows the breakpoints in a format like the following:

    ```
    0 e Disable Clear  00007ffc`39b2fa20  [path\to\file.cpp @ 67]     084b (1000)
    ```

    where `084b` is the remaining pass count, and `(1000)` is the original pass count

## Reference

* http://windbg.info/doc/1-common-cmds.html
* https://docs.microsoft.com/en-us/windows-hardware/drivers/debugger/commands