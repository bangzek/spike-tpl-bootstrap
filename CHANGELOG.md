# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.6.0] - 2018-01-04
### Changed
- Update dependencies
- Reorganize bootstrap's css import
- Use path.join on app.js

## [0.5.0] - 2017-12-27
### Changed
- Update dependencies
- Comply with bootstrap's autoprefixer and browserslist config
- Not splitting js on production
- Expose $ to make jquery available to other script

## [0.4.1] - 2017-10-05
### Changed
- Fix reshape root as absolute dir so the test could pass

## [0.4.0] - 2017-10-05
### Changed
- Rename layout.sgr to \_layout.sgr
- Ignore package-lock.json instead yarn.lock
- Set reshape root options for consistent layout and include path

## [0.3.0] - 2017-10-05
### Changed
- Remove postcss-calc because bootstrap css no longer need it
- Move browser list from app.js to package.json

## [0.2.0] - 2017-08-23
### Changed
- Use reshape-standard v3.0

## [0.1.0] - 2017-08-14
### Added
- Add jquery and popper.js to satisfy bootstrap 4 beta

## [0.0.2] - 2017-08-09
### Changed
- Refactor app.js to make customization easier

## [0.0.1] - 2017-08-01
### Added
- Initial release
