---
aliases: []
tags:
  - github
  - git
---

# Interact with GitHub using git command-line and personal access token

## Context
When using command line to interact with GitHub, it no longer takes the account password for authentication. Instead, it relies on some alternatives such as the personal access tokens (PATs).

After user [creates a personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token), user would want git to remember the PAT, so that GitHub would not request for the authentication for every single command.

## Problem
How to make git command line to remember the PAT?

## Solution
Do the following:

1. Issue some git command that will trigger the authentication, such as `git push`
2. A prompt will appear, asking user to choose a credential manager. Choose `store`.
3. Another prompt will appear, asking for the username. Enter the GitHub account name.
4. Another prompt will appear, asking for the password. Enter the PAT.
5. Done.

## Note

* It is possible to [specify the PAT as part of the git remote URL](https://stackoverflow.com/a/69009871), but it is not recommended, for the PAT can be seen as plain text via commands like `git remote -v`
* If the old PAT expired, the first attempt of `git push` may just fail without prompting user to enter the credential. In such case, simply try `git push` one more time.

## Reference

* https://stackoverflow.com/a/62184716
