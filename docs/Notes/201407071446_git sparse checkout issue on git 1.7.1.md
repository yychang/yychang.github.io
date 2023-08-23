# git sparse checkout issue on git 1.7.1

There seems an bug in git 1.7.1 that sparse-checkout does not work for the rule

```
/*
```
    
([source](https://bugs.debian.org/583693))

The bug seems to be resolved in 1.7.4 or newer.

To workaround the issue in 1.7.1, replacing

```
/*
```

by

```
*
```

or

```
/
```

seems to resolve the problem. However, neither of the alternative works in the latest git:

* When using `*`: All the following `!unwanted` rules are ignored
* When using `/`: sparse-checkout does not work at all. All files remain unchanged
