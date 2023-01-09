# Widen The MkDocs Content Body Width

## Context

The default MkDocs style sets the main content body width to some "readable line length," which is narrow and is not good for reviewing complex math equations or source codes.

## Problem 

How to change the MkDocs layout to widen the content area?

## Solution

Per https://github.com/squidfunk/mkdocs-material/issues/619:

1. Create a css file,, for example, `stylesheets/extra.css`, under the `docs` folder, with the following content:

    ```css
    @media only screen and (min-width: 76.25em) {
      .md-main__inner {
        max-width: none;
      }
      .md-sidebar--primary {
        left: 0;
      }
      .md-sidebar--secondary {
        right: 0;
        margin-left: 0;
        -webkit-transform: none;
        transform: none;   
      }
    }
    ```

2. Update `mkdocs.yml` to include the new css file

    ```
    extra_css:
      - stylesheets/extra.css
    ```

## Reference

* https://github.com/squidfunk/mkdocs-material/issues/619