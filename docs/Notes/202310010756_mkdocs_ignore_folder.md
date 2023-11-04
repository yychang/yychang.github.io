---
aliases: 
tags: []
---

# Configure MkDocs to Ignore Certain Files or Paths under doc_dir

## Context

MkDocs by default does not allow files to be ignored (ref: https://github.com/mkdocs/mkdocs/issues/1152#issuecomment-285091364). However, when the documentation site is big, the dev-server created with command `mkdocs serve` takes a long time to update. For users who want to only make local changes, the long waiting time for the site to update is an impact to the productivity.

## Problem

How to make MkDocs ignore parsing/building some documents that user is not interested in seeing?

## Solution 

Use the plugin https://github.com/apenwarr/mkdocs-exclude