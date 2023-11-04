---
aliases: 
tags: []
---

# Python Names and Objects

## Overview

This page documents the definitions of the _names_ and _objects_ in Python. Such knowledge will help answer the following common questions:

* Are Python function arguments pass-by-reference or pass-by-value?
* What is the difference between `x == y` and `x is y`?

The basic idea about _names_ and _objects_ in Python can be described as follows:

* An _object_ is a blob of data in the memory
* A _name_ is a string in the Python code, referring to an _object_.

In the following assignment statements, the left-hand side of the `=` operator is a name, and the right-hand side is an [expression](https://docs.python.org/3/reference/expressions.html) that will be evaluated and yield an object

```py
# An object of type int, value 10 is created.
# A name 'x' is created and refers to the object
x = 10

# An object of type int, value 10 is created. Whether this object is identical to the one created in the previous line is implementation-dependent.
# A name 'y' is created and refers to the object
y = 10

# After evaluation, an object of type int, value 11 is created.
# A name 'z' is created and refers to the object
z = x + 1

# An object of type Sequence, value [int(1), int(2)] is created.
# A name 's' is created and refers to the object
s = [1, 2]
```


## Objects

_Objects_ are Python's abstraction of data. All data in a Python program is represented by objects or by relations between objects.[^pyobjects]

An object consists of the following 3 components:

1. An _identity_
2. A _type_
3. A _value_

An object's _identity_ is a unique ID that never changes over the object's life cycle. The `is` operator compares the identity of two objects; the `id()` function returns an integer representing the object's identity[^pyobjects].

An object's _type_ determines the operations that the object supports. An object's type also never changes over the object's life cycle[^pyobjects]. The `type()` function returns the object's type. Followings are the standard types in Python:

1. None
2. NotImplemented
3. Ellipsis
4. numbers.Number (int, bool, float, etc)
5. Sequences
6. Set types
7. Mappings
8. Callable types (functions, classes, etc)
9. Modules
10. Custom classes
11. Class instances
12. I/O objects
13. Internal types

An object's _value_ is the data that the object stores. The value of an object may or may not be changeable. An object is said to be _mutable_ if its value can change; otherwise the object is said to be _immutable_.

!!! note "Identities of Two Number Objects"
    Although the comparison `x is y` in the following code sample may yield `True` from time to time, it is implementation-dependent and may not yield the same results on different machines/Python versions.

    ```py
    x = 1001
    y = 1000 + 1
    print(x is y)
    ```

    Python compiler may optimize `1000 + 1` away with `1001`, pre-allocate an object of int with value 1001, then bind both name `x` and name `y` with the pre-allocated object, resulting in `x` and `y` referencing to the same object. However, this behavior is not explicitly defined in the Python spec, and therefore it depends on the implementation of the compiler.

!!! note "Mutable Objects within Immutable Objects"
    An "immutable object" may contain mutable objects, and the values of those mutable objects can still change. For example, a 2-tuple `([1, 2], [3, 4])` is an immutable object in the sense that the tuple's _value_, which is two sequence objects with some unique identities, cannot be changed. But as long as the identities of the two sequence objects remain unchanged, the underlying values of those the sequence objects can still be changed.

    To be more specific:

    ```py
    x = ([1, 2], [3, 4]) # Create a 2-tuple object ([1, 2], [3, 4]), bind the object with name 'x'
    # x[0] = [5, 6]      # this causes error because it attempts to change the object x[0] refers to
    x[0][0] = 5          # this is okay because it changes the value of the object referred by x[0], not the object x[0] itself.
    ```

[^pyobjects]: [The Python Language Reference >> 3. Data model >> 3.1. Objects, values and types](https://docs.python.org/3/reference/datamodel.html#objects-values-and-types)

## Names

_Names_ refer to objects.[^pynames] Names are introduced by name binding operations listed below:

1. formal parameters to functions
2. class definitions
3. function definitions
4. assignment expressions
5. _targets_ that are identifiers if occurring in an assignment:
    * `for` loop header
    * after `as` in a `with` statement, `except` clause, `except*` clause, or in the as-pattern in structural pattern matching
    * in a capture pattern in structural pattern matching
6. import statements


For example, in the following sample code:

```py
def plus_one(x):
    return x+1
```

`x` is a name (from "formal parameters to functions"), and `plus_one` is also a name (from "function definitions"). The name `plus_one` will be bound to a callable object, which is the function defined above.

_Names_ are also referred to as _identifiers_[^pyidentifier].

[^pynames]: [The Python Language Reference >> 4. Execution model >> 4.2.1. Binding of names](https://docs.python.org/3/reference/executionmodel.html#binding-of-names)
[^pyidentifier]: https://docs.python.org/3/reference/lexical_analysis.html#identifiers

## Assignment with Names and Objects

The syntax of the [assignment expression](https://docs.python.org/3/reference/expressions.html?highlight=assignment#assignment-expressions) is as follows:

```
assignment_expression ::=  [identifier ":="] expression
```

For example, in the following code:

```py
x = y
z = 32
```

`x` and `z` are _identifiers_, while `y` and `32` are _expressions_ that will be evaluated. The evaluation of the identifier `y` yields the object that `y` refers to[^evalnames]. And the evaluation of the literal `32` yields an object of the given type with the given value[^evalliteral].

!!! note "Assignment itself is never a copy"
    The assignment expression is merely a name binding operation bewteen a name and an object yielded from an expression. If there is indeed a "copy" operation happening, it is done either by the "expression" part or by the overridden `=` operator.

[^evalnames]: https://docs.python.org/3/reference/expressions.html#atom-identifiers
[^evalliteral]: https://docs.python.org/3/reference/expressions.html#literals

## Functions Arguments Are Pass-by-Assignment

The [syntax of a call](https://docs.python.org/3/reference/expressions.html#calls) in Python suggests that the arguments of a function are treated as "assignment expressions" or "expressions". As a result, whether the function can change the value of an input argument depends on the type of the input argument.

Example 1:

```py
def func1(x):
  x = x + 1
  return x

y = 1
z = func1(y)

print(y)    # 1
print(z)    # 2. A different object than y
```

In Example 1, at the function input, name `x` is assigned by name `y`, and therefore both of them refer to the same object (type `int`, value `1`). But inside the function, `x` is then re-assigned by another object (type `int`, value `2`), while `y` still refers to the original object.

Example 2:

```py
def func2(x):
  x[0] = x[0] + 1
  return x

y = [1, 2]
z = func2(y)

print(y)      # [2, 2]
print(z)      # [2, 2]
print(y is z) # True
```

In Example 2, at the function input, name `x` is assigned by name `y`, and therefore both of them refer to the same object (a sequence object `[1, 2]`). Inside the function, the function updates the first element in `x`, which will affect `y` as well.

Example 3:

```py
def func3(x):
  x = [5, 6]
  return x

y = [1, 2]
z = func3(y)

print(y)      # [1, 2]
print(z)      # [5, 6]
print(y is z) # False
```

In Example 3, at the function input, name `x` is assigned by name `y`, and therefore both of them refer to the same object (a sequence object `[1, 2]`). Inside the function, the function re-assign `x` with another object. This does not affect the object referred by name `y`.

## Reference

* https://docs.python.org/3/reference/datamodel.html#
* https://docs.python.org/3/reference/executionmodel.html#naming-and-binding
* https://nedbatchelder.com/text/names.html
