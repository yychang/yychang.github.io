---
tags:
  - quick-ref
---

# Obsidian Notes Quick Reference

## Code blocks
Use a pair of N backticks (\`) to form a code block (N $\geq$ 3).

````
```some-language-tag
Use 4 backticks to form the code block
so that I can write 3 backticks in the code block
```
````

To show a code block inside a code block like the one above, use N=4 for outer code block so that the inner code block of N=3 will appear as plain text.

[List of supported language](https://prismjs.com/#supported-languages)

## Applying Custom CSS
Steps:

1. Go to Options --> Appearance, find the "CSS snippets" section. ![[Obsidian_Option_Appearance.jpg]]
2. Click the "folder" icon ![[Obsidian_folder_icon.jpg]] to open the folder that hosts all the CSS snippet files. Add the new CSS file to the folder.
3. Click the "refresh" icon ![[Obsidian_refresh_icon.jpg]] to show the newly added CSS file in the "CSS snippets" section. Enable the newly added CSS styles.


## Notice blocks
The notice blocks are not supported by Obsidian as of v0.13.23. However, [mklepaczewski](https://forum.obsidian.md/t/notice-blocks-warning-info-success-danger-blocks/4216) used some [custom CSS](https://gist.github.com/mklepaczewski/54e451f09994b9d450de81c8baaf8aa4) to make notice blocks out of the code blocks by defining the following custom "languages"

* `note-info`
* `note-success`
* `note-warn`
* `note-danger`
* `note-notice`

````
```note-info
A note-info block
```
````

```note-info
A note-info block
```

```note-info
Problem with CSS-implemented notice blocks
Because this is essentially a code block, many markdown features such as math support ($x = 1$) will not be parsed.
```

## Color Highlighting
The ==color highlighting== is not supported by Obsidian as of v0.13.23. However, [deathau](https://github.com/deathau/obsidian-snippets) used some [custom CSS](https://github.com/deathau/obsidian-snippets/blob/main/realistic-highlight.css) to implment the highlighting:

* `==Default highlighting==`: ==Default highlighting==
* `<mark class="pink">pink</mask>`: <mark class="pink">pink</mask>
* `<mark class="green">green</mask>`: <mark class="green">green</mask>
* `<mark class="blue">blue</mask>`: <mark class="blue">blue</mask>


## Default Hotkeys

| Navigation Function | Shortcut |
|----|----|
| Create new note | `Ctrl+N` |
| Open command palette | `Ctrl+P` |
| Open quick switcher | `Ctrl+O` |
| Search in all files | `Ctrl+Shift+F` |
| Open graph view | `Ctrl+G` |
| Navigate back | `Ctrl+Alt+←` |
| Navigate forward | `Ctrl+Alt+→` |
| Search current file | `Ctrl+F` |
| Toggle edit/view mode | `Ctrl+E` |
| Open settings | `Ctrl+,` |

| Editing Function | Shortcut |
|----|----|
| Bold | `Ctrl+B` |
| Italic | `Ctrl+I` |
| Insert link | `Ctrl+K` |
| Indent | `Ctrl+]` |
| Unindent | `Ctrl+[` |

## Creating new notes with default templates
As of v0.14.5, it is not possible to specify a default template for new notes 

## Reference
* [Obsidian Help: Format your notes](https://help.obsidian.md/How+to/Format+your+notes)
