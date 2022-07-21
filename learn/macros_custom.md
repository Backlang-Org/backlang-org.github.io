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
