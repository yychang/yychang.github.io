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

## Write WAV File

```python
from scipy.io import wavfile

fs = 16000
f1 = 440
f2 = 660
f = np.array( [ [440, 660] ] )  # Shape: (1, 2)
t = np.arange(2 * fs) / fs    # Shape: (32000,)
x = 0.5 * np.sin( 2 * np.pi * f * t[:, np.newaxis] )  # Shape: (1, 2) x (32000,1) = (32000,2)

# arguments: file path, sample rate, data array. 
# data array should be in the shape of (num_samples, num_channels)
wavfile.write('test.wav', fs, x)
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

## Short-Time Fourier Transform (STFT)

```python
from scipy import signal
import numpy as np

# Define FFT window size
fft_size = 512

# Create time-domain signal x
fs = 16000
f1 = 440
f2 = 660
t = np.arange(fft_size * 20) / fs
x = np.sin( 2 * np.pi * f1 * t ) + np.sin( 2 * np.pi * f2 * t )

# Define windowing function
stft_win = signal.get_window('hann', fft_size, fftbins=True)
stft_win = np.sqrt(stft_win)

# Run STFT to get the spectrogram Zxx, with shape FxT (F: number of freq bins; T: number of audio frames)
fxx, txx, Zxx = signal.stft(x, fs, nperseg=fft_size, window=stft_win)

# Run inverse STFT (ISTFT) to get the reconstructed signal xrec in time domain
trec, xrec = signal.istft(Zxx, fs, nperseg=fft_size, window=stft_win)

# Print the max diff between x and xrec. Expect an infinitesimal number like 1e-15
x_diff = x - xrec
print(max(x_diff))
```

