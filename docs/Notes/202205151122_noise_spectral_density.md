# Noise Spectral Denity
From [Wikipedia: Noise spectral density](http://en.wikipedia.org/wiki/Noise_spectral_density):  
  
> In communications, **noise spectral density** $N_0$ is the noise power per unit of bandwidth; that is, it is the power spectral density of the noise.  
> ...  
> If the noise is white noise, i.e., constant with frequency, then the **total noise power** $N$ in a bandwidth $B$ is $BN_0$. This is utilized in SNR calculations.  
  
The definition above seems under the assumption of the single-sided power spectral density. Under the definition of two-sided power spectral density, the AWGN spectral density is more often referred to as $N_0/2$. However, when calculating the total noise power, both the positive and negative bandwidth should be accounted for, and thus the total noise power remains $BN_0$.  
  
When the signal is sampled by a sampling frequency of $f_s$, the bandwidth $B=f_s$, and the total noise power, or, equivalently, the variance of the AWGN at each sample, is $f_s \cdot N_0$ (assuming the anti-aliasing filter has been applied to eliminate the noise power beyond the sampling rate).