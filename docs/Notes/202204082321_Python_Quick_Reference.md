---
tags:
  - quick-ref
---

# Python Quick Reference

## Terminologies

Function v.s. Method:

| Function | Method |
|-|-|
| Independent of any object | Associated to an object |
| All the parameters are passed explicitly | The associated object is implicitly passed on |
| May or may not return any data | May or may not return any data |

Example of a function

```python
# Definition
def print_hello_word():
    print("Hello, world!")

# Usage
print_hello_word()
```

Example of a method (in the class "MyClass")

```python
# Definition
class MyClass:
    def print_hello_world(self):
        print("Hello, world!")

# Usage
x = MyClass()
x.print_hello_world()
```

## Operators

| Operation  | Syntax  | Function | Comments |
|------------|---------|----------|----------|
| Addition   | a + b   | add(a, b)|          |
| Concatenation  | seq1 + seq2  | concat(seq1, seq2) | |
| Containment Test  | obj in seq  | contains(seq, obj) | |
| Division  | a / b  | truediv(a, b) | |
| Floor Division  | a // b  | floordiv(a, b) | 13 // 5 = 2 |
| Bitwise And  | a & b  | and_(a, b) | |
| Bitwise Exclusive Or  | a ^ b  | xor(a, b) | |
| Bitwise Inversion  | ~ a  | invert(a) | |
| Bitwise Or  | a | b  | or_(a, b) | |
| Exponentiation  | a ** b  | pow(a, b) | |
| Identity  | a is b  | is_(a, b) | |
| Identity  | a is not b  | is_not(a, b) | |
| Indexed Assignment  | obj[k] = v  | setitem(obj, k, v) | |
| Indexed Deletion  | del obj[k]  | delitem(obj, k) | |
| Indexing  | obj[k]  | getitem(obj, k) | |
| Left Shift  | a << b  | lshift(a, b) | |
| Modulo  | a % b  | mod(a, b) | |
| Multiplication  | a * b  | mul(a, b) | |
| Negation (Arithmetic)  | - a  | neg(a) | |
| Negation (Logical)  | not a  | not_(a) | |
| Positive  | + a  | pos(a) | |
| Right Shift  | a >> b  | rshift(a, b) | |
| Slice Assignment  | seq[i:j] = values  | setitem(seq, slice(i, j), values) | |
| Slice Deletion  | del seq[i:j]  | delitem(seq, slice(i, j)) | |
| Slicing  | seq[i:j]  | getitem(seq, slice(i, j)) | |
| String Formatting  | s % obj  | mod(s, obj) | |
| Subtraction  | a - b  | sub(a, b) | |
| Truth Test  | obj  | truth(obj) | |
| Ordering  | a < b  | lt(a, b) | |
| Ordering  | a <= b  | le(a, b) | |
| Equality  | a == b  | eq(a, b) | |
| Difference  | a != b  | ne(a, b) | |
| Ordering  | a >= b  | ge(a, b) | |
| Ordering  | a > b  | gt(a, b) | |

Ternary condition operator:

```python
# v2.5+
x = a if condition else b
```

The last printed expression is assigned to the variable `_`

```python
>>> 3
3
>>> 5 + _
8
```

## String

### String Declaration

```python
# Strings can be declared with either single quotes or double quotes.
s1 = 'This is a book'
s2 = "This is a book"

# Strings declared with single quotes or double quotes are almost the same, except
# how they treat the single quote or double quote within the string
s1 = 'This isn\'t a book'
s2 = "This isn't a book"
s3 = 'He said "Yes"'
s4 = "He said \"Yes\""

# Strings support the commonly used special characters such as \n (newline)
s1 = 'Line1\nLine2'

# Multi-line string
s1 = """Line1
Line2"""

# Use trailing backslash to beautify the multi-line string
# declaration without adding extra newlines
s1 = """\
Line1
Line2\
"""

# Format string using %-formatting
name = "Data.txt"
size = 19.2
s1 = "The file name is %s and the size is %.2fMB" % (name, size)

# Format string using Formatted string literals (f-string) (v3.6+)
s2 = f"The file name is {name} and the size is {size:.2f}MB"

# Concatenate multiple strings across multiple lines using parenthesis
program_cmd = ("MyProg.exe" +
               " --arg1 " + Value1 +
               " --arg2 " + Value2)
```

### String Operation

