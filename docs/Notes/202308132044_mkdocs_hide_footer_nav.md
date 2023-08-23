# Hiding the Footer Navigation Section in Materials for MkDocs

## Context

Materials for MkDocs shows a "footer navigation" section by default at the bottom of the page, allowing user to go to the "next document" or the "previous document". This is useful if the documents are supposed to be read through in a pre-defined way (e.g. book chapters). However, for documents that are less organized (e.g. tech troubleshooting notes), the concept of "next document" or "previous document" is less helpful, and it is better to hide such irrelevant navigation from user.

## Problem

How to hide the "footer navigation" section in Materials for MkDocs?

## Solution

Add the following CSS code to the "[additional CSS](https://squidfunk.github.io/mkdocs-material/customization/#additional-css)" file:

```css
.md-footer__inner {
  display: none;
}
```

## Reference

* https://github.com/squidfunk/mkdocs-material/discussions/3489