# NCrypt [WIP]

> Simple node module wrapper over ssl functions

## Install

```
    npm i ncrypt-module -g
```

## Usage

```
    # Usage:
        const crypter = require('ncrypt-module');

        crypter.decrypt({
            key: <PRIVATE-KEY>, 
            file: <FILE-PATH>
        }).then(processResult).catch(processError);
```

## Contribute

PRs accepted.

## License

MIT © Dmitri Kunin
