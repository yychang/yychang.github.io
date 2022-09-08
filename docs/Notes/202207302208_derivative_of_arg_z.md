---
aliases: []
tags:
  - dsp
---

# Derivative of $arg(z(t))$ with respect to $t$

## Context
Given

* $x(t) \in \mathbb{R}$ is differentiable
* $y(t) \in \mathbb{R}$ is differentiable
* $z(t) = x(t) + jy(t)$
* $\theta(t) = \arg(z(t))$ is the argument (angle) of the complex signal $z(t)$

## Problem
What is the derivativie of $\theta(t)$ with respect to $t$?

## Solution

$$
\theta'(t) = \frac{\partial \theta(t)}{\partial t} = \frac{x(t)y'(t) - y(t)x'(t)}{x^2(t) + y^2(t)}, \ x \neq 0 \mbox{ and } y \neq 0
$$

## Derivation

The [principal value of the argument](https://en.wikipedia.org/wiki/Argument_(complex_analysis)#Principal_value) of $z(t)$ can be calculated by:

$$
Arg(z(t)) = \left\{
\begin{array}{ll}
   \arctan(\frac{y(t)}{x(t)}) & \mbox{if } \ x > 0, \\
   \arctan(\frac{y(t)}{x(t)}) + \pi & \mbox{if } \ x < 0 \mbox{ and } y \geq 0, \\
   \arctan(\frac{y(t)}{x(t)}) - \pi & \mbox{if } \ x < 0 \mbox{ and } y < 0, \\
   +\frac{\pi}{2} & \mbox{if } \ x = 0 \mbox{ and } y > 0, \\
   -\frac{\pi}{2} & \mbox{if } \ x = 0 \mbox{ and } y < 0, \\
   \mbox{undefined} & \mbox{if } \ x = 0 \mbox{ and } y = 0.
\end{array}
\right.
$$

Or equivalently,

$$
Arg(z(t)) = \left\{
\begin{array}{ll}
   \arctan(\frac{y(t)}{x(t)}) & \mbox{if } \ x(t) > 0, \\
   \arctan(\frac{y(t)}{x(t)}) + \pi & \mbox{if } \ x(t) < 0 \mbox{ and } y(t) \geq 0, \\
   \arctan(\frac{y(t)}{x(t)}) - \pi & \mbox{if } \ x(t) < 0 \mbox{ and } y(t) < 0, \\
   \frac{\pi}{2} - \arctan(\frac{x(t)}{y(t)}) & \mbox{if } \ y(t) > 0, \\
   -\frac{\pi}{2} - \arctan(\frac{x(t)}{y(t)}) & \mbox{if } \ y(t) < 0, \\
   \mbox{undefined} & \mbox{if } \ x(t) = 0 \mbox{ and } y(t) = 0.
\end{array}
\right.
$$

Note that $Arg(z(t))$ is not differentiable w.r.t. $t$ at $x(t) < 0, y(t) = 0$ due to the discontinuity. 

To find $\theta'(t)$, we take the following steps:

1. Define $\theta(t)$ in a way that $\theta(t)$ is differentiable in each of the following 4 half-planes: $x(t) < 0$, $x(t) > 0$, $y(t) < 0$, $y(t) > 0$
2. Find $\theta'(t)$ in each of the 4 half-planes
3. Confirm $\theta'(t)$ is identical among the 4 overlapping half-planes.

To address the discontinuity in $Arg(z(t))$, we choose to calculate $\theta(t)$ by

$$
\theta(t) = \left\{
\begin{array}{ll}
   \arctan(\frac{y(t)}{x(t)}) & \mbox{if } \ x(t) > 0, \\
   \arctan(\frac{y(t)}{x(t)}) + \pi & \mbox{if } \ x(t) < 0 \mbox{ and } y(t) \geq 0, \\
   \arctan(\frac{y(t)}{x(t)}) - \pi + 2\pi & \mbox{if } \ x(t) < 0 \mbox{ and } y(t) < 0, \\
   \frac{\pi}{2} - \arctan(\frac{x(t)}{y(t)}) & \mbox{if } \ y(t) > 0, \\
   -\frac{\pi}{2} - \arctan(\frac{x(t)}{y(t)}) & \mbox{if } \ y(t) < 0, \\
   \mbox{undefined} & \mbox{if } \ x(t) = 0 \mbox{ and } y(t) = 0.
\end{array}
\right.
$$

or equivalently,

$$
\theta(t) = \left\{
\begin{array}{ll}
   \arctan(\frac{y(t)}{x(t)}) & \mbox{if } \ x(t) > 0, \\
   \arctan(\frac{y(t)}{x(t)}) + \pi & \mbox{if } \ x(t) < 0, \\
   \frac{\pi}{2} - \arctan(\frac{x(t)}{y(t)}) & \mbox{if } \ y(t) > 0, \\
   -\frac{\pi}{2} - \arctan(\frac{x(t)}{y(t)}) & \mbox{if } \ y(t) < 0, \\
   \mbox{undefined} & \mbox{if } \ x(t) = 0 \mbox{ and } y(t) = 0.
\end{array}
\right.
$$

The next step is to find $\theta'(t)$ in each of the 4 half-planes. For $x(t)>0$, we have

$$
\tan( \theta(t) ) = \tan( \arctan(\frac{y(t)}{x(t)})) = \frac{y(t)}{x(t)}
$$

Differentiating both sides of the equation w.r.t $t$ yields

$$
\sec^2( \theta(t) ) \theta'(t) = \frac{x(t)y'(t) - y(t)x'(t)}{x^2(t)}
$$

Given $\sec^2 = 1 + \tan^2$ and $\tan^2( \theta(t) ) = \frac{y^2(t)}{x^2(t)}$, the equation above can be written as

$$
\begin{align}
\left[ 1 + \frac{y^2(t)}{x^2(t)} \right] \theta'(t) &= \frac{x(t)y'(t) - y(t)x'(t)}{x^2(t)}, \\
\theta'(t) &= \frac{x(t)y'(t) - y(t)x'(t)}{x^2(t)} \left[ 1 + \frac{y^2(t)}{x^2(t)} \right]^{-1} \\
&= \frac{x(t)y'(t) - y(t)x'(t)}{x^2(t) + y^2(t)}
\end{align}
$$

For $x(t) < 0$, we get the same result of $\theta'(t)$ as for $x(t) >0$ because

$$
\frac{\partial}{\partial t}\left( \arctan(\frac{y(t)}{x(t)}) + \pi  \right) = \frac{\partial}{\partial t}\left( \arctan(\frac{y(t)}{x(t)}) \right)
$$

For $y(t) < 0$, since $\tan(\frac{\pi}{2} - \phi) = \frac{1}{\tan \phi}$ and $\tan(- \phi)= - \tan \phi$, we have 

$$
\begin{align}
\tan(\theta(t)) &= \tan \left( - \frac{\pi}{2} - \arctan(\frac{x(t)}{y(t)}) \right) \\
&= - \tan \left( \frac{\pi}{2} + \arctan(\frac{x(t)}{y(t)}) \right) \\
&= \frac{1}{\tan( \arctan(\frac{x(t)}{y(t)}))} \\
&= \frac{y(t)}{x(t)}
\end{align}
$$

which is the same as the case for $x(t) > 0$, and therefore the solution to $\theta'(t)$ will be the same.

> YYC Note:
> Can we really differentiate $\tan(\theta(t))$ in the region of $y(t) < 0$? Is it differentiable at  $x(t) = 0$?

For $y(t) > 0$, we get the same results of $\theta'(t)$ as for $y(t) < 0$ because

$$
\frac{\partial}{\partial t}\left( \arctan(\frac{\pi}{2} - \frac{x(t)}{y(t)})  \right) = \frac{\partial}{\partial t}\left( - \frac{\pi}{2} - \arctan(\frac{x(t)}{y(t)}) \right)
$$

Now we conclude that the solution   $\theta'(t) =\frac{x(t)y'(t) - y(t)x'(t)}{x^2(t) + y^2(t)}$ holds for all 4 half-planes, and therefore it is the solution for all $x(t), y(t)$ where $x(t) \neq 0$ and $y(t) \neq 0$.


## Reference

* https://en.wikipedia.org/wiki/Argument_(complex_analysis)
* https://gubner.ece.wisc.edu/notes/MagnitudeAndPhaseOfComplexNumbers.pdf