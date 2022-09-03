# Tail Call Optimization

Tail Call: a subroutine **call** performed as the final action of a procedure

Following is a tail call

```cpp
int f(int x) {
    return g(x);
}
```

Following is NOT a tail call

```cpp
int h(int x) {
    int y = g(x);
    return y;
}
```

function `h()` needs to push the information belongs to `h()` into a call stack when calling `g()`, while function `f()` does not have to. This is because no information in `f()` needs to be preserved when calling `g()`.

This concept is important for optimizing the recursion, or called tail recursion.

A typical factorial function:

```cpp
int factorial(int n) {
    if (n === 1) return 1;
    return n * factorial(n - 1);
}
```

A factorial function implemented as tail recursion:

```cpp
int factorial(n, total) {
    if (n === 1) return total;
    return factorial(n - 1, n * total);
}
```

The tail recursion allows the compiler to optimize the code and save n layers of call stack

## Reference

* https://en.wikipedia.org/wiki/Tail_call
* https://stackoverflow.com/questions/33923/what-is-tail-recursion
