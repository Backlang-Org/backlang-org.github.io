# Functions

Functions have a simple system. They can get called with arguments and execute their code, just like functions in other languages

A quick example:
```back
func hello() {
    println("Hello!"); // see that println is also a function with a string as argument?
}

hello();
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

let lixousLovedNumber = getMyLovedNumber(); // this will be 2
```

When you want to declare the function `static` or `private` or something like that, do that before our arrow

```back
private static func getMyLovedNumber() -> i32 {
    return 2;
}

let lixousLovedNumber = getMyLovedNumber(); // this will be 2
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