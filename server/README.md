# server

## Getting started

```shell
# start database
docker-compose up -d
# initialize
node migration.js
```


```shell
npm start
```

## Deploy to heroku

```shell
git subtree push --prefix server heroku main
```

heroku はルートディレクトリを参照するので、 subtree で server ディレクトリを push している
