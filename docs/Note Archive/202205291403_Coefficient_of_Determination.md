---
aliases: []
tags:
  - dsp
---

# Coefficient of Determination
  
## Context  
  
Given  
  
* an input data set $\left\{x_1, x_2, \cdots, x_n \right\}$  
* an observation data set $\left\{y_1, y_2, \cdots, y_n \right\}$  
  
We can use linear regression or other methods to establish a model $f$ where  
  
$$  
f(x_i) = \hat{y}_i \cong y_i  
$$  
  
With various possible model $f$, we want some metric indicating how "good" the model $f$ in terms of modeling the relationship between $x_i$ and $y_i$, or, from a different point of view, we want to know how "close" the observation data set $y_i$ and the modeled data set $\hat{y}_i$ are.  
  
## Problem  
  
How to design a metric to evaluate the "closeness" of $y_i$ and $\hat{y}_i$?  
  
## Solution  
  
Use the coefficient of determination.  
  
Let:  
  
* $\bar{y} = \frac{1}{n} \sum_{i=1}^n y_i$: the mean of $y_i$  
* $S_{tot} = \sum_{i} \left(y_i - \bar{y} \right)^2$: the "total sum of squares" of $y_i$  
* $S_{res} = \sum_{i} \left(y_i - \hat{y}_i \right)^2$: the "residual sum of squares"  
  
The coefficient of determination is defined as  
  
$$  
R^2 \equiv 1 - \frac{S_{res}}{S_{tot}}  
$$  
  
The coefficient of determination is denoted as $R^2$ and is often referred to as the "R-squared."  
  
$R^2$ represents the ratio of the variability accounted for by the model $f$ to the total variability in the observation data. For example, if $R^2 = 0.7$, then it means the model's output $\hat{y}_i$ accounts for 70% of the variability of the observation data, and there remains 30% of the variability unaccounted for by the model.  
  
## Discussion  
  
### Related to the Variance of the Noise  
  
$R^2$ can be seen as the "variance of the observation data captured by the model," or simply the "explained variance." If the relationship between $y_i$ and $\hat{y}_i$ is represented as  
  
$$  
y_i = \hat{y}_i + w_i  
$$  
  
for some noise $w_i$, then statistically, $R^2$ is basically measuring  
  
$$
\begin{align}
R^2 &=1 - \frac{ E(y_i - \hat{y}_i)^2 } { E( y_i - E(y))^2 } \\  
&= 1- \frac{ E(w)^2 }{\operatorname{Var}(y)} \\  
&= \frac{  
    \operatorname{Var}(\hat{y}) + 2 \operatorname{Cov}(\hat{y},w) + \operatorname{Var}(w) - E(w)^2  
}
{  
    {\operatorname{Var}(y)}  
}
\end{align}
$$  
  
And if $w_i$ is zero-meaned, and if $w$ and $\hat{y}$ are uncorrelated, then $R^2$ can be written as  
  
$$
\begin{align}
R^2 &= \frac{  
    \operatorname{Var}(\hat{y}) + 2*0 + E(w)^2 - E(w)^2  
}  
{  
    {\operatorname{Var}(y)}  
} \\  
&= \frac{ \operatorname{Var}(\hat{y}) }{ {\operatorname{Var}(y)} }  
\end{align}
$$  
  
### Correlation between the model input and the observation data  
  
Through a given model $f(x)$, $R^2$ can be seen as an indicator about how good we can use $x$ to predict $y$.  
  
For example, we can build a model $f(x)$ to predict the stock market gain ($y$) based on the newly reported unemployment rate ($x$), we can then use $R^2$ to evaluate whether $x$, along with the model, is good at predicting $y$.
