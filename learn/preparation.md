# Preparation

Backlang is integrated to the msbuild eco system and can be installed and used easily. To start with Backlang follow this guide.

## 1. Install DotNet 7 Preview

Download the installers of the .net sdk and runtime for your operating system from the [.NET Download Page](https://dotnet.microsoft.com/en-us/download/dotnet/7.0)

After the installation type `dotnet --list-sdks` in the terminal to check if the sdk is correctly installed.

To verify if you have installed the right runtime use `dotnet --version`

## 2. Tooling

To have an easier start for a new project install the official template pack with `dotnet new --install Backlang.Templates`. To create a new project use `dotnet new backconsole`. 

> 💡 To update templates use `dotnet new update`

> 💡 You can use any texteditor but for better experience install our [official VS Code Extension](https://marketplace.visualstudio.com/items?itemName=furesoft.back) with syntax highlighting and code completion.

## 3. Building and Running

To build an executable use the `dotnet build` command in the project folder. If you have selected the .Net target you can run it directly with `dotnet TestConsole.dll`. To combine those steps together you can simply use `dotnet run`. 

> 💡 If you use another target than .Net you have to figure out by yourself how to run it