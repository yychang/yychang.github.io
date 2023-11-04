# Windows Registry Keys
## Structure

The Windows _registry_ is structured in a tree format. Each node in the tree is called a _registry key_, and the child nodes of a node is also called the _registry subkeys_ of the node.

Each node may or may not contain the data entries, where the data entries are called _registry values_. The _registry values_ is a structure consists of 3 fields:

* The name of the _registry value_
* The data type of the _registry value_
* The data of the _registry value_

For example:

* `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\ProfileList` is a registry key
* `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\ProfileList\S-1-5-18` is also a registry key
* `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\ProfileList` has a registry value whose name, type, and data are `Public`, `REG_EXPAND_SZ`, and `%SystemDrive%\Users\Public`
* `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\ProfileList\S-1-5-18` has a registry value whose whose name, type, and data are `ProfileImagePath`, `REG_EXPAND_SZ`, and `%systemroot%\system32\config\systemprofile`.

## Basic Operations

Query
```
reg query <KeyName> [{/v <ValueName> | /ve}] [/s] [/se <Separator>] [/f <Data>] [{/k | /d}] [/c] [/e] [/t <Type>] [/z]
reg query "HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\ProfileList" /s
reg query "HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT" /f "*ProfileList*" /s
```

* The `<Data>` in `/f <Data>` can be a search pattern with wildcard character ('`*`'), and it can be the name of the registry keys

Add/Modify
```
reg add <KeyName> [{/v ValueName | /ve}] [/t DataType] [/s Separator] [/d Data] [/f]
```

Delete
```
Reg delete <KeyName> [{/v ValueName | /ve | /va}] [/f]
```


### Getting the Username from the HKEY_USERS values

Use one of the followings
```
reg query "HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\ProfileList" /s
reg query "HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\hivelist" /s
```
Ref: [Stackoverflow](https://stackoverflow.com/questions/2919286/getting-the-username-from-the-hkey-users-values)

### Getting the Windows build version

```
reg query "HKLM\Software\Microsoft\Windows NT\CurrentVersion" /v BuildLabEx
```
