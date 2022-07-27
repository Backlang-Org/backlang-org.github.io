# Bs2K 

## Intrinsics

| Intrinsic         | Explanation                                                       | Example                                                               |
|-------------------|-------------------------------------------------------------------|-----------------------------------------------------------------------|
| copy              | Copy Value                                                        | <pre><code class="language-back">copy(r0, 42);</code></pre>           |
| jump              | Jump to register or label                                         | <pre><code class="language-back">jump(r0);</code></pre>               |
| jump_eq           | Jump to register or label when equals                             | <pre><code class="language-back">jump(r0, r2);</code></pre>           |
| jump_neq          | Jump to register or label when not equals                         | <pre><code class="language-back">jump(r0, r2);</code></pre>           |
| jump_gt           | Jump to register or label when greather than                      | <pre><code class="language-back">jump(cool_label, r2);</code></pre>   |
| jump_ge           | Jump to register or label when greater equals                     | <pre><code class="language-back">jump(r0, r2);</code></pre>           |
| jump_lt           | Jump to register or label when less than                          | <pre><code class="language-back">jump(r0, r2);</code></pre>           |
| jump_le           | Jump to register or label when less equals                        | <pre><code class="language-back">jump(my_label_3, r2);</code></pre>   |
| push              | Push Value To Stack                                               | <pre><code class="language-back">push(r0);</code></pre>               |
| pop               | Pop Value From Stack                                              | <pre><code class="language-back">pop(r1);</code></pre>                |
| ret               | Return From Function                                              | <pre><code class="language-back">ret();</code></pre>                  |
| noop              | Do Nothing                                                        | <pre><code class="language-back">noop();</code></pre>                 |
| halt              | Stop Clock                                                        | <pre><code class="language-back">halt();</code></pre>                 |
| add               | Adds values from two registers and stores                         | <pre><code class="language-back">add(r1, r2, r3);</code></pre>        |
| sub               | Subtracts values from two registers and stores                    | <pre><code class="language-back">sub(r1, r2, r3);</code></pre>        |
| mult              | Multiplies values from two registers and stores in two registers  | <pre><code class="language-back">mult(r1, r2, r4, r3);</code></pre>   |
| divmod            | Divides values from two registers and stores amount and remainder | <pre><code class="language-back">divmod(r1, r2, r3, r4);</code></pre> |
| and               |                                                                   | <pre><code class="language-back">and(r1, r2, r3);</code></pre>        |
| or                |                                                                   | <pre><code class="language-back">or(r1, r2, r3);</code></pre>         |
| comp              | Compares two values from registers                                | <pre><code class="language-back">comp(r1, r2, r3);</code></pre>       |
| comp_eq           | Compares two values from registers (equals)                       | <pre><code class="language-back">comp_eq(r1, r2, r3);</code></pre>    |
| comp_neq          | Compares two values from registers (not equals)                   | <pre><code class="language-back">comp_neq(r1, r2, r3);</code></pre>   |
| comp_gt           | Compares two values from registers (greater than)                 | <pre><code class="language-back">comp_gt(r1, r2, r3);</code></pre>    |
| comp_ge           | Compares two values from registers (greater equals)               | <pre><code class="language-back">comp_ge(r1, r2, r3);</code></pre>    |
| comp_lt           | Compares two values from registers (less than)                    | <pre><code class="language-back">comp_lt(r1, r2, r3);</code></pre>    |
| comp_le           | Compares two values from registers (less equals)                  | <pre><code class="language-back">comp_le(r1, r2, r3);</code></pre>    |
| get_key_state     | Get Current Key State                                             | <pre><code class="language-back">get_key_state(r2, r3);</code></pre>  |
| poll_time         | Get Current Time                                                  | <pre><code class="language-back">poll_time(r4, r5);</code></pre>      |
| swap_framebuffers | Swap Framebuffers                                                 | <pre><code class="language-back">swap_framebuffers();</code></pre>    |

Find More On [Github](https://github.com/Backseating-Committee-2k/BackseatSafeSystem2k/blob/main/src/opcodes.rs#L332)