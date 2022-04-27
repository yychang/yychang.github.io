---
tags:
  - quick-ref
---

# Python Numpy Quick Reference

## Array

### Initialization

```python
import numpy as np

# 1-D array
x = np.array([1, 2, 3])
 
# 2x3 2-D array 
x = np.array( [[1, 2, 3], [4, 5, 6]] )
 
# Specify the data type
x = np.array([1, 2, 3], dtype=complex)
 
# Specify a range [1, 7) with step size 0.5
x = np.arange(1, 7, 0.5)
```

### Basic Operation

```python
a = np.array([1 2 3])
b = np.array([4 5 6])
 
# Operations with scalar: Apply the scalar to every element
c = a + 1 # = array([2 3 4])
c = 2**a # = array([2 4 8])
 
# Elementwise operations
c = a + b # = array([5 7 9])
c = a * b # = array([4 10 18])
c = a > b # = array([False False False], dtype=bool)
c = a / b # = array([0.25 0.4 0.5])
 
# Matrix multiplication
c = np.matmul(a, b)
c = a @ b # Python 3.5+

# Matrix concatenation
a = np.array([[1, 2], [3, 4]])       # 2x2
b = np.array([[5, 6]])               # 1x2
c = np.concatenate((a, b), axis=0)   # Concatenate 2x2 and 1x2 arrays to 3x2
c = np.concatenate((a, b.T), axis=1) # Concatenate 2x2 and 2x1 arrays to 2x3

# Check if x[i] matches any of the elements in y
z = np.isin(x, y)  # z[i] = True if x[i] is found in y
```

### Useful Array Operations

```python
x = np.array([[1, 2, 3], [4, 5, 6]], np.int32)

# Show the type of x. This command returns 'numpy.ndarray'
type(x)     

# Show the dimensions of x. This returns a tuple '(2, 3)' for the given x
x.shape     

# Show the data type of x. This returns 'dtype('int32')'
x.dtype     

# Access the element of row index = 1, column index = 2. 
# This returns 6 for the given x.
x[1, 2]     

# Slicing. y becomes array([2, 5]). Note this produces 
# a 'view' of the array instead of producing a copy. 
# In other words, changing y[0] will also change x[0,1]
y = x[:,1]  

 # Replace any entry where x<=4 with 4
y = np.where(x>4, x, 4) 

 # Remove the dimensions whose lengths are 1.
y = np.squeeze(x) 

 # Get the N largest values in the array x
largest_x = x.argsort()[-N:][::-1] 

# Get the indices of the N largest values in the array x
largest_ind = np.argpartition(x, -N)[-N:] 
 
# Inner product (without complex conjugation) over the 
# last axes of x and y. Inner product of (X1xX2xX3xM) 
# array and (Y1xY2xM) array yields a (X1xX2xX3xY1xY2) array
y = np.array([[7, 8, 9], [0, 1, 2]], np.int32)
z = np.inner(x, y)
 
# Rearrange the dimensions of an array
z = np.transpose(x, axes=[1,0])
z = x.transpose(1,0)
 
# Remove the dimensions whose size is 1
x = np.random.rand(3,1,2)  # shape (3,1,2)
y = np.squeeze(x) # shape (3,2)
x = np.array( [[123]] ) # shape (1,1)
y = np.squeeze(x) # shape (), which is an 0d-array

# Remove the specified dimensions if their sizes are 1
x = np.random.rand(1,3,1,1)  # shape (1,3,1,1)
y = np.squeeze(x, axis=(2,3)) # shape(1,3). 
```
