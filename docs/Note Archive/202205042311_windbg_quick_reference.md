---
aliases: []
tags:
  - quick-ref
---

# WinDbg Quick Reference

## Basics

### Stepping

| Command | Description |
| --- | ----------- |
| `g` | go |
| ``g `:123` `` | Run to source line 123 of the current source file |
| ``g `MyModule!path/to/myfile.c:123` `` | Run to source line 123 of `path/to/myfile.c` |
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
| `bu [address]` | set unresolved breakpoint |
| `bu MyModule!MyClass::MyFunc` | set breakpoint at the specified function before MyModule is loaded |
| <code>ba [r\|w\|e][Size] [address]</code> | set breakpoint upon access to specified address |
| `ba r4 0x3e1f6c` | break when reading/writing the variable at specified address |

Notes:

* `MyModule` is usually the name of the executable or the DLL where the function is executed.
* To look up the address of a variable, use the command `dx &MyVariable` or `dx MyPtr`

## Reference

* http://windbg.info/doc/1-common-cmds.html 