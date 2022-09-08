# Debugging "The ordinal N could not be located in the dynamic link library" Error

## Context

When running some executable or loading some DLL, the error occurs with the following error message:

```
The ordinal N could not be located in the dynamic link library
```

Where N here is an integer.

## Solution

Update the related executable or the related DLLs so that the library information is consistent across the entire program.

## Analysis

The "Ordinal N" here refers to a function in the DLL. It is considered as an alternative name of the function used internally in the DLL. The reported error message basically means that a specific function cannot be found in the DLL.

To find out more information about the function in question, such as the actual name of the missing function, use `dumpbin.exe` with the following syntax to export the mapping between the ordinal number and the actual function name. 

```
dumpbin.exe /exports <PathToDll>
```

For example, following is part of the results of running `dumpbin.exe /exports C:\Windows\System32\AudioEng.dll`:

```
Dump of file c:\windows\system32\AudioEng.dll

File Type: DLL

  Section contains the following exports for audioeng.dll
  
    00000000 characteristics
    988907DD time date stamp
        0.00 version
           1 ordinal base
           6 number of functions
           6 number of names
 
ordinal hint RVA      name
 
      1    0 00024090 AERT_Allocate
      2    1 000240E0 AERT_Free
      3    2 00004490 DllCanUnloadNow
      4    3 00005440 DllGetClassObject
      5    4 0003C360 DllRegisterServer
      6    5 0003C370 DllUnregisterServer
```

If the error message reads "The ordinal 3 could not be located in the dynamic link library", it means the `DllCanUnloadNow` function is missing for some reason.

Note:

* `dumpbin.exe` is not a built-in Windows function. It comes with some Windows Tooling programs such as Visual Studio 2017.
