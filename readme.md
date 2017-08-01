# Spike - Bootstrap Template

[![tests](http://img.shields.io/travis/bangzek/spike-tpl-bootstrap/master.svg?style=flat)](https://travis-ci.org/bangzek/spike-tpl-bootstrap) [![dependencies](http://david-dm.org/bangzek/spike-tpl-bootstrap.svg?path=root)](https://david-dm.org/bangzek/spike-tpl-bootstrap?path=root)

[Spike](https://github.com/static-dev/spike) template for building bootstrap 4 site using sugarml and scss.

## Installation

### With Spike

- `npm i spike -g`
- `spike tpl add bootstrap https://github.com/bangzek/spike-tpl-bootstrap`
- `spike new <projectname> -t bootstrap`

...or you can make it the default with `spike tpl default bootstrap`.


### Standalone

[Spike](https://github.com/static-dev/spike) uses [sprout](https://github.com/carrot/sprout) internally to generate it's project templates. This means you can even use this template without [spike](https://github.com/static-dev/spike) by using [sprout](https://github.com/carrot/sprout) directly.

- `npm i sprout-cli -g`
- `sprout add spike-tpl-bootstrap git@github.com:bangzek/spike-tpl-bootstrap.git`
- `sprout new spike-tpl-bootstrap <myproject>`

## Options

- **name** (name of template)
- **description** (a short description of the template)
