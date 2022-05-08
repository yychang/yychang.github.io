---
aliases: []
tags:
  - quick-ref
---

# Perl Quick Reference
## Match/Search

```perl
my $PATTERN = "PATTERNS" #See following examples
$SEARCHING_STRING =~ m/$PATTERN/ #This will return the match result
```

### Quantifiers

Ref: [Quantifiers](http://perldoc.perl.org/perlre.html#Quantifiers)

```perl
*           Match 0 or more times
##           Match 1 or more times
?           Match 1 or 0 times
{n}         Match exactly n times
{n,}        Match at least n times
{n,m}       Match at least n but not more than m times
```

Example

```perl
my $PATTERN = "mz*r"; # Matches "mr", "mzr", "mzzr", "mzzzzzzzr"
my $PATTERN = "mz+r"; # Matches "mzr", "mzzr", "mzzzzzzzr", but not "mr"
my $PATTERN = "mz{2, 4}r"; # Matches "mzzr", "mzzzr", "mzzzzr"
my $PATTERN = "m(zz)*r"; # Matches "mr", "mzzr", "mzzzzr", but not "mzzzr"
```

### Metacharacters

```perl
\     Quote the next metacharacter
^     Match the beginning of the line (if ^ appears at the beginning of the regular expression)
.     Match any character (except newline)
$     Match the end of the line or before newline at the end (if $ appears at the end of the regular expression)
|     Alternation
()    Grouping
[]    Character class
```

To find a pattern with "zz" OR "qq", "is" OR "was": use |

```perl
my $PATTERN = "m(zz|qq)r";
my $PATTERN = "It (is|was) a good choice";
```

To find any element of a set: use [ ], and - to describe a range

```perl
my $PATTERN = "[a-zA-Z_]"; # a,b,c,...,z and A,B,C,...,Z and _
my $PATTERN = "[0-9]"; # 0,1,2,...,9
my $PATTERN = "[!@#$\-%^]" # Note that if you want to include "-", you need to type "\-"
```

To find any element NOT in a set: use [ ] with ^ AT THE BEGINNING

```perl
my $PATTERN = "[^13579] # anything NOT 1,3,5,7,9
```

To find all char: use .

```perl
my $PATTERN = "m.r" # "m r", mar, mBr, m#r, m2r will match.
```

To find char .: use [.]

```perl
my $PATTERN = "m[.]r" # now only m.r will match.
```

To ignore char case: use /$PATTERN/i

```perl
$SEARCHING_STRING =~ m/$PATTERN/i
```

To ignore line changing: use /$PATTERN/s

```perl
my $SEARCHING_STRING = "I changed \n a \n line.";
my $PATTERN = "changed.*line"; #Notice that by using .* we allows any number of any char between "changed" and "line"
$SEARCHING_STRING =~ m/$PATTERN/s
#you can ignore char case and line changine by using /$PATTERN/is
```

To recursively find all matching pattern: use /$PATTERN/g

### Regexp Quote-Like Operators

Use `qr//` to define a variable to be used as the regular expression pattern later.

```perl
my $re = qr/my.STRING/is;
$string =~ /foo${re}bar/;
$string =~ /$re/;
```

See http://perldoc.perl.org/perlop.html#Regexp-Quote-Like-Operators

### Named Capture Group

Use the syntax `(?<name>...)` to associate the capture group with a name.

```perl
my $date = '2015-01-02';
$date =~ m/ (?<year>\d+) \-
            (?<month>\d+) \-
            (?<day>\d+)
          /x;

# Obtain the named capture group from system variable %+
my $day = $+{day};
```

### Use Variables as Literal in Match Operator

Sometimes user wants to match a `$variable` with `$variable` being treated as a literal string (e.g. matching the file path without Perl seeing '\' and '/' as special character). To do so, use one of the following approaches:

* Approach 1: Use `quotemeta()` to escape the string

    ```perl
    my $variable = "path/to/file";
    $variable = quotemeta($variable);
    $file =~ /$variable/;
    ```

* Approach 2: Use `\Q \E`

    ```perl
    my $variable = "path/to/file";
    $file =~ /\Q$variable\E/;
    ```

## Reference

### Reference declaration

```perl
$scalarref = \$foo;
$arrayref = \@array;
$href = \%hash;
$coderef = \&handler;
$globref = \*foo;
```

### Initialize a reference of an anonymous array or hash

```perl
# Use (a,b,c) to initialize an array
# Use [a,b,c] to initialize a reference of an anonymous array
$arrayref = [1, 2, ['a', 'b', 'c']];
$arrayref = [ @array ]; # A new array reference having all data in @array

# Use ('key' => 'val') to initialize an hash
# Use {'key' => 'val'} to initialize an reference of an anonymous hash
$href = {
'Adam' => 'Eve',
'Clyde' => 'Bonnie'
};
$href = { %hash }; # A new ha    sh reference having all data in %hash
```

### Rules using Reference

1. Anywhere you'd put an identifier (or chain of identifiers) as part of a variable or subroutine name, you can replace the identifier with a simple scalar variable containing a reference of the correct type. The dereference of the scalar variable happens before it does any key lookups.
2. Anywhere you'd put an identifier (or chain of identifiers) as part of a variable or subroutine name, you can replace the identifier with a BLOCK returning a reference of the correct type.
3. The left side of the arrow can be any expression returning a reference, including a previous dereference. Also, The arrow is optional between brackets subscripts.

### Access the reference of a hash

```perl
%hash = %$href; # '$href' replaces the hash variable name. See Rule 1.
$value = $href->{$key}; # '->' dereferences $href. See Rule 3
$value = $$href{$key};
@slice = @$href{$key1, $key2, $key3}; # note: no arrow!
@keys = keys %$href;
```

For details, visit: http://perldoc.perl.org/perlref.html

## Array

### Initialization

```perl
my @array = (1,2,3,4);
my @array = (1...4);
my @array = qw/first second third/;
```

### Useful Array Operations

```perl
my $arrsize = scalar @array; # Array size.
my $arrsize = @array;  # assigning an array to a scalar gives you its element count
my $lastindex = $#array;
my @arrayAB = (@arrayA, @arrayB); # merging
my $Third_to_the_last = $array[-3]; # Accessing n-th to the last element
my @removed_items = splice( @array, offset, length, @replaced_with ); # Remove (or replaced with @replace_with) $array[offset] ~ $array[offset+length-1]
delete $array[0]; # deleting an element
```

### Array of reference

```perl
my @list = (\$a, \@b, \%c);
my @list = \($a, @b, %c); # same thing!
```

Array of arrays: (The element of the array is references to arrays, not arrays)
Array of hashes: (The element of the array is references to hashes, not hashes)

If you want to have an array to access multiple hashes, use reference of hashes as the entry of the array:

```perl
push(@array, {%hash} )
```

DO NOT write like the followings:

```perl
push(@array, %hash) # (See "Assign a hash to an array")
push(@array, \%hash) # This will not copy the input hash but only record the address of the given hash.
```

Assign a hash to an array:

```perl
my @array = %hash;
# The resulting @array will be:
# $array[0] = $key_0, $array[1] = $hash{ $key_0 }
# $array[2] = $key_1, $array[3] = $hash{ $key_1 }
# ...
# However, $key_0 is not necessary the first key when %hash is initialized.
```

## Hash  

```perl
my %hash = ();
%hash = ( 'key1', 'value1', 'key2', 'value2', 'key3', 'value3');
%hash = ( 'key1' => 'value1',
'key2' => 'value2',
'key3' => 'value3' );
$hash{ $key } = $value;
my %hash_copy = %hash;
delete $hash{$key}
```

### Useful Hash Operations

Hash size

```perl
my $hash_size = keys( %hash );
```

Process through each keys

```perl
while ( my ($key, $value) = each(%hash) ) { print "$key => $value\n"; }
for my $key ( keys %hash ) {
    my $value = $hash{$key};
    print "$key => $value\n";
}
```

3 status of the hash keys

```perl
if exists $hash{ $key };           # check the existence of the key. the corresponding value may be undefined
if defined $hash{ $key };
if $hash{ $key };
```

### Hash references

```perl
my $href = 0;
$href = \%hash;
$href->{ $key } = $value; # $hash_ref is a reference of a hash.
my $href_copy = $href;
my $href_size = 0; $href_size += scalar keys %$href;
delete $href->{$key};
while ( my ($key, $value) = each(%$href) ) { print "$key => $value\n"; }
```

## String

(Ref: "Learning Perl", 3rd edition, Chap 2.3)

### Single-quoted String

Rule: Any character other than a single quote (') or a backslash (\) between the quote marks (including newline characters, if the string continues onto successive lines) stands for itself inside a string.

Examples:

| Single-quoted String | Represents | Char Count |
| -------------------- | ---------- | ---------- |
| 'can\'t' | can't | 5 |
| 'line1 _
line2' | line1 _
line2 | 11 (including newline) |
| 'blah\blah' | blah\blah | 9 |
| 'blah\\blah' | blah\blah | 9 |

It is recommended to always use double backslash (\\) in the single-quoted string to represent one backslash to avoid confusion.

### Double-quoted String

Double-quoted string uses backslah (\) to specify the control characters. The supported control characters are:

| Control character | Description |
| ----------------  | ----------- |
| \n | Newline |
| \r | Carriage Return |
| \t | Tab |
| \f | Formfeed |
| \b | Backspace |
| \a | Bell |
| \e | Escape (ASCII escape character) |
| \007 | Any octal ASCII value (here, 007 = bell) |
| \x7f | Any hex ASCII value (here, 7f = delete) |
| \cC | A "control" character (here, Ctrl-C) |
| \\ | Backslash |
| \" | Double quote |
| \l | Lowercase next letter |
| \L | Lowercase all following letters until \E |
| \u | Uppercase next letter |
| \U | Uppercase all following letters until \E |
| \Q | Quote non-word characters by adding a backslash until \E |
| \E | Terminate \L, \U, or \Q  |

## String Input

```perl
my $STORE_VAR = <STDIN>
```

## Loops

`while` and `until`

```perl
while (CONDITION) { ROUTINE } #Keep doing "ROUTINE" before CONDITION fails.
until (CONDITION) { ROUTINE } #Keep doing "ROUTINE" before CONDITION comes true.
```

Loop variables: `next, last, redo:`

```perl
while (EXPR) {
    ### redo always comes here
    do_something;
} continue {
    ### next always comes here (both next and normal while loop come here)
    do_something_else;
    # then back the top to re-check EXPR
}
### last always comes here
```

`foreach`:

```perl
foreach $item (@array) { ... }
```

Rewrite each array element using `for` loop:

```perl
@data = (1..100);
for (@data){ $_ = sprintf '%03d', $_; }
```

## Special character

```perl
\t tab (HT, TAB)
\n newline (LF, NL)
\r return (CR)
\f form feed (FF)
\a alarm (bell) (BEL)
\e escape (think troff) (ESC)
\033 octal char (think of a PDP-11)
\x1B hex char
\x{263a} wide hex char (Unicode SMILEY)
\c[ control char
\N{name} named char
\l lowercase next char (think vi)
\u uppercase next char (think vi)
\L lowercase till \E (think vi)
\U uppercase till \E (think vi)
\E end case modification (think vi)
\Q quote (disable) pattern metacharacters till \E
\w Match a "word" character (alphanumeric plus "_")
\W Match a non-"word" character
\s Match a whitespace character (space, tab, newline)
\S Match a non-whitespace character
\d Match a digit character
\D Match a non-digit character
\pP Match P, named property. Use \p{Prop} for longer names.
\PP Match non-P
\X Match eXtended Unicode "combining character sequence",
equivalent to (?:\PM\pM*)
\C Match a single C char (octet) even under Unicode.
NOTE: breaks up characters into their UTF-8 bytes,
so you may end up with malformed pieces of UTF-8.
Unsupported in lookbehind.
```

## Predefined Variable

| Variable | Comment  |
| -- | -------------- |
| $! | Error messages |
| @ARGV | Program arguments |
| @_ | Within a subroutine the array @_ contains the parameters passed to that subroutine |
| $ARG, $_ | The default input and pattern-searching space |
| $ltdigitsgt | Contains the subpattern from the corresponding set of parentheses in the last pattern matched, not counting patterns matched in nested blocks that have been exited already. (Mnemonic: like \digits.) These variables are all read-only. |
| $MATCH, $& | The string matched by the last successful pattern match (not counting any matches hidden within a BLOCK or eval() enclosed by the current BLOCK) |
| $PREMATCH, $` | The string preceding whatever was matched by the last successful pattern match (not counting any matches hidden within a BLOCK or eval enclosed by the current BLOCK) |
| $POSTMATCH, $' | The string following whatever was matched by the last successful pattern match (not counting any matches hidden within a BLOCK or eval() enclosed by the current BLOCK) |
| $PROGRAM_NAME, $0 | Contains the name of the file containing the Perl script being executed. |
| $[ | The index of the first element in an array, and of the first character in a substring. Default is 0. (You can set to 1 ot make Perl behave more like Matlab) |
| $OSNAME, $^O | The name of the operating system under which this copy of Perl was built. `MSWin32` for windows, `msys` for Git for Windows, `linux` for linux, and `darwin` for Mac OS X. |
| $CHILD_ERROR, $? | The status returned by the last pipe close, backtick (`` ) command, successful call to wait() or waitpid(), or from the system() operator. |

Note: `@ARGV` is different from C tradition. Perl tradition:

```perl
@program.pl A B C D@
$ARGV[0] = A
```

C tradition:

```perl
program.exe A B C D
argv[0] = program.exe
```

Note: The following pairs are equivalent:

| Implementation 1 | Implementation 2 |
| ---------------- | ---------------- |
| while (<>) {...}  | while (defined($_ = <>)) {...} |
| /^Subject:/       | $_ =~ /^Subject:/ |
| tr/a-z/A-Z/       | $_ =~ tr/a-z/A-Z/ |
| chop              | chop($_) |

Example of $MATCH, $PREMATCH, and $POSTMATCH:

```perl
$_ = 'abcdefghi';
/def/;
print "$`:$&:$'\n"; # prints abc:def:ghi
```

For details and other predefined variables, visit: http://www.perl.com/doc/manual/html/pod/perlvar.html

## File/Directory Operations

Open a directory:

```perl
$dirpath = "/home/username/public_html/$DirName";
opendir(my $DirHandle,$dirpath);
```

Get filenames from a opened directory:

```perl
@filenames = ( sort readdir($DirHandle) );
```
or

```perl
while (defined($file = readdir($DirHandle))) { ... }
```

Basic file system operations

```perl
# create the directories if they don't exist before (similar to "mkdir -p" in Linux)
use File::Path qw(make_path);
make_path("$path"); # double quote the path to handle whitespace.

# copy
use File::Copy;
copy("$src", "$dest"); # double quote the path to handle whitespace.

# copy entire directory
use File::Copy::Recursive qw(dircopy);
dircopy("$src_dir", "$dest_dir");

# rename
rename("$oldname", "$newname")

# delete file
unlink $path;

# delete empty directory
rmdir $path;

# delete nonempty directory
use File::Path qw(remove_tree)
remove_tree $path;
```

Convert the Linux/UNIX path to DOS/Windows path

```perl
use File::Spec
File::Spec->canonpath($path)
```

Check if the variable is a valid filename/directory

```perl
if -f $file
if -d $fdir
# When the argument of -f test (-d test) is not given, the default argument is $_. Therefore in a subroutine you can write:
# sub findfile {
#     return if -d
# }
# where the first argument of subroutine "findfile" is the testing filename
```

Seperate the base, dir, and extension of an given entire filename ($file):

```perl
use File::Basename
my ($base, $dir, $ext) = fileparse($file,"\.[^.]*");
```

Find a file in given directories (@dirs) and perform some wanted task on it:

```perl
use File::Find;
find(\&Wanted, @dirs);
# When subroutine "Wanted" is called:
# $_ is set to the current file name
# $File::Find::dir is set to the current directory
# $File::Find::name is set to "$File::Find::dir/$_"
# you are chdir()'d to $File::Find::dir
# If Wanted() sets $File::Find::prune on a directory, then find() will not descend into that directory.
```

List files of specific pattern

```perl
my @perl_files = glob("*.pl");
```

## Options

### Short options

```perl
use Getopt::Std;
my %OPTS;
getopts('a:bcr:', \%OPTS);
my $fr = ( defined($OPTS{'r'}))? $OPTS{'r'} : $ARGV[0];
# abcr are vaild options, 'a' and 'r' , if used, requires an argument.
# Use function "defined($OPTS{'r'})" to check if the options -r is used
# If used, the argument (if required) will be the value of $OPTS{'r'}
```

### Long options

http://perldoc.perl.org/Getopt/Long.html

```perl
use Getopt::Long;
my $data   = "file.dat";
my $length = 24;
my $weight = 0.0;
my $verbose;
my @lib;
my $libArrRef;
my %def;
my $defHashRef;
GetOptions ("length=i"   => \$length,     # numeric, integer
            "length=o"   => \$length,     # numeric, Perl-style extended integer
            "weight:f"   => \$weight,     # numeric, floating point, the option value is optional (user can use --weight without providing the value)
            "file=s"     => \$data,       # string
            "verbose"    => \$verbose,    # flag
            "library=s"  => \@lib,        # string, accept multiple input
            "library=s@" => \$libArrRef,  # string, accept multiple input
            "define=s"   => \%def,        # string, assign value of the form "key=value" to the hash
            "define=s%"  => \$defHashRef  # string, assign value of the form "key=value" to the hash
) or die("Error in command line arguments\n");
```

Example of the option with no value:

```perl
Define:
  GetOptions("verbose" => \$verbose);
Usage:
  --verbose
```

Example of the option with one value:

```perl
Define:
  GetOptions("file=s"     => \$data);       # string
Usage:
  --file myfile.txt
```

Example of the option with one value, with the option value being optional

```perl
Define:
  GetOptions("file:s"     => \$data);       # string
Usage:
  --file myfile.txt
  --file
```

Default values for the optional option value:

* numeric: default value is 0
* string: default value is empty string.

The Perl-style extended integer includes

* an octal string (e.g. 0777),
* a hexadecimal string (e.g. 0xffff);
* a binary string (e.g. 0b10010);

Example of the option with multiple input:

```perl
Define:
  GetOptions("library=s@" => \$libArrRef);  # string, accept multiple input
Usage:
  --library lib1 --library lib2
```

Example of the option with hash values:

```perl
Define
  GetOptions("define=s"   => \%def);        # string, assign value of the form "key=value" to the hash
  GetOptions("define=s%"  => \$defHashRef); # string, assign value of the form "key=value" to the hash
Usage:
  --define os=linux --define vendor=redhat
```

#### Long Options: Calling Subroutines to Handle Options

```perl
use Getopt::Long;
my $verbose;
GetOptions ( 'verbose' => \$verbose,
         'quiet'   => sub { $verbose = 0 },
             'opt=i'   => \&handler);

sub handler {
  my ($opt_name, $opt_value) = @_;
  print("Option name is $opt_name and value is $opt_value\n");
}
```

## Frequently Used Functions

### Open file/Close file

```perl
my $fh;
open( $fh, ">$fname") or die "Couldn't open file $fname:$!\n";
# > refers a "write" file; < refers a "read" file; >> referes "append"
# Avoid declaring filehandle in the way like open( FID, ">$fname"). Such filehandle
# is global and may be unintentionally overwritten by another open() in the sub routines.
close( $fh );
```

### Read from file handle $fh

```perl
while( $line = <$fh> ) { ... }

my @lines = <$fh>;

######## Pass a filehandle to function: ########
myfunc( *FID );
sub myfunc {
    local *FILEHANDLE = shift;
}
```

### Sub Functions

```perl
sub usage {
    my $nARG = @_; # Number of arguments
    my $Q = shift; # Load single parameter of the function.
    my ($p, $N) = @_; # Load multiple parameters of the function.
    my @ABC;
    ...
    return @ABC;
}
# Use defined( ) to check if an argument is initialized.
```

### Use `switch`

```perl
use Switch;
switch ($val) {
    case 1 { print "number 1" }
    case "a" { print "string a" }
    case [1..10,42] { print "number in list" }
    case (@array) { print "number in list" }
    case /\w+/ { print "pattern" }
    case qr/\w+/ { print "pattern" }
    case (%hash) { print "entry in hash" }
    case (\%hash) { print "entry in hash" }
    case (\&sub) { print "arg to subroutine" }
    else { print "previous case not true" }
}
```

or

```perl
SWITCH: for ($State) {
/MyCase1/x && do { <process case1>; last SWITCH; };
/MyCase2/x && do { <process case2>; last SWITCH; };
die "Unknown State: $State"; # Default:
} # End of SWITCH
# Perl does not have built-in switch statement, and the module "Switch"
# seems to have some problems matching the switch value $val and the
# case value. This example is an alternative of switch statement. It
# takes 'an element in $State' (where only one element within), assign
# the taken element to $_, then the regular expression is observed and
# automatically compare the regexp with $_ since no further instruction
# is given.
# One may use constant in the regexp:
# Use constant {S1 => 1, S2 =>2 };
# SWITCH: for ($State) {
# /^${\S1}$/x && do { <process case1>; last SWITCH; };
# /^${\S2}$/x && do { <process case1>; last SWITCH; };
# };
# Put "^" at the beginning and "$" at the end to make sure $State
# precisely matches the case statement; ${\S1} is to convert the constant
# into a scalar in the regular expression. See "Constant in regular expression"
```

### Push

```perl
my $TotalNum_element = push(@ARRAY, VALUES);
```

### Cut the \r\n at line end

```perl
chomp($tmp); $tmp =~ s/\r//;
# chomp() blindly removes the last char of the input
```

### Weed out comments

```perl
@foo = grep(!/^#/, @bar);
or
@foo = grep {!/^#/} @bar;
# Basically this just returns all lines not initial with '#'
```

### Do something to each element of an array

```perl
map BLOCK LIST
map EXPR,LIST ( or map( EXPR,LIST ) )
my @char map
# Use unary + before { on a hash reference, and unary + applied to the
# first thing in a BLOCK (after {), for perl to guess right all the
# time. (See map in the perlfunc manpage.)

grep BLOCK LIST
grep EXPR,LIST
```

### Merge Two arrays into one array

```perl
map( push(@array1, $_), @array2); # array1 followed by array2
push(@ARRAY1, @ARRAY2);
```

### Remove duplicate elements from an array

```perl
# create a hash entry whose key is the current visiting element of the array
# and the value is 1.
my %hash = map { $_, 1 } @array;
my @unique = keys %hash;
```

### Find the union/difference/intersection of two arrays

```perl
# Find the union
sub uniq {
    my %seen;
    grep { !$seen{$_}++ } @_;
}
my @unique = uniq(@array1, @array2);

# Find the difference (exist in @array1 but not in @array2)
my %hash2 = map{$_=>1} @array2;
my @array1Only = grep(!defined $hash2{$_}, @array1);

# Find the intersection
my %hash2 = map{$_=>1} @array2;
my @intersection = grep($hash2{$_}, @array1);
```

### Count the occurrence

Count the occurrence of each element in an array

```perl
my %Seen = ();
my @unique = grep( ! $Seen{ $_ }++ , @array);
# $_ here will be each element of @array
# "! $Seen{ $_ }" is first evaluated before $Seen{$_} is increased by 1.
# If $_ has never be seen before, then $Seen{$_} should be 0 at this moment.
```

Count the occurrence of "the value of a key" in an "array of (references of) hashes

```perl
my %Seen = ();
my @unique = grep( ! $Seen{ $_->{$key} }++ , @array);
# Every hash in @array has a common key '$key' and I would like to count
# the occurrence of its value. "@unique" will be the array of hashes whose
# value of the key $key is unique; %Seen will be:
# %Seen = ( value1 => occurrence of value1,
# value2 => occurrence of value2,
# ...
# )
```

### Constant

```perl
use constant PI => 4 * atan2(1, 1);
use constant DEBUG => 0;
use constant {
        SEC => 0,
        MIN => 1,
        HOUR => 2,
        MDAY => 3,
        MON => 4,
        YEAR => 5,
        WDAY => 6,
        YDAY => 7,
        ISDST => 8,
};

my $debug_status = (DEBUG);
```

### Constant in regular expression

```perl
/${\MYCONSTANT}/
# \MYCONSTANT is the reference of MYCONSTANT
# ${$href} will dereference $href
```

### Length of a variable

```perl
my $len = length( EXPR ); # The length in character.
my $len = scalar @array # The length of an array
my $len = @array # The length of an array
my $lastindex = $#array # The last entry index of an array
my $len = scalar keys %hash # The length of a hash
```

## Sort

```perl
@articles = sort @files; # sort lexically
@articles = sort {$a cmp $b} @files; # same thing, but with explicit sort routine
@articles = sort {uc($a) cmp uc($b)} @files; # now case-insensitively
@articles = sort {$b cmp $a} @files; # same thing in reversed order
@articles = sort {$a <=> $b} @files; # sort numerically ascending
@articles = sort {$b <=> $a} @files; # sort numerically descending

# this sorts the has '%age' by value instead of key
# using an in-line function
@eldest = sort { $age{$b} <=> $age{$a} } keys %age;

# sort using explicit subroutine name
sub byage {
    $age{$a} <=> $age{$b}; # presuming numeric
}
@sortedclass = sort byage @class;
```

## Operators

NOT ! (DON'T USE '~')

left terms and list operators (leftward)
left ->
nonassoc ++ --
right **
right ! ~ \ and unary + and -
left =~ !~
left * / % x
left + - .
left << >>
nonassoc named unary operators
nonassoc < > <= >= lt gt le ge
nonassoc == != <=> eq ne cmp
left &
left | ^
left &&
left ||
nonassoc .. ...
right ?:
right = += -= *= etc.
left , =>
nonassoc list operators (rightward)
right not
left and
left or xor

## Block comment

```perl
=MY_COMMENT_TITLE
...
...
=cut
# Use lower case, put it at the beginning of the line, or perl will not
# recognize it.
```

## Encoding

Two domains:

* Octet: 8 bits of data; term for bytes passed to or from a non-Perl context, such as a disk file, standard I/O stream, database, command-line argument, environment variable, socket etc
* Character: A character in the range 0 .. 2**32-1 (or more); what Perl's strings are made of.

Encoding and Decoding

```perl
use Encode qw(decode encode);

$octets  = encode(ENCODING, STRING[, CHECK])
$octets  = encode("utf8", $string);

$string = decode(ENCODING, OCTETS[, CHECK])
$string = decode("iso-8859-1", $octets);
```

## Miscellaneous

Multiple Initialization:

```perl
my ($var1, $var2, $var3);
```

Pass a subroutine into the other subroutine:

```perl
func1( \&func2, ... )
```

(To be re-evaluated) In Windows OS, call `myscript.pl` from another perl script:

```perl
my $stdout = `start /B myscript.pl`;
```

* In Windows, directly call ``myscript.pl`` in another perl script sometimes results in an error message about Windows not recognizing `myscript.pl`. Reason unknown.
* use `start /B` to invoke `myscript.pl` in the same commandline window so that the STDOUT from `myscript.pl` can be captured.

## Templates

### Usage Message

```perl
use Getopt::Long;
use File::Basename;

my $PrintHelp = 0;
GetOptions(
  'help|h' => \$PrintHelp,
) or die("Error in command line arguments\n");
 
# input ------------------------------------------------------------------
 
# Print the usage message if one of the followings is true:
#   - user sets no argument and no options
#   - user sets option --help or -h
if (0 == @ARGV || 1 == $PrintHelp) {
  usage();
  exit;
}

# sub-routnes ------------------------------------------------------------

sub usage {
  my $fname = basename($0);
  my $usage_message = <<USAGE_MESSAGE;
  
  $fname : descriptions.

SYNTAX

  $fname [OPTIONS] <path>

OPTIONS

  --help, -h          Print this help message and exit.

EXAMPLE

USAGE_MESSAGE

  print STDOUT $usage_message;
}
```

## Good Practice

* Do not make perl quietly delete a whole directory.
 * Rationale: There are too many ways to get the path wrong, causing perl to accidentally delete important things.
 * Alternatives:
   * (still at risk) Ask user to confirm the path to be deleted.
   * (very conservative) Never make perl to delete directories.
* Use perl built-in functions to manage the file system
 * Rationale: Using the OS system commands like `rm` in the linux system or `del` in the Windows system results in various portability issues.

## Reference

* [Active Perl](http://www.activeperl.com/ASPN/docs/ActivePerl)
* [Learn Perl](http://learn.perl.org)
* [Perl Beginners First Response](http://bfr.caseywest.com)
