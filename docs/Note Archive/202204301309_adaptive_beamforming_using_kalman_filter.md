---
tags:
  - dsp/adaptive
---

# Adaptive Beamforming Using the Constrained Kalman Filter 

## Notation

* $(\cdot)^T$ denotes the transpose
* $(\cdot)^*$ denotes the conjugate
* $(\cdot)^H$ denotes the Hermitian transpose
* $\mathbf{I}_M$ denotes an $M \times M$ identity matrix.

## Context

Given a system of $N_d$ desired speech sources, contaminated by $N_i$ interfering sources and a stationary noise. Each of the $N = N_d + N_i$ source signals propagates through the acoustic environment before being picked up by an arbitrary array comprising $M$ microphones. In the short-time Fourier transform (STFT) domain, define:

* $s_n(\ell,k) \in \mathbb{C}$, the $n$ th source signal
* $\mathbf{s}(\ell,k) = \left[s_1(\ell,k),\cdots,s_N(\ell,k) \right]^T \in \mathbb{C}^N$, the source signal vector
* $h_{m,n}(\ell,k) \in \mathbb{C}$, the acoustic transfer function (ATF) relating the $n$th source and the $m$th microphone
* $\mathbf{H}(\ell,k) \in \mathbb{C}^{M \times N}$ such that $\left[ \mathbf{H}(\ell,k) \right]_{m,n} = h_{m,n}(\ell,k)$
* $v_m(\ell,k) \in \mathbb{C}$, the additive stationary noise at the $m$th microphone, uncorrelated with any of the other sources.
* $\mathbf{v}(\ell,k) = \left[v_1(\ell,k),\cdots,v_M(\ell,k) \right]^T \in \mathbb{C}^M$, the noise vector

where $\ell$ is the frame index and $k$ is the frequency index.

The received signals of the microphone array in the STFT domain can be written as

$$
\mathbf{z}(\ell,k) = \mathbf{H}(\ell,k) \mathbf{s}(\ell,k) + \mathbf{v}(\ell,k) \in \mathbb{C}^{M}
$$

Also define

* $d(\ell,k) \in \mathbb{C}$, some desired signal at the beamformer output
    * Practically, $d(\ell,k)$ is supposedly one of $s_n(\ell,k)$
* $\mathbf{w}(\ell,k) \in \mathbb{C}^M$, the weight vector for the $M$ microphones
* $y(\ell,k) = \mathbf{w}^T(\ell,k) \mathbf{z}(\ell,k) \in \mathbb{C}$, the beamformer output

The objective of the beamformer problem is to find $\mathbf{w}(\ell,k)$ such that $y(\ell,k)$ becomes a good estimate of $d(\ell,k)$. While the statistically optimal $\mathbf{w}(\ell,k)$ can be derived, the solution usually involves heavy computation, and an adaptation algorithm is usually preferred.

The LMS algorithm can be used to adapt $\mathbf{w}(\ell,k)$, but it has a drawback of slow convergence rate as the eigenvalues of the input correlation matrix are widely spread. In order to achieve faster convergence rate, one alternative solution is to adapt $\mathbf{w}(\ell,k)$ with [[202203131414_Kalman_Filter|Kalman filter]] using the following process equation and measurement equation:

$$
\begin{align*}
\mathbf{w}(\ell,k) &= \gamma \mathbf{w}(\ell-1,k) + \mathbf{v}_w(\ell,k) \\
d(\ell,k) &= \mathbf{w}^T(\ell,k) \mathbf{z}(\ell,k) + \left( d(\ell,k) - y(\ell,k) \right)
\end{align*}
$$

where

* $\mathbf{v}_w(\ell,k) \in \mathbb{C}^M$ is the model driving-noise vector, assumed to be a zero-mean Gaussian random process uncorrelated with $\mathbf{w}(\ell-1,k)$.
* $\gamma$ is the forgetting factor, typically of a value close to 1.0
* $\left( d(\ell,k) - y(\ell,k) \right)$ is the "noise of the measurement," which is the difference between the desired signal and the actual beamformer output.

