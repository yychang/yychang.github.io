# svchost Using 80%+ CPU

## Context

One `svchost.exe` uses 80%+ CPU and 2GB memory. 

## Solution

Disabling "Delivery Optimization" service resolves the problem. 

According to [Microsoft Technet](https://social.technet.microsoft.com/Forums/windows/en-US/a0364239-e4f5-48d9-8e0c-dedebef1605a/delivery-optimization-service-100-cpu?forum=win10itprogeneral), the problem of "Delivery Optimization" using high CPU may result from the P2P Windows Update option.
