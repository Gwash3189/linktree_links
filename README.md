# Linktree Assessment
Author: Adam Beck

## How do I start this?

Everything should be pre-built. All you need to do is open the `static/index.html` file.

## I want to make a fresh build of this thing, how do I do that?

Please install **yarn** globally via **npm**. I've chosen to use yarn as it is a tool I am comfortable with as well as it's ability to store an offline cache of the packages required to get this project going.

All of the offline packages are stored in `packages-cache`.

To install yarn, execute the following command:

```
npm install yarn -g
```

Once `yarn` is installed, please execute the following commands from **within the directory**

```
yarn install --offline && yarn build

```

then open `static/index.html`
