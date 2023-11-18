<!-- FOR READING DOCUMENT PRESS: CTRL + SHIFT + V -->

# Design Patterns:

In this project:

- [Container/Presentational pattern](https://www.patterns.dev/vue/container-presentational) was used to develop components
- [Provider pattern](https://www.patterns.dev/vue/data-provider) was used to share information between different components
- [HOC pattern](https://www.patterns.dev/react/hoc-pattern) was used to perform specific operations and add features to the components
- [Module pattern](https://www.patterns.dev/vanilla/module-pattern).
- The services of this project were written in the form of **static class methods**. But if it was written as a public method, it would be better to use [singleton design pattern](https://www.patterns.dev/vanilla/singleton-pattern) to avoid repeatedly defining an instance of the class. This means that we create an instance of that class once and use the same instance everywhere in the project and do not create a new instance again.