However, since $d(\ell,k)$ is not known to the beamformer, it is impractical to implement the Kalman filter based on such measurement equation.

## Problem

How to adapt $\mathbf{w}(\ell,k)$ despite the lack of $d(\ell,k)$?

## Solution

### General Form

Modify the measurement equation with the followings:

1. Choose the desired signal $d(\ell,k)$ as 0
2. Impose $N$ constraints defined as $\mathbf{g}(\ell,k) = \left[g_1(\ell,k),\cdots,g_N(\ell,k) \right]^T =  \mathbf{H}^T(\ell,k) \mathbf{w}(\ell,k) \in \mathbb{C}^N$

Since the beamformer is applied frequency bin-wise, the frequency index is omitted in the equations and the notations hereafter for the sake of conciseness.

> YYC Note:
> $g_n(\ell)$ essentially defines the beamformer's gain against the $n$th source signal. So if the objective is to reconstruct $s_1(\ell)$ at the beamformer output, then an intuitive choice of the constraints is to set $g_1(\ell) = 1$ and set all other $g_n(\ell) = 0$ for $n \neq 1$

With the modifications, the measurement equation can be rewritten as

$$
\begin{align*}
\left[ \begin{array}{c}
0 \\
g(\ell)
\end{array}\right]
&=
\left[ \begin{array}{c}
\mathbf{w}^T(\ell) \mathbf{z}(\ell) \\
\mathbf{H}^T(\ell) \mathbf{w}(\ell)
\end{array}\right]
+
\left[ \begin{array}{c}
- y(\ell) \\
\mathbf{v}_c(\ell)
\end{array}\right]
\end{align*}
$$

where

$$
\mathbf{v}_c(\ell) = \left[v_{c,1}(\ell),\cdots,v_{c,N}(\ell) \right] \in \mathbb{C}^N
$$

is the constraints' error vector (i.e., the result of $\mathbf{H}^T(\ell) \mathbf{w}(\ell)$ may not be exactly $\mathbf{g}(\ell)$).

The measurement equation can be further written in a matrix form:

$$
\mathbf{x}(\ell) = \mathbf{F}(\ell)\mathbf{w}(\ell) + \mathbf{v}_{me}(\ell)
$$

where

$$
\mathbf{x}(\ell) =
\left[ \begin{array}{c}
0 \\
\mathbf{g}(\ell)
\end{array}\right]
, \;
\mathbf{F}(\ell) =
\left[ \begin{array}{c}
\mathbf{z}^T(\ell) \\
\mathbf{H}^T(\ell)
\end{array}\right]
, \;
\mathbf{v}_{me}(\ell) =
\left[ \begin{array}{c}
-y(\ell) \\
\mathbf{v}_c(\ell)
\end{array}\right]
$$

Define

* $\mathbf{R}(\ell) \in \mathbb{C}^{(N+1) \times (N+1)}$, the covariance matrix of $\mathbf{v}_{me}(\ell)$.
* $\mathbf{Q}(\ell) \in \mathbb{C}^{M \times M}$, the covariance matrix of $\mathbf{v}_w(\ell)$.

With the process equation, the measurement equation, the estimate of the ideal beamformer weight vector $\mathbf{w}(\ell)$ can be obtained using the Kalman filter solution:

Initialization:

$$
\begin{align*}
\hat{\mathbf{w}}_{0|0} &= 0 \\  
\mathbf{P}_{0|0} &= \operatorname{cov}(\mathbf{w}(0) - \hat{\mathbf{w}}_{0|0} )
\end{align*}
$$

The prediction phase:

$$
\begin{align*}
\hat{\mathbf{w}}_{\ell|\ell-1} &= \gamma \hat{\mathbf{w}}_{\ell-1|\ell-1} \\  
\mathbf{P}_{\ell|\ell-1} &= \gamma^2 \mathbf{P}_{\ell-1|\ell-1} + \mathbf{Q}_\ell
\end{align*}
$$

The update phase:

