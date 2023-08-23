# Making MkDocs Link Open in New Tab

## Context

The syntax to define a link in Markdown is as follows:

```
[title](https://som/url)
```

This yields a HTML link that opens the link in the current browser tab. However, sometimes user may want to open the link in a new tab, so that user can continue browsing the MkDocs documentation site while viewing the external resources.

## Problem

How to specify a link in MkDocs that opens in a new tab?

## Solution 

Do the followings:

1. Enable the `attr_list` extension by adding the followings to `mkdocs.yml`:

    ```
    markdown_extensions:
      - attr_list
    ```

2. When defining a link in the Markdown file, add the attribute `{target=_blank}` at the end of the link. For example:

    ```
    [title](https://some/url){target=_blank}
    ```

