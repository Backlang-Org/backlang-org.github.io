# Intrinsics

An intrinsic is an instruction that compiles direktly to the targetet platform. In Backlang you can specify which block of instrinsic instructions are compiled based on the target. Every intrinsic instruction is a simple function call without return value.

```back
inline(dotnet) {
    ldc_i4(42);
}
```

A List of available intrinsics are available for (Dotnet)[/docs/intrinsics_dotnet] and (Bs2K)[/docs/intrinsics_bs2k]
