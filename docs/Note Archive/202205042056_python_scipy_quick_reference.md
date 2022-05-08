---
aliases: []
tags:
  - quick-ref
---

# Python scipy Quick Reference

## Load WAV File
```python
from scipy.io import wavfile
import numpy as np

[fs, x] = wavfile.read(path)
# Make sure the loaded signal is of shape (L,M), where L is the number of
# samples and M is the number of mics
if(1 == len(x.shape)):
    x = x[:, np.newaxis]

# Make sure the samples are of type float
num_bits = 0
if x.dtype == 'int16':
    num_bits = 16
elif: x.dtype == 'int32':
    num_bits = 32

if(0 != num_bits):
    max_val = float(2 ** (num_bits-1))
    x = x / max_val
```

## Plot Spectrogram
```python

from scipy import signal
import matplotlib.pyplot as plt

fs = 16000
fft_size = 768*2
f, t, Sxx = signal.spectrogram(x, fs, nfft=fft_size)

plt.pcolormesh(t, f, Sxx, cmap='hot')
plt.ylabel('Frequency (Hz)')
plt.xlabel('Time (sec)')
plt.show()
``` 