# Intrinsics

An intrinsic is an instruction that compiles directly to the targetet platform. In Backlang you can specify which block of instrinsic instructions are compiled based on the target. Every intrinsic instruction is a simple function call without return value.

```back
inline(dotnet) {
    ld_str("Hello {0}");
    ldc_i4(42);
    call(System.Console::WriteLine(string, obj));
}
```

```back
inline(bs2k) {
    copy(R1, 1);
    label("loop");
        copy(R2, 64);
        add(R1, R2, R3);
        push(R3)
        call(std::put_char(char));
        jump("loop");
}
```

A List of available intrinsics are available for [Dotnet](/#/learn/intrinsics_dotnet)
