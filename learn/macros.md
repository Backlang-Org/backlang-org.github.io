# Macros

A Macro is a function which will be called at compile time and replaces the macro-call with a new sub-tree.
Macros can match different properties of the tree. A macro call can look like integrated language constructs to hide complextity from the callee.

Here are some examples how macros can be called:

```back
quote(hello);

quote {
    hello;
}

quote(simplyfy) {
    hello;
}

quote;
```

If a macro is called with a block the block will be treated as last argument. If no arguments are specified the parenthesis can be leaved out.

## All predefined Macros

| Implemented Since | Name          | Description                                                       | Example                                                      |
|:-----------------:|---------------|-------------------------------------------------------------------|--------------------------------------------------------------|
|        1.0        | nameof        | Converts the 'key' name component of an expression to a string    | <pre>nameof(A.B<C>(D)) == "B"                                |
|        1.0        | concatId      | Concats 2 Ids to a new Id                                         | <pre>concatId(a, b) == ab                                    |
|        1.0        | $variableName | Expands a variable (scoped property)                              | <pre>if $target == "dotnet" {}</pre>                         |
|        1.0        | generateId()  | Generates a new Id                                                | <pre>generateId() == a0                                      |
|        1.0        | target        | Compile code in body only if the given compilation target is same | <pre>target(dotnet) { print("only run if target is .net"); } |
|        1.0      |quote        |Generates the tree of the given code                               |<pre>quote { print("Hi"); }
|        ❌       |unroll       |This macro "pastes" the same body for every entry in the given list|<pre>#unroll(it, 1..3) { print("It also has: " + it); }</pre> converts to <pre>print("It also has: 1"); print("It also has: 2"); print("It also has: 3");|

## Writing Custom Macros

To write a custom macro you have to provide an annotation to it to tell on which type of node you want to match.

```back

@MacroInfo("A macro for writing Tests", "test", MacroMode.Call)
macro MyTestMacro(node : LNode, context : IMacroContext) {
    let testName = node.Args[0];
    let body = node.Args[1];

    return quote {
        public func $testName() {
            $body;
        }
    }
}

```

The macro called

```back
test(something_should_pass) {
    assert(true);
}
```

expands to

```back
public func something_should_pass() {
    assert(true);
}
```
