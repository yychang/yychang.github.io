---
aliases: []
tags:
  - quick-ref
---

# Windows Programming Quick Reference

## Audio  
  
MSDN:  
 
* [Audio Signal Processing Modes](https://docs.microsoft.com/en-us/windows-hardware/drivers/audio/audio-signal-processing-modes)  
    * [Available Signal Processing Modes](https://docs.microsoft.com/en-us/windows-hardware/drivers/audio/audio-signal-processing-modes#available-signal-processing-modes)
* [AudioCategory Enum](https://docs.microsoft.com/en-us/uwp/api/Windows.UI.Xaml.Media.AudioCategory)
* [Ksmedia.h](https://docs.microsoft.com/en-us/windows-hardware/drivers/audio/ksmedia-h)
* [KSAUDIO_MICROPHONE_COORDINATES](https://docs.microsoft.com/en-us/windows-hardware/drivers/ddi/ksmedia/ns-ksmedia-ksaudio_microphone_coordinates)  
  
## SAL, Error Code, and Other Info

MSDN:  
  
* [SAL 2 Annotation](https://msdn.microsoft.com/en-us/library/hh916382.aspx)
* [Windows Error Codes](https://msdn.microsoft.com/en-us/library/cc231196.aspx)
* [Windows Locale Codes](https://msdn.microsoft.com/en-us/library/cc233982.aspx)
* [Interprocess Communications](https://msdn.microsoft.com/en-us/library/windows/desktop/aa365574(v=vs.85).aspx)
* [Compiler Options Listed by Category](https://msdn.microsoft.com/en-US/library/19z1t1wy.aspx)
  
## MSBuild.exe Command-line  

### Basics  
  
Example location under Visual Studio  
  
``` 
c:\Program Files (x86)\Microsoft Visual Studio\2017\Enterprise\MSBuild\15.0\Bin\MSBuild.exe 
``` 
  
Build a Visual Studio project/solution with specific configuration and platform:

```
msbuild.exe my_sample.sln -p:Configuration=Release -p:Platform=x64
```
  
Clean and build the projection/solution:

```
msbuild.exe my_sample.sln -t:Clean;Build
```

### Specify some preprocessors from command-line

As of 2019/11, there seems no straight-forward solution for this task. One reasonable work-around is to create a user-defined variable in `vcxproj` file to pass the preprocessors from command-line to the compile command.  
  
* Step 1: Modify `vcxproj` to add a user-specified variable to the `<AdditionalOptions>` element under `<ClCompile>`  
* Step 2: Set the user-specified variable in the CMD environment where `msbuild` will be invoked.  
  
Assuming the user-specified variable is named "`ExternalCompilerOptions`", step 1 will add/modify the `<ClCompile>` element in the `vcxproj` file as follows:  
  
```  
<ClCompile>  
    <AdditionalOptions>$(ExternalCompilerOptions)</AdditionalOptions>  
</ClCompile>  
```  
  
Now, to compile the project with a preprocessor `FOO` defined, and another preprocessor `BAR` defined as 1, the user just set the `ExternalCompilerOptions` accordingly before calling `msbuild`  
  
```  
set ExternalCompilerOptions=/DFOO /DBAR=1  
msbuild my_sample.sln  
```