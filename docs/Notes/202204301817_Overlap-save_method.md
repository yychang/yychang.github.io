# Overlap-save method

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

1. Slice the signal $x[n]$ into overlapping patches
2. Compute the [[201508130000_Circular Convolution|circular convolution]] between the patch and $h[n]$
3. Pick the samples of the circular convolution that are not affected by the circular aliasing.

First, define a finite-length signal $x_k[n]$ as

$$
x_k[n] \triangleq  \left\{ \begin{array}{rl}
x[n+kL] & 0 \leq n \leq (L-1)+(M-1) \\
0 & \mbox{otherwise}
\end{array}\right.
$$

Note that

* $x_k[n]$ is of finite length $L+M-1$
* There is an overlap of $(M-1)$ samples in the original $x[n]$ between $x_k[n]$ and $x_{k+1}[n]$.

And the discrete convolution between $x_k[n]$ and $h[n]$ can be written as

$$
\begin{align}
y_k[n] &= x_k[n] * h[n] \\
&= \sum_{m=0}^{M-1} h[m] \cdot x_k[n-m]
\end{align}
$$

Now, if we compute the N-point [[201508130000_Circular Convolution|circular convolution]] between $x_k[n]$ and $h[n]$ with a period $N \geq L+M-1$, the circular convolution result $\tilde{y_k}[n]$ will be equivalent to the linear convolution result $y_k[n]$ in the region $[M-1, L+M-2]$. Note that the N-point circular convolution can be computed efficiently as follows, according to the circular convolution theorem:

$$
\tilde{y_k}[n] = DFT_N^{-1}( DFT_N(x_k[n]) \cdot DFT_N(h[n]) )
$$

where

* $DFT_N$ and $DFT_N^{-1}$ are the N-point Discrete Fourier transform and the N-point inverse Discrete Fourier transform, respectively.

Also, we can easily prove that, for any $n \geq M-1$, there exists one and only one integer $k$ such that

$$
kL + M - 1 \leq n \leq (k+1)L + M - 2
$$

As a result, all $y[n]$ for $n > M-1$ can be efficiently computed by

$$
y[n] = y_k[n-kL] = \tilde{y_k}[n-kL]
$$

for some $k \geq 0$.

Note:

* While the algorithm works for any $N \geq L+M-1$, choosing $N > L+M-1$ only adds unnecessary computational cost.
* The typical approach is to choose $N$ to be an integer power-of-2, then determine $L$ by $L = N-M+1$.
    * The wiki page suggests that the optimal $N$ is in the range $[4M, 8M]$.

### Complexity Analysis

The complexity of computing each sample of $y[n]$ can be estimated by the average cost of $\tilde{y_k}$ patch divided by $N-M+1$.

The computational complexity for computing $\tilde{y_k}$ patch is roughly $N\mbox{log}_2(N) + N$ (unit: multiplier-accumulator (MAC)), consisting

* one N-point FFT:  $\frac{N}{2}\mbox{log}_2(N)$ for radix-2 implementation
* one N-point IFFT: $\frac{N}{2}\mbox{log}_2(N)$ for radix-2 implementation
* Product of DFT($x_k$ ) and DFT($h$): $N$

Note that, when the FIR filter $h[n]$ does not change over time, DFT($h$) only needs to be computed once throughout the entire computation of $y[n]$, and therefore it is a negligible constant when $x[n]$ is very long.

Each $\tilde{y_k}$ patch yields $N-M+1$ samples of valid $y[n]$, and therefore the complexity of computing each sample of $y[n]$ is roughly

$$
\frac{N \mbox{log}_2(N) + N}{N-M+1}
$$

For a case of M=201 and N=1024, the overlap-save method takes 13.67 MACs to compute one output sample, while direct computation takes 201 MACs.

## See also

* [[202207280929_overlap_add_method]]

## Reference

* Complexity of FFT:
    * https://dsp.stackexchange.com/questions/46429/how-many-multiplications-and-additions-does-it-take-to-compute-an-fft-of-a-signa
    * [Fast Fourier transform](https://en.wikipedia.org/wiki/Fast_Fourier_transform)
* [Wikipedia: Overlap-save method](https://en.wikipedia.org/wiki/Overlap%E2%80%93save_method)