$$
\begin{align*}
\mathbf{K}_\ell &= \mathbf{P}_{\ell|\ell-1} \mathbf{F}^H_\ell \left( \mathbf{F}_\ell \mathbf{P}_{\ell|\ell-1} \mathbf{F}^H_\ell + \mathbf{R}_\ell \right)^{-1} \\  
\hat{\mathbf{w}}_{\ell|\ell} &= \hat{\mathbf{w}}_{\ell|\ell-1} + \mathbf{K}_\ell \left( \mathbf{x}_\ell - \mathbf{F}_\ell \hat{\mathbf{w}}_{\ell|\ell-1} \right) \\  
\mathbf{P}_{\ell|\ell} &= \left( \mathbf{I}_M - \mathbf{K}_\ell \mathbf{F}_\ell \right) \mathbf{P}_{\ell|\ell-1}
\end{align*}
$$

### Simplification

The computation can be further simplified with the following assumptions:

1. $\mathbf{v}_w(\ell)$ is a zero-mean Gaussian random process uncorrelated with $\mathbf{w}(\ell-1)$
2. The elements in $\mathbf{v}_w(\ell)$ are uncorrelated with each other and have a constant variance $\sigma^2_w$ over time
3. $\left\{ -y^*(\ell), v_{c,1}(\ell),\cdots,v_{c,N}(\ell) \right\}$ are zero-mean and uncorrelated with each other, and their variances are $\sigma^2_y(\ell), \sigma^2_{c,1}(\ell),\cdots,\sigma^2_{c,N}(\ell)$, respectively.
4. As the Kalman filter has started to converge, $\mathbf{P}_{\ell|\ell-1}$ become close to 0 with variance approximately equal to a positive, small value $\epsilon_\ell$

The assumption 2 leads to

$$
\begin{align*}
\mathbf{Q}(\ell) &= \mathbf{Q} = \sigma^2_w \mathbf{I}_M \\
\mathbf{P}_{0|0} &= \sigma^2_w \mathbf{I}_M
\end{align*}
$$

> YYC Note: _
> The paper denotes $\mathbf{P}_{0|0} = \frac{\sigma^2_w}{(1 - \gamma^2)} \mathbf{I}_M$, which is the variance at the steady state ($\sigma^2_w + \gamma^2 \sigma^2_w +  \gamma^4 \sigma^2_w + \cdots$). Not sure which is preferred.

, the assumption 3 leads to

$$
\mathbf{R}(\ell) =
\left[\begin{array}{cccc}
\sigma^2_y(\ell) & 0 & 0 & 0 \\
0 & \sigma^2_{c,1}(\ell) & 0 & 0 \\
0 & 0 & \ddots & 0 \\
0 & 0 & 0 & \sigma^2_{c,N}(\ell)
\end{array}\right]
$$

, and the assumption 4 leads to

$$
\mathbf{P}_{\ell|\ell-1} \approx \epsilon_\ell \mathbf{I}_M
$$

By substituting the approximiation of $\mathbf{P}_{\ell|\ell-1}$ into the update equations, we get

$$
\begin{align*}
\hat{ \mathbf{w} }_{\ell|\ell}
&= \hat{ \mathbf{w} }_{\ell|\ell-1} + \mathbf{K}_\ell \left( \mathbf{x}_\ell - \mathbf{F}_\ell \hat{ \mathbf{w} }_{\ell|\ell-1} \right) \\
&= \hat{ \mathbf{w} }_{\ell|\ell-1} + \mathbf{F}^H_\ell
\left( \mathbf{F}_\ell \mathbf{F}^H_\ell + \frac{1}{\epsilon_\ell} \mathbf{R}_\ell \right)^{-1}
\left( \mathbf{x}_\ell - \mathbf{F}_\ell \hat{ \mathbf{w} }_{\ell|\ell-1} \right)
\end{align*}
$$

The variances in the assumptions are the algorithm parameters that control the adaptation behaviors:

* $\sigma^2_w$ controls the tradeoff between tracking capabilities and the misalignment at convergence
    * In other words, it controls the adaptation bandwidth before the assumption kicks in. Once the assumption 4 kicks in, $\mathbf{Q}(\ell)$ and $\sigma^2_w$ are no longer part of the adaptation
