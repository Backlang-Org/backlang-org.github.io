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