# Steering Vector

## Overview

Consider a system that consists of array of $n$ arbitrary sensors, the **steering vector** of the senor array represents the phase delays, with respect to a reference position, for an incoming plane wave at each sensor element.

The phase delay for i-th senor is defined as

$$
\exp( -j 2 \pi \frac{\tau_i}{T} )
$$

where

* $\tau_i$: the time delay for the wavefront of the plane wave to travel from the reference position to the i-th sensor.
* $T$: The temporal period of the plane wave

Note that $\tau_i$ can be negative if the plane wave reaches the i-th sensor before reaching the reference position.

The choice of the reference position is typically one of the followings:

* The origin of the coordinate system used for defining the positions of the sensors
* The position of the "first sensor"
 * Conveniently, the convention is to choose the position of the "first sensor" as the origin of the coordinate system

## Commonly Used Definition

Under the 3-dimensional space, let the reference position be the origin of the Cartesian coordinate system, define:

* $\mathbf{r}_i = [x_i, y_i, z_i]^T$: the position of i-th sensor in the Cartesian coordinate system
* $(\theta, \phi)$: the direction of the plane wave propagation in spherical coordinate system, where $\theta$ is the polar angle and $\phi$ is the azimuth angle
* $c$: The traveling speed of the plane wave
* $\lambda$: the wavelength of the plane wave

then the direction vector for the wave in the Cartesian coordinate system can be written as

$$
\vec{n} = \left[
    \begin{array}{c}
        \sin\theta \cos \phi \\
        \sin \theta  \sin \phi  \\
        \cos \theta
    \end{array}
\right]
$$

And the distance for the wave to travel from the origin to $\mathbf{r}_i$ is equivalent to the projection of $\mathbf{r}_i$ onto the direction $\vec{n}$, which can be computed by the inner product of the two vectors:

$$
\vec{n} \cdot \mathbf{r}_i
$$

And the time for the wave to travel over such distance is

$$
\tau_i = \frac{ \vec{n} \cdot \mathbf{r}_i }{c}
$$

Also the temporal period of the wave can be expressed by the wavelength and the wave speed as follows:

$$
T = \frac{ \lambda }{c}
$$

So the phase delay for i-th senor can be written as

$$
\exp( -j 2 \pi \frac{\tau_i}{T} ) = \exp( -j  \frac{2 \pi}{ \lambda} \vec{n} \cdot \mathbf{r}_i )
$$

And the steering vector for the wave of the given $(\lambda, \theta, \phi)$ can be written as

$$
\mathbf{a}(\lambda, \theta, \phi) = \left[
    \begin{array}{c}
        \exp( -j  \frac{2 \pi}{ \lambda} \vec{n} \cdot \mathbf{r}_1 ) \\
        \exp( -j  \frac{2 \pi}{ \lambda} \vec{n} \cdot \mathbf{r}_2 ) \\
        \vdots \\
        \exp( -j  \frac{2 \pi}{ \lambda} \vec{n} \cdot \mathbf{r}_n )
    \end{array}
\right]
$$

## Note

The "phase delay" of the signal is not to be confused with the absolute angle change of the signal. For example, if a sound source can emit one of the following two signals:

$$
\begin{align}
x_1(t) &= \cos( 2 \pi f t ) \\
x_2(t) &= \cos( -2 \pi f t )
\end{align}
$$

Then the time delay (as well as the phase delay) from the reference position to the 1st mic will be the same regardless of the signal emitted, but the actual angle difference from the reference position to the 1st mic depends on the signal emitted. 
