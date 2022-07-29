# Custom Plugins

To create a plugin create a new dotnet assembly that targets min. Dotnet 7 and install Backlang.Contracts from nuget. You can make your plugin visible to the backlang manager by packing your assembly as nuget package with the tags `backlang` and `plugin` and publish it on nuget.

## A custom Backend

To make a backend visible to the compiler you have to export it with the `Export` annotation on your backend class that implements the `ICompilationTarget` interface. 

Here is a simple example:

```back
import Backlang.Contracts;

@Export(typeof(ICompilationTarget))
public class CustomBackend : ICompilationTarget {

}
```

The `ICompilationTarget` interface provides some methods to initialize the typesystem for your backend and your intrinsics, if you support it. To generate code you have to implement the `ITargetAssembly` interface and return it by the `Compile` method. This assembly is the actual code generator. 