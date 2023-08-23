# CMake Quick Reference

## Include out-of-tree source directory

```
add_subdirectory(path/to/my/ext/src path/to/binary)
```

Not providing `binary_dir` when calling `add_subdirectory()` results in the following error message:

```
  add_subdirectory not given a binary directory but the given source
  directory "path/to/my/ext/src" is not a subdirectory of
  "path/to/my/project/root"
```

ref: https://stackoverflow.com/questions/35260552/how-do-i-explicitly-specify-an-out-of-tree-source-in-cmake