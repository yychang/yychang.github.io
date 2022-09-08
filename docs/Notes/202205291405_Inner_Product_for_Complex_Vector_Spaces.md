---
aliases: []
tags:
  - dsp
---

# Inner Product for Complex Vector Spaces
## Definition  
  
Let $\mathbf{u}, \mathbf{v} \in \mathbb{C}^n$ be two complex vectors that  
  
$$
\begin{align}
\mathbf{u} &= \left( u_1, u_2, ..., u_n \right) \\  
\mathbf{v} &= \left( v_1, v_2, ..., v_n \right)  
\end{align}
$$  
  
the inner product of $\mathbf{u}$ and $\mathbf{v}$ is defined as  
  
$$  
\left< \mathbf{u}, \mathbf{v} \right> = \sum_{i=1}^n u_i {v_i}^*  
$$  
  
where ${v_i}^*$ is the conjugate of $v_i$.  
  
## Properties  
  
1. $\left< \mathbf{v}, \mathbf{v} \right> \geq 0$  
1. $\left< \mathbf{v}, \mathbf{v} \right> = 0 \Leftrightarrow \mathbf{v} = 0$  
1. $\left< \mathbf{u}, \mathbf{v} + \mathbf{w} \right> = \left< \mathbf{u}, \mathbf{v} \right> + \left< \mathbf{u}, \mathbf{w} \right>$  
1. $\left< \mathbf{u} + \mathbf{w}, \mathbf{v} \right> = \left< \mathbf{u}, \mathbf{v} \right> + \left< \mathbf{w}, \mathbf{v} \right>$  
1. For a scalar $\alpha \in \mathbb{C}$, $\left< \alpha \mathbf{u}, \mathbf{v} \right> = \alpha \left< \mathbf{u}, \mathbf{v} \right>$, $\left< \mathbf{u}, \alpha \mathbf{v} \right> = \alpha^* \left< \mathbf{u}, \mathbf{v} \right>$  
1. $\left< \mathbf{u}, \mathbf{v} \right> = {\left< \mathbf{v}, \mathbf{u} \right>}^*$  
1. $\mathbf{u}$ and $\mathbf{v}$ are orthogonal if $\left< \mathbf{u}, \mathbf{v} \right> = 0$  
1. Inner product is nondegenerate  
 # In other words, if $\mathbf{x} \in \mathbb{C}^n$, and $\left< \mathbf{x}, \mathbf{v} \right> = 0$ for all $\mathbf{v} \in \mathbb{C}^n$, then $\mathbf{x} = 0$  
1. Schwarz inequality: $\left| \left< \mathbf{u}, \mathbf{v} \right> \right| \leq \left| \mathbf{u} \right| \left| \mathbf{v} \right|$
