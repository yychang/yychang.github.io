---
aliases: []
tags:
  - audio-engineering
---

# Limiting Frequencies of a Microphone Array

## Overview  
  
When using a microphone array, it is possible to use techniques such as sound source localization (SSL) and beamforming (BF) to improve the performance. However, the SSL can only locate acoustic sources of certain frequency range, which is determined by the the mic array geometry.  
  
Based on the sampling theorem, in order to properly reconstruct a signal, the signal needs to be sampled at least at two points within one wavelength. As a result, assuming that the microphone density is reasonable, if $D_{\text{max}}$ and $D_{\text{min}}$ are the max distance and min distance between two mics within the array, respectively, then the lower bound of the wavelength that the mic array can properly locate the sound source is constrained by  
  
$$  
\lambda > \lambda_{\text{min}} = 2 \cdot D_{\text{min}}  
$$  
  
However, when $\lambda$ gets too large, the incoming signal may be considered as in the reactive near-field, which breaks the assumptions commonly made by SSL and BF. To make sure the signal won't be considered as in the reactive near-field, the distance $r$ between the sound source and the microphone array should be constrained by  
  
$$  
r > \frac{ \lambda }{2 \pi}  
$$  
  
Since $r$ is unknown, one approximation is to replace $r$ with $D_{\text{max}}$:  
  
$$  
D_{\text{max}} > \frac{ \lambda }{2 \pi}  
$$  
  
or  
  
$$  
\lambda < \lambda_{\text{max}} = 2 \pi \cdot D_{\text{max}}  
$$  
  
And the corresponding frequency limits are  
  
$$
\begin{align}
f_{\text{max}} &= \frac{c}{ \lambda_{\text{min}} } = \frac{c}{ 2 \cdot D_{\text{min}} } \\  
f_{\text{min}} &= \frac{c}{ \lambda_{\text{max}} } = \frac{c}{ 2 \pi \cdot D_{\text{max}} }  
\end{align}
$$  
  
where $c$ is the speed of the sound.  
  
## Reference  
  
* https://www.acoustic-camera.com/en/support/frequently-asked-questions/knowledge-base/limiting-frequencies-of-a-microphone-array.html  
* [Near and far field](https://en.wikipedia.org/wiki/Near_and_far_field)