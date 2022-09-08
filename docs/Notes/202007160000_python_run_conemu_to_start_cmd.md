# Use Python to run ConEmu to start a new CMD window

Sample:

```python
import subprocess

cmd_to_execute = 'c1.bat & c2.bat & c3.bat'
root_path = 'C:/Temp'

my_cmd = [
    'start',
    'ConEmu64.exe',
    '-single',
    '-Dir', root_path,
    '-run', 'cmd', '/k', '%s' % (cmd_to_execute),
    '-new_console:P:<Standard VGA>',
    '-new_console:a'
]
subprocess.run(my_cmd, shell=True)
```
