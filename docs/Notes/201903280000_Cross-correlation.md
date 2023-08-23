# Cross-correlation

There are more than 1 type of cross-correlation:
* Cross-correlation of deterministic signals
* Cross-correlation of random vectors
* Cross-correlation of stochastic processes

## Cross-correlation of deterministic signals

In signal processing, given the continuous functions $f$ and $g$, the cross-correlation is defined as

$$
(f\star g)(\tau )\ \triangleq \int _{-\infty }^{\infty }{\overline {f(t)}}g(t+\tau )\,dt
$$

where $\overline {f(t)}$ denotes the complex conjugate of $f(t)$.

Similarly, for discrete functions, the cross-correlation is defined as

$$
(f\star g)[n]\ \triangleq \sum _{m=-\infty }^{\infty }{\overline {f[m]}}g[m+n]
$$

## Cross-correlation of random vectors

In probability and statistics, the cross-correlation is used for referring to the correlations between the entries of two random vectors $\mathbf{X} = (X_{1},\ldots ,X_{m})^{\rm{T}}$ and $\mathbf{Y} = (Y_{1},\ldots ,Y_{n})^{\rm{T}}$, which forms the cross-correlation matrix of $\mathbf{X}$ and $\mathbf{Y}$ that is defined as

$$
\begin{align*}
\operatorname{R}_{\mathbf{X} \mathbf{Y}} &\triangleq \ \operatorname{E} [\mathbf{X} \mathbf{Y}^{\rm {T}}] \\
&= {\begin{bmatrix}\operatorname {E} [X_{1}Y_{1}]&\operatorname {E} [X_{1}Y_{2}]&\cdots &\operatorname {E} [X_{1}Y_{n}]\\\\\operatorname {E} [X_{2}Y_{1}]&\operatorname {E} [X_{2}Y_{2}]&\cdots &\operatorname {E} [X_{2}Y_{n}]\\\\\vdots &\vdots &\ddots &\vdots \\\\\operatorname {E} [X_{m}Y_{1}]&\operatorname {E} [X_{m}Y_{2}]&\cdots &\operatorname {E} [X_{m}Y_{n}]\\\\\end{bmatrix}}
\end{align*}
$$



## Cross-correlation of stochastic processes

In time series analysis and statistics, the cross-correlation of a pair of random process is the correlation between values of the processes at different times.

Given a pair of random processes $(X_t, Y_t)$, if both $X_t$ and $Y_t$ have means and variances at time $t$ for any $t$, then the cross-correlation between $t_{1}$ and $t_{2}$ is defined as

$$
\operatorname{R}_{XY}(t_{1},t_{2}) = \operatorname{E}[X_{t_{1}}{\overline{Y_{t_{2}}}}]
$$

Note that this expression may be not defined (if the means and variances are not defined)

If $(X_t, Y_t)$ are jointly wide-sense stationary, then the cross-correlation function can be re-written as

$$
\operatorname{R}_{XY}(\tau) = \operatorname{E} \left[X_{t}{\overline{Y_{t+\tau}}}\right]
$$

## Reference

* [Cross-correlation](http://en.wikipedia.org/wiki/Cross-correlation) 