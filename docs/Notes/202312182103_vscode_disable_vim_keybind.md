# Disabling Vim Key Bindings in VSCode

## Context

When using VSCode with the Vim plugin, Vim's key bindings will take precedence over VSCode's default ones.

However, user may want to disable some less useful key bindings defined by Vim and keep VSCode's. For example, user may want to disable `<Ctrl-P>` in Vim (which is "go up by one line") and use `<Ctrl-P>` in VSCode (which is "quick open").

## Problem

How to disable a specific key binding defined by the Vim plugin in VSCode?

## Solution

Open VSCode's `settings.json` file, find/add the key `"vim.handleKeys"`, and mark a key binding of interest as `false` in the value of `"vim.handleKeys"`.

For example,

```json
{
    "vim.handleKeys": {
        "<C-p>": false
    },
}
```

The setting above will disable the key binding `<Ctrl-P>` defined by Vim.

## Reference

* https://stackoverflow.com/questions/65698293/vim-for-vscode-how-to-disable-key-ctrl-and-ctrl-in-vim-key