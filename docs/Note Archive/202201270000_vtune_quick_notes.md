---
tags:
  - vtune
  - quick-ref
---

# VTune Quick notes

## Profiling the CPU usage

To profile the command `MyProg.exe arg1 arg2 arg3`:

```
vtune.exe -collect hotspots -result-dir path/to/profile/dir -search-dir path/to/symbol/dir1 -search-dir path/to/symbol/dir2 -- MyProg.exe arg1 arg2 arg3
```

To generate a report CSV file `MyReport.csv`  from the profiling result:

```
vtune.exe -report hotspots -result-dir path/to/profile/dir -group-by module,function -report-output MyReport.csv -format csv -csv-delimiter comma
```

## Analyzing memory access (analyzing L2 cache misses)

To profile the command `MyProg.exe arg1 arg2 arg3`:

```
vtune.exe -collect memory-access -result-dir path/to/profile/dir -search-dir path/to/symbol/dir1 -search-dir path/to/symbol/dir2 -- MyProg.exe arg1 arg2 arg3
```

To generate a report CSV file `MyReport.csv`  from the profiling result:

```
vtune.exe -report hotspots -result-dir path/to/profile/dir -group-by module,function -report-output MyReport.csv -format csv -csv-delimiter comma
```
