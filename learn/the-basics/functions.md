# Functions


A piece of code can be combined as function. Functions can expect parameters and can return a value. The simplest function is the `println` function to print a message to the outputstream (for example the console).

The syntactic structure:
```ebnf
<parameter> ::= <name> ":" <typename> ("=" <expression>)?
<parameter_list> ::= <parameter> || <parameter> "," <parameter_list>
<function_definition> ::= <modifier>? "func" <name> "(" <parameter_list>* ")" ("->" <typename>)? "{" <body> "}"
```

A quick example:
```back
func printHello() {
    println("Hello!");
}
```

When you want to pass arguments trough a function, do it like so

```back
func greet(name: string) {
    println("Morning, " + name + "!");
}

greet("Lixou");
```

For a return type, you put an arrow before the block of code

```back
func getMyLovedNumber() -> i32 {
    return 2;
}

let lovedNumber = getMyLovedNumber(); // this will be 2
```



```back
private static func getMyLovedNumber() -> i32 {
    return 2;
}

let lovedNumber = getMyLovedNumber(); // this will be 2
```

For default values, just define them in the head of the function like so

```back
private static func greet(name: string = "Oh no it's nameless :c") -> none {
    println("Morning, " + name + "!"); 
}

greet(); // this will be "Morning, Oh no it's nameless :c!"
```

Generic Arguments will be defined with the `where` keyword after the arguments

```back
private static func myCoolFunction(smth: T) where T: GameObject -> T {
    // code...
}
```

When you want to skip a default variable of a function, do it this way

```back
func greet(thisIsUseless: bool = false, name: string) {
    println("Morning, " + name + "!"); 
}

greet(name = "Peter"); // we skip the bool "thisIsUseless" and jump directly to the name argument
```

Optional arguments has to be after normal arguments
