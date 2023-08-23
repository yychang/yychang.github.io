# Sox Quick Reference

## Basic Synopsis

```bash
sox [global-options] [inflie-options] infile1 [[infile-options] infile2] ... [outfile-options] outfile [effect [effect-options]] ...
```

Highlights:

* The _options_ (e.g. global options `-h`, options for input file `-v`, and options for input/output file `-b`) always have a leading dash ('-' or '--'), while the _effects_ (e.g. `vol`) do not
* The _global options_ can be specified anywhere before the first effect
* The _effects_ should be specified after the `outfile` and will be applied to the `outfile` after the inputs are combined.

## Input File Combining
SoX supports the following methods to combine multiple input files:

* _concatenate_: 
    * Default method for SoX. Or explicitly specified by global option `--combine concatenate`
    * Input files must have the same sampling rate and the same number of channels.
    * $N$ input files of duration $T_1, T_2, \cdots, T_N$ will be concatenated to one output of duration $(T_1+T_2+\cdots+T_N)$
* _mix_:
    * Specified by global option `--combine mix` or `-m`
    * Input files must have the same sampling rate.
    * The $k$-th channel at output is the sum of the $k$-th channel of all $N$ input files
    * If infile option `--volume` is not specified for individual input files, a normalization factor of $\frac{1}{N}$ will be applied by default.
* _mix-power_:
    * Specifiled by global option `--combine mix-power`
    * Similar to _mix_, but the default normalization factor is $\frac{1}{\sqrt{N}}$
* _merge_:
    * Specified by global option `--combine merge` or `-M`
    * Input files must have the same sampling rate
    * $N$ input files of  $K_1, K_2, \cdots, K_N$ channels will be merged to one output of  $(K_1 + K_2 + \cdots + K_N)$ channels
* _multiply_: 
    * Specified by global option `--combine multiply` or `-T`
    * Input files must hoave the same sampling rate
    * The $k$-th channel at output is the product of the $k$-th channel of all $N$ input files. If the number of channels in the input files is not the same, the missing channels are considered to contain all zero.

## Scaling Audio File

### Scaling Input by infile option `-v`

```bash
# scale in1 by 2x and scale in2 by 0.5x and then combine them
sox -v 2 in1.wav -v 0.5 in2.wav out.wav
```

### Scaling Output by effect `vol`

```bash
# scale out.wav by 2x
sox in.wav out.wav vol 2

# scale out.wav by 3dB
sox in.wav out.wav vol 3dB
```

### Normalizing Audio with global option  `--norm`

```bash
# Normalize audio to magnitude +/-1.0
sox --norm in.wav out.wav

# Normalize audio to magnitude +/-0.5, or -6dBFS
sox --norm=-6 in.wav out.wav
```

## Trimming Audio File

To trim an audio file to preserve the original audio between the timestamp {N1, N2} (unit: seconds):

```bash
# use add an equal sign (=) before N2 to denote that N2 is the end
# timestamp rather than the length
sox in.wav out.wav trim N1 =N2
```

To trim an audio file to discard the audio before timestamp N1 (unit: seconds) and keep L1 seconds of audio after N1:

```bash
sox in.wav out.wav trim N1 L1
```

## Remixing the channels

`remix` command allows the user to remix the audio channels of one file

```bash
sox in.wav out.wav remix 1-3,5 4 0
```

The above command creates `out.wav` with 3 channels where

* `out.wav` channel 1 = mix of `in.wav` channel 1,2,3 and 5 (by averaging them)
* `out.wav` channel 2 = `in.wav` channel 4
* `out.wav` channel 3 = silence

To manually control the scaling factor when mixing the channels:

```bash
sox in.wav out.wav remix 1v1.0,2v0.5,3v0.5,5v0.2
```

Now `out.wav` channel 1 = 1.0*(`in.wav` channel 1) + 0.5*(`in.wav` channel 2) + 0.5*(`in.wav` channel 3) + 0.2*(`in.wav` channel 5)

## Obtaining the length of the file

```bash
# Return the length in HH:MM:SS format
sox --i -d in.wav

# Return the length in seconds
sox --i -D in.wav

# Return the length in number of samples
sox --i -s in.wav
```

## Padding silence

```bash
# Pad 1 seconds silence at the beginning and 2 seconds silence at 
# the end of the in.wav
sox in.wav out.wav pad 1.0 2.0

# Pad 3 seconds silence at 4 minutes into the in.wav
sox in.wav out.wav pad 3.0@4:00

# Pad 5000 samples of silence at 4 minutes into the in.wav
sox in.wav out.wav pad 5000s@4:00
```

## Changing sampling rate

```bash
sox in.wav -r 16000 out.wav
```

## Adding white noise

```bash
# Generate noise.wav that is of the same format (duration, 
# number of channels, etc) as in.wav
sox in.wav noise.wav synth whitenoise vol 0.02

# Generate out.wav by mixing in.wav and noise.wav with their 
# original volume
sox -m -v 1.0 in.wav -v 1.0 noise.wav out.wav
```

## Generating a silence or a tone

```bash
# Generate a 5 second, 16kHz, 2-channel, audio file containing silence.
sox -n -r 16000 -c 2 silence.wav trim 0 5

# Generate a 5 second, 8kHz, audio file containing a sine-wave of 300Hz:
sox -n -r 8000 sine.wav synth 5 sine 300

# Generate a 5 second, 8kHz, audio file containing a sine-wave swept 
# from 300 to 3300 Hz:
sox -n -r 8000 sine.wav synth 5 sine 300-3300
```

Note:

* `-n` is the "null file" option and is considered as a file containing infinite amount of silence. This option is usually used with some finite-length effects such as `trim` or `synth`

## Specify WAV format

```bash
# Generate a 5 second, 8kHz, audio file containing a sine-wave of 300Hz
sox -n -r 8000 sine.wav synth 5 sine 300

# Generate the wave file in 16-bit PCM
sox -n -r 8000 -b 16 -e signed-integer sine.wav synth 5 sine 300
```

Some other common encodings:

* `unsigned-integer`: PCM data stored as unsigned integers. Commonly used with an 8-bit encoding size
* `floating-point`: PCM data stored as IEEE 753 single precision (32-bit) or double precision (64-bit) floating-point (‘real’) numbers
* `a-law`: International telephony standard for logarithmic encoding to 8 bits per sample

## Convert PCM format to WAV
Convert a PCM file of 1 channel, 16-bit, 48kHz sampling rate, signed-integer encoding to WAV

```bash
sox -t raw -c 1 -b 16 -r 48000 -e signed in.pcm out.wav
```

It is required to specify the file type `-t raw`. Otherwise `sox` will fail due to `.pcm` being an unrecognized format. See [soxformat](https://linux.die.net/man/7/soxformat) for the list of the supported formats.

## Reference

* http://sox.sourceforge.net/sox.html 
* https://linux.die.net/man/7/soxformat
