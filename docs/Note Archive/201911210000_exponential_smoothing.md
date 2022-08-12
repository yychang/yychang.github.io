---
aliases: ["exponential smoothing"]
---

## Context

Given a time series data $x_t$ beginning at time $t = 0$, we want to use a window function to smooth $x_t$ where the recent samples are assigned with a larger weighting and the older samples are assigned with a smaller weighting.

## Problem

How to design such a window that is easy to compute?

## Solution

### Basic exponential smoothing

Use a exponential windows function where the smoothed output $s_t$ is computed by the formulas:

$$
\begin{align*}
s_0 &= x_0 \\
s_t &= \alpha x_t + (1-\alpha) s_{t-1}, \ t>0
\end{align*}
$$

where $\alpha$ is the smoothing factor, and $0 < \alpha < 1$.

$s_t$ can be also written as

$$
s_t = \alpha \left( \sum_{i=1}^t{(1-\alpha)^{t-i}x_i} \right) + (1 - \alpha)^t x_0
$$

This is also known as an "exponentially weighted moving average (EWMA)."

### Convergence Analysis

Let $x_t$ be a step function of magnitude $A$ where

$$
\begin{align*}
x_t = \left\{
    \begin{array}{cc}
        0 & \mbox{if} \ t = 0 \\
        A & \mbox{if} \ t > 0
    \end{array}
\right.
\end{align*}
$$

Then $s_t$ will be

$$
\begin{align*}
s_t &= \alpha \left( \sum_{i=1}^t{(1-\alpha)^{t-i} A } \right) + (1 - \alpha)^t \cdot 0 \\
    &= \alpha A \frac{1 - (1-\alpha)^t}{1 - (1 - \alpha)}
\end{align*}
$$

So the time for $s_t$ to converge to $s_t = qA$ for some $0 < q < 1$ is

$$
t = \frac{ \log(1-q) }{ \log(1-\alpha) }
$$
And by choosing $q = 1 - \frac{1}{e}$, we can obtain the time constant $\tau$ for the basic exponential smoothing:

$$
\tau = - \frac{\log{e}}{\log(1-\alpha)}
$$
## Biased Toward $x_0$

To improve stability, $\alpha$ is usually set to a smaller number (like 0.05). This makes the weighting of $x_0$ significantly larger than the rest of $x_t$ when $t$ is small, for all $x_t$ except $x_0$ are scaled by $\alpha$.


## Reference

* [Wikipedia: Exponential_smoothing](https://en.wikipedia.org/wiki/Exponential_smoothing) 