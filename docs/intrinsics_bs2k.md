# Bs2K Intrinsics

| Intrinsic         | Explanation           | Example                                                              |
|-------------------|-----------------------|----------------------------------------------------------------------|
| copy              | Copy Value            | <pre><code class="language-back">copy(r0, 42);</code></pre>             |
| push              | Push Value To Stack   | <pre><code class="language-back">push(r0);</code></pre> |
| pop               | Pop Value From Stack  | <pre><code class="language-back">pop(r1);</code></pre>            |
| return            | Return From Function  | <pre><code class="language-back">return();</code></pre>        |
| nop               | Do Nothing            | <pre><code class="language-back">nop();</code></pre>                 |
| get_key_state     | Get Current Key State | <pre><code class="language-back">get_key_state(r2, r3);</code></pre>          |
| poll_time         | Get Current Time      | <pre><code class="language-back">poll_time(r4, r5);</code></pre>  |
| swap_framebuffers | Swap Framebuffers     | <pre><code class="language-back">swap_framebuffers();</code></pre>              |

Find More On [Github](https://github.com/Backseating-Committee-2k/BackseatSafeSystem2k/blob/main/src/opcodes.rs#L332)