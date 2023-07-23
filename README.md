Welcome to **Learning Platform**

Are you looking for a fun and engaging way to learn programming? Do you want to create your own games, apps, and animations? If yes, then you should check out **Saint Giong**, the learning platform built by the cpp team!

**Saint Giong** is a platform where children can learn programming in a visual and interactive way. You can choose from different languages, such as C++, Python, or JavaScript, and follow the tutorials and challenges to master the basics of coding. You can also use the built-in editor and simulator to design and test your own projects. **Saint Giong** will help you develop your logical thinking, problem-solving, and creativity skills.

## Configured with

- [Golang](https://go.dev/): An open-source programming language supported by Google
- [ReactJS](https://react.dev/): The library for web and native user interfaces
- [Unity](https://unity.com/): A cross-platform game engine developed by Unity Technologies
- [Ant Design](https://ant.design/): Help designers/developers building beautiful products more flexible and working with happiness
- [PostgreSQL](https://www.postgresql.org/): The World's Most Advanced Open Source Relational Database
- [jwt-go](https://github.com/golang-jwt/jwt): JSON Web Tokens (JWT) as middleware
- [go-redis](https://github.com/go-redis/redis): Redis support for Go
- SSL Support

### Installation

```
$ go get github.com/knailk/learning-platform
```

```
$ cd $GOPATH/src/github.com/knailk/learning-platform
```

```
$ go mod init
```

```
$ go install
```

You will find the **database.sql** in `db/database.sql`

And you can import the postgres database using this command:

```
$ psql -U postgres -h localhost < ./db/database.sql
```

Generate SSL certificates (Optional)

> If you don't SSL now, change `SSL=TRUE` to `SSL=FALSE` in the `.env` file

You can following [this tutorial](https://www.section.io/engineering-education/how-to-get-ssl-https-for-localhost/) to generate SSL key for your localhost ^^

Setup Redis server:
> The fastest way to setup redis server is to run the available docker image
```
$ docker pull redis
```
```
$ docker run -p 6380:6379 redis
```
> Make sure to change the values in .env for your databases
```
$ go run main.go
```



