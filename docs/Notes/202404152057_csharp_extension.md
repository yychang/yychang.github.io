---
aliases: 
tags: []
---

# C\# Extension Classes

## Context

Developer wants to implement additional methods for a class as if those methods are the member methods of the class. For example, instead of implementing a function `ToInt()` used as follows:

```csharp
string x = '32'
var y = ToInt(x)
```

The developer wants the said function to be invoked as follows:

```csharp
string x = '32'
var y = x.ToInt()
```

The developer does not have the permission to modify the class and cannot directly add the addition methods to the class.

## Problem

How to add such "additional methods" to a class that the developer does not have permission to modify the source code?

## Solution

Assume name of the class of interest is `ClassX` and the signature of the method to be added is `int MethodY(ClassX x)`, implement the following class, which is referred to as the "extension class" of `ClassX`:

```csharp
namespace Some.Namespace.For.ClassXExtension

public static class ClassXExtension
{
    public static int MethodY(this ClassX x)
    {
        // Implementation
    }
}
```

Now, in a different part of the project, the developer will be able to invoke `MethodY` as if it's a member method of `ClassX` (as long as that part of the project recognizes the namespace `Some.Namespace.For.ClassXExtension`).

Note that:

* The extension class name does not matter. But the convention is to name it as `<Class_Of_Interest>Extension`

## Reference

* [c# - What is the ServiceCollectionExtensions class used for in .Net Core? - Stack Overflow](https://stackoverflow.com/questions/57628021/what-is-the-servicecollectionextensions-class-used-for-in-net-core)