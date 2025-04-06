---
aliases: 
tags: []
---

# .NET IConfiguration

## Context

When developing a .NET application, the developer may use various sources to specify the configurations of the app, for example:

* Setting files like `appsettings.json`
* Environment variables
* Command-line arguments

The developer wants to load the configurations from all different sources and consolidate them into a unified format, such as a dictionary.

## Problem

How doe the developer load the configurations from all different sources?

## Solution

Use .NET `IConfiguration` class.

[HostApplicationBuilder](https://learn.microsoft.com/en-us/dotnet/api/microsoft.extensions.hosting.hostapplicationbuilder?view=net-9.0-pp) comes with a [Configuration](https://learn.microsoft.com/en-us/dotnet/api/microsoft.extensions.hosting.hostapplicationbuilder.configuration?view=net-9.0-pp#microsoft-extensions-hosting-hostapplicationbuilder-configuration) property, which is a [ConfigurationManager](https://learn.microsoft.com/en-us/dotnet/api/microsoft.extensions.configuration.configurationmanager?view=net-9.0-pp) object that provides various methods to load the configurations from different sources.

See [Configuration providers in .NET (learn.microsoft.com)](https://learn.microsoft.com/en-us/dotnet/core/extensions/configuration-providers#command-line-configuration-provider) for code snippets.

## Reference

https://learn.microsoft.com/en-us/dotnet/core/extensions/configuration