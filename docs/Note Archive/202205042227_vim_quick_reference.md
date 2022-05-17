---
aliases: []
tags:
  - quick-ref
---

# Vim Quick Reference

## Terminology

A _buffer_ is the in-memory text of a file.

A _window_ is a viewport on a buffer.

A _tab_ page is a collection of windows.

### "word" v.s. "WORD"

A _word_ consists of a "sequence of letters, digits and underscores", or a "sequence of other non-blank characters", separated with white space (spaces, tabs, \<EOL\>). An empty line is also considered to be a word.

A _WORD_ consists of a "sequence of non-blank characters", separated with white space.  An empty line is also considered to be a WORD.

Example:

* `%abc,def%` is considered as 5 words or 1 WORD.
    * 5 words: "`%`", "`abc`", "`,`", "`def`", "`%`"
        * "`abc`" and "`def`" are the "words" that are a "sequence of letters, digits and underscores"
        * "`%`" and "`,`" are the "words" that are a "sequence of other non-blank characters"
    * 1 WORD: `%abc,def%`

### Modes

There are 3 fundamental modes in Vim:

* normal (command) mode
* insert mode
* visual mode

## Environment Setup

`~/.vimrc`: User config for vim.

`~/vimfile/`, `~/.vim/`: Directory for user-provided vim files such as `color` and `syntax`

* Users of `git for windows` may want to copy some color scheme and syntax definition to `~/vimfile/color/` and `~/vimfile/syntax/` because the vim in `git for windows` does not provide much support in colors and syntax. Those files can be found under the folder of a fully installed `vim`.
    * e.g. copy `/path/to/fully/installed/vim/color/elflord.vim` to `~/vimfile/color/`
* User of `vim74` can add the following script to `.vimrc` so that `vim` in Windows searches for `~/.vim` as well.

    ```
    if has('win32') || has('win64')
      set runtimepath=$HOME/.vim,$VIM/vimfiles,$VIMRUNTIME,$VIM/vimfiles/after,$HOME/.vim/after
    endif
    ```

## Basic Use

```
<Esc>       : Escape from insert mode 
<C-c>       : Escape from insert mode
u           : undo last command, again and again
U           : Restore line
<C-r>       : redo last undo

/myname     : search forward for myname

:wq         : write and quit
:x          : write and quit
:w filename : write a copy of the file you are editing as filename
:q!         : quit without saving even if changes were made!
:help       : display help
<Tab>       : use tab completion to scroll through commands that start with what you typed
```

### Switching from Command Mode to Insert Mode

```
a           : Append text following current cursor position
A           : Append text to the end of current line
i           : Insert text before the current cursor position
I           : Insert text at the beginning of the cursor line
o           : Start a new line following the current line 
O           : Start a new line in front of the current line 
```

### Cursor Movement

```
h j k l     : move cursor
10G         : Cursor goes to the 10th line
:10         : Cursor goes to the 10th line
<C-f>       : One page forward
<C-b>       : One page backward
<C-u>       : half page forward
<C-d>       : half page backward
$           : Move cursor to the end of current line
^ 0 (zero)  : Move cursor to the beginning of current line
w e         : Forward one word (to the beginning or the end of the word)
b           : Backward one word (to the beginning of the word)
ge          : Backward one word (to the end of the word)
fa ta       : Forward onto/till the next char 'a' in the line
Fa Ta       : Backward onto/till the previuos char 'a' in the line
zz          : position cursor at middle of the screen
zt          : position cursor at top of the screen
zb          : position cursor at bottom of the screen
gi          : switches to insertion mode placing the cursor at the same location it was previously
%           : match brackets {}[]()
```

### Copy(Yank)/Paste/Delete

```
v           : visual mode -- use to select text with cursor movement or mouse
y           : use to yank (copy) what was selected
<Esc>       : Switchb back to normal mode

x           : delete character under cursor
dw          : delete everything right from the cursor to the start of next word (and put it into the default register)
dd          : delete line (and put it into the default register)
p           : paste the default register

yy          : yank current line
y$          : yank to end of current line from cursor
yw          : yank from cursor to end of current word
5yy         : yank 5 lines

p           : paste below cursor
P           : paste above cursor
"2p         : paste from register 2
```

Command `y` and `d` followed by a cursor movement command will yank / delete a range specified by the movement command. For example

```
dj          : Delete the current line and the next line
y^          : Yank from the beginning of the line to cursor
```

## Still basic

Enter a number before a command to repeat it, examples:

```
10w      : skip forward 10 words
10dd     : delete 10 lines
```

Commands are case sensitive:

```
c        : starts a change command
C        : change to end of line (same as c$)
ce       : change to end of word (a complete change command)
```

## Really useful

```
* # g* g#     : find word under cursor (forwards/backwards)
<C-N> <C-P>   : word completion in insert mode
<C-X><C-L>    : Line complete SUPER USEFUL
/<C-R><C-W>   : Pull <cword> onto search/command line
:set ignorecase : you nearly always want this
:set smartcase  : case-sensitive if search contains an uppercase character
:syntax on    : colour syntax in Perl,HTML,PHP etc
:h slash<C-D> : type control-D and get a list all help topics containing slash
    (plus use TAB for Help completion)
```

## Enter special characters such as ^M

```
<C-v><C-m>     : Enter carriage return (^M)
<C-v><C-j>     : Enter <Nul> (^@)
```

## Make it easy to update/reload `vimrc`

```
" source $MYVIMRC reloads the saved $MYVIMRC
:nmap <Leader>s :source $MYVIMRC

" opens $MYVIMRC for editing, or use :tabedit $MYVIMRC
:nmap <Leader>v :e $MYVIMRC

" <Leader> is \ by default, so those commands can be invoked by doing \v and \s
```

## Visual mode mappings

```
:vmap sb "zdi<b><C-R>z</b><Esc> : wrap <b></b> around visually selected text
:vmap st "zdi<?= <C-R>z ?><Esc> : wrap <?= ?> around visually selected text
```

## Exploring

```
:Ex        : file explorer note capital Ex
\be        : show buffer explorer (requires plugin)
:ls        : list of buffers(eg following)
:cd ..     : change working dir to parent directory
:cd %:p:h  : change working dir to the currently open file for all windows
:lcd %:p:h : change working dir to the currently open file for the local window
```

## Great

```
guu        : lowercase line
gUU        : uppercase line
~          : invert case (upper->lower; lower->upper) of current character
gf         : open file name under cursor (SUPER)
ga         : display hex, ascii value of character under cursor
g8         : display hex value of utf-8 character under cursor
:%!xxd     : display the buffer in hex mode
:%!xxd '%' : display the current file in hex mode
ggg?G      : rot13 whole file
xp         : swap next two characters around
CTRL-A,CTRL-X : increment, decrement next number on same line as the cursor
CTRL-R=5*5    : insert 25 into text
=             : (re)indent the text on the current line or on the area selected (SUPER)
=%            : (re)indent the current braces { ... }
G=gg          : auto (re)indent entire document
```

If you use Ctrl-V for paste, you will probably need to [unmap CTRL-A](http:_vim.wikia.com/wiki/VimTip30) first.

Difference between `:%!xxd` and `:%!xxd '%'`:

* When Vim loads a binary file as text, it may alter the file content in order to display the content on the screen. As a result, `:%!xxd` shows the "buffer" in hex mode with the modified content. For example, A byte of `0x80` will be shown as '?' on the screen, and running `:%!xxd` will show that byte as 0x3F, which is the hex value of '?'. To display the original file content in hex mode, use `:%!xxd '%'` to instruct the 'xxd' command to process the "current file" rather than the "current Vim buffer".
    * The first `%` in the command is to specify the range (where the output of  `!xxd` will replace); the 2nd `%` is the "register %", containing the name of the current file. The 2nd `%` needs to be quoted so that Vim can handle the path in both Linux and Windows format.
    * If Vim loads the binary file as binary file, `:%!xxd` would work just fine. To change the buffer to the binary mode, execute `:e ++bin` or `:set binary`.

## Markers and moving about

```
ma mb    : Mark current location as Mark 'a' or Mark 'b' (local buffer). Available marks are [a-z]
mA mB    : Mark current location as Mark 'A' or Mark 'B' (global)
'a 'b    : Go to the line of Mark 'a' or Mark 'b'
`a `b    : Go to the exact spot of Mark 'a' or Mark 'b'
'.       : jump to last modification line (SUPER)
`.       : jump to exact spot in last modification line
<C-O>    : retrace your movements in file (backward)
<C-I>    : retrace your movements in file (forward)
:ju(mps) : list of your movements `help|jump-motions`
:history : list of all your commands
:mark    : List all the marks
]'       : Go to next mark
['       : Go to previous mark
```

## Abbreviations and maps

```
:map <F7>  :'a,'bw file            " Write the lines from mark a to mark b to 'file'
:map <F8>  :.w file<CR>            " Write the current line to 'file'
:map <F9>  :r file                 " Read text from 'file' and insert it below the current line
:map <F10> :w<CR>:!php %<CR>       " Write the file and run it through php
:ab php                            " list abbreviations beginning with php
:map \                             " list maps beginning with \
```

## For use in maps

```
<CR>     : carriage Return for maps
<Esc>    : Escape
<Leader> : normally \  change with :let mapleader = ","
<Bar>    : | pipe
```

## Copy(Yank)/Paste with registers

```
:reg          : display contents of all registers
"1p           : paste from register 1
"a5yy         : yank 5 lines to register a
"A5yy         : append 5 lines to register a
:redir @*     : redirect commands to register * (the system clipboard on Windows)
:redir END
"*yy          : yank to register * (the system clipboard on Windows)
"*p           : paste from register * (the system clipboard on Windows)
"+yy          : yank to register + (the system clipboard on Linux)
:2,5y a       : yank line 2-5 to register a
:7pu a        : paste from register a to under line 7
:let @+ = expand("%:p")    : yank the current buffer path to register + (the system clipboard on Linux)
```

## Execute command from buffer contents

```
"ayy@a   : execute the Vim command in the current line
yy@"     : same
```

## Get output from shell commands

These use external programs – `ls, grep, date, sort, &hellip;` (see `help|:sort` to learn how to use Vim's built-in sort).
```
:r!ls                : reads in output of ls (use dir on Windows)
:r !grep "^ebay" file.txt  : read output of grep
:20,25 !rot13        : rot13 lines 20 to 25
:r!date              : insert date (use  date /T on Windows)
:.!sh                : execute contents of current line in buffer and capture the output
```

Sorting with external sort

```
:%!sort -u           : contents of the current file is sorted and only unique lines are kept
:'v,'w!sort          : sort from line marked v thru lines marked w
:g/^$/;,/^$/-1!sort  : sort each block (note the crucial ;)

!1} sort             : sorts paragraph; this is issued from normal mode!)
```

Entering `!!` in normal mode is translated to  `:.!`. Appending a command sends the current line to the command replacing it with command's result

```
!!date              : Replace current line with date
!!which command     : Replace current line with the absolute path to command
!!tr -d AEIO        : translate current line deleting As, Es, Is, and Os from the current line
```

You can also use `!` on a visual selection. Select an area with one of the visualmode commands, and then type !command to pipe the whole selection through command. This is equivalent to `:'<,'>!command`. For example, after selecting multiple lines with visualmode:
```
!sort              : sort selected lines
!grep word         : keep only lines containing 'word' in the selected range.
```

## Multiple files

```
:wn           : write file and move to next (SUPER)
:bd           : remove file from buffer list (SUPER)
:sav php.html : Save current file as php.html and "move" to php.html
:sp fred.txt  : open fred.txt into a split
:e!           : return to unmodified file
:w /some/path/%:r   : save file in another directory, but with the same name
:e #          : edit alternative file
:args         : display argument list
:n            : next file in argument list
:prev         : previous file in argument list
:rew          : rewind to first file in argument list
:ls           : display buffer list
:bn           : next buffer
:bp           : previous buffer
:brew         : rewind to first buffer in buffer list
:tabe         : open new tab page (Ctrl-PgUp, Ctrl-PgDown for next/previous tab)
gt            : go to the next tab
gT            : go to the previous tab
:tabm n       : move tab to position n (0=leftmost position)
:tab 9sbu     : Open buffer 9 in a new tab
<C-W> s       : Create a horizontal split window
<C-W> v       : Create a vertical split window
<C-W> q       : Close the split window
<C-W> <arrow key> : Move to another split
<C-W><C-H>    : Move to the left split
<C-W><C-L>    : Move to the right split
<C-W> T       : Move the split window to a new tab
:set scrollbind    : Enable scroll-binding for the current window.
:set scrollopt=ver : Bind vertical scrolling for 'scrollbind' windows
:set scrollopt=hor : Bind horizontal scrolling for 'scrollbind' windows
```

## Recording
Record the command sequence `d10dj` (delete 10 lines, the move down) to register `a`

```
qa
d10dj
q
```

```
@a            : execute commands recorded in register a
@@            : repeat
:%normal @a   : execute commands recorded in register a on all lines
:normal @a    : execute commands recorded in register a on visually selected lines
```

Editing a register/recording

```
"ap           : paste the content in register a to buffer
"add          : Cut the current line and store it in register a
```

## vimrc essentials

```
:set incsearch : jumps to search word as you type (annoying but excellent)
:set wildignore=*.o,*.obj,*.bak,*.exe
:syntax on : display syntactical elements by color based on filetype ( extension )
```

## Conventional shifting

```
:'a,'b>>
# visual shifting (builtin-repeat)
:vnoremap < <gv
:vnoremap > >gv
```

## Searching

Search using [[202203022055_Regular_Expression|basic regular expression]] 
```
/^fred.*joe.*bill  : line beginning with fred, followed by joe then bill
/^[A-J]            : line beginning A-J
/fred\_.\{-}joe    : fred then anything then joe (over multiple lines)
/fred\_s\{-}joe    : fred then any whitespace (including newlines) then joe
/fred\|joe         : fred OR joe
```

Other search commands:

```
[I                 : show lines matching word under cursor <cword>
*                  : (forwards) find word under cursor (with word boundary)
#                  : (backwards) find word under cursor (with word boundary)
g*                 : (forwards) find word under cursor (without word boundary)
g#                 : (backwards) find word under cursor (without word boundary)
```

Note:

* Searching "vi" with word bounadry will match "running vi" but not "Navigator"
* Searching "vi" without word bounadry will match both "running vi" and "Navigator"

## Substitution

Basic

```
:%s/fred/joe/igc           : general substitute command
:%s/\r_g                  : delete DOS Carriage Returns (^M)
:'a,'bg/fred/s/dick/joe/gc : VERY USEFUL
:s/\(.*\):\(.*\)/\2 : \1/  : reverse fields separated by :
```


Non-greedy matching with `\{-}`
```
:%s/^.\{-}pdf/new.pdf/     : to first pdf)
:s/fred/<c-r>a/g           : substitute "fred" with contents of register "a"
:%s/^\(.*\)\n\1/\1$/       : delete duplicate lines
:help /\{-}
```

Some sample commands
```
:%s/\f\+\.gif\>/\r&\r/g | v/\.gif$/d | %s/gif/jpg/
:%s/suck\|buck/loopy/gc       : ORing
:s/__date__/\=strftime("%c")/ : insert datestring
```

Remove the newline if the next line starts with a non-whitespace
```
:%s#\(\S\)\n\(\S\)#\1\2#
```

Note that some patterns have different meaning in search and in replacement (ref: [StackOverflow](https://stackoverflow.com/a/3834303))

|       | How to type  | In search, means:      | In replacement, means: |
| -- | -- | -- | -- |
| \n    | \n            | End-of-line             | \<Nul\> 0x0               |
| ^@    | \<C-v\>\<C-j\>    | \<Nul\> 0x0               | \<Nul\> 0x0               |
| \r    | \r            | Carriage return 0xD     | "Break the line here"   |
| ^M    | \<C-v\>\<C-m\>    | Carriage return 0xD     | "Break the line here"   |
| \^M   | \<C-v\>\<C-m\>  | \ + carriage return 0xD | Carriage return 0xD     |

## Global command

```
:g/one\|two/     : list lines containing "one" or "two"
:g/^\s*$/d       : delete all blank lines
:g/green/d       : delete all lines containing "green"
:v/green/d       : delete all lines not containing "green"
:g/one/,/two/d   : not line based
:v/./.,/./-1join : compress empty lines
```

Between lines with marks `a` and `b` (inclusive), append each line starting with "Error" to a file:

```
:'a,'b g/^Error/ .w >> errors.txt
```

Delete all lines containing "green" but not "red" or "pink". Command `:g/^/` matches every line; the current line is copied into variable `x`; if any part of `x` matches (case sensitive) "green" and not "red" and not "pink", the line is deleted. Replace `#` with `?` for case insensitive.

```
:g/^/let x=getline('.') | if x=~#'green' && x!~#'red' && x!~#'pink' | d | endif
```

## Formatting text

```
J         : Join next line to the end of current line
gq<CR>    : Format the text to 80 columns per line
gqap      : (a is motion p paragraph (visual mode))
```

## Operate command over multiple files

```
:argdo %s/foo/bar/
:bufdo %s/foo/bar/
:windo %s/foo/bar/
:tabdo %s/foo/bar/
```

## Command line tricks

```
gvim -h
ls | gvim -   : edit a PIPE!
# vg.ksh (shell script)
# vi all files in directory containing keyword $1 and jump to $1
gvim.exe -c "/$1" $(grep -isl "$1" *) &
```

## Preview in web browser

add the following to `.vimrc`:
```
command Preview :!firefox %<CR>
```

Make sure the browser executable can be found in PATH. 

## Spellchecking

```
:setlocal spell spelllang=en_us    : Set spellchecking to en_us
:setlocal spell!                   : Toggle spellchecking
]s                                 : Jump to the next spell checking error
[s                                 : Jump to the previous spell checking error
z=                                 : Show the possible correction
zg                                 : Add word under the cursor as a good word to the first spellfile
zw                                 : Add word under the cursor as a bad word to the first spellfile
```

## Paste to Vim Command Line

```
:<C-R>"       : Paste from default register (yanked content)
:<C-R>*       : Paste from register * (the system clipboard on Windows)
:<C-R>+       : Paste from register + (the system clipboard on Linux)
:<C-R>a       : Paste from register a
:<C-R><C-W>   : Pull <cword> onto search/command line
```

## Browsing Files with Tag

```
:set tags=/path/to/tag/file    : Specify the tag file location
<C-]>                          : Jump to the first definition of the current word/selected word
<C-T>                          : Jump back
g]                             : Select from the match list of the current word/selected word
g<C-]>                         : Jump to the definition if there is only one matching; open selection list if there are multiple.
```

## Executing External Command

```
:!command                     : Execute command
:!%                           : Execute the current file (useful when editing perl script etc)
:! wc %                       : Find the word count of the current file (running wc against the current file)
```

## Sorting Text

```
:sort u        : Sort, removing duplicate lines
:sort !        : Sort in reverse
:sort n        : Numeric sort
```

## Regular Expression

The set of special character is determined by the `magic` option (see `:help magic`). The default value is "\m" ('magic'), and the corresponding set of special character is as follows:

```
.              match all character
*              any number of the previous atom
[]             define a class of character. Everything within [] is treated as plain text, including things like \s or \d (except '^' when placed at the beginning of [])
^              the "not" operator when placed at the beginning of the class of character '[]'
               or the "beginning of the line" anchor when placed at the beginning of a regular expression
$              the "end of the line" anchor when placed at the end of a regular expression
\              escape the next character
\<             word boundary start
\>             word boundary end
```

Example of using the "word boundary" special symbol:

```
/vi            # Match "vi" in both "running vi" and "Navigator"
/\<vi\>        # Match "vi" in "running vi" but not in "Navigator"
```

All the other characters will be considered as plain character to be searched. For example

* `\d+` will match `1+` and `2+`, but not `12`. This is because `+` is treated as plain text.
* `\d\+` will match `12`
* `(abc)` will match `(abc)` but not `abc`. This is because `(` is treated as plain text
* `\(abc\)` will match `abc`, and it can be backreferenced by `\1`
* `[\d]+` will NOT match `123`. This is because `\d` within `[]` is treated as plain text.
* `[0-9]+` will match `123`

## Change File Format Option

When a DOS file is opened in UNIX format, `^M` appears at the end of every line. To hide that `^M`, switch the file format back to DOS by the following command:

```
:e ++ff=dos
```

The `++ff` is one of the `++opt`. `++ff` instructs Vim to set `fileformat` to user specified value while editing the file.

Note that `:e ++ff` only changes how Vim represents the file in the terminal. To convert the line ending in the file, use

```
:w ++ff=dos
```

Available fileformat values and the corresponding line ending:

| | |
| - | - |
| dos | \<CR\>\<NL\> |
| unix | \<NL\> |
| mac | \<CR> |

## Change File Encoding

```
# Change the output encoding that is shown in the terminal
set encoding=utf-8

# Change the output encoding (local to buffer) of the file that is written
set fileencoding=utf-8

# Change the output encoding of the file that is written to "default"
# which will be the same as encoding.
set fileencoding=

# Force writing the file using the specified fileencoding
# (++enc refers to "fileencoding", not "encoding")
:w ++enc=utf-8

# Edit the file with 'fileencoding' set to "utf-16"
:e ++enc=utf-16
```

## Opening Large File

```
vim -u "NONE" hugefile.log
```

The option [http:_vimdoc.sourceforge.net/htmldoc/starting.html#-u -u "NONE"] is to skip all the initialization from files and environment variables.

## Plugin

### `csv.vim`

```
# Open the file in text mode
:edit +setf\ text myfile.csv

# Switch a buffer in csv view to text view
:setf text

# Switch a buffer in text view to csv view
:setf csv
```

## References

* [Simple VIM commands you wish you'd known earlier (Stack Overflow)](http://stackoverflow.com/questions/1276403/simple-vim-commands-you-wish-youd-known-earlier)
* [Best Vim Tips (vim.wikia)](http://vim.wikia.com/wiki/Best_Vim_Tips)
* http://www.radford.edu/~mhtay/CPSC120/VIM_Editor_Commands.htm 