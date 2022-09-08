---
aliases: []
tags:
  - dsp
---

# Overlap-Add Method
## Context

Given a discrete signal $x[n]$ and a finite impulse response (FIR) filter $h[n]$, the discrete convolution between $x[n]$ and $h[n]$ is:

$$
\begin{align}
y[n] = x[n] * h[n] &\triangleq \sum_{m=-\infty}^{\infty} h[m] \cdot x[n-m] \\
&= \sum_{m=0}^{M-1} h[m] \cdot x[n-m]
\end{align}
$$

where $h[n] = 0$ for $n$ outside the region $[0, M-1]$.

The complexity of computing a sample of $y[n]$ is $M$ multiplications and $(M-1)$ additions. When $M$ is large and $x[n]$ is very long, it is very costly to compute the entire $y[n]$.

## Problem

If the algorithmic latency is not a critical issue, is there any way to reduce the computational complexity by conducting the convolution in the frequency domain?

## Solution

The computational complexity can be reduced by doing the followings:

1. Slice the signal $x[n]$ into non-overlapping patches
2. Compute the [[201508130000_Circular Convolution|circular convolution]] between the patch and $h[n]$
3. Add the convolution outcome of the patches together to reconstruct the desired $y[n]$

First, define a finite-length signal $x_k[n]$ as

$$
x_k[n] \triangleq  \left\{ \begin{array}{rl}
x[n+kL] & 0 \leq n \leq L-1 \\
0 & \mbox{otherwise}
\end{array}\right.
$$

Note that

* $x_k[n]$ is of finite length $L$
* There is no overlap between $x_k[n]$ and $x_{k+1}[n]$.

and $y[n]$ can then be written as

$$
\begin{align}
y[n] &= \left( \sum_k{x_k[n-kL]} \right) * h[n] \\
&= \sum_k{\left( x_k[n-kL] * h[n] \right)} \\
&= \sum_k{y_k[n-kL]}
\end{align}
$$

where

* $y_k[n]$ is the linear convolution of $x_k[n]$ and $h[n]$, and $y_k[n]$ is 0 outside the region $[0, (L - 1) + (M - 1)]$. 

Now, if we compute the N-point [[201508130000_Circular Convolution|circular convolution]] between $x_k[n]$ and $h[n]$ with a period $N \geq L+M-1$, the circular convolution result $\tilde{y_k}[n]$ will be equivalent to the linear convolution result $y_k[n]$ in the region $[0, N-1]$. Note that the N-point circular convolution can be computed efficiently as follows, according to the circular convolution theorem:

$$
\tilde{y_k}[n] = DFT_N^{-1}( DFT_N(x_k[n]) \cdot DFT_N(h[n]) )
$$

where

* $DFT_N$ and $DFT_N^{-1}$ are the N-point Discrete Fourier transform and the N-point inverse Discrete Fourier transform, respectively.

Note:

* While the algorithm works for any $N \geq L+M-1$, choosing $N > L+M-1$ only adds unnecessary computational cost.
* The typical approach is to choose $N$ to be an integer power-of-2, then determine $L$ by $L = N-M+1$.


## See also

* [[202204301817_Overlap-save_method]]

## Reference

* [Wikipedia: Overlap-Add Method](https://en.wikipedia.org/wiki/Overlap%E2%80%93add_method)