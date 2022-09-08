# Disabling Windows Bitlocker from Command Line

Run the following command in an elevated CMD window to disable Bitlocker on drive C:

```cmd
manage-bde -off C:
```

If it succeeds, it may return the following message:

```
Decryption is now in progress
```

Check the progress by running the following command:

```
manage-bde -status C:
```

And it will show the current status of decryption

```
Conversion Status:    Decryption in Progress
Percentage Encrypted: 27.1%
```

When the decryption is done, the status message will become

```
Conversion Status:    Fully Decrypted
Percentage Encrypted: 0.0%
```

## Reference 

* https://roytuts.com/disable-bitlocker-recovery-on-windows-startup/