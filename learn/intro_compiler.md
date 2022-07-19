# The Compiler

A compiler transforms your source code into an executable that can be runned by your computer. Normally it takes many steps to convert source code to a program.

First the compiler load the source code file and group semantic information together like numbers, identifiers and symbols. Then the parser comes in an check if the language grammar is valid and build an abstract syntax tree to represent the source code in memory.

The macro expander takes the tree and run all macros to generate an expanded tree that will be taken to the transformer to build a complete typed intermediate tree. Last the code generator of the selected target build an executable of this.

<img src="https://raw.githubusercontent.com/Backlang-Org/backlang-org.github.io/main/learn/assets/Backlang-Compiler_Structure.png" />