---
aliases: []
tags:
  - dsp
---

# Lagrange multiplier

## Context

Given a function $f : \mathbb{R}^n \rightarrow \mathbb{R}$ and a constraint $g : \mathbb{R}^n \rightarrow \mathbb{R}$ , we define the n-dimensional input as $x = (x_1, x_2, ..., x_n)$, and we choose the constraint as $g(x) = 0$

## Problem

How to find the extrema of $f(x)$ subject to $g(x) = 0$?

## Solution

For an extremum of $f$ to exist on $g$, the gradient of $f$ must be of the same direction as the gradient of $g$. In other words, the extremum (if exists) locates at where

$$
\nabla f = - \lambda \nabla g
$$

or

$$
\nabla f + \lambda \nabla g = 0
$$

for some $\lambda$. $\lambda$ is called the _Lagrange multiplier_.

If there are $m$ constraints that

$$
\begin{align}
g_1(x) &= 0 \\
g_2(x) &= 0 \\
& \vdots \\
g_m(x) &= 0 \\
\end{align}
$$

Then the extremum (if exists) locates at where

$$
\nabla f + \lambda_1 \nabla g_1 + \lambda_2 \nabla g_2 + \cdots + \lambda_m \nabla g_m = 0
$$

## Reference

* http://mathworld.wolfram.com/LagrangeMultiplier.html
* https://en.wikipedia.org/wiki/Lagrange_multiplier 