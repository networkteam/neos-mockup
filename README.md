# neos-mockup
A Neos package providing basic mockup functionality for content-first approach

## Install package

1. Install **neos base distribution** via composer https://www.neos.io/download-and-extend.html

2. Require package `networkteam/neos-mockup` as composer dependency 
```bash
composer require "networkteam/neos-mockup"
```
3. Remove `neos/demo` package
```bash
composer remove package neos/demo
```
4. Follow Neos setup (http://your-neos.site/setup) and **create a new site package with a dummy site**
5. Log into Neos backend (http://your-neos.site/neos)

## Custom Styles / Contribution

Use `yarn` to install dependencies.

We moved the creation of stylesheets to SCSS. Compiling is possible by using `yarn start` which is a watcher for devlopment. Use `yarn build` to get a compressed production build. 


