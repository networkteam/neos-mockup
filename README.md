# neos-mockup
A Neos package providing basic mockup functionality for content-first approach

## Install package

1. Install **neos base distribution** via composer https://www.neos.io/download-and-extend.html
2. Add git repository `https://github.com/networkteam/neos-mockup.git` to root `composer.json`
```yaml
{
    ...
    "repositories": [
        {
            "type": "git",
            "url": "https://github.com/networkteam/neos-mockup.git"
        }

    ]
    ...
}
```
3. Require package `networkteam/neos-mockup` as composer dependency 
```bash
composer require "networkteam/neos-mockup:@dev"
```
4. Remove `neos/demo` package
```bash
composer remove package neos/demo
```
5. Follow Neos setup (http://your-neos.site/setup) and **create a new site package with a dummy site**
6. Log into Neos backend (http://your-neos.site/neos)