* $\sigma^2_y(\ell)$ is the variance of the beamformer output and therefore controls the power of the beamformer output
* $\sigma^2_{c,n}(\ell)$ controls the allowed variance of the constraint errors. Set $\sigma^2_{c,n}(\ell)$ to some very small values (like 1e-6) to force the converged $\hat{ \mathbf{w} }_{\ell|\ell}$ to strictly follow the specified constraint $\mathbf{g}(\ell)$
* $\epsilon_\ell$ is the adaptation bandwidth when the assumption 4 kicks in.
    * Given how $\mathbf{P}_{\ell|\ell-1}$ is computed in the prediction phase, $\epsilon_\ell$ is essentially $\frac{\sigma^2_w}{(1 - \gamma^2)}$ at the steady state.

## Discussion

### Choosing the proper value of the expected variance of the BF output

The variance of the beamformer output, $\sigma^2_y(\ell)$, is a parameter of the algorithm to be specified. When the characteristic of the desired signal is known, then it can be perfectly configured on a per-frequency-bin-per-frame basis. However, when the signal statistics is not known, it may not be easy to choose a proper value of $\sigma^2_y(\ell)$ for each frequency bin each frame.

Followings are some options to dynamically set the value of $\sigma^2_y(\ell)$. Each of the options has its own advantage and pitfall.

Option 1: Adapt $\sigma^2_y(\ell)$ on the fly based on the latest BF output. In other words,

$$
\sigma^2_y(\ell) = \beta \sigma^2_y(\ell-1) + (1-\beta) \hat{\mathbf{w}}_{\ell | \ell}^T \mathbf{z}(\ell)
$$

where $\beta \in \left[0, 1\right]$ is the forgetting factor.

This option is easy to implement, and it does not require prior knowledge about the desired signals. However, when the signal variance is already small, or when the beamformer is at a state where the output signal power is low, the resulting small $\sigma^2_y(\ell)$ effectively introduces no regulation on the adaptation.

Option 2: Set $\sigma^2_y(\ell)$ to some appropriate constant value. The "appropriate constant value" may be empirically obtained by analyzing the statistics of the desired signal. This option does not seem to work well when the desired signal changes rapidly (e.g. the speech signal).

Note that the regulation term is scaled by $\frac{ \sigma^2_y(\ell) }{ \epsilon_\ell }$.  If $\sigma^2_y(\ell)$ is non-trivial but $\frac{ \sigma^2_y(\ell) }{ \epsilon_\ell } << 1$, then there is still effectively no regulation in regards to the output power.

### Adapting only in the absence of the desired signal

When the variance of the constraint error, $\sigma^2_{c,n}(\ell)$, is set to a very small value (e.g. 1e-15), the adaptation tends to well comply with the specified constraints. And when the constraint is set to keep the beamformer distortionless against the n-th source by choosing the constraint $g_n(\ell) = 1$, the beamformer response against the n-th source, with the assumed steering vector $h_{m,n}(\ell,k)$, is well constrained. In other words, the following condition is well preserved throughout the adaptation:

$$
1 = \sum_m h_{m,n}(\ell, k) \mathbf{w}(\ell, k)
$$

However, the actual steering vector of the n-th source, denoted as $h^{\dagger}_{m,n}(\ell, k)$, may differ from the assumed steering vector $h_{m,n}(\ell,k)$, and when the n-th source is active, the adaptation may result in $\sum_m h^{\dagger}_{m,n}(\ell, k) \mathbf{w}(\ell, k)$ converging to 0, which is undesired.

One possible workaround is to perform adaptation only when the n-th source is inactive. While doing so does not guarantee $\sum_m h^{\dagger}_{m,n}(\ell, k) \mathbf{w}(\ell, k)$ to remain close to 1, it at least prevents the adaptation from actively minimizing $\sum_m h^{\dagger}_{m,n}(\ell, k) \mathbf{w}(\ell, k)$.

