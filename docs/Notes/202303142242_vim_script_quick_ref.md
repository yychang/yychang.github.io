# Vim Script Quick Reference

## Basic

```vim

" write comment by having a double quote at the beginning of a line

" Define a function named MyFunc. Note the first letter of the function name needs to be capitalized
" Vim functions are invoked by :call. For example, :call MyFunc()
function! MyFunc()
  echo "Hello, world!"
endfunction

" Each line in Vim function is treated as individual Ex commands
function! MyFunc2()
  call MyFunc()
  echo "I just called another function"
  set nowrap
  %s#apple#orange#g

  " Define a variable 'x'
  let x = 'my string'

  " Assign register '+' by variable 'x'
  let @+ = x
endfunction

" Enter the normal mode commands
function! MyFunc3()
  " Yank the current word
  normal! yw

  " To enter <c-w> for splitting the window, press <c-v><c-w> to create the <c-w> input in Ex command mode.
  " It will appear as '^W' on the screen
  normal! ^Wj

  " Alternatively use :execute to make <c-w> more readable
  execute "normal! \<c-w>s"
endfunction
```

## String

Double-quoted strings support escape sequence (like "\\n"); single-quoted strings are literal strings

```vim
" This prints a new line
echo "\n"

" This prints '\n'
echo '\n'
```

!!! note "String For Regex Pattern"
    Use single-quoted string for regex pattern 

!!! note "Prefer Single-Quoted String"
    Some commands may accidentally treat the double quote as the beginning of the comments (e.g. see `:help :put`)

### Conversion to Numbers

per `:help variables`:

> Conversion from a String to a Number is done by converting the first digits to a number. Hexadecimal "0xf9", Octal "017", and Binary "0b10" numbers are recognized. [...] If the String doesn't start with digits, the result is zero.

Examples:

```
String "456"   -->  Number 456 
String "6bar"  -->  Number 6 
String "bar6"  -->  Number 0
String "0xf1"  -->  Number 241
String "0100"  -->  Number 64
String "0b101" -->  Number 5
String "-8"    -->  Number -8
String "+8"    -->  Number 0
```

See also:

* https://learnvimscriptthehardway.stevelosh.com/chapters/21.html#basic-if

## Reference