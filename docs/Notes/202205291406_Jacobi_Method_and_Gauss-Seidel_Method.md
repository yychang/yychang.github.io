# Jacobi Method and Gauss-Seidel Method
## Context  
  
Let  
  
$$  
A\mathbf{x} = \mathbf{b}  
$$  
  
be a square system of $n$ linear equations, where  
  
$$
A={\begin{bmatrix}a_{11}&a_{12}&\cdots &a_{1n}\\a_{21}&a_{22}&\cdots &a_{2n}\\\vdots &\vdots &\ddots &\vdots \\a_{n1}&a_{n2}&\cdots &a_{nn}\end{bmatrix}} \in \mathbb{C}^{n \times n} ,\qquad  
\mathbf {x} ={\begin{bmatrix}x_{1}\\x_{2}\\\vdots \\x_{n}\end{bmatrix}} \in \mathbb{C}^n,\qquad  
\mathbf {b} ={\begin{bmatrix}b_{1}\\b_{2}\\\vdots \\b_{n}\end{bmatrix}} \in \mathbb{C}^n.  
$$
  
We want to find an approximate solution of $\mathbf{x}$.  
  
## Problem  
  
How do we find a good approximate solution of $\mathbf{x}$?  
  
## Solution  
  
Re-write the $n$ linear equations as follows:  
  
$$
\begin{align}
x_1 &= \frac{1}{a_{11}} \left( b_1 - a_{12}x_2 - a_{13}x_3 - \cdots - a_{1n}x_n \right) \\  
x_2 &= \frac{1}{a_{22}} \left( b_2 - a_{21}x_1 - a_{23}x_3 - \cdots - a_{2n}x_n \right) \\  
\vdots
\end{align}
$$  
  
Define:  
* $\mathbf {x}^{(k)} \in \mathbb{C}^n$: The kth iteration of the approximation of $\mathbf {x}$.  
  
Then $\mathbf {x}^{(k+1)}$ can be derived by $\mathbf {x}^{(k)}$ using the above equations.  
  
The initial approximation, $\mathbf {x}^{(0)}$, can be empirically assigned. If there is no other prior knowledge about the system, $\mathbf {x}^{(0)}$ can be set to all zeros.  
  
### Jacobi Method  
  
To compute the (k+1)th iteration, use the following equations:  
  
$$
\begin{align}
x_1^{(k+1)} &= \frac{1}{a_{11}} \left( b_1 - a_{12}x_2^{(k)} - a_{13}x_3^{(k)} - \cdots - a_{1n}x_n^{(k)} \right) \\  
x_2^{(k+1)} &= \frac{1}{a_{22}} \left( b_2 - a_{21}x_1^{(k)} - a_{23}x_3^{(k)} - \cdots - a_{2n}x_n^{(k)} \right) \\  
\vdots
\end{align}
$$  
  
A different way to understand the equations is to decompose $A$ into a diagonal component $D$ and the remainder $R$:  
  
$$  
A=D+R  
$$  
  
where  
$$  
D={\begin{bmatrix}a_{11}&0&\cdots &0\\0&a_{22}&\cdots &0\\\vdots &\vdots &\ddots &\vdots \\0&0&\cdots &a_{nn}\end{bmatrix}}, \qquad  
  
R={\begin{bmatrix}0&a_{12}&\cdots &a_{1n}\\a_{21}&0&\cdots &a_{2n}\\\vdots &\vdots &\ddots &\vdots \\a_{n1}&a_{n2}&\cdots &0\end{bmatrix}}.  
$$  
  
And the system can be written as  
  
$$  
D \mathbf{x} + R \mathbf{x} = \mathbf{b}  
$$  
  
And the solution of $\mathbf{x}$ is iteratively approximated by  
  
$$  
\mathbf{x}^{(k+1)} = D^{-1} \left( \mathbf{b} - R \mathbf{x}^{(k)} \right)  
$$  
  
### Gauss-Seidel Method  
  
When computing the new approximation $x_1^{(k+1)}, x_2^{(k+1)}, \cdots, x_n^{(k+1)}$, the new estimation $x_j^{(k+1)}$ instead of the old one ($x_j^{(k)}$) will be used, if available.  
  
In other words, the equations are  
  
$$
\begin{align}
x_1^{(k+1)} &= \frac{1}{a_{11}} \left( b_1 - a_{12}x_2^{(k)} - a_{13}x_3^{(k)} - \cdots - a_{1n}x_n^{(k)} \right) \\  
x_2^{(k+1)} &= \frac{1}{a_{22}} \left( b_2 - a_{21}x_1^{(k+1)} - a_{23}x_3^{(k)} - \cdots - a_{2n}x_n^{(k)} \right) \\  
x_3^{(k+1)} &= \frac{1}{a_{33}} \left( b_3 - a_{31}x_1^{(k+1)} - a_{32}x_2^{(k+1)} - \cdots - a_{3n}x_n^{(k)} \right) \\  
\vdots
\end{align}
$$  
  
A different way to understand the equation is to decompose $A$ into a lower triangular component $L_*$ and a strictly upper triangular component $U$:  
  
$$  
A=L_* + U  
$$  
  
where  
  
$$  
L_*={\begin{bmatrix}a_{11}&0&\cdots &0\\a_{21}&a_{22}&\cdots &0\\\vdots &\vdots &\ddots &\vdots \\a_{n1}&a_{n2}&\cdots &a_{nn}\end{bmatrix}},\quad  
  
U={\begin{bmatrix}0&a_{12}&\cdots &a_{1n}\\0&0&\cdots &a_{2n}\\\vdots &\vdots &\ddots &\vdots \\0&0&\cdots &0\end{bmatrix}}.  
$$  
  
And the system can be written as  
  
$$  
L_* \mathbf{x} + U \mathbf{x} = \mathbf{b}  
$$  
  
And the solution of $\mathbf{x}$ is iteratively approximated by  
  
$$  
\mathbf{x}^{(k+1)} = L_*^{-1} \left( \mathbf{b} - U \mathbf{x}^{(k)} \right)  
$$
## Reference
* [Wikipedia: Gauss-Seidel Method](https://en.wikipedia.org/wiki/Gauss%E2%80%93Seidel_method)
* [Wikipedia: Jacobi Method](https://en.wikipedia.org/wiki/Jacobi_method)
