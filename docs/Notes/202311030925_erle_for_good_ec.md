---
aliases: 
tags: []
---

# ERLE for Good EC

Per [dsp.stackexchange.com](https://dsp.stackexchange.com/questions/395/what-are-reasonable-levels-for-the-erle-echo-return-loss-enhancement-in-acoust):

* ERLE has to be at least 40dB for good echo cancellation
* Due to the limitation of EC filter tap length, the adaptive filter can only contribute 20-30dB ERLE. Additional methods such as echo suppression are required in order to further improve ERLE.

Per ChatGPT (on 20231103):

* State-of-the-art echo cancellation algorithms aim to achieve ERLE in the range of 20 dB to 30 dB or even higher.
* In telephony systems, an ERLE of 15 dB or higher is generally considered acceptable for good voice quality.

## Reference

* [What are reasonable levels for the ERLE (Echo Return Loss Enhancement) in acoustic echo cancellation? - Signal Processing Stack Exchange](https://dsp.stackexchange.com/questions/395/what-are-reasonable-levels-for-the-erle-echo-return-loss-enhancement-in-acoust)