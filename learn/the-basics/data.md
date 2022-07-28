# Working With Data

## Structs

## Declaring structs
A struct is something like a wrapper for different values. It is a valuetype and allocated on the stack (.Net, it can differe for other backends). A struct can only have values. A struct is always immutable. 

The syntactic structure of a struct:
```ebnf
<struct_value> ::= "let" <name> ":" <typename> ";"
<struct_declaration> ::= <modifier>? "struct" <name> "{" <struct_value>* "}"
```

Because of the immutability the struct generates an automatic constructor to init all values at allocation.

A simple example:
```back
public struct Point {
    let X : i32;
    let Y : i32;
}
```

## Working with structs

To create an instance of a struct you have to call the constructor. 

```back
let p = Point::new(5, 8);
```

The code above creates a new instance of the struct `Point` and calls the constructor to initialize the field `X` with 5 and the field `Y` with 8.

To pass a specific field to a function for example you can use the `.`-operator.

```back
print(p.X);
print(p.Y);
```