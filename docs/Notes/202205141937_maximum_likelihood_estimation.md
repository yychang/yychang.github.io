# Maximum Likelihood Estimation

## Context

Given a random vector $\mathbf{Y}$, whose probability distribution is expected to be modeled by a given function $f_{\mathbf{Y}}(\mathbf{y} ; \mathbf{\theta})$, where

* $\mathbf{y}$ is a sample of $\mathbf{Y}$
* $\mathbf{\theta}$ is a set of parameters controlling the probability distribution.

A sample $\mathbf{y}$ is available, while the actual values of $\mathbf{\theta}$ are not. Without additional information about the probability distribution of $\mathbf{\theta}$, we want to have some good estimate of $\mathbf{\theta}$ based on the sample $\mathbf{y}$.

## Problem

Given the probability distribution $f_{\mathbf{Y}}(\mathbf{y} ; \mathbf{\theta})$ and a sample $\mathbf{y}$, how to make a good estimate of $\mathbf{\theta}$?

## Solution

Find the values of the parameters that maximize the probability function for the given sample $\mathbf{y}$. In other words, find $\hat{\theta}$ such that

$$
\hat{\theta} = {\underset{\theta \in \Theta}{\operatorname {arg\;max} }}\ f_{\mathbf{Y}}(\mathbf{y} ; \mathbf{\theta})
$$

where $\mathbf{\Theta}$ is the parameter space consisting of all the possible values of $\mathbf{\theta}$

## Applications

### Decoding Signals

Given that

* A transmitter sends out a sequence of signal $(x_1, x_2, x_3)$ where $x_i \in \{0,1\}$
* $x_i$ are i.i.d
* The receiver receives a sequence of noisy signal $(0.9, 0.2, 0.8)$
* the noisy channel can be modeled as $y_i = x_i + n_i$, where $n_i \sim \mathcal{N}(0, \sigma^2)$
* $n_i$ are i.i.d

The problem of decoding the received signal can be solved by the maximum likelihood estimator whose unknown parameters are

$$
\mathbf{\theta} = [ x_1, x_2, x_3 ]
$$

Since both $x_i$ and $n_i$ are i.i.d, the probability function of $\mathbf{Y}$ can be written as

$$
f_{\mathbf{Y}}( (0.9, 0.2, 0.8) ; (x_1, x_2, x_3) ) = \frac{1}{\sqrt{2 \pi \sigma^2}}\ \exp \left(-{\frac {(0.9-x_1)^2}{2\sigma^2}}\right) \cdot \frac{1}{\sqrt{2 \pi \sigma^2}}\ \exp \left(-{\frac {(0.2-x_2)^2}{2\sigma^2}}\right) \cdot \frac{1}{\sqrt{2 \pi \sigma^2}}\ \exp \left(-{\frac {(0.8-x_3)^2}{2\sigma ^2}}\right)
$$

And the solution to this maximum likelihood estimation problem is

$$
\hat{\mathbf{\theta}} = [ x_1 = 1, x_2 = 0, x_3 = 1 ]
$$

## Reference

* [Wikipedia: Maximum likelihood estimation](https://en.wikipedia.org/wiki/Maximum_likelihood_estimation)