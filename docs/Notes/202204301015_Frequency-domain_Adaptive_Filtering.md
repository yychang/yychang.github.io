---
tag:
  - dsp/adaptive
---

# Frequency-domain Adaptive Filtering 

## Context

Given:

* $x(n) \in \mathbb{C}$ is the input signal at time $n$
* $d(n) \in \mathbb{C}$ is the desired output of a filter at time $n$
* $\mathbf{w}(n) = \left[w_0(n), w_1(n), ... w_{M-1}(n) \right]^T \in \mathbb{C}^{M \times 1}$ is the M-tap linear adaptive filter trying to filter $x(n)$ into $d(n)$ at time $n$

The conventional Least Mean Square algorithm updates $w(n)$ using the following equation:

$$
\mathbf{w}(n+1) = \mathbf{w}(n) + 2 \mu e(n) \mathbf{x}^*(n)
$$

where

* $\mu \in \mathbb{R}$ is the scalar adaptation step size
* $\mathbf{x}(n) = \left[x(n), x(n-1), ... x(n-M+1) \right]^T \in \mathbb{C}^{M \times 1}$ is the vector of the most recent M samples of $x(n)$
* $e(n) = d(n) - y(n) \in \mathbb{C}$ is the error signal
    * $y(n) = \mathbf{w}^T(n)\mathbf{x}(n)$ is the output of the filter $\mathbf{w}(n)$
* $\left\{\cdot\right\}^*$ is conjugate

and the algorithm updates $\mathbf{w}(n)$ every time a new sample pair ${x(n), d(n)}$ is received.

When the steady state of $\mathbf{w}(n)$ and the statistics of $x(n)$ are reasonably stable over time, the benefit of updating $\mathbf{w}(n)$ at every $n$ may not justify the computational cost.

## Problem

How to adapt $\mathbf{w}(n)$ in a less computationally complex way?

## Solution

Apply the following two steps to reduce the computational complexity:

1. Update $\mathbf{w}(n)$ once per L input samples (known as the "block LMS algorithm").
2. Use some methods (e.g. overlap-save method) to compute the linear convolution in frequency domain

To update $\mathbf{w}(n)$ once per L input samples, the following update equation is used:

$$
\mathbf{w}(n+L) = \mathbf{w}(n) + \mu \sum_{m=0}^{L-1} e(n+m) \mathbf{x}^*(n+m)
$$

where

* $e(n+m) = d(n+m) - y(n+m)$ is the error signal at time $(n+m)$
 * $y(n+m) = \mathbf{w}^T(n)\mathbf{x}(n+m)$ is the output of the filter at time $(n+m)$ using the filter coefficients at time $n$

### Using Overlap-save Method

To combine the block LMS algorithm with the overlap-save method, here we choose $L = M$. Based on overlap-save method, if we define

* $\mathbf{W}(k) = \mathcal{F} \left( \left[ w_0(kM), w_1(kM), ... , w_{M-1}(kM), 0, 0, ... , 0 \right] \right)^T \in \mathbb{C}^{2M \times 1}$
* $\mathbf{\tilde{x}}(k) = \left[ x(kM-M), x(kM-M+1), ..., x(kM+M-1) \right]^T \in \mathbb{C}^{2M \times 1}$
* $\mathbf{\tilde{X}}(k) = \mathcal{F} \left( \mathbf{\tilde{x}}(k) \right) \in \mathbb{C}^{2M \times 1}$
    * $\mathcal{F} \left\{ \cdot \right\}$ is the DFT operator
* $\mathbf{\tilde{y}}(k) = \left[ y(kM), ..., y(kM+M-1) \right]^T \in \mathbb{C}^{M \times 1}$

then $\mathbf{\tilde{y}}(k)$ can be computed as

$$
\begin{align*}
\mathbf{\tilde{y}}(k) = \text{last} \; M \; \text{components of} \; \mathcal{F}^{-1} \left( \mathbf{\tilde{X}}(k) \cdot \mathbf{W}(k) \right)
\end{align*}
$$

where

* $\mathcal{F}^{-1} \left\{ \cdot \right\}$ is the inverse DFT operator

Similarly, if we define

* $\mathbf{d}(k) = \left[ d(kM), ... , d(kM+M-1) \right]^T \in \mathbb{C}^{M \times 1}$
* $\mathbf{e}(k) = \left[ e(kM), ... , e(kM+M-1) \right]^T = \mathbf{d}(k) - \mathbf{y}(k)$
* $\mathbf{E}(k) = \mathcal{F} \left( \left[0,...,0, \mathbf{e}^T(k) \right]^T \right) \in \mathbb{C}^{2M \times 1}$
* $\mathbf{g}(k) = \sum_{m=0}^{M-1} e(kM+m) \mathbf{x}^*(kM+m)  \in \mathbb{C}^{M \times 1}$

If we represent $\mathbf{g}(k)$ as a finite sequence $g_i$:

$$
\begin{align*}
\mathbf{g}(k) &= \left[ g_0, g_1, ... g_{M-1} \right] \\
g_i &= \sum_{m=0}^{M-1} e(kM+m) x^*(kM-i+m)
\end{align*}
$$

Then we can see that $\mathbf{g}(k)$ is essentially the correlation between $x(n)$ and $e(n)$ around $n = kM$, and $\mathbf{g}(k)$ can be computed as

$$
\mathbf{g}(k) = \text{first} \; M \; \text{components of} \; \mathcal{F}^{-1} \left( \mathbf{\tilde{X}}^*(k) \cdot \mathbf{E}(k) \right)
$$

To update the filter in frequency domain, we compute

$$
\begin{align}
\mathbf{G}(k) &= \mathcal{F} \left( \left[\mathbf{g}^T(k), 0, ...0 \right]^T \right) \in \mathbb{C}^{2M \times 1} \\
\mathbf{W}(k+1) &= \mathbf{W}(k) + 2 \mu \mathbf{G}(k)
\end{align}
$$

> YYC Note:
> It's unclear whether updating the filter in frequency domain saves any computation. It seems to me that, for every update, you have to either do DFT( g(k) ) or do DFT( w(k) ).

### Other approaches:

* Using overlap-add method
* Using circular convolution
* Using sliding DFT
* Using subband implementation
* Using IIR algorithms and nonlinear error functions

## Reference
* http://users.isy.liu.se/en/rt/fredrik/spcourse/multirate.pdf 