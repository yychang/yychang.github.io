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

## Supported Front Matter Keys
Obsidian [front matter (YAML)](https://help.obsidian.md/Advanced+topics/YAML+front+matter) natively supports the following keys:

*  `tags` 
-  `aliases` 
-  `cssclass`
-  `publish`

## Callouts
Starting from v0.14.0, Obsidian supports the [callout blocks](https://help.obsidian.md/How+to/Use+callouts) . The basic syntax is

```
> [!CALLOUT_TYPE] TITLE
> CONTENT
```

The supported `CALLOUT_TYPE` includes

* `info`
* `note`
* `abstract`
    * Alias: `summary`, `tldr`
* `todo`
* `tip`
    * Alias: `hint`, `important`
* `success`
    * Alias: `check`, `done`
* `question`
    * Alias: `help`, `faq`
* `warning`
    * Alias: `caution`, `attention`
* `failure`
    * Alias: `fail`, `missing`
* `danger`
    * Alias: `error`
* `bug`
* `example`
* `quote`
    * Alias: `cite`

The `CALLOUT_TYPE` is case-insensitive.

```
> [!INFO] 
> This is an info callout block without title. Markdown **styles** _can_ ==be== parsed here.
```

> [!INFO] 
> This is an info callout block without title. Markdown **styles** _can_ ==be== parsed here.

```
> [!INFO] My Info Block
> This is an info callout block with custom title. 
```

> [!INFO] My Info Block
> This is an info callout block with custom title. 

## Color Highlighting
The ==color highlighting== is not supported by Obsidian as of v0.13.23. However, [deathau](https://github.com/deathau/obsidian-snippets) used some [custom CSS](https://github.com/deathau/obsidian-snippets/blob/main/realistic-highlight.css) to implement the highlighting:

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

## Embedding Another Note

Use the following syntax to embed another note:

```
![[note_name]]
```

## Hiding Some Contents

### Option 1: Use HTML's `<details>` tag:

```
<details>
    <summary>Some Quick Summary</summary>
    <p>The content here seems to be treated as raw HTML. ==Markdown== *does not* work here.
</details>
```

<details>
    <summary>Some Quick Summary</summary>
    <p>The content here seems to be treated as raw HTML. ==Markdown== *does not* work here.
</details>

### Option 2: Use Obsidian's [[#Callouts]] feature

```
> [!Note]- Some content folded by default
> ==Markdown== *works* here. 
> 
> $$
> f(x) = y
> $$
```

> [!Note]- Some content folded by default
> ==Markdown== *works* here. 
> 
> $$
> f(x) = y
> $$

## Reference
* [Obsidian Help: Format your notes](https://help.obsidian.md/How+to/Format+your+notes)