How to effectively detect whether the n-th source is active is a separate topic.

### The assumption of the covariance matrix being diagonal

Consider the case of $N = 1$ and $g_1(\ell) = 1$, the covariance matrix $\mathbf{R}$ is essentially

$$
\mathbf{R} = \left[\begin{array}{cc}
\operatorname{var}(-y(\ell)) & \operatorname{cov}(-y(\ell),\mathbf{v}_c(\ell)) \\
\operatorname{cov}(\mathbf{v}_c(\ell), -y(\ell)) & \operatorname{var}(\mathbf{v}_c(\ell))
\end{array}\right]
$$

And if we assume that $E \left( y(\ell) \right) = 0$ and $E \left( \mathbf{v}_c(\ell) \right) = 0$, then

$$
\begin{align*}
\operatorname{cov}(-y(\ell),\mathbf{v}_c(\ell))
&= E \left[ \left(-y(\ell)-E(-y(\ell))\right) \left( \mathbf{v}_c^*(\ell) - E(\mathbf{v}_c^*(\ell)) \right)   \right] \\
&= E \left[ -y(\ell) \mathbf{v}_c^*(\ell) \right] \\
&= E \left[ \left( \mathbf{w}^T(\ell)\mathbf{z}(\ell) \right) \left(1 - \mathbf{H}^H(\ell) \mathbf{w}^*(\ell) \right) \right] \\
&= \left( \mathbf{w}^T(\ell) E \left[\mathbf{z}(\ell)\right] \right) \left(1 - \mathbf{H}^H(\ell) \mathbf{w}^*(\ell) \right)
\end{align*}
$$

If $E \left( \mathbf{z}(\ell) \right) = 0$, then $\operatorname{cov}(-y(\ell),\mathbf{v}_c(\ell)) = 0$, and $\mathbf{R}$ will be diagonal.


### How the parameters affects the adaptation

To understand how the parameters ($\sigma^2_y$, $\sigma^2_{c,n}$, and $\epsilon_{\ell}$) affect the adaptation, consider the case of $N = 1$ and $g_1(\ell) = 1$, and $\mathbf{F}_\ell \mathbf{F}^H_\ell + \frac{1}{\epsilon_\ell} \mathbf{R}_\ell \in \mathbb{C}^{2 \times 2}$ can be expanded to:

$$
\begin{align}
\mathbf{F}_\ell \mathbf{F}^H_\ell + \frac{1}{\epsilon_\ell} \mathbf{R}_\ell &=
\left[ \begin{array}{c}
    \mathbf{z}^T(\ell) \\
    \mathbf{H}^T(\ell)
\end{array}\right]
\left[ \begin{array}{cc} \mathbf{z}^*(\ell) & \mathbf{H}^*(\ell) \end{array}\right]
+ \frac{1}{\epsilon_\ell}
\left[ \begin{array}{cc}
    \sigma^2_y(\ell) & 0 \\
    0 & \sigma^2_{c,1}(\ell)
\end{array}\right] \\
&= \left[ \begin{array}{cc}
    ||\mathbf{z}||^2 + \frac{ \sigma^2_y(\ell) }{ \epsilon_\ell } & \mathbf{z}^T(\ell) \mathbf{H}^*(\ell) \\
    \mathbf{H}^T(\ell) \mathbf{z}^*(\ell) &  ||\mathbf{H}||^2 + \frac{ \sigma^2_{c,1}(\ell) }{ \epsilon_\ell }
\end{array}\right]
\end{align}
$$

And its inverse matrix is

$$
\begin{align*}
\left( \mathbf{F}_\ell \mathbf{F}^H_\ell + \frac{1}{\epsilon_\ell} \mathbf{R}_\ell \right)^{-1} &=
\frac{1}{ \Delta }
\left[ \begin{array}{cc}
    ||\mathbf{H}||^2 + \frac{ \sigma^2_{c,1}(\ell) }{ \epsilon_\ell } & - \mathbf{z}^T(\ell) \mathbf{H}^*(\ell) \\
    - \mathbf{H}^T(\ell) \mathbf{z}^*(\ell) &  ||\mathbf{z}||^2 + \frac{ \sigma^2_y(\ell) }{ \epsilon_\ell }
\end{array}\right]
\end{align*}
$$

where

$$
\Delta = \left(||\mathbf{z}||^2 + \frac{ \sigma^2_y(\ell) }{ \epsilon_\ell }\right) \left(||\mathbf{H}||^2 + \frac{ \sigma^2_{c,1}(\ell) }{ \epsilon_\ell }\right) -
\mathbf{z}^T(\ell) \mathbf{H}^*(\ell) \mathbf{H}^T(\ell) \mathbf{z}^*(\ell)
$$

is the determinant of $\mathbf{F}_\ell \mathbf{F}^H_\ell + \frac{1}{\epsilon_\ell} \mathbf{R}_\ell$.

The update term is then

$$
\begin{align*}
\mathbf{F}^H_\ell
\left( \mathbf{F}_\ell \mathbf{F}^H_\ell + \frac{1}{\epsilon_\ell} \mathbf{R}_\ell \right)^{-1}
\left( \mathbf{x}_\ell - \mathbf{F}_\ell \hat{ \mathbf{w} }_{\ell|\ell-1} \right)
&=
\left[\begin{array}{cc}
    \mathbf{z}^*(\ell) & \mathbf{H}^*(\ell)
\end{array}\right]
\frac{1}{ \Delta }
\left[ \begin{array}{cc}
    ||\mathbf{H}(\ell)||^2 + \frac{ \sigma^2_{c,1}(\ell) }{ \epsilon_\ell } & - \mathbf{z}^T(\ell) \mathbf{H}^*(\ell) \\
    - \mathbf{H}^T(\ell) \mathbf{z}^*(\ell) &  ||\mathbf{z}(\ell)||^2 + \frac{ \sigma^2_y(\ell) }{ \epsilon_\ell }
\end{array}\right]
\left[\begin{array}{c}
    0 - \mathbf{z}^T(\ell) \hat{ \mathbf{w} }_{\ell|\ell-1} \\
    g_1(\ell) - \mathbf{H}^T(\ell) \hat{ \mathbf{w} }_{\ell|\ell-1}
\end{array}\right] \\
&=
\frac{1}{ \Delta }
\left[ \begin{array}{c}
    \left(
        \left( ||\mathbf{H}(\ell)||^2 + \frac{ \sigma^2_{c,1}(\ell) }{ \epsilon_\ell } \right) \mathbf{I}
        - \mathbf{H}^*(\ell) \mathbf{H}^T(\ell)
    \right)
    \mathbf{z}^*(\ell)
    &
    \left(
        \left( ||\mathbf{z}(\ell)||^2 + \frac{ \sigma^2_y(\ell) }{ \epsilon_\ell } \right) \mathbf{I}
        - \mathbf{z}^*(\ell) \mathbf{z}^T(\ell)
    \right)
    \mathbf{H}^*(\ell)
\end{array}\right]
\left[\begin{array}{c}
    0 - \mathbf{z}^T(\ell) \hat{ \mathbf{w} }_{\ell|\ell-1} \\
    g_1(\ell) - \mathbf{H}^T(\ell) \hat{ \mathbf{w} }_{\ell|\ell-1}
\end{array}\right] \\
&=  
\frac{1}{ \Delta }
\left(
    e_o(\ell)
    \frac{ \sigma^2_{c,1}(\ell) }{ \epsilon_\ell } \mathbf{z}^*(\ell)
    +
    e_c(\ell)
    \frac{ \sigma^2_y(\ell) }{ \epsilon_\ell } \mathbf{H}^*
    +
    \left( e_o(\ell) - s_1(\ell) e_c(\ell) \right)
    \left(
        || \mathbf{H}(\ell) ||^2 \mathbf{I} - \mathbf{H}^*(\ell)\mathbf{H}^T(\ell)
    \right)
    \mathbf{v}^*(\ell)
    +
    e_c(\ell)
    \left(
        || \mathbf{v}(\ell) ||^2 \mathbf{I} - \mathbf{v}^*(\ell)\mathbf{v}^T(\ell)
    \right)
    \mathbf{H}^*(\ell)
\right)
\end{align*}
$$