```python
# Multiplication and concatenation
s1 = 3 * 'un' + 'ium' # s1 = 'unununium'

# Slicing
s1 = 'abcdefg'
s2 = s1[0:2]  # s2 = 'ab'
s3 = s1[:2]   # s3 = 'ab'
s4 = s1[4:]   # s4 = 'efg'
s5 = s1[-2:]  # s5 = 'fg'

# Remove trailing whitespaces and/or leading whitespaces, including newlines
s6 = '  \r\n  \r  abc def  \n\n  \r\n '
s6.rstrip()   # remove trailing whitespaces (returns '  \r\n  \r  abc def')
s6.lstrip()   # remove leading whitespaces (returns 'abc def  \n\n  \r\n ')
s6.strip()    # remove both leading and trailing whitespaces (returns 'abc def')

# Return the string after the last slash
s7 = 'https://en.wikipedia.org/wiki/Least_mean_squares_filter'
s8 = s7.rsplit('/', 1)[-1]

# Return the string before the first slash
s9 = s7.split('/', 1)[0]
```

### Raw String Literals

```python
# With prefix 'r', backslash will be treated as literal with only one exception:
# to escape the quote
s1 = r"My \"Hello World!\" program is at C:\Project\HelloWorld"

# Raw string is handy when defining the regular expression patterns
Pattern = r"int function\((.+)\)"
```

## List

### Initialization

```python
List1 = [1, 2, 3, 4, 5]
List2 = ["%d" % (x) for x in List1]
List3 = range(1,6)       # Works only in Python 2.x (range() returns a list)
List4 = list(range(1,6)) # Works only in Python 3.x (range() returns an iterator)
```

### Useful List Operations

```python
# Concatenation
List2 = List1 + [6, 7, 8, 9]

# Append
List2.append( 10 )

# Find the list size
len(List2)

# Remove the first item whose value is x
List2.remove(x) # raise ValueError if there is no such item

# Remove the item of index n
List2.pop(n)

# Remove the last item
List2.pop()

# Clear the list
List2[:] = []

# Iterate through the list
for x in List2:
    print x

# Iterate through the list, with the information about the index
for (i, x) in enumerate(List2):
	print i
	print x

# Iterate through multiple lists concurrently using zip();
# stop when the shortest list reaches the end.
for x1,x2 in zip(List1, List2):
    print x1, x2

# Create a duplicated "view"
x = [1 2 3]
y = [x]*5    # y will be a list of 5 references to x.
             # Note that each element in y references to the same x,
             # so changing x will affect every entry in y

# Loop through a list in batch
x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
batch_size = 3
for i in range(0, len(x), batch_size):
    print(x[i:i+batch_size])

# Add an item between each item already in the list
x = [1, 2, 3, 4, 5]
y = 'newItem'
z = [y] * (len(x)*2-1)  # Create a list of length 2N-1 filled with the new item
z[0::2] = x             # Fill z[2*n] with x[n]
```

### Nested List

```python
List1 = ['a', 'b', 'c']
List2 = [1, 2, 3]
List3 = [List1, List2]

# This returns ['a', 'b', 'c']
List3[0]

# This returns 'a'
List3[0][0]
```

## Tuple

### Initialization

```python
x = (1, 2, "text")
x = 1, 2, "text"   # Initialization by "tuple packing"
x = ()             # Creating an empty tuple
x = 1,             # Creating an singleton tuple using a trailing comma ','
not_a_tuple = (1)  # This won't create a tuple
```

### Useful Tuple Operations

```python
x[0]    # Access the first element
x[-1]   # Access the last element
x[1::2] # Access the all the elements from the 2nd to the end of the tuple,
        # with a step size of 2.

# Tuple unpacking: assign the elements in the tuple to individual variables.
# The number of variables on the left hand side has to be equal to the number
# of values in the tuple
a, b, c = x
(a, b, c) = x
```

## Dictionary/Map/Hash Table

The keys have to be of immutable type (e.g. numbers or strings, but not lists); the values can be any variable.

If a tuple contains only immutable objects, then the tuple can be used as a key.

### Initialization

```python
MyMap = {
    1 : "January",
    2 : "February",
    "Key" : "Value",
}

MyMap = dict([(1, "January"), (2, "February"), ("Key", "Value")])

MySquareMap = { x : x**2 for x in (2, 4, 6) }
```

### Useful Dict Operations 

```python
# Add an element
MyMap[3] = "March"

# Remove an element
del MyMap[1]      # This method raises KeyError if the key does not exist
MyMap.pop(1, None)# This method returns None if the key does not exist

# Find the number of key-value pairs
NumElement = len(MyMap)

# Check if a key exists
if( 3 in MyMap ):
    print("3 exists\n")
else:
    print("3 does not exist\n")

# Iterate through all elements
for k in MyMap:
    print k

for k,v in MyMap.items()
    print k, "=>", v

# Get all the keys
MyKeys = MyMap.keys()
```

## Control Flow

`while` statement

```python
a, b = 0, 1
while b < 10:
    print(b)
    a, b = b, a+b
```

`if` statement

```python
x = int(input("Please enter an integer: "))
if x < 0:
    x = 0
    print('Negative changed to zero')
elif x == 0:
    print('Zero')
elif x == 1:
    print('Single')
else:
    print('More')
```

`for` statement

```python
words = ['cat', 'window', 'defenestrate']
for w in words:
    print(w, len(w))
```

To modify the list while iterating through its elements, it's highly recommended to first make a copy of the list and then iterate through the copy instead of the origin:

```python
words = ['cat', 'window', 'defenestrate']

# Loop over a slice copy "words[:]" of the original list "words"
for w in words[:]:
    if len(w) > 6:
        words.insert(0, w)

# Loop over the original list, resulting in an infinite loop keeping inserting
# 'defenestrate'
for w in words:
    if len(w) > 6:
        words.insert(0, w)
```

###  `break`, `continue`, and `else` on Loops

The `else` clause for a loop is executed when the loop terminates through exhaustion of the list (with `for`) or when the condition becomes false (with `while`), but not when the loop is terminated by a `break` statement. For example:

```python
x = [0, 2, 4, 6, 8]
for i in x:
    if i % 2 == 1:
        print("x contains odd number")
        break
    else:
        print("x does not contain any odd number")
```

The `continue` statement continues with the next iteration of the loop.

### `pass` Statement

The `pass` statement does nothing. It can be used when a statement is required syntactically but the program requires no action.

```Python
if (x > 1):
    # TODO: Implement this later
    pass
else:
    do_something()
```

## Iterable object

An *iterable objec* is an object which returns the successive items of the desired sequence when being iterated over. While it may behave like a list in some ways, it is essentially not a list.

```python
x = range(5)
print(x)     # This prints 'range(0,5)'

y = list(x)  # Convert an iterable object into a list
print(y)     # This prints '[0, 1, 2, 3, 4]'
```

Usage of `range()`:

```python
x = range(5)     # Returns an iterable object that successively returns 0,1,2,3,4
x = range(0,5)   # Returns an iterable object that successively returns 0,1,2,3,4
x = range(0,5,2) # Returns an iterable object that successively returns 0,2,4
```

### Useful Operations

Print the elements in a list along with their indices.

```python
words = ['a', 'b', 'c']
for i in range(len(words)):
    print(i, words[i])
```

Move to next element

```python
x = range(5)

# Pop an element (and print the popped element to STDOUT)
next(x)

# Pop an element and assign it to _, so that the popped element will not be
# printed to STDOUT
_ = next(x)
```

## File/Directory Operations

Basic file operations

```python
import shutil

# Copy a file
shutil.copy2(src,dst) # dst can be a file or a directory

# Copy a directory (dst must not already exist)
shutil.copytree(src,dst)
```

Get current working directory

```python
# Get cwd
import os
cwd = os.getcwd()

# Replace '\' with '/' if on Windows
cwd = cwd.replace(os.sep, '/')
```

Check if the file/directory exists:

```python
# Python 3.4+
from pathlib import Path

my_file = Path("/path/to/something")
file_exists = my_file.is_file()
dir_exists = my_file.is_dir()
path_exists = my_file.exists()

# Older Python
import os
mypath = '/path/to/something'
file_exists = os.path.isfile(mypath)
dir_exists = os.path.isdir(mypath)
path_exists = os.path.exists(mypath)
```

List all files/dirs in a directory

```python
# Python 3.4+
from pathlib import Path
mypath = Path('/path/to/my/dir')
onlydirs = [x for x in mypath.iterdir() if x.is_dir()]
onlyfiles = [x for x in mypath.iterdir() if x.is_file()]

# Older Python
from os import listdir
from os.path import isfile, isdir, join
mypath = '/path/to/my/dir'
files_and_dirs = listdir(mypath)
onlyfiles = [f for f in listdir(mypath) if isfile(join(mypath, f))]
onlydirs = [f for f in listdir(mypath) if isdir(join(mypath, f))]
```

Create directory if it does not exist

```python
# Python 3.4+
import pathlib
pathlib.Path('/my/directory').mkdir(parents=True, exist_ok=True)
```

## Type Hints

New in version 3.5.

### Basic Use

```python
from typing import List, Dict, Tuple, Sequence

def my_func1(x: str, y: int, z: List[float]) -> None:
    pass

def my_func2(x: Dict[str,str]) -> List[str]:
    pass
```

### Type Alias

```python
from typing import List
Vector = List[float]

def my_func1(x: Vector) -> Vector:
    pass
```

## Read/Write Files

### Load CSV File

```python
import csv
with open('myfile.csv', newline='') as csvfile:
    spamreader = csv.reader(csvfile, delimiter=',', quotechar='|')
    for row in spamreader:
        print(', '.join(row))
```

### Load WAV File

```python
from scipy.io import wavfile
[fs, x] = wavfile.read(wav_path)

# Convert x from int to float
if x.dtype == 'int16':
    n_bits = 16
elif x.dtype =='int32':
    n_bits = 32
else:
    n_bits = -1
if(n_bits>0):
    max_val = float(2 ** (n_bits -1))
    x = x / (max_val+1)
```

### Read/Write text file

```python
# Read file
lines = []
with open('Input.txt', 'r') as text_file:
    for line in text_file:
        lines.append(line)

# Write file
with open('Output.txt', 'w') as text_file:
    for line in lines:
        text_file.write(line)
```

### Read/Write JSON file

```python
import json

# Read
json_path = '/path/to/myfile.JSON'
with open(json_path) as jf:
    jsonData = json.load(jf)

# Write
my_data = {
    "Key1": "Val1",
    "Key2": 3.14159,
}
with open(json_path, 'w') as jf:
    json.dump(my_data, jf)
```

## Parse arguments

```python
import argparse

parser = argparse.ArgumentParser(description="Description for this Python script")

# Define a positional argument 'input1'.
parser.add_argument('input1', type=float)

# Define a positional argument 'input2', but store it as 'in2',
# and show it as 'N' in the help message
parser.add_argument('input2', type=float, dest='in2', metavar='N')

# Define an optional argument with more than 1 way to specify it
parse.add_argument('-o', '--out', type=str, dest='out')

# Mark an optional argument as required
parse.add_argument('--in3', type=float, required=True)

# If user specifies '--in4 c', in4 will be 'c';
# If user specifies '--in4' without argument, in4 will be 'b'
# If user does not specify '--in4', in4 will be 'a'
parse.add_argument('--in4', type=str, nargs='?' const='a', default='b')

# '--in5' expects 2 arguments; in5 will be a list of length 2
# Note: "nargs='1'" yields a list of length 1 instead of a scalar
parse.add_argument('--in5', type=str, nargs='2')

# Parse the arguments. The arguments will become the fields of args
args = parser.parse_args()

# Access the arguments
print(args.input1)
print(args.in2)
print(args.out)
print(args.in3)
for x in args.in5:
    print(x)
```


## Frequently Used Operations

### Command-line Arguments

Reading the arguments

```python
import sys

print("Number of arguments = %d" % len(sys.argv))
# sys.argv[0] is the script name, and the rest are the arguments
print("Argument List: %s" % str(sys.argv))
```

### Execute a CMD command

```python
import subprocess
my_cmd = "run.bat %s" % (my_bat_arguments)
my_cwd = "path/to/workdir"
subprocess.check_output(my_cmd, shell=True, cwd=my_cwd).decode()

# Suppress stderr and stdout
subprocess.run(my_cmd, stderr=subprocess.DEVNULL, stdout=subprocess.DEVNULL)

# Print messages only if the return code is not 0
result = subprocess.run(my_cmd, stderr=subprocess.STDOUT, stdout=subprocess.PIPE)
if(0 != result.returncode):
    print(result.stdout.decode())

# Print messages to file
with open("out.txt", "w") as fh:
    subprocess.run(my_cmd, stderr=subprocess.STDOUT, stdout=fh)
```

### Profile a function

```python
import cProfile
import pstats

cmd = "run_some_function()"

pr = cProfile.Profile()
pr.run(cmd)
with open("my_prof.txt", 'w') as stream:
    p = pstats.Stats(pr, stream=stream)
    p.sort_stats('cumulative')
    """Sort the stats by the cumulative time"""

    p.print_stats(.2)
    """Print only the top 20% of the profile"""
```

### Progress Bar

Basic usage

```python
from tqdm import tqdm

input_list = ['a', 'b', 'c', 'd']

# Wrap an iterable object with tqdm()
for input in tqdm( input_list ):
    do_some_work(input)
```

Set the progress based on stdout:

```python
from tqdm import tqdm
import subprocess
import re

with subprocess.Popen(some_command, stderr=subprocess.STDOUT, stdout=subprocess.PIPE, bufsize=1, universal_newlines=True) as p, \
                        tqdm(total=num_files) as pbar:
    file_processed = 0
    for line in p.stdout:
        # Assuming that some_command will print the string
        # "Processing file <Num>" to stdout
        m = re.match(r'^Processing file (\d+)', line)
        if(m):
            latest_processed = int(m.group(1))
            if(latest_processed > file_processed):
                pbar.update(latest_processed - file_processed)
                file_processed = latest_processed
```

### Load a lib from a user-specified location

```python
import sys
sys.path.append('/path/to/my/lib')

# Load /path/to/my/lib/mylib.py
import mylib
```

### Create a Cartesian product of multiple iterables

```python
import itertools

List1 = [1, 2, 3]
List2 = ['a', 'b', 'c']
List3 = [4, 5, 6]

prod = itertools.product(List1, List2, List3)
for (x1, x2, x3) in prod:
    myfunc(x1, x2, x3)
```

### Get the current time as a string of custom format

```python
from datetime import datetime
time_str = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
```
