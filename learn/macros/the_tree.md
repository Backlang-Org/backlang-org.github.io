# The Syntax Tree

The syntax tree consists of flexible nodes called LNodes. The structure is like [s-expressions](https://en.wikipedia.org/wiki/S-expression). A node has a target, arguments and attributes.

Calling Conventions of Targets:

' is an operator, for example: `1 + 2`
    ```
        '+(1, 2)
    ```
\# is a keyword, for example: `while true {}`
    ```
    #while(#Boolean(true), '{})
    ```
    
Literals are automaticly typed by the parser. A type is a call and a literal node as argument. So the number `42` will be treated as `#Int32(42)`. Modifiers like `public` are attributes on a node.