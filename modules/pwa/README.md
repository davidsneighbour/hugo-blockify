![](header-card.png)

# DNB GoHugo Component / PWA

This is a Hugo theme component with helpers to convert your static [GoHugo](https://gohugo.io/) website into a [PWA](https://web.dev/progressive-web-apps/).

This is work in progress and while many parts are already working, some changes to the setup will occur. Please watch the releases of this repository to be alerted about changes.

## Features

- :heavy_check_mark: Favicon for apps and sites
- :heavy_check_mark: simple PWA setup
- :x: Happy Google lighthouse testing
- :x: Improvements for easier "drop in" to other websites/modules
- :x: Add layout system for offline page creation
- :x: Add configuration system
- :x: improve configuration of implemented functionality in the service worker
- :x: add detailed documentation for all configuration options

<!--- THINGSTOKNOW BEGIN --->

## Some things you need to know

These are notes about conventions in this README.md. You might want to make yourself acquainted with them if this is your first visit.

<details>

<summary>:heavy_exclamation_mark: A note about proper configuration formatting. Click to expand!</summary>

The following documentation will refer to all configuration parameters in TOML format and with the assumption of a configuration file for your project at `/config.toml`. There are various formats of configurations (TOML/YAML/JSON) and multiple locations your configuration can reside (config file or config directory). Note that in the case of a config directory the section headers of all samples need to have the respective section title removed. So `[params.dnb.something]` will become `[dnb.something]` if the configuration is done in the file `/config/$CONFIGNAME/params.toml`.

</details>
<!--- THINGSTOKNOW END --->

<!--- INSTALLUPDATE BEGIN --->

## Installing

First enable modules in your own repository if you did not already have done so:

```bash
hugo mod init github.com/username/reponame
```

Then add this module to your required modules in `config.toml`.

```toml
[module]

[[module.imports]]
path = "github.com/davidsneighbour/github.com/davidsneighbour/hugo-pwa"
disable = false
ignoreConfig = false
ignoreImports = false

```

The next time you run `hugo` it will download the latest version of the module.

## Updating

```bash
# update this module
hugo mod get -u github.com/davidsneighbour/github.com/davidsneighbour/hugo-pwa
# update to a specific version
hugo mod get -u github.com/davidsneighbour/github.com/davidsneighbour/hugo-pwa@v1.0.0
# update all modules recursively over the whole project
hugo mod get -u ./...
```
<!--- INSTALLUPDATE END --->

## Configuration

To make this component work you need to add the manifest to your _home_ output formats in `config.toml`:

```toml
[outputs]
home = [ ... others ... , "manifest" ]
```

or in `config/_default/outputs.toml`:

```toml
home = [ ... others ... , "manifest"]
```

You already should have an `[output]` section, add `"manifest"` to it. Do not add it anywhere other than in the `home` directive.

### Setup layouts

In your themes header (before `</head>`):

```gotemplate
{{ partialCached "head/pwa.html" . }}
```

This will add a link to the automatically created webmanifest with options to install the PWA. Check [Detailed configuration](#detailed-configuration) for information how to configure the contents of this file.

In your footer layout (before `</body>`):

```gotemplate
{{ partialCached "footer/service-worker.html" . }}
```

This will set up the service worker script in the footer of your website.

Notes:

- both layouts can be cached and contain no page-individual information
- check out the [todo section of the readme](#todo) for missing parts or open an issue.

### Detailed configuration

... to be written ...

## Updating

Hugo itself will check on a regular base for updates. To force an update of this module run one of the following commands on your CLI.

```shell
hugo mod get -u github.com/davidsneighbour/hugo-pwa # or
hugo mod get -u # update all modules
```

<!--- COMPONENTS BEGIN --->

## Other [GoHugo](https://gohugo.io/) components by [@davidsneighbour](https://github.com/davidsneighbour/)

<!-- prettier-ignore -->
| Component | Description |
| :--- | :--- |
| [hugo-auditor](https://github.com/davidsneighbour/hugo-auditor) | |
| [hugo-debug](https://github.com/davidsneighbour/hugo-debug) :mage_man: | Debug EVERYTHING in GoHugo. |
| [hugo-errors](https://github.com/davidsneighbour/hugo-errors) | A Hugo module that adds more versatile error pages to a site. |
| [hugo-feeds](https://github.com/davidsneighbour/hugo-feeds) | Implements various configurable feed formats. |
| [hugo-functions](https://github.com/davidsneighbour/hugo-functions) | A Hugo theme component with helper functions for other projects. |
| [hugo-giscus](https://github.com/davidsneighbour/hugo-giscus) | The Giscus comment system layout for GoHugo. |
| [hugo-head](https://github.com/davidsneighbour/hugo-head) | A GoHugo theme component that solves the old question of "What tags belong into the `<head>` tag of my website?" |
| [hugo-hooks](https://github.com/davidsneighbour/hugo-hooks) | Hooks for GoHugo layouts. An easy way for theme developers to let users add to their themes.  |
| [hugo-humans](https://github.com/davidsneighbour/hugo-humans) | Your site is made by humans. Humans.txt is naming them. |
| [hugo-icons](https://github.com/davidsneighbour/hugo-icons) | Icons for your Hugo website. |
| [hugo-internals](https://github.com/davidsneighbour/hugo-internals) | Better internal templates for GoHugo |
| [hugo-netlification](https://github.com/davidsneighbour/hugo-netlification) | a collection of tools that optimize your site on Netlify |
| [hugo-opensearch](https://github.com/davidsneighbour/hugo-opensearch) | configuration for Open Search |
| [hugo-pictures](https://github.com/davidsneighbour/hugo-pictures) | |
| [hugo-pwa](https://github.com/davidsneighbour/hugo-pwa) | Automatically turns your site into a PWA |
| [hugo-renderhooks](https://github.com/davidsneighbour/hugo-renderhooks) | render hooks for Markdown markup |
| [hugo-robots](https://github.com/davidsneighbour/hugo-robots) | Add a customizable robots.txt to your website. |
| [hugo-schema](https://github.com/davidsneighbour/hugo-schema) | |
| [hugo-search-algolia](https://github.com/davidsneighbour/hugo-search-algolia) | |
| [hugo-security](https://github.com/davidsneighbour/hugo-security) | Add a security.txt to your site with information about your preferred procedures to notify the developer team about security issues. |
| [hugo-sitemap](https://github.com/davidsneighbour/hugo-sitemap) | |
| [hugo-social](https://github.com/davidsneighbour/hugo-social) | |
| [hugo-workflows](https://github.com/davidsneighbour/hugo-workflows) | A collection of Github Actions/Workflows to optimise your work with GoHugo. |
| [hugo-youtube](https://github.com/davidsneighbour/hugo-youtube) | A shortcode and partial for lite and speedy youtube embeds. |

<!--lint disable no-missing-blank-lines -->
<!--- COMPONENTS END --->

<!--- ELEMENTS BEGIN --->

### Other elements

[Hugo elements by David's Neighbour](https://github.com/davidsneighbour) are modules that enhance and simplify your daily work with [Hugo, the world's fastest framework for building websites](https://gohugo.io/). Included are:

| Element                                                     | Description                                                                                                       |
| :---------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------- |
| [components](https://github.com/davidsneighbour/components)         | Components are preconfigured features like automatic search index creation, sitemap and robots.txt creation, etc. |
| [configurations](https://github.com/davidsneighbour/configurations) | A collection of configuration packages used in davidsneighbour                                                            |
| [debugprint](https://github.com/davidsneighbour/debugprint)         | Debugging for your Hugo layout files.                                                                             |
| [hooks](https://github.com/davidsneighbour/hooks)                   | Template hooks for Hugo themes                                                                                    |
| [libraries](https://github.com/davidsneighbour/libraries)           | Libraries are a collection of often used external packages, conveniently configured as modules for Hugo.          |
| [shortcodes](https://github.com/davidsneighbour/shortcodes)         | Shortcodes are content particles that helpfully solve repeated tasks, like presentation, galleries and so on.     |
| [testcontent](https://github.com/davidsneighbour/testcontent)       | Testcontent is a collection of testing content. Obviously.                                                        |

<!--- ELEMENTS BEGIN --->
