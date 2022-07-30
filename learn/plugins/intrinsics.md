# Intrinsics for the custom backend

To provide custom intrinsic methods you have to create a static class with static methods and provide the type in your `ICompilationTarget` implementing class. The compiler automaticly checks if the method is present and convert the intrinsic to a real method on your intrinsic class. Simple values are automaticly passed to your intrinsic methods. 

## Identifiers

You can use identifiers to represent for example registers and give addresses names. A custom identifier is present by an enum. You have to provide it as static field on your intrinsic class. Now you can use your enum in intrinsic methods.
To give numbers only a name like special addresses you can add a `IntrinsicAlias` annotation to your enum. The IntrinsicAlias enums will be automaticly converted to its value.

