# Calling Conventions

<http://www.codeproject.com/Articles/1388/Calling-Conventions-Demystified>

> Because the stack is cleaned by the called function, the `__stdcall` calling convention creates smaller executables than `__cdecl`, in which the code for stack cleanup must be generated for each function call. On the other hand, functions with the variable number of arguments (like `printf()`) must use `__cdecl`, because only the caller knows the number of arguments in each function call; therefore only the caller can perform the stack cleanup.
