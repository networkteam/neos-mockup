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


## Usage Mockup Page

Set prototype of Page to `Networkteam.Neos.Mockup.Page`
## Usage Mockup Header


Set prototype of Header to `Networkteam.Neos.Mockup:Components.Molecules.Header`

## Usage Mockup Body

Set prototype of Body to `Networkteam.Neos.Mockup:Components.Templates.Page`
## Usage Mockup Navigation


Set prototype of Navigation to `Networkteam.Neos.Mockup:Components.Organisms.Navbar`
To use your custom logo / title or else, overwrite certain props you want.
E.g.:

```
  prototype(Networkteam.Neos.Mockup:Components.Organisms.Navbar) {
      title = ${site.context.currentSite.name}
      alt = ''

      titleEntity = Your.Custom.Package:Components.Atoms.Logo {
          title=${props.title}
          alt=${props.alt}
          imageSrc = Neos.Fusion:ResourceUri {
              path = 'resource://Your.Custom.Package/Public/Images/logos/logo.svg'
          }
          link = Neos.Neos:NodeUri {
              node = ${site}
          }
      }
  }
```

## Usage Placeholder

After installation you can use Placeholder-Component like any other Neos-Content-Component.

## Custom Styles / Contribution

Use `yarn` to install dependencies.

We moved the creation of stylesheets to SCSS. Compiling is possible by using `yarn start` which is a watcher for devlopment. Use `yarn build` to get a compressed production build.
