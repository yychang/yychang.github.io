# Numpy Array Broadcasting

## Context

Many arithmetic operations, such as [Hadamard product](https://en.wikipedia.org/wiki/Hadamard_product_(matrices)), requires the operands to be of the same shape. However, enforcing the same shape on the operands may lead to unnecessary copies of data.

For example, for a data array of shape MxN, user may want to apply a Mx1 weight vector each of the N columns. If user needs to first match the array size before running Hadamard product, then the user has to first replicate the Mx1 vector to an MxN array. The unnecessary duplication of the Mx1 vector may result in additional memory usage and missed opportunity for optimization.

## Problem

How to avoid the unnecessary replication of the array for many array/matrix operations, allowing Numpy to further optimize the computation?

## Solution

When the two operands are of different shapes but the operator expects identical shapes, Numpy will try to replicate or expand the smaller array to match the shape of the larger one. This behavior is called "broadcasting."

Numpy compares the shapes of the two arrays, starting with the trailing (rightmost) dimensions and working its way left. Two dimensions are _compatible_ if one of the followings is true:

1. they are equal
2. one of them is 1
    * The absence of the dimension is considered a dimension of size 1.

If every dimension of the two arrays are _compatible_, then the arrays are called _broadcastable_ arrays.

Examples of broadcastable arrays:

```
A      :   5 x 4   # shape (5,4)
B      :       1   # shape (1,)
Result :   5 x 4   # shape (5,4)

A      :   10 x  1 x 30 x  1  # shape (10,1,30,1)
B      :        20 x  1 x 40  # shape (20,1,40)
Result :   10 x 20 x 30 x 40  # shape (10,20,30,40)
```

Note that shape `(5,1)` and shape `(5,)` are different:

```
# Successfully brocast B from (5,1) to (5,4)
A      :   5 x 4   # shape (5,4)
B      :   5 x 1   # shape (5,1)
Result :   5 x 4   # shape (5,4)

# Fail to brocast C to the shape of A
A      :   5 x 4   # shape (5,4)
C      :       5   # shape (5,)
Result :   N/A
```


