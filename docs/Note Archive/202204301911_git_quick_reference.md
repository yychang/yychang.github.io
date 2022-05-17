---
aliases: []
tags:
  - quick-ref
---

# Git Quick Reference

## Common diff options

```bash
--numstat       Shows number of added and deleted lines

--name-only     Show only names of changed files.

--name-status   Show only names and status of changed files. 
                See the description of the --diff-filter option 
                on what the status letters mean.

--diff-filter=[(A|C|D|M|R|T|U|X|B)…[*]]
                Select only files that are Added (A), Copied (C), 
                Deleted (D), Modified (M), Renamed (R), have their 
                type (i.e. regular file, symlink, submodule, …) 
                changed (T), are Unmerged (U), are Unknown (X), or 
                have had their pairing Broken (B).

-S<string>      Look for differences that introduce or remove an 
                instance of <string>.

-G<regex>       Look for differences whose added or removed line 
                matches the given <regex>.

-b
--ignore-space-change
                Ignore changes in amount of whitespace.

-w
--ignore-all-space
                Ignore whitespace when comparing lines.
```

## Git Log Formatting

```bash
git log --pretty=<format>
```

List of the valid `<format>`:

* `oneline`
* `short`
* `medium`
* `full`
* `fuller`
* `email`
* `raw`
* `format:<string>`
* `tformat:<string>`

