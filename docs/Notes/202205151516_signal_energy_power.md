# Signal Energy and Power
## Basic Definition

Given the continuous time signal $x(t)$ and discrete time signal $x[n]$.

The **instantaneous signal power** is defined as

$$
\begin{align*}
P(t) &= |x(t)|^2 \\
P[n] &= |x[n]|^2
\end{align*}
$$

The **signal energy** is defined as

$$
\begin{align*}
E(t_0, t_1) &= \int_{t_0}^{t_1} |x(t)|^2 \,\mathrm{d}t \\
E(n_0, n_1) &= \sum_{n=n_0}^{n1} |x[n]|^2
\end{align*}
$$

The **average signal power** is defined as

$$
\begin{align*}
P(t_0, t_1) &= \frac{1}{t_1-t_0} \int_{t_0}^{t_1} |x(t)|^2 \,\mathrm{d}t \\
P(n_0, n_1) &= \frac{1}{n_1-n_0+1} \sum_{n=n_0}^{n1} |x[n]|^2
\end{align*}
$$

Usually, the limits are taken over an infinite time interval:

$$
\begin{align*}
E_\infty &= \int_{-\infty}^{\infty} |x(t)|^2 \,\mathrm{d}t \\
E_\infty &= \sum_{n=-\infty}^{\infty} |x[n]|^2  \\
P_\infty &=  \lim_{T \rightarrow \infty} \frac{1}{2T} \int_{-T}^{T} |x(t)|^2 \,\mathrm{d}t\\
P_\infty &= \lim_{N \rightarrow \infty} \frac{1}{2N+1} \sum_{n=-N}^{N} |x[n]|^2
\end{align*}
$$

## Reference

* [Spectral analysis of discrete processes](http://www.aerostudents.com/files/atmosphericFlightDynamics/spectralAnalysisOfDiscreteProcesses.pdf), section 3
* MIT course 6.011,  Introduction to Communication, Control, and Signal Processing, [Chapter 2: Signal and System](http://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-011-introduction-to-communication-control-and-signal-processing-spring-2010/readings/MIT6_011S10_chap02.pdf)
* MIT course 6.451, Principles of Digital Communication II, [Chapter 2: Discrete-time and continuous-time AWGN channels](http://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-451-principles-of-digital-communication-ii-spring-2005/lecture-notes/chap_2.pdf) 
