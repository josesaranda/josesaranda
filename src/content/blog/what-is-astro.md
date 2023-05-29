---
slug: what-is-astro
title: What is astro?
language: en
image: /images/blog/astro-bg.jpeg
---

**Astro** is an **all-in-one web framework** for building fast, content-focused websites.

It means many things, here you have listed some of benefits of using Astro:

- **Component Islands:** A new web architecture for building faster websites.
- **Server-first API design:** Move expensive hydration off of your users’ devices.
- **Zero JS, by default:** No JavaScript runtime overhead to slow you down.
- **Edge-ready:** Deploy anywhere, even a global edge runtime like Deno or Cloudflare.
- **Customizable:** Tailwind, MDX, and 100+ other integrations to choose from.
- **UI-agnostic:** Supports React, Preact, Svelte, Vue, Solid, Lit and more.

You can create a new project just typing one line into your terminal:

```shell
# create a new project with npm
npm create astro@latest
```

# Why Astro?

Why choose Astro over another web framework? Here are five core design principles to help explain why we built Astro, the problems that it exists to solve, and why Astro may be the best choice for your project or team.

**Astro is…**

- **Content-focused:** Astro was designed for content-rich websites.
- **Server-first:** Websites run faster when they render HTML on the server.
- **Fast by default:** It should be impossible to build a slow website in Astro.
- **Easy to use:** You don’t need to be an expert to build something with Astro.
- **Fully-featured,** but flexible: Over 100+ Astro integrations to choose from.

## MPAs vs. SPAs

Understanding the tradeoffs between **Multi-Page Application (MPA)** and **Single-Page Application (SPA)** architecture is key to understanding what makes Astro different from other web frameworks like _Next.js_ and _Remix_.

### Terminology

A **Multi-Page Application (MPA)** is a website consisting of multiple HTML pages, mostly rendered on a server. When you navigate to a new page, your browser requests a new page of HTML from the server. Astro is an MPA framework. Traditional MPA frameworks also include _Ruby on Rails_, _Python Django_, _PHP Laravel_, _WordPress_, _Joomla_, _Drupal_ and static site builders like _Eleventy_ or _Hugo_.

A **Single-Page Application (SPA)** is a website consisting of a single JavaScript application that loads in the user’s browser and then renders HTML locally. SPAs may also generate HTML on the server, but SPAs are unique in their ability to run your website as a JavaScript application in the browser to render a new page of HTML when you navigate. _Next.js_, _Nuxt_, _SvelteKit_, _Remix_, _Gatsby_, and _Create React App_ are all examples of SPA frameworks.

## Are MPAs Better than SPAs?

When comparing MPAs vs SPAs, there is no “better” or “worse” choice. It all comes down to tradeoffs.

Astro prioritizes the performance and simplicity of MPAs because it makes the most sense for our use-case of content-focused websites. More stateful, interaction-heavy websites may benefit more from the app-like architecture that SPAs bring at the expense of first-load performance.

### Resources

- [Axios web page](https://astro.build)
- [josesaranda.es - github repo](https://github.com/josesaranda/josesaranda)
