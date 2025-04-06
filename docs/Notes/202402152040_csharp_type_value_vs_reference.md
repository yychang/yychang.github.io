---
aliases: 
tags: []
---

# C\# Value Types and Reference Types

## Overview 

There are two kinds of types in C\#: 

* _reference types_ 
* _value types_

Variables of value types directly contain their data. As a result, the copy operation or assignment operation for variables of value types will create a new variable.

Variables of reference types store references to their data. As a result, the copy operation creates a new variable that references to the same data


## Reference Types

Following keywords are used to declare reference types:

* `class`
* `interface`
* `delegate`
* `record`

And followings are the built-in reference types:

* `dynamic`
* `object`
* `string`

## Value Types

A _value type_ can be one of the two following kinds:

* _structure type_ (typically defined with `struct` keyword)
* _enumeration type_ (defined with `enum` keyword)

Following are the built-in value types (also known as _simple types_):

* Integral numeric types
* Floating-point numeric types
* `bool`
* `char`

Additional notes:

* All _simple types_ are _structure types_.
* _simple types_ differ from the other _structure types_ in the following ways:
    * You can use literals to provide a value of a simple type
        * e.g. `'A'` for a variable of type `char`, or `123` for a variable of type `int`
    * You can apply `const` keyword to a variable of simple type; you cannot do so for the other structure types.
    * Constant expressions whose operands are all constants of the simple types are evaluated at compile time. 

## Reference

* https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/value-types
* https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/reference-types