`format:<string>` and `tformat:<string>` work a bit like `printf`. User composes `<string>` to specify how the information should be shown. See [Git-log: Pretty Format](https://git-scm.com/docs/git-log#_pretty_formats) for the valid _placeholders_ can be used in `<string>`.

The difference between `format:<string>` and `tformat:<string>` is that `format:<string>` uses a separator between commits while `tformat:<string>` uses a terminator between commits.

## Git Log Searching

Show the commits that that contain/add/remove `<string>` or `<pattern>`

```bash
git log -S<string> -i -p
git log -G<pattern> -i -p
```

Note:

* Option `-i` for case-insensitive search
* Option `-p` to show the file diff
* The results are printed by Unix command `LESS`, which supports the following commands/operations
    * `-i`: toggle case-insensitive search
    * `/`: search
    * `1G`, `j`, `k`: movement commands like Vim

Exclude directories or files

```bash
git log -- . ':!path/to/ignore'
```

## Some Branch Operations

Rebase branch `ABC` onto branch `master`

```bash
git rebase master ABC
git rebase master ABC -i
git rebase --onto master ABCParent ABC
```

The option `-i` (`--interactive`) allows user to edit the list of commits to be rebased.

*NOTE*: `git merge` only merges the specified branches to the _current_ branch. To merge branch `ABC` into branch `master`, user has to first change to `master` and perform `git merge` with the other branch.

Given the following repo graph:

```
  C1 <-- C2 <-- C5 <-- C6 (master)
           \
            \-- C3 <-- C4 <-- C9 (ABCParent)
                  \
                   \-- C7 <-- C8 (ABC)
```

Rebase commands:

* `git rebase master ABC` "replays" `C3`, `C7`, and `C8` onto `C6`
* `git rebase --onto master ABCParent ABC` "replays" `C7`, and `C8` onto `C6`


Create a new branch `ABC` at the commit `XYZ`
```
git branch ABC XYZ
```

Reset the branch `ABC` to the commit `XYZ`
```
git branch -f ABC XYZ
```

Rename a branch `ABC` to new name `XYZ`
```
git branch -m ABC XYZ
```

## Git Bisect

```bash
git bisect start <bad_commit> <good_commit>

# Do bisect using the script. Note that the initial <bad_commit> and <good_commit>
# are assumed to be correctly labeled and are NOT checked.
git bisect run my_script my_script_arguments

git bisect reset
```

## Commit Only Part of a File (Interactive Staging)

Use `git add -p file` (`-p` or `--patch`) to determine whether to stage each hunk of the changes.

Use `git add -i`  (`-i` or `--interactive`) to enter a more verbose mode to allow user to select the hunks of the changes from individual files.

Git will show a hunk of the change and ask user to select an action upon the shown hunk:

* y - stage this hunk
* n - do not stage this hunk
* a - stage this and all the remaining hunks in the file
* d - do not stage this hunk nor any of the remaining hunks in the file
* g - select a hunk to go to
* / - search for a hunk matching the given regex
* j - leave this hunk undecided, see next undecided hunk
* J - leave this hunk undecided, see next hunk
* k - leave this hunk undecided, see previous undecided hunk
* K - leave this hunk undecided, see previous hunk
* s - split the current hunk into smaller hunks
* e - manually edit the current hunk
* ? - print help

## Git sparse-checkout

Enable the sparse-checkout
```bash
git config core.sparsecheckout true
```

The filter file is located at `.git/info/sparse-checkout`. Each line of `.git/info/sparse-checkout` defines a filter, and the latter definition overwrites the former ones. For example, the following `.git/info/sparse-checkout`  will check out all files except those in the folder `/Tools/`
```
/*              # check out all files
!/Tools/        # Do not check out the folder /Tools/, this filter
                # overwrites the filter defined in the above lines.
```

Update the working tree:
```bash
git read-tree -mu HEAD
```

## Creating patch and applying to a different repository

```bash
git format-patch -k <revision range>
git am -3 -k --keep-cr <patches>
```

`git format-patch` prepares the commits as patches for e-mail submission

* Use `-k` to instruct git not to add the label `[PATCH]` in the subject line. This is useful when the commit header also uses the format of `[TAG_NAME]` to categorize the commit (e.g. `[Bug]`, `[Refactor]`).

> NOTE:
> `git format-patch` generates the patches by specifying the file path with respect to the root of the current git repo. In other words, with the same `git format-patch` command under a git repo, the patches generated under `<GitRepoRoot>/a/b/c` are identical with those generated under `<GitRepoRoot>`.

`git am` applies the "patch emails" (those generated by `git format-patch`) to git repository

* Use `-3` to 3-way merge the patch. This option makes `git am` to try merging when conflict is found.
* Use `-k` to instruct git to not remove the email cruft in the subject line. This is useful when the commit header also uses the format of `[TAG_NAME]`, for git considers those `[TAG_NAME]` as some crufts to be removed.
* Use `--keep-cr` to instruct git to keep the CR when applying the patch. This option will resolve some problems that the patch for a DOS file cannot be applied.
* Use `--ignore-whitespace` to workaround some cases that `git diff` cannot find the context lines in the files to be patched. **WARNING:** This option may mess the line-endings in the file of DOS format. Use with caution.

> NOTE:
> `git am` applies the patches by recognizing the file path with respect to the root of the current git repo. In other words, with the same `git am` command under a git repo, the result of `git am` will be the same regardless of the current working directory and/or the location of the patch files.

While it is undocumented, `git format-patch` seems to work with the following syntax

```bash
git format-patch <revision range> <files>
```

So the following command generates the patches only related to the files in `path/of/interest/` and the sub directories:

```bash
git format-patch -k <revision range> path/of/interest/**
```

### Applying Patches to a different repository with different directory structure

If there are directory changes for the files of interest between the repo to generate the patch and the repo to apply the patch, use `-p<N>` and `--directory=<root>` to tweak the path where the patch will be applied.

Example 1: We want to apply the change made in `<Repo1>/a/b/c/MyFILE` to `<Repo2>/x/y/z/MyFILE`. The corresponding git commands for creating and applying patches will be

```bash
# In <Repo1>
git format-patch -k <revision range> a/b/c/MyFILE

# In <Repo2>
git am -k -p4 --directory=x/y/z <patches>
```

The option `-p<N>` is to "remove `<N>` leading slashes from traditional diff paths." Effectively, given the file specified in the patch is at `./a/b/c/MyFILE` with respect to the root of the git repo:

* `-p1`: `git am` expects to find the file at ./a/b/c/MyFILE (with respect to the root of the git repo)
* `-p2`: `git am` expects to find the file at ./b/c/MyFILE
* `-p4`: `git am` expects to find the file at ./MyFILE

The option `--directory=<root>` is to "prepend `<root>` to all filenames", and the prepending takes place after `-p<N>`. In other words:

* `-p1 --directory=x/y/z`: `git am` expects to find the file at ./x/y/z/a/b/c/MyFILE
* `-p4 --directory=x/y/z`: `git am` expects to find the file at ./x/y/z/MyFILE


## Controlling Gitk Color

```bash
$ diff ~/.config/git/gitk.bak ~/.config/git/gitk
21,22c21,22
< set bgcolor SystemWindow
< set fgcolor SystemWindowText
---
> set bgcolor black
> set fgcolor grey
26c26
< set diffcolors {red "#00a000" blue}
---
> set diffcolors {red "#00a000" cyan}
30c30
< set selectbgcolor SystemHighlight
---
> set selectbgcolor blue
52c52
< set linkfgcolor blue
---
> set linkfgcolor cyan
```

## Remote

Ref:
* https://git-scm.com/docs/git-remote
* http://stackoverflow.com/questions/16408300/what-are-the-differences-between-local-branch-local-tracking-branch-remote-bra

Terminology:

* Remote repository: A git repo on a remote machine
* Remote branch: A git branch on the remote repository
* Remote-tracking branch: A git branch on the local repository set up for tracking a remote branch. This branch usually named in the format of `remotes/<RepoName>/<BranchName>`
* Local non-tracking branch: A git branch on the local repository that is not set to track any other branch.
* Local tracking branch: A git branch on the local repository that is set to track another branch (usually a remote-tracking branch).

Start tracking branches in a remote repository

```bash
git remote add -t <BranchName> -m <MasterBranchName> -f -- <RepoName> <url>
```

* `-t <BranchName>`: Specify the branch in the remote repo to be tracked. There can be more than one `-t`. If no `-t` is specified, all branches in the remote repo will be tracked.
* `-m <MasterBranchName>`: Specify the "master" branch in the remote repo. Practically, a symbolic-ref `refs/remotes/<RepoName>/HEAD` will be set up to point at remote’s `<MasterBranchName>` branch.
* `-f`: fetch the remote repo after the remote information is set up.
* `<RepoName>`: The name of the remote repo appearing in the git log.
 * In gitk it appears as `remotes/<RepoName>/<BranchName>`.
* `<url>`: The path to the remote repo. It can be a HTTP path or a file path.

[Push a new local branch to a remote repository and track it too](http://stackoverflow.com/questions/2765421/push-a-new-local-branch-to-a-remote-git-repository-and-track-it-too)
```bash
git push -u <RepoName> <BranchName>
```

Create a local tracking branch to track a remote-tracking branch:
```bash
git checkout -b <LocalBranchName> <RepoName>/<BranchName>
```
Technically `<LocalBranchName>` can be different from `<BranchName>`, but conventionally (and for convenience) `<LocalBranchName>` tends to be the same as `<BranchName>`.

[Stop tracking a remote branch](http://stackoverflow.com/questions/3046436/how-do-you-stop-tracking-a-remote-branch-in-git) (done by deleting the corresponding remote-tracking branch)

```bash
git branch -d -r <RepoName>/<BranchName>
```

[Delete a remote branch](http://www.gitguys.com/topics/adding-and-removing-remote-branches)

```bash
git push <RepoName> --delete <BranchName>
```

[Remove the remote-tracking branches whose corresponding remote branches were deleted in the remote repo](http://stackoverflow.com/questions/5094293/git-remote-branch-deleted-but-still-appears-in-branch-a)

```bash
git remote prune <RepoName>
git fetch -p <RepoName>
git pull -p <RepoName>
```

## Bare Repository

[Change active branch in a bare repository](http://stackoverflow.com/questions/3301956/git-correct-way-to-change-active-branch-in-a-bare-repository)

```bash
git symbolic-ref HEAD refs/heads/<BranchName>
```

## File Listing

List the untracked files:

```bash
git ls-files --others --exclude-standard
```

List the staged changes:

```bash
git diff --cached --name-only
```

List the unstaged changes:

```bash
git diff --name-only
```

List the staged/unstaged changes and untracked files (good for checking if there is any uncommitted local changes)

```bash
git status --porcelain
```

List the files in the git repo:

```bash
# List the files under the current directory (recursively)
git ls-tree -r HEAD

# List all files regardless of the current directory.
git ls-tree -r HEAD --full-tree

# List the files and only print the file path
git ls-tree -r HEAD --name-only
```

## Status Reporting

Get the name of the current branch (when not on a detached HEAD)

```bash
git rev-parse --abbrev-ref HEAD
```

Show git root directory

```bash
git rev-parse --show-toplevel
```

[List all branches that contain commit `<commit>`](http://stackoverflow.com/questions/1419623/how-to-list-branches-that-contain-a-given-commit)

```bash
git branch --contain <commit> # search local branches
git branch -r --contain <commit> # search remote-tracking branches
```

Find the common ancestor of `<commit1>` and `<commit2>`:

```bash
git merge-base <commit1> <commit2>
```

[Find merge commit where `<commit>` is merged into `<branch>`](http://stackoverflow.com/questions/8475448/find-merge-commit-which-include-a-specific-commit)

* Option 1:

    ```bash
    git rev-list <SHA-1_for_c>..master --ancestry-path > a.txt
    git rev-list <SHA-1_for_c>..master --first-parent > f.txt
    comm -1 -2 a.txt f.txt
    # The last common line shows the desired merge commit.
    ```
    
* Option 2: use the git alias (adding it to `.gitconfig`) in bash

    ```bash
    [alias]
        find-merge = "!sh -c 'commit=$0 && branch=${1:-HEAD} && (git rev-list $commit..$branch --ancestry-path | cat -n; git rev-list $commit..$branch --first-parent | cat -n) | sort -k2 | uniq -f1 -d | sort -n | tail -1 | cut -f2'"
        show-merge = "!sh -c 'merge=$(git find-merge $0 $1) && [ -n \"$merge\" ] && git show $merge'"
    ```

## Misc

Allow empty commit:

```bash
git commit --allow-empty
```

Rediscover lost commits (ref: [restoring lost commits](http://gitready.com/advanced/2009/01/17/restoring-lost-commits.html))

```bash
git fsck --lost-found
git reflog
```

Check out the files modified in `COMMIT_X`:

```bash
git checkout -- $(git diff COMMIT_X^ COMMIT_X --name-only --relative)
```

Unstage a staged file:

```bash
git reset FILEPATH
```

Detect whether a string is a valid commit

```bash
git cat-file -t master
git cat-file -t 29a8ed626f
```

Force to create a merge commit

```bash
git merge --no-ff
```

Overwrite the current commit's timestamp

```bash
git commit --amend --no-edit --date "TIMESTAMP"
```

Check if a local branch exists

```bash
git show-ref --verify --quiet refs/heads/"<BranchName>"
```

* Recommend to quote `<BranchName>` in case it contains special characters
* With `--quiet`, the command prints nothing regardless of the existence of `<BranchName>`. Use the returned error code to determine the result
    * Error code 0: branch exists
    * Error code 256: branch does not exist
* Without `--quiet`, the command prints different message based on the existence of `<BranchName>`:
    * branch exists: "`<CommitHash> refs/heads/<BranchName>`"
    * branch does not exist: "`fatal: 'refs/heads/<BranchName>' - not a valid ref`"

Find large objects in the git repo (Ref: [Stackoverflow](https://stackoverflow.com/questions/10622179/how-to-find-identify-large-commits-in-git-history))

```bash
git rev-list --objects --all \
| git cat-file --batch-check='%(objecttype) %(objectname) %(objectsize) %(rest)' \
| sed -n 's/^blob //p' \
| sort --numeric-sort --key=2 \
| cut -c 1-12,41- \
| $(command -v gnumfmt || echo numfmt) --field=2 --to=iec-i --suffix=B --padding=7 --round=nearest
```

Replicate the repo at `/path/to/new/repo/` with an undesired file (`Unwanted.dat`) removed: (Ref: [Stackoverflow](https://stackoverflow.com/questions/2100907/how-to-remove-delete-a-large-file-from-commit-history-in-git-repository))

```bash
git filter-branch --prune-empty -d /path/to/new/repo \
  --index-filter "git rm --cached -f --ignore-unmatch Unwanted.dat" \
  --tag-name-filter cat -- --all
``` 
