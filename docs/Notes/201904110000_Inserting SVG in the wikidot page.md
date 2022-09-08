# Inserting SVG in the wikidot page

## Context

Wikidot supports SVG image format. To insert the SVG image, the typical syntax is as follows:

```
[[image https://url/to/file.svg]]
```

When user wants to insert the SVG image he/she creates, the user has two options:

1.  Upload the SVG image to some image host website (e.g. imgur.com) and then link to the uploaded image
2.  Upload the SVG image to wikidot page as an attachment and then link to the attachment

However, 

1.  [imgur.com](http://imgur.com/) currently does not support the SVG format,
2.  Wikidot currently does not support "linking to the SVG file in the attachment"

## Problem

How to easily insert a user-created SVG file in the wikidot page?

## Solution

Use the "HTML block" in the wikidot page to directly host the SVG image:

```
[[html]]
<!-- your SVG image data here -->
[[/html]]
```
