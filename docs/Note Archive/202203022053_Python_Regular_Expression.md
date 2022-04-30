---
tags:
  - quick-ref
---

# Python Regular Expression

## Basics

Python's regular expression is based on extended [[202203022055_Regular_Expression|Regular Expression]]

The basic usage:

```Python
import re
pattern = r"abc(\w)efg"
in_string = r"abcdefg"
m = re.search(pattern, in_string)
if (m):
    print(m.group(0)) # prints "abcdefg"
    print(m.group(1)) # prints "d"
```

## Greedy vs non-greedy
`+`, `*`, `?`, and `{m,n}` are _greedy_ in the sense that it tries to match as much text as possible.

`+?`, `*?`, `??`, and `{m,n}?` are _non-greedy_ in the sense that it tries to match as little text as possible.

Example 1:
```python
import re

s1 = 'aaa'
p11 = r'(a?)a*'
p12 = r'(a??)a*'

# m11.group(1) = 'a' 
# RE tries to be greedy with 'a?' and found a match
m11 = re.search(p11, s1) 

# m12.group(1) = ''  
# RE tries to be non-greedy with 'a??' and found a match
m12 = re.search(p12, s1) 

s2 = 'abb'
p21 = r'(a?)b*'
p22 = r'(a??)b*'
p23 = r'(a??)b+'

# m21.group(1) = 'a'
# RE tries to be greedy with 'a?' and found a match
m21 = re.search(p21, s2) 

# m22.group(1) = ''  
# RE tries to be non-greedy with 'a??' and found a match: 
# it can match 0 'a' and 0 'b'
m22 = re.search(p22, s2) 

# m23.group(1) = 'a'
# RE tries to be non-greedy with 'a??' but found no match. 
# Then it tries to consume 1 'a' and found a match
m23 = re.search(p23, s2) 
```

Example 2:
```python
my_string = '<body>Something something</body>'
pattern1 = r'<.+>'
pattern2 = r'<.+?>'

# m1.group(1) = '<body>Something something</body>'
m1 = re.search(pattern1, my_string) 

# m2.group(1) = '<body>'
m2 = re.search(pattern2, my_string) 
```

## Lookahead and lookbehind assertions

`(?=...)`:  Match `abc` if it is followed by `def` (lookahead assertion)
```Python
pattern = r"abc(?=def)"
in1 = "abcdef"
in2 = "abcxyz"
m1 = re.search(pattern, in1)
if(m1):
    # m1.group(0) is 'abc'. The lookahead pattern (def) is not consumed.
    print(m1.group(0)) 

m2 = re.search(pattern, in2)
if(m2):
    # no match for in2
    print(m2.group(0)) 
```

`(?!...)`: Match `abc` if it is NOT followed by `def` (negative lookahead assertion)
```Python
pattern = r"abc(?!def)
```

`(?<=...)`: Match `def` if it is preceded by `abc` (lookbehind assertion)
```Python
pattern = r"(?<=abc)def"
```

`(?<!...)`: Match `def` if it is NOT preceded by `abc` (negative lookbehind assertion)
```Python
pattern = r"(?<!abc)def"
```

## Named groups

`(?P<XYZ>)`: Define a named group whose name is `XYZ`.

`(?P=XYZ)`: Backreference to the named group `XYZ` in the same pattern

```python
pattern = r'(?P<SomeWord>\w+) \w+ (?P=SomeWord)'
sentence = 'day by day'
m = re.search(pattern, sentence)
if (m):
    some_word = m.group('SomeWord')
```
