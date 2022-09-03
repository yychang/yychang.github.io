# Windows Display Properties "Identify" numbers are incorrect

## Context

After some operations related to enabling/disabling the display (e.g. Set to "Second screen only" from WIN+P, then set back to "built-in monitor + external monitor" from Intel HD Graphic Control Panel), the display identity may be misconfigured, resulting in the monitor 1 appears as the left display in the configuration window while it behaves as the right display (mouse moves across the boundary at the left edge of the monitor 1).

## Problem

How to fix the incorrect identity of the displays?

## Solution

Delete these two registry keys, and then let Windows rediscover the displays:

```
HKEY_LOCAL_MACHINE\Systems\CurrentControlSet\Control\GraphicsDrivers\Configuration
HKEY_LOCAL_MACHINE\Systems\CurrentControlSet\Control\GraphicsDrivers\Connectivity
```

Alternatively, copy the text below into a text file and call it Monitor Persistence.reg, save it, then run it to remove these entries:

```
Windows Registry Editor Version 5.00

[-HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\GraphicsDrivers\Configuration]
[-HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\GraphicsDrivers\Connectivity]
```

## Reference 

http://support.displaylink.com/knowledgebase/articles/736116-windows-display-properties-identify-numbers-are

