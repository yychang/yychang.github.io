# Calculating the Expected Microphone Output Level for Human Voice

## Context

Given that

* A human talks in a level of $x$ dB SPL at [[202207091555_mouth_reference_point|MRP]]
* A digital microphone is $D$ meters away from the human, capturing the human voice
* The [[202205291219_mic_sensitivity|mic sensitivity]] is $S$ dBFS. 
* The max output level of the mic is $A_{max}$
* The crest factor for human voice signal is 12dB

We want to know the expected peak value of the signal at the microphone output.

## Problem

How to calculate the expected peak value of the signal at the microphone output?

## Solution

Step 1: Calculate the expected signal level at the microphone input. Human voice attenuates 6dB every time the distance doubles. So the human voice level (in dB SPL) at the said microphone will be

$$
y = x - 6 * \log_2{ (\frac{D}{0.025}) }
$$

Step 2: Calculate the expected mic output RMS level. The "max mic input level" is defined in the sense of Microphone Sensitivity. For an input of $y$ dB SPL, the RMS magnitude of the mic output is

$$
10^{ \frac{y - (94 - S) - 3}{20} } \cdot A_{max}
$$

Step 3: Calculate the expected mic output peak level by applying the crest factor. By picking the crest factor to be 12dB, the expected mic output peak level is

$$
10^{ \frac{y - (94 - S) - 3 + 12}{20} } \cdot A_{max}
$$

### Example

For a human voice of level 89dB SPL at MRP ($x = 89$), talking to a digital microphone at 1m distance ($D=1$), the human voice level at the mic input is

$$
y = 89 - 6 * \log_2{ (\frac{1}{0.025}) } = 57.068
$$

If the mic sensitivity is -40dBFS ($S$ = -40), and the max output of the mic is 1.0 ($A_{max} = 1$), then the expected mic output peak level for the human voice is

$$
10^{ \frac{57.068 - (94 + 40) - 3 + 12}{20} } \cdot 1.0 = 4.01 \cdot 10^{-4}
$$


## Reference

* [Definition of the Crest Factor](https://www.dpamicrophones.com/mic-university/facts-about-speech-intelligibility)
