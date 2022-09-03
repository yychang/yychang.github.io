# Update Certificate to Resolve Wifi Connection Problem

## Context

After installing a new version of Windows, the laptop can no longer connect to the company Wifi. When attempting to connect to the company wifi, it fails with the following error message:

```
can't connect because you need a certificate to sign in. Contact your IT support person
```

The laptop in question is domain-joined.

## Problem

How to resolve the wifi connection problem?

## Solution

Run the following command to force update the group policy:

```
cmd /k gpupdate /force
```
