# Overlap-Add (OLA) STFT Processing

## Context

Given 

* $x(n)$ : input signal at time $n$
* $w(n)$ : window function of finite length $M$
* $R \in \mathbb{Z}^+$ : the hop size between successive chunk of $x(n)$
* $x_m(n) = x(n)w(n - mR)$: the m-th chunk of $x(n)$
* $h_m(n)$: the FIR filter of finite length $L$ that will be applied to $x_m(n)$


The filtered output can be written as

$$
y(n) = \sum_{m=-\infty}^{\infty}{y_m(n)} = \sum_{m=-\infty}^{\infty}{x_m(n) * h_m(n)}
$$

where the operator $\ast$ is the linear convolution.

The cost of computing $y(n)$ can be very high if the signal $x(n)$ is very long.

## Problem

If the algorithmic latency is not a critical issue, is there any way to reduce the computational complexity by conducting the convolution in the frequency domain?

## Solution

Define:

* $\tilde{x}_m(n) = x_m(n + mR)$: the shifted $x_m(n)$ so that $\tilde{x}_m(n) = 0 \ \forall n \notin [0, M-1]$
* $\tilde{y}_m(n) = \tilde{x}_m(n) * h_m(n)$ 

Based on [[202207280929_overlap_add_method|Overlap-add method]], by choosing the DFT window size $N \geq L + M - 1$, $\tilde{y}_m(n)$ can be efficiently computed by

$$
\tilde{y}_m(n) = DFT_N^{-1}( DFT_N(\tilde{x}_m(n)) \cdot DFT_N(h_m(n)) )
$$

, and $y_m(n)$ is yet again just a shifted version of $\tilde{y}_m(n)$:

$$
y_m(n) = \tilde{y}_m(n - mR)
$$


## See Also

* [[202207280929_overlap_add_method]]

## Reference

*  https://ccrma.stanford.edu/~jos/sasp/Time_Varying_OLA_Modifications.html
