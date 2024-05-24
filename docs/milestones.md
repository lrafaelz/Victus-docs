# Milestones

## On VitePress side

Be sure to:

- Correctly use [Public Directory](https://vitepress.dev/guide/asset-handling#the-public-directory) for your images (but you shoud always do that)
- Donot use [Clean Urls](https://vitepress.dev/guide/routing#generating-clean-url)

## On Read The Docs side

Use this configuration

```yaml
# .readthedocs.yaml

# Read the Docs configuration file for Sphinx projects
# See https://docs.readthedocs.io/en/stable/config-file/v2.html for details

# Required
version: 2

# Set the OS, Python version and other tools you might need
build:
  os: ubuntu-22.04
  tools:
    nodejs: "18"
  commands:
    - mkdir --parents $READTHEDOCS_OUTPUT/html/
    - cd docs && npm ci
    - cd docs && npm run docs:build -- --base "/$READTHEDOCS_LANGUAGE/$READTHEDOCS_VERSION/"
    - cp --recursive docs/.vitepress/dist/* $READTHEDOCS_OUTPUT/html/
```
