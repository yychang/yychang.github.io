# MkDocs Quick Reference

## Basic

Local testing:

```sh
# Start a local server at localhost:8000
mkdocs serve

# Start a local server at user-specified IP/port
mkdocs serve -a <IP>:<Port>

# Start a local server with "dirty load" 
# (re-building only the updated pages)
mkdocs serve --dirty
```

Caveat for `--dirty`:

* The option `--dirty` seems to have some problem updating the nav bar. If in `mkdocs.yml` an entry under `nav:` was not given a name, the entry will appear in the nav bar with name `None` (while it should use the h1 header of the linked note by default).
## Misc

* [[202308141720_mkdocs_abbr|Defining abbreviation]]
* [[202308132044_mkdocs_hide_footer_nav|Hiding the footer navigation section]]
* [[202308151948_mkdocs_open_link_at_new_tab|Opening link in a new tab]]
