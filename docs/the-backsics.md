# Comments

BackLang just provides two simple comment types:

```rust
//I am a single line comment
```

```rust
/*
I am a block comment
*/
```

# Variables

to define a new variable, just type

```rust
let age = 0;
```

if you want to specify the type of a variable, you can easily do that

```rust
let name: string = "Bob";
```

A list of all backsic primitive datatypes can you find [here](https://github.com/Backseating-Committee-2k/Backlang/wiki/3.-Primitive-DataTypes).

Variables by default are immutable, so you can't change their value. To make them mutable, define it like

```rust
let mut accelerator = 3.5;
```

# If Statements

If statements behave like how you would expect them to behave.

First, you write `if`, then the condition and at last one single statement or a block.
Do it like so:

```rust
if age >= 18 {
    // the person is older than 18 years
}
```

When the condition is false, you can also run code with the `else` keyword:

```rust
if age >= 18 {
    // the person is older than 18 years
} else {
    // person is younger than 18 years
}
```

# ForEach Loops

# While Loops

# Switch Statements

Our Switch Statements got a lot of rework from normal switch statements you see in other languages.
Normal features from the switch statement behave as expected:

```java
switch element {
    case value: { print("its the value"); break; }
    default: print("its not the value :c");
}
```

The example is great for one of our new features. Do you see how annoying it is that we had to use curly braces just because we need a break?
For these things, we can just type break before our case like so:

```java
switch element {
    break case value: print("its the value");
    default: print("its not the value :c");
}
```

But look! What if we want an `if` clause after the first `case` so that it only gets executed when the first `case` failed and couldn't break.
Yeah, _normally_ we would end the `switch`, then make the `if` statement and then put the `default` code in the `else` branch. But doesn't that sound complicated? Yes, cause it is! In Back, you can just put `if` statements into a `switch` statement and also break in them like so:

```java
switch element {
    break case value: print("its the value");
    break if myFunction(element): print("my function likes it :D");
    default: print("its not the value :c");
}
```

Ok, but we got even more to show you. For example, you can check **two values** in one `case` by just typing:

```java
switch element {
    break case value: print("its the value");
    break if myFunction(element): print("my function likes it :D");
    break case value1 || value2: print("its one of those values");
    default: print("its not the value :c");
}
```

But what's when you want to check a method of the element? And the element changes? For example `switch (getRandomUUID()) { /*...*/ }`
Of course we have a solution for that! The `when` keyword:

```java
switch element {
    break case value: print("its the value");
    break if myFunction(element): print("my function likes it :D");
    break case value1 || value2: print("its one of those values");
    when >= 17: {
        print("element is greater or equal to 17.");
        break;
    }
    break when isCool(): print("converts to if element.isCool()");
    default: print("its not the value :c");
}
```

# Functions

Functions have a simple system. They can get called with arguments and execute their code, just like functions in other languages.

A quick example:
```go
func hello() {
    println("Hello!"); // see that println is also a function with a string as argument?
}

hello();
```

When you want to pass arguments trough a function, do it like so:

```go
func greet(name: string) {
    println("Morning, " + name + "!");
}

greet("Lixou");
```

For a return type, you put an arrow before the block of code:

```go
func getMyLovedNumber() -> i32 {
    return 2;
}

let lixousLovedNumber = getMyLovedNumber(); // this will be 2
```

When you want to declare the function `static` or `private` or something like that, do that before our arrow:

```go
func getMyLovedNumber() private static -> i32 {
    return 2;
}

let lixousLovedNumber = getMyLovedNumber(); // this will be 2
```

For default values, just define them in the head of the function like so:

```go
func greet(name: string = "Oh no it's nameless :c") private static -> none {
    println("Morning, " + name + "!"); 
}

greet(); // this will be "Morning, Oh no it's nameless :c!"
```

When you want to skip a default variable of a function, do it this way:

```go
func greet(name: string, thisIsUseless: bool = false) {
    println("Morning, " + name + "!"); 
}

greet(name = "Peter"); // we skip the bool "thisIsUseless" and jump directly to the name argument
```

Optional arguments has to be after normal arguments

# Structs

## Implementations

# Interfaces