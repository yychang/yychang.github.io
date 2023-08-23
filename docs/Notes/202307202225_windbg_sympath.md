# WinDbg Symbol Path Syntax

## Basic Rules

* The paths are separated by `;`
* Relative paths are supported, but it is not recommended to use relative paths
* Symbol info is searched in the paths listed in order.
* Magic string `cache*;`: The symbols loaded from any element that appears to the right of `cache*;` will be cached locally.
    * `cache*;C:\path\to\DirA;C:\path\to\DirB;`: Symbol loaded from `C:\path\to\DirA` or `C:\path\to\DirB` will be cached in the default cache directory
    * `cache*C:\path\to\my\cache;C:\path\to\DirA;C:\path\to\DirB;`: Symbol loaded from `C:\path\to\DirA` or `C:\path\to\DirB` will be cached in `C:\path\to\my\cache`
* Magic string `srv*`: The path to some symbol store/server.
    * `srv*`: Search the symbol in the Microsoft public symbol server (default symbol store)
    * `srv*https://my.symbol.server.com/symbols`: Search the symbol at `https://my.symbol.server.com/symbols`
    * `srv*C:\MyServerSymbols*https://my.symbol.server.com/symbols`: Search the symbol at `https://my.symbol.server.com/symbols`, and cache them at `C:\MyServerSymbols`

## Reference

* https://learn.microsoft.com/en-us/windows-hardware/drivers/debugger/symbol-path