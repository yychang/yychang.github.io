---
aliases: 
tags: []
---

# .NET IOption

## Context

When developing a .NET application, the developer wants to use configurations to control the behaviors of individual components in the app. The developer may use `IConfiguration` to conveniently load the configurations from various sources, but the developer may want a dedicated class or struct to define strongly typed parameters and define validation methods for the user-specified configurations for each of the components in the app.

## Problem

How to convert the configurations under `IConfiguration` to some strongly typed struct, and provide some mechanism to validate the configuration data?

## Solution

Use .NET `IOption` class.

Given an `appsettings.json` as follows:

```json 
{
    "ComponentXOptions": {
        "ParameterX1": true,
        "ParameterX2": "This is a string."
    },
    "ComponentYOptions": {
        "ParameterY1": true,
        "ParameterY2": "This is a string."
    },
}
```

The developer can create a `ComponentXOptions` class, with the member methods whose names match the field names under "ComponentXOptions" in the JSON file above.

```csharp
public sealed class ComponentXOptions
{
    public bool ParameterX1 { get; set; }
    public string ParameterX2 { get; set; }
}
```

Then the developer can implement the following in the `Program.cs` C# file to convert the configurations loaded from the `appsettings.json` file to the `ComponentXOptions` class object:

```csharp
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using ConsoleJson.Example;

HostApplicationBuilder builder = Host.CreateApplicationBuilder(args);

builder.Configuration.Sources.Clear();

IHostEnvironment env = builder.Environment;

builder.Configuration
    .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)

ComponentXOptions options = new();
builder.Configuration.GetSection(nameof(ComponentXOptions))
    .Bind(options);

Console.WriteLine($"X.ParameterX1={options.ParameterX1}");
Console.WriteLine($"X.ParameterX2={options.ParameterX2}");
```

## Reference

* https://learn.microsoft.com/en-us/dotnet/core/extensions/options

