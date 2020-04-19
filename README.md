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

# I want to find your TODO comments

Please do a global search for `TODO`. I've highlighted any odd choices I've made, as well as started some conversations about the Music Link feature.

# Who's Cordell?

A local blackmetal / grindcore band that my brother is in. I thought it might be a bit more fun to use their name and photo as a backdrop rather than the ones provided 😄.

# Why haven't you implemented the Music Links?

I felt that there weren't many differences between the `Shows` and `Music` links, technically. The most interesting bit of
of the designs were around the song preview, and the UX of clicking on a row or logo

## Clicking on a Row or Logo

Upon first glance, I expected that clicking the "row" of a music link or the logo of a music streaming service
would result in the same action being taken. However, when reading the README it seemed like they actually do
different things. Clicking on the logo changes the player where as clicking on the row opens the song in that service.

I feel that this goes against the typical design language of the mobile web, as I feel it is a standard expectation of mobile
interfaces to see a "row" containing some data and a `>` character and expect that clicking on the entire row does one thing.

Additionally, I feel that it is odd for clicking an element that is lower in the hierarchy to effect a group of elements higher
than it. With most languages and reading habits people have come to that the flow of information continues left to right (or right to left), and then downward. I feel that by go against ingrained reading habits, we are creating a less than smooth UX.

## My suggestion

My suggestion to adjust the UX on selecting a platform would be that

1. The entire row performs one action. It directs the user to that song in the chosen streaming service.
2. The music player at the top plays a 30 second preview of that song
   1. The music played in the player is hosted by us (Linktree) and not an external player
      1. It's worth discussing if this is viable from both a cost standpoint (storage of songs, streaming etc.) and if this creates copyright concerns.



