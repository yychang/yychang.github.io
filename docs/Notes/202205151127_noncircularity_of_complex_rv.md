# Noncircularity of Complex Random Variable
## Context

Given two complex random variables, $X$ and $Y$:

$$
\begin{align}
X &= X_R + j \cdot X_I \\
Y &= Y_R + j \cdot Y_I \\
\end{align}
$$

where

$$
\begin{align}
X_R \sim \mathcal{N} ( \mu, \sigma^2) &, X_I \sim \mathcal{N} ( \mu, \sigma^2) , \\
Y_R \sim \mathcal{N} ( \mu, \sigma^2) &, Y_I = Y_R, \\
\end{align}
$$

The distribution functions of $X$ and $Y$ are 2D Gaussian and 1D Gaussian, respectively. Despite the distribution functions are so different between $X$ and $Y$, their expected magnitude, $E|X|^2$ and $E|Y|^2$, are the same:

$$
\begin{align}
E|X|^2 &= E(X_R^2 + X_I^2) = 2( \mu^2 + \sigma^2 ) \\
E|Y|^2 &= E(Y_R^2 + Y_I^2) = 2( \mu^2 + \sigma^2 )
\end{align}
$$

This observation highlights the fact that, when designing algorithms against complex values, relying on solely the magnitude of the signal may not be efficient.

## Noncircularity

The difference between $X$ and $Y$ can be easily emphasized by evaluating the expected values of their square terms, $E(X)^2$ and $E(Y)^2$:

$$
\begin{align}
E(X)^2 &= E(X_R + j X_I )^2 = 2j \cdot E(X_R X_I) = 2j \cdot E(X_R)E(X_I) = 2j \cdot \mu^2 \\
E(Y)^2 &= E(Y_R + j Y_I )^2  = 2j \cdot E(Y_R Y_I) = 2j E(Y_R)^2 = 2j \cdot (\mu^2 + \sigma^2)
\end{align}
$$

And a proposed metric to quantify this observation is a normalized circularity coefficient, $k_x$:

$$
k_x = \frac{ E(X^2) }{ E|X|^2 }
$$

> Note: The paper in reference defines $k_x$ under the assumption that $X$ is zero mean. So the formula of $k_x$ may require modification when $X$ is not zero mean.

## Reference

* [Voice activity detection using subband noncircularity](http://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=7178823) 