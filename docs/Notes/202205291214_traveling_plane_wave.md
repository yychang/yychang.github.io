---
aliases: []
tags:
  - audio-engineering
---

# Traveling Plane Wave

## Overview  
From Wikipedia:

> A traveling plane wave is a special case of plane wave, namely a field whose evolution in time can be described as simple translation of its values at a constant wave speed $c$, along a fixed direction of propagation $\vec{n}$.  
  
The general form of the traveling plane wave can be represented as  
  
$$  
F( \vec{r}, t ) = G ( \vec{r} \cdot \vec{n} - ct )  
$$  
  
where  
  
* $\vec{r} \in \mathbb{R}^N$ is a position in the N-dimensional space  
* $\vec{n} \in \mathbb{R}^N$ is the direction vector of the wave propagation  
    * Note: by definition, the direction vector is of unit length.  
* $d = \vec{r} \cdot \vec{n} \in \mathbb{R}$ is the "displacement" of the wave, computed as the vector dot product of $\vec{r}$ and $\vec{n}$  
* $G(u): \mathbb{R} \to \mathbb{Z}$ is a function describing the **profile** of the wave, namely the value of the field at time $t = 0$, for each displacement $d$.  
    * $u = d - ct \in \mathbb{R}$  
    * In most real-world cases such as a sinusoidal plane wave, the output of $G(u)$ is real (i.e., $G(u): \mathbb{R} \to \mathbb{R}$)  
  
## Sinusoidal Plane Wave  
  
A sinusoidal plane wave is a special case of traveling plane wave. It can be represented as  
  
$$  
F( \vec{r}, t ) = A \cos( 2 \pi \nu \left( \vec{r} \cdot \vec{n} - ct \right) + \varphi )  
$$  
  
where  
  
* $A \in \mathbb{R}$ is the amplitude of the wave  
* $\nu \in \mathbb{R}^+$ is the spatial frequency of the wave  
    * The spatial frequency is the inverse of the wave length (i.e., $\nu = \frac{1}{\lambda}$)  
* $\varphi$ is the initial phase of the sinusoidal wave.  
  
### Wave Vector of Sinusoidal Plane Wave in 3D space  
  
In the 3D world, if a sinusoidal plane wave travels in a direction described by the spherical coordinates $(\theta, \phi)$, where $\theta$ is the polar angle and $\phi$ is the azimuth angle, then the direction vector $\vec{n}$, in the Cartesian coordinates, will be  
  
$$
\vec{n} = 
\left[ 
    \begin{array}{c}
        \sin\theta \cos\phi \\
        \sin\theta \sin\phi \\
        \cos\theta 
    \end{array}
\right]
$$


And therefore the wave vector $\mathbf{k}$ of such sinusoidal plane wave is  
  
$$
\mathbf{k} = 2 \pi \nu \vec{n} = 2 \pi \nu \left[  
    \begin{array}{c}  
        \sin\theta \cos\phi \\
        \sin\theta \sin\phi \\
        \cos\theta
    \end{array}
\right]
$$  
  
  
  
  
## Reference  
  
* [Traveling plane wave](https://en.wikipedia.org/wiki/Traveling_plane_wave)  
* [Sinusoidal plane wave](https://en.wikipedia.org/wiki/Sinusoidal_plane_wave)  
* http://www.antenna-theory.com/definitions/wavevector.php