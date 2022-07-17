The Backlang ecosystem is integrated into msbuild and can use all features. To start with Backlang follow this tutorial.

This is a short tutorial for how to set up your first Hello World Project in Back.

## Preparation

# 1. Install DotNet 7 Preview
> 🚀 If you already installed the DotNet 7 Preview, you can skip this step.

Download the installer or binary of the newest preview or release for your target from the [.NET 7.0 Download Page](https://dotnet.microsoft.com/en-us/download/dotnet/7.0)

After you successfully installed the preview, check if it worked by typing 
```bash
dotnet --list-sdks
```
in the terminal.

If your current version (`dotnet --version`) isn't the dotnet 7 preview, look how to change your current dotnet sdk version.

# 2. Install the Backlang templates for .Net

For installing the templates, just type
```bash
dotnet new --install Backlang.Templates
```

> 💡 For updating the templates, you can rerun this command or type `dotnet new update`

# 3. Creating your first project

Create a new empty folder and type in terminal
```bash
dotnet new backconsole
```

# 4. Coding and Building

Start coding in the newly generated `Program.back` file.

> 💡You can use any texteditor but for better experience install our [official VS Code Extension](https://marketplace.visualstudio.com/items?itemName=furesoft.back) with syntax highlighting and code completion.

To start the compilation progress write in terminal
```bash
dotnet build
```

> 💡If you use another target then .Net you have to figure out by yourself how to run it

To run the generated .Net programm
```bash
dotnet TestConsole.dll
```

# 5. Running

A program can be compiled an executet in the same step with

```bash
dotnet run
```