---
aliases: []
tags:
  - quick-ref
---

# Latext Quick Reference

## Greek and Hebrew letters

|  |  |  |  |  |  |
| -- | -- | -- | -- | -- | -- |
| $\alpha$ \\alpha | $\beta$ \\beta | $\chi$ \\chi | $\delta$ \\delta | $\epsilon$ \\epsilon | $\eta$ \\eta |
| $\gamma$ \\gamma | $\iota$ \\iota | $\kappa$ \\kappa | $\lambda$ \\lambda | $\mu$ \\mu | $\nu$ \\nu |
| $o$ o | $\omega$ \\omega | $\phi$ \\phi | $\pi$ \\pi | $\psi$ \\psi | $\rho$ \\rho |
| $\sigma$ \\sigma | $\tau$ \\tau | $\theta$ \\theta | $\upsilon$ \\upsilon | $\xi$ \\xi | $\zeta$ \\zeta |
| $\digamma$ \\digamma | $\varepsilon$ \\varepsilon | $\varkappa$ \\varkappa | $\varphi$ \\varphi | $\varpi$ \\varpi | $\varrho$ \\varrho |
| $\varsigma$ \\varsigma | $\vartheta$ \\vartheta | | | | |

## LaTex Math Constructs

|    |    |    |    |    |
| -- | -- | -- | -- | -- |
| $\frac{x}{y}$ \frac{x}{y} | $\overline{x}$ \overline{x} | $\underline{x}$ \underline{x} | $\sqrt{x}$ \sqrt{x} | $\sqrt[n]{x}$ \sqrt[n]{x} |

## Delimiters
|    |    |    |    |    |
| -- | -- | -- | -- | -- |
| $\{$ \\{ | $\}$ \\} | $\vert$ \\vert | $[$ \[ | $]$ \] |

Also the vertical bar ("|"): $|$ 

Use `\left` and `\right` to pair the delimiters and match their heights:

```latex
x = \left[\begin{array}{cc}
  1 & 2 \\
  3 & 4 \\
\end{array}\right]
```

$$
x = \left[\begin{array}{cc}
  1 & 2 \\
  3 & 4 \\
\end{array}\right]
$$

Use `\left.` or `\right.` to start or end a pair without using a delimiter:

```latex
\delta(t) = \left\{\begin{array}{ccl}
  1 & \cdots & t = 0 \\
  0 & \cdots & \mbox{otherwise}
\end{array}\right.
```

$$
\delta(t) = \left\{\begin{array}{ccl}
  1 & \cdots & t = 0 \\
  0 & \cdots & \mbox{otherwise}
\end{array}\right.
$$


## Variable-sized symbols (displayed formulae show larger version)

## Standard Function Names

| | | | | |
| -- | -- | -- | -- | -- |
| $\operatorname{MyFunc}$ \operatorname{MyFunc} | $\cos$ \cos | $\sin$ \sin | $\exp$ \exp | $\arg$ \arg |

## Binary Operation/Relation Symbols

### Operators

| | | | | |
| -- | -- | -- | -- | -- |
| $\ast$ \ast | $\star$ \star |  $\cdot$ \cdot | $\circ$ \circ | $\times$ \times |

### Equal Signs

| | | | | |
| -- | -- | -- | -- | -- |
| $\triangleq$ \triangleq | $\equiv$ \equiv | $\cong$ \cong | $\sim$ \sim | $\neq$ \neq |

## Arrow symbols

## Miscellaneous symbols
| | | | | | |
| -- | -- | -- | -- | -- | -- |
| $\infty$ \infty | $\nabla$ \nabla | $\partial$ \partial |  $\eth$ \eth | $\forall$ \forall | $\exists$ \exists |
| $\cdots$ \cdots | $\vdots$ \vdots | $\ldots$ \ldots | $\ddots$ \ddots | $\Im$ \Im | $\Re$ \Re |
| $\imath$ \imath | $\jmath$ \jmath| $\ell$ \ell | | | |

## Math mode accents
| | | | | |
| -- | -- | -- | -- | -- |
| $\acute{a}$ \acute{a} | $\breve{a}$ \breve{a} | $\ddot{a}$ \ddot{a} |  $\grave{a}$ \grave{a} | $\tilde{a}$ \tilde{a} |
| $\bar{a}$ \bar{a} | $\check{a}$ \check{a} | $\dot{a}$ \dot{a} | $\hat{a}$ \hat{a} |  $\vec{a}$ \vec{a} |
| $\acute{\acute{A}}$ \\acute{\\acute{A}} | $\breve{\breve{A}}$ \\breve{\\breve{A}} | $\ddot{\ddot{A}}$ \\ddot{\\ddot{A}} | $\grave{\grave{A}}$ \\grave{\\grave{A}} | $\tilde{\tilde{A}}$ \\tilde{\\tilde{A}} |
| $\bar{\bar{A}}$ \\bar{\\bar{A}} | $\check{\check{A}}$ \\check{\\check{A}} | $\dot{\dot{A}}$ \\dot{\\dot{A}} | $\hat{\hat{A}}$ \\hat{\\hat{A}} | $\vec{\vec{A}}$ \\vec{\\vec{A}} |

## Styles
| |
| -- |
| $\mathcal{ABC}$ \\mathcal{ABC} |
| $\mathbb{ABC}$ \\mathbb{ABC} |
| $\mathfrak{ABC}$ \\mathfrak{ABC} |
| $\mathsf{ABC}$ \\mathsf{ABC} |
| $\mathbf{ABC}$ \\mathbf{ABC} |

## Array environment, examples

Quick summary

* Use `\left` + Delimiter and `\right` + Delimiter to label the boundary of a block of math. In this way the delimiter will scale properly if the block of math occupies more than one line.
* Use `\begin{array} ` and `\end{array} ` to specify a block of array
* The curly braces after `\begin{array} ` specifies the alignment of each entry in a row. ` {cr} ` means the first column is center aligned and the 2nd column is aligned to the right.
* Within the array block, `&` separates the entry in a row, and `\\` indicates a new row.

Latex code:

```latex
\left(
  \begin{array}{cc}
    2\tau & 7\phi - \frac5{12} \\  
    3\psi & \frac{\pi}8
  \end{array}
\right)
\left(
  \begin{array}{c}
    x \\
    y
  \end{array}
\right)
~\mbox{and}~
\left[
  \begin{array}{cc|r}
    3 & 4 & 5 \\
    1 & 3 & 729
  \end{array}
\right]
```

Result:

$$
\left(
  \begin{array}{cc}
    2\tau & 7\phi - \frac5{12} \\  
    3\psi & \frac{\pi}8
  \end{array}
\right)
\left(
  \begin{array}{c}
    x \\
    y
  \end{array}
\right)
~\mbox{and}~
\left[
  \begin{array}{cc|r}
    3 & 4 & 5 \\
    1 & 3 & 729
  \end{array}
\right]
$$

## Misc

### Linebreak

Use `\\`

```latex
\begin{align}
x &= 1 \\
y &= 2
\end{align}
```

$$
\begin{align}
x &= 1 \\
y &= 2
\end{align}
$$

### Alignment

Use ` \begin{align*} ` and ` \end{align*} ` to specify the block that requires alignment; use ` & ` to specify the location to be aligned. The '*' after 'align' indicates that this equation will not be numbered.

```latex
\begin{align*}
  y &= x + x \\
    &= 2x
\end{align*}
```

$$
\begin{align*}
  y &= x + x \\
    &= 2x
\end{align*}
$$

### Equation Box

```latex
\boxed{y = Ax}
```

$$
\boxed{y = Ax}
$$

### Equation Numbering

Equation block defined with `\begin{equation}` and `\end{equation}` will be numbered, while the block defined with `\begin{equation*}` and `\end{equation*}` will not. Same syntax applies to `\begin{align*}`

### Spacing
```latex
1 \, 2
1 \! 2
1 \> 2
1 \; 2
1 \quad 2
1 \qquad 2
```

$$
\begin{align}
& 1 \, 2 \\
& 1 \! 2 \\
& 1 \> 2 \\
& 1 \; 2 \\
& 1 \quad 2 \\
& 1 \qquad 2 \\
\end{align}
$$

### Entering text

use `\text`
```latex
Y(k) = \text{DFT of} \; y(n)
```

$$
Y(k) = \text{DFT of} \; y(n)
$$

## Reference

* [Latex Mathematical Symbols](http://groups.csail.mit.edu/netmit/wordpress/wp-content/themes/netmit/papers/Symbols.pdf)
