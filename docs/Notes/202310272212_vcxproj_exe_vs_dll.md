---
aliases: []
tags:
  - FleetingNote
---

# Specifying Output Type (Dll vs. Exe) in .vcxproj File

## Context

When running `MSBuild.exe` against a `.vcxproj` to build a project, user wants to specify in the `.vcxproj` file that whether the output of the project is a DLL or an EXE.

## Problem

How does user specify the output type in the `.vcxproj` file?

## Solution

Use `<ConfigurationType>` to specify the output type.

For EXE:

```
<ConfigurationType>Application</ConfigurationType>
```

For DLL:

```
<ConfigurationType>DynamicLibrary</ConfigurationType>
```

## Reference

* https://stackoverflow.com/questions/63790898/how-to-set-vcxproj-to-let-msbuild-compile-a-dll