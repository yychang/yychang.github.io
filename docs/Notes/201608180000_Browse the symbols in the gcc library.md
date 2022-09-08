# Browse the symbols in the gcc library (.o, .a, .elf)

readelf -s -W mylib.o

\# -C: showing the demangled symbols

nm -gC mylib.a

Note: Git for Windows does not seem to provide readelf and nm. Octave comes with these two executable though.
