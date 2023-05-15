---
aliases: []
tags:
  - cpp
---

# Handle to Object Operator (^)

## Overview

In some c++ code, there may be a function declared as follows:

```cpp
MyClass^ MyFunc();
```

The hat (^) sign after the class name is the "handle to object operator," indicating that the declared object should be automatically deleted when the system determines that the object is no longer accessible.

## Reference

[Handle to Object Operator (^) (C++/CLI and C++/CX) | Microsoft Learn](https://learn.microsoft.com/en-us/cpp/extensions/handle-to-object-operator-hat-cpp-component-extensions?view=msvc-170)