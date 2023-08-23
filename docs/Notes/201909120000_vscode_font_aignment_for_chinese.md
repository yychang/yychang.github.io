# VSCode Font Alignment for Chinese

## Context

When entering both Chinese and English in VSCode, there is subtle misalignment. About every 4 Chinese characters introduces an offset of half char.

Per <https://github.com/Microsoft/vscode/issues/45360>, it's more likely the issue in the selected fonts. Consolas and "Courier New" might be supporting Chinese (or Unicode) characters with subtle misalignments.

## Problem

How to resolve the font alignment issue?

## Solution

Use a font that strictly render CJK characters with the width of 2 latin characters. 

Currently the solution is to use "Inconsolata" as Issue 45360 suggested.

Related topics: 

* <https://github.com/microsoft/vscode/issues/72743>
* <https://zhuoer.netlify.com/post/caprice/2018/vscode-font-finally-mono/>
