Macros are code snippets that don't run at runtime, but at compiletime. That means, the code will modify or refactor while compiling.

# All predefined Macros

|Implemented Since|Name         |Description                                                        |Example|
|:---------------:|-------------|-------------------------------------------------------------------|-------|
|        1.0      |nameof       |Converts the 'key' name component of an expression to a string     |<pre>nameof(A.B<C>(D)) == "B"|
|        1.0      |concatId     |Concats 2 Ids to a new Id                                          |<pre>concatId(a, b) == ab|
|        1.0      |$variableName|Expands a variable (scoped property) assigned by a macro such as `static deconstruct()` or `static tryDeconstruct()`|NEED EXAMPLE|
|        1.0      |generateId() |Generates a new Id                                                 |<pre>generateId() == a0|
|        1.0      |target       |Compile code in body only if the given compilation target is same  |<pre>target(dotnet) { print("only run if target is .net"); }|
|        1.0      |quote        |Generates the tree of the given code                               |<pre>quote { print("Hi"); }
|        ❌       |unroll       |This macro "pastes" the same body for every entry in the given list|<pre>#unroll(it, 1..3) { print("It also has: " + it); }</pre> converts to <pre>print("It also has: 1"); print("It also has: 2"); print("It also has: 3");|
