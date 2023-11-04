# Python matplotlib Quick Reference

## Basic Plot

Plot a 1200x700 figure; show two subplots; label x-axis and y-axis; show grid

```python
import matplotlib.pyplot as plt

x = list(range(100))
y = [n*n for n in x]
z = [n*n*n for n in x]

plt.figure(figsize=(12, 7), dpi=100)
plt.subplot(211)
plt.plot(x, y)
plt.title('y v.s. x')
plt.grid()
plt.xlabel('x')
plt.ylabel('y')
plt.subplot(212)
plt.plot(x, z)
plt.title('z v.s. x')
plt.grid()
plt.xlabel('x')
plt.ylabel('z')
plt.tight_layout() # Use tight_layout() to prevent overlaping of 
                   # the xlabel and the title
plt.show()
```

### Additional Setup

```python
import matplotlib.pyplot as plt

x = list(range(100))
y = [n*n for n in x]

plt.figure()
plt.plot(x,y)

# Change x scale and y scale
plt.xscale('log', base=10)
plt.yscale('log', base=2)

```
### Heat Map


```python
import numpy as np
import matplotlib.pyplot as plt

data = np.loadtxt('path/to/my/data.txt')
# Use "extent=(left,right,bottom,top)" to control the xticks and yticks
# Use "interpolation='none'" to create a more accurate representation 
# of the original data
plt.imshow(data, origin='lower', interpolation='none', aspect='auto', extent=(left,right,bottom,top))
plt.colorbar()
plt.show()
```

ref: https://stackoverflow.com/questions/18696122/change-values-on-matplotlib-imshow-graph-axis

### Histogram

Creating a histogram plot for array $x$

```python
import matplotlib.pyplot as plt

num_bins = 10
plt.hist(x, bins=num_bins)
plt.show()

bin_edges = np.arange(-5,5)
plt.hist(x, bins=bin_edges)
plt.show()
```

Creating a histogram plot given the histogram data (count and bin edges)


```python
import numpy as np
import matplotlib.pyplot as plt

hist, bins = np.histogram(x, bins=50)

# Specify the bar width
width = 0.7 * (bins[1] - bins[0])                   

# Specify the bar center as the center of the adjacent bar edges
center = (bins[:-1] + bins[1:]) / 2                 

# Create a bar chart as the histogram plot
plt.bar(center, hist, align='center', width=width)  
plt.show()
```

ref: https://stackoverflow.com/questions/5328556/histogram-matplotlib

## Save Plot

```python
import matplotlib.pyplot as plt

x = list(range(100))
y = [n*n for n in x]
fh = plt.figure()
plt.plot(x,y)

# Save the "current figure"
plt.savefig('myplot.jpg')

# Save the figure referenced by the figure handle
fh.savefig('myplot.jpg')
```

## Misc

### Link the axe between plots

```python
plt.figure(figsize=(12,7), dpi=100)
ax1 = plt.subplot(211)
plt.plot(x1)
plt.subplot(212, sharex=ax1)
plt.plot(x2)
``` 