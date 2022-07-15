This is a short tutorial for how to set up your first Hello World Project in Back.

# 1. Install DotNet 7 Preview
> 🚀 If you already installed the DotNet 7 Preview, you can skip this step.

Download the installer or binary of the newest preview or release for your target from the [.NET 7.0 Download Page](https://dotnet.microsoft.com/en-us/download/dotnet/7.0)

After you successfully installed the preview, check if it worked by typing 
```bash
dotnet --list-sdks
```
in the terminal.

When everything worked fine, you should see something like `7.0.xxx-preview.x.xxxxx.x [PATH_TO_SDK]`

If your current version (`dotnet --version`) isn't the dotnet 7 preview, look how to change your current dotnet sdk version.

# 2. Install the Backlang templates for DotNet

For installing the templates, just type
```bash
dotnet new --install Backlang.Templates
```

> 💡 For updating the templates, you can rerun this command or type `dotnet new update`

# 3. Creating your first Project

First, make sure that you are in an empty folder. The template will put all files at the folder your terminal is currently.

Then, type
```bash
dotnet new backconsole # Basic Hello World
# or
dotnet new backlib # Simple Library Template
```

# 4. Coding and Building

Start coding in the newly generated `Program.back` file.

> 💡 If you are using VS Code, you can install our [official VS Code Extension](https://marketplace.visualstudio.com/items?itemName=furesoft.back)

When you are happy with your first Hello, World Program, type
```bash
dotnet build
```
for building it.
