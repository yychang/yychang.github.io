# Circular Convolution

## Definition

*Finite length*: A signal $x(n)$ is of *finite length $N$* if

$$
x(n) =0 \quad \forall n \notin \left[0, N-1 \right]
$$

*Periodic*: $x(n)$ of finite length $N$ is converted to a *periodic* signal $\tilde{x}(n)$ by

$$
\begin{align*}
\tilde{x}(n) &= \sum_{k=-\infty}^{\infty}{ x(n+kN) } \\
  &= x( n \, \mbox{modulo} \, N ) \\
  & \triangleq x((n))_N
\end{align*}
$$

*Rectangular Function*: A *rectangular function* $R_N(n)$ is defined as

$$
R_N(n) = \left\{  
  \begin{array}{rl}
    1 & \forall \, 0 \leq n \leq (N-1) \\
    0 & otherwise
  \end{array}
\right.
$$

*Circular convolution* $\circledast$: Given $x_1(n)$ and $x_2(n)$ being finite length $N$, the *circular convolution* for $x_1(n)$ and $x_2(n)$ is defined as

$$
\begin{align*}
x_1(n) \circledast x_2(n) &= \left[ \sum_{m=0}^{N-1}{ \tilde{x}_1(m) \tilde{x}_2(n-m) } \right] R_N(n) \\
 &= \left[ \sum_{m=0}^{N-1}{ x_1((m))_N x_2((n-m))_N } \right] R_N(n) \\
 &= \left[ \sum_{m=0}^{N-1}{ x_1(m) x_2((n-m))_N } \right] R_N(n) \\
 &= \left[  x_1(n) \ast x_2((n))_N \right] R_N(n) \\
 &= \left[  x_1(n) \ast x_2(n) \ast P_N(n) \right] R_N(n) \\
\end{align*}
$$

where the operator $\ast$ is the linear convolution, and

$$
P_N(n) = \sum_{k=-\infty}^{\infty}{ \delta(n+kN) }
$$

## Circular Aliasing

Note that the output of the linear convolution $x_1(n) \ast x_2(n)$ yields a signal of finite length $2N-1$, and $x_1(n) \ast x_2(n) \ast \delta(n+N)$ may have non-zero signals at $n \in [0,N-1]$. This called *circular aliasing*.

## Using Circular Convolution to Perform Linear Convolution

In many scenarios what people want is the linear convolution (e.g. filter a very long signal with an FIR). However, the conventional linear convolution is more computationally complex than the circular convolution, and therefore there are desires to use circular convolution to perform linear convolution.

In order to do so, one can do circular convolution with N zero-padding onto both $x_1(n)$ and $x_2(n)$, making them conceptually finite length $2N$. The corresponding circular convolution output will be a signal of finite length $2N$ without circular aliasing, and the output will be identical to the linear convolution.

## Reference

* http://ocw.mit.edu/resources/res-6-008-digital-signal-processing-spring-2011/video-lectures/lecture-10-circular-convolution/MITRES_6_008S11_lec10.pdf 