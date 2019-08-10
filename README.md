## React npm module boilerplate

This repo has the basic setup to be able to build a React Component as an npm module.

It uses Babel for building and just drops everything you had as your module in the dist folder.

It was used to build [`react-speech-recognizer-component`](https://github.com/loqtor/react-speech-recognizer) and does the trick perfectly.

### Motivation

I tried to build an npm module myself and could not find a _recipe_ I could just download and get into coding. So, I made this thing. :)

### Steps to test

Before actually start coding, it might pay to try and use this module as it is locally.

For this, you'll need to have another project where you'd try to import the module from your local maching.

For that, follow these steps:

1. From where you downloaded this repo, run `npm install`.
2. Run `npm link`. This command will build the module and make it available to be imported.
3. Go to the project where you'll test this and run `npm install [path_to_this_repo_in_your_computer]`.
4. Once the installation is done, wherever you'd like to test the package in your app, go `import ReactNpmModuleBoilerplate from '[path_as_it_appears_in_package.json]'`. So, after installing, check your package.json for `react-npm-module-boilerplate` and use **its value** as the path for the import.

You should get this repo component rendering in your app. You can use this same technique to test the one you will build.

### Steps to development

1. Update what's in the package.json with the information corresponding to your package (name, description and repo).
2. Remove what's in the `src` folder.
3. Start writing your component!

### Scripts available

- `build`: This is the one that transpiles the code to ES5 using babel.
- `prepare`: It's a hook that's run when you try to `publish` your module. It's set to build the package.
- `update`: Bumps the version up and publishes the new module version.

### Next steps

1. I guess I could add support to load CSS if required.