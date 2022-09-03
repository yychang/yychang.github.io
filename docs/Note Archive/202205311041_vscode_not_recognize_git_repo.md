---
aliases: []
tags:
  - vscode
  - git
---

# VS Code Not Recognizing Git Repo

## Context

On Windows, after updating git to v2.36.1, VS Code starts to fail to recognize some git repo. The "source control" tab in VS Code shows a message as follows:

> The folder currently open doesn't have a git repository. 

But there actually is a git repo.

Trying to run git commands in the VS Code terminal returns the following error message:

```
fatal: detected dubious ownership in repository at '/path/to/my/project'
To add an exception for this directory, call:

        git config --global --add safe.directory /path/to/my/project
```

But running the same git command in an elevated CMD window works just fine.

## Problem
How to resolve the problem?

## Solution
Run `git config --global --add safe.directory /path/to/my/project` as suggested

## Note

* When the git repo is created under an elevated CMD window, the owner of the folder will be set to the "Administrators" user group. And when the same user attempts to interact with the git repo in a non-elevated CMD window (like the terminal opened under the non-elevated VS Code), the user is perceived as in a different user group (probably "Users" user group), resulting in the "dubious ownership" error.
* 

## Reference

https://stackoverflow.com/questions/71901632/fatal-unsafe-repository-home-repon-is-owned-by-someone-else