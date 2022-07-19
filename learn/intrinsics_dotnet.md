# Dotnet Intrinsics

| Intrinsic | Explanation                | Example                                                                       |
|-----------|----------------------------|-------------------------------------------------------------------------------|
| ld_null   | Load Null                  | <pre><code class="language-back">ld_null();</code></pre>                      |
| ld_str    | Load String                | <pre><code class="language-back">ld_str("Hello World");</code></pre>          |
| ldc_i4    | Load Integer Constant      | <pre><code class="language-back">ldc_i4(42);</code></pre>                     |
| ldc_i8    | Load Long Integer Constant | <pre><code class="language-back">ldc_i8(420000);</code></pre>                 |
| ldc_r4    | Load Float Constant        | <pre><code class="language-back">ldc_r4(3.14);</code></pre>                   |
| ldc_r8    | Load Long Float Constant   | <pre><code class="language-back">ldc_r8(3.1400000011);</code></pre>           |
| ldarg     | Load Argument              | <pre><code class="language-back">ldarg(0);</code></pre>                       |
| ldloc     | Load Local                 | <pre><code class="language-back">ldloc(myVariable);</code></pre>              |
| ldfld     | Load Field                 | <pre><code class="language-back">ldfld(myField);</code></pre>                 |
| stfld     | Store Field                | <pre><code class="language-back">stfld(myField);</code></pre>                 |
| add       | Add 2 Values Together      | <pre><code class="language-back">add();</code></pre>                          |
| neg       | Negate Value               | <pre><code class="language-back">negate();</code></pre>                       |
| nop       | Do Nothing                 | <pre><code class="language-back">nop();</code></pre>                          |
| ret       | Return                     | <pre><code class="language-back">return();</code></pre>                       |
| throw     | Throw An Exception         | <pre><code class="language-back">throw(Exception::new("Error"));</code></pre> |

Find More On [Wikipedia](https://en.wikipedia.org/wiki/List_of_CIL_instructions)