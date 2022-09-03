# Exuberant-ctags v.s. Universal Ctags

Recommend using Exuberant-ctags for C/C++ for now.

Universal Ctags does not come with the executable. The executable available for download at <https://ci.appveyor.com/project/masatake/ctags/build/job/64sb0lj9cbnymw1h/artifacts> has some problems

* Only the build from mingw can run out of box. But this build does not recognize the following syntax:

    ```
    typedef struct {
    } ABC, *PABC
    ```

    It recognizes tag "PABC" but not tag "ABC"
* As of 2016/08/10, `iconv.dll` is included in the zip file
* Universal Ctags does not correctly parse the function that has "macro function" in the argument list

    ```
    int MyFunc( _In_reads_(1) int* pArray ) {
        ...
    }
    ```

`_In_reads_(1)` is the Microsoft SAL macro to annotate that the size of pArray is 1. With the presence of `_In_reads_(1)`, Universal Ctags is unable to recognize the function "MyFunc"

Ctags document suggests using "-I" option to work around this issue, (`ctags.exe -I _In_reads_+`), but Universal Ctags still cannot recognize MyFunc even with the "-I" option.
