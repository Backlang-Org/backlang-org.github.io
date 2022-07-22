# Preparation

Backlang is integrated to the msbuild eco system and can be installed and used easily. To start with Backlang follow this guide.

## 1. Install DotNet 7 Preview

Download the installers of the .net sdk and runtime for your operating system from the [.NET Download Page](https://dotnet.microsoft.com/en-us/download/dotnet/7.0)

After the installation type `dotnet --list-sdks` in the terminal to check if the sdk is correctly installed.

To verify if you have installed the right runtime use `dotnet --version`

## 2. Tooling

To have an easier start install the Backlang-Manager `dotnet tool install --global Backlang-Manager`. This application can easily install the backlang sdk, templates and the vscode extension for you. For installing the complete toolset `backlang install --with-extension`

> 💡 To Install the sdk you need admin rights.


## 3. Building and Running

To build an executable use the `dotnet build` command in the project folder. If you have selected the .Net target you can run it directly with `dotnet TestConsole.dll`. To combine those steps together you can simply use `dotnet run`. 

> 💡 If you use another target than .Net you have to figure out by yourself how to run it