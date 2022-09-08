---
aliases: []
tags:
  - dsp
---

# Calculating the difference between two angles
## Context  
  
Given a target angle $A_t$ and a reference angle $A_r$, we want to calculate the "smallest difference" between them. In other words:  
  
* The difference between target angle 180° and reference angle -180° is 0°  
* The difference between target angle 359° and reference angle 0° is 1°  
  
## Problem  
  
How to calculate the "smallest difference" between the two angles?  
  
## Solution  
  
Use the following formula to calculate the signed difference:  
  
$$  
d = (A_t - A_r + 180) \% 360 -180  
$$  
  
Then take the absolute value of $d$ to get the unsigned difference.  

## Reference

* https://stackoverflow.com/questions/1878907/how-can-i-find-the-difference-between-two-angles  
  
## Note  
  
If the modulo operation returns a value with the same sign as the dividend (i.e., $-1 \% 360 = -1$), then the formula should be changed to  
  
$$  
d = ( (A_t - A_r)\%360 + 180) \% 360 -180  
$$