where

* $e_o(\ell) = 0 - \mathbf{z}^T(\ell) \hat{ \mathbf{w} }_{\ell|\ell-1} \in \mathbb{C}$ is the "output error"
* $e_c(\ell) = g_1(\ell) - \mathbf{H}^T(\ell) \hat{ \mathbf{w} }_{\ell|\ell-1} \in \mathbb{C}$ is the "constraint error"

When $\sigma^2_{c,1}(\ell)$ and $\sigma^2_y(\ell)$ are 0, the weight vector converges to a state where

$$
    \left( e_o(\ell) - s_1(\ell) e_c(\ell) \right)
    \left(
        || \mathbf{H}(\ell) ||^2 \mathbf{I} - \mathbf{H}^*(\ell)\mathbf{H}^T(\ell)
    \right)
    \mathbf{v}^*(\ell)
    +
    e_c(\ell)
    \left(
        || \mathbf{v}(\ell) ||^2 \mathbf{I} - \mathbf{v}^*(\ell)\mathbf{v}^T(\ell)
    \right)
    \mathbf{H}^*(\ell)
    = 0
$$

Note that when the source signal $s_1(\ell)$ is not 0, the beamformer output is not supposed to be 0, and hence $e_o(\ell)$ will not be 0. In other words, the converged state will not be $e_o(\ell) = e_c(\ell) = 0$.

When $\sigma^2_y(\ell)$ is not 0, the term $e_c(\ell) \frac{ \sigma^2_y(\ell) }{ \epsilon_\ell } \mathbf{H}^*$ is added to the equation. In this case, a larger $\sigma^2_y(\ell)$ seems to push the adaptation towards a new steady state where $e_c(\ell)$ will be smaller (relative to when $\sigma^2_y(\ell) = 0$).

### Computational cost

Define:

$$
\begin{align*}
\mathbf{D}_\ell &= \mathbf{F}_\ell \mathbf{F}_\ell^H + \frac{1}{\epsilon_\ell}\mathbf{R}_\ell \\  
e_\ell &= \mathbf{x}_\ell - \mathbf{F}_\ell \hat{\mathbf{w}}_{\ell|\ell-1} \\  
\mathbf{J}_\ell &= \mathbf{D}_\ell^{-1} \mathbf{e}_\ell
\end{align*}
$$

Then the computational cost consists of the followings:

* Computing $\mathbf{D}_\ell$
    * Roughly 3*M MAC (multiply-accumulate) operations for complex values, computing $||\mathbf{z}_\ell||^2$, $||\mathbf{H}_\ell||^2$, and $\mathbf{z}_\ell^T \mathbf{H}_\ell^*$
* Computing $\mathbf{e}_\ell$
    * Roughly 2*M MAC
* Computing the inverse of $\mathbf{D}_\ell$
    * Roughly 6 MAC for a 2x2 array
* Computing $\mathbf{J}_\ell = \mathbf{D}_\ell^{-1} \mathbf{e}_\ell$
    * Roughly 4 MAC
* Computing $\mathbf{F}_\ell^H \mathbf{J}_\ell$
    * Roughly 2*M MAC

The total cost is roughly (7*M+10) MAC.

AS a reference, the computational cost for computing the beamformer output is 1\*M MAC. In the case of M=7, the cost of this adaptation algorithm is 8.42 times the cost of computing the beamformer output.

## Reference

* [D. Cherkassky, S. Gannot, "New Insights into the Kalman Filter Beamformer: Applications to Speech and Robustness"](http://www.eng.biu.ac.il/gannot/files/2012/05/New-insights-into-the-Kalman-filter-beamformer-Applications-to-speech-and-robustness.pdf)
* [Y. Chen, C. Chiang, "Adaptive beamforming using the constrained Kalman filter"](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=267359)
