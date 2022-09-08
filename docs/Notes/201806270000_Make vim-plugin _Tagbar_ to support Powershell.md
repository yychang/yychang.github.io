# Make vim-plugin "Tagbar" to support Powershell

To make Tagbar supports PowerShell, do the followings

1. Add `g:tagbar_type_ps1` to `.vimrc`
2. Add PowerShell language definition to ctags config file

For 1, add the following code to `.vimrc`

```
let g:tagbar_type_ps1 = {
    \ 'ctagstype' : 'powershell',
    \ 'kinds'     : [
        \ 'f:function',
        \ 'i:filter',
        \ 'a:alias'
    \ ]
\ }
```

For 2, the path to the ctags config file varies dependent on which ctags is used:

* For Exuberant-ctags: `$HOME/.ctags`
    * (Linux) `$HOME/.ctags.d/powershell.ctags`
    * (Windows) `$HOMEDRIVE$HOMEPATH/ctags.d/powershell.ctags`
        * The [document](https://github.com/universal-ctags/ctags/blob/master/docs/optlib.rst) suggests "`$HOMEDRIVE$HOMEPATH/.ctags.d`", while the [commit](https://github.com/masatake/ctags/commit/ce0617a7be7a4d33a09ac60f21b8a9ce26690853#diff-d7c3ecc49a382333b5fac4bf5e417da9) suggests "`$HOMEDRIVE$HOMEPATH/ctags.d`".

Create the ctags config file `powershell.ctags` and add the following code to the file:

    --langdef=powershell
    --langmap=powershell:.ps1.psm1
    --regex-powershell=/^[Ff]unction[\t ]*([a-zA-Z0-9_-]+)/\1/f,function/
    --regex-powershell=/^[Ff]ilter[\t ]*([a-zA-Z0-9_-]+)/\1/i,filter/
    --regex-powershell=/^[sS]et-[Aa]lias[\t ]*([a-zA-Z0-9_-]+)/\1/a,alias/

**REFERENCE**

* <https://github.com/universal-ctags/ctags/blob/master/docs/optlib.rst>
* <https://github.com/majutsushi/tagbar/wiki#powershell>
