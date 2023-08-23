# Regular Expression

There are two sets of regular expression rules:

* Basic Regular Expression (BRE)
* Extended Regular Expression (ERE)

|                           | BRE | ERE |
|---------------------------|-----|-----|
| Escape the next character | \\ | \\ |
| Match any single character except newline | . | . |
| Bracket expresion | \[\] | \[\] |
| Grouping | \\(\\) | () |
| Alternation | \\\| | \| |
| Match 0 or more times | * | * |
| Match 1 or more times | \\{1,\\} | + |
| Match 1 or 0 times | \\{0,1\\} | ? |
| Match exactly m times | \\{m\\} | {m} | 
| Match at least m but no more than n times | \\{m,n\\} | {m,n} | 
| Match the beginning of the string (when not in []) | ^ | ^ |
| Match the end of the string (when not in []) | $ | $ |

The modern applications implement ERE unless explicitly specified (like Linux command [grep](https://www.gnu.org/software/grep/manual/grep.html#Regular-Expressions))

Many applications also implement the following features on top of the above rules:

* Greedy vs non-greedy match ([[202203022053_Python_Regular_Expression#Greedy vs non-greedy|Python]])
* Special sequences such as `\d` and `\w`
* Flags/modifiers to change the matching behavior (e.g. ASCII-only matching or ignore case)
* Non-capturing group, named group ([[202203022053_Python_Regular_Expression#Named groups|Python]])
* Lookahead assertion, negative lookahead assertion ([[202203022053_Python_Regular_Expression#Lookahead and lookbehind assertions|Python]])
* Lookbehind assertion, negative lookbehind assertion ([[202203022053_Python_Regular_Expression#Lookahead and lookbehind assertions|Python]])
* Conditioned pattern (`(?(condition)yes-pattern|no-pattern)`)

## Reference
* https://pubs.opengroup.org/onlinepubs/9699919799/basedefs/V1_chap09.html
* [Python's regular expression](https://docs.python.org/3/library/re.html)
* [Perl's regular expression](https://perldoc.perl.org/perlre)
* [Vim's regular expression](http://vimdoc.sourceforge.net/htmldoc/pattern.html#regexp)
* [Visual Studio's regular expression](https://docs.microsoft.com/en-us/visualstudio/ide/using-regular-expressions-in-visual-studio?view=vs-2022)
