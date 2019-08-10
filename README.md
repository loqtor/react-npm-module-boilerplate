## React npm module boilerplate

This repo has the basic setup to be able to build a React Component as an npm module.

It uses Babel for building and just drops everything you had as your module in the dist folder.

It was used to build [`react-speech-recognizer-component`](https://github.com/loqtor/react-speech-recognizer) and does the trick perfectly.

### Motivation

I tried to build an npm module myself and could not find a _recipe_ I could just download and get into coding. So, I made this thing. :)

### Steps to use

1. Updated what's in the package.json with the information corresponding to your package (name, description and repo).
2. Remove what's in the `src` folder.
3. Start writing your component!

### Next steps

1. I guess I could add support to load CSS if required.