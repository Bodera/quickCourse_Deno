# Appendix

This is the appendix file.

## deno-and-angular

Lorem ipsum.

### Cargo

Rust builder.

### Cotton

I had to downgrade deno to version 1.8.0 in order to properly use this module.

```bash
$ deno install --unstable --allow-net --allow-read --allow-write --reload -n cotton https://deno.land/x/cotton@v0.7.5/cli.ts
$ export PATH="/home/bode/.deno/bin:$PATH"
$ cotton migration:create --name populateUsersTable --config config/ormconfig.json
```

it will create a similar table like this one below, plus the instructions given in the migration file. To reload the migration delete the records on the table `migration`.

```sql
CREATE TABLE migrations(
    id INT AUTO_INCREMENT,
    name VARCHAR(255) NULL,
    batch INT NULL,
    CONSTRAINT migrations_pk PRIMARY KEY (id)
);
```

### Deno.Land/x

Deno.land/x is a hosting service for Deno scripts. It caches releases of open source modules stored on GitHub and serves them at one easy to remember domain.

### Denon

A file watcher with automatically code refresh. Similar to the way that nodemon works, it is very helpful to trace if our server had acquire an non intentional behaviour with the last changes and the scripts file can facilitate commands to perform tests.

To start using Denon run:

```bash
$ deno install -qAf --unstable https://deno.land/x/denon/denon.ts
```

Then added the bin folder of Deno to PATH.

```bash
$ export PATH="/home/user/.deno/bin:$PATH"
```

Use `denon --init` to create the denon base script file, and `denon start` where start is a name of a block of commands in your generated `script.json` file.

### Docker

We're going to connect to a SQL database server allocated inside a Docker container, in my case I've picked up MariaDB. Here I assume that docker is already installed, and properly configured also.

```bash
$ docker search mariadb
$ docker pull mariadb
$ mkdir /var/lib/mysql -p
$ docker run -d --name mariadb-server -p 3306:3306 -v /var/lib/mysql:/var/lib/mysql -e "MYSQL_ROOT_PASSWORD=kamisama123" mariadb
> "docker container id will be printed"
$ docker container start "docker container id"
$ docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' mariadb-server #IP Addres Docker MariaDB
```

To access the database do:

```bash
$ docker exec -it mariadbtest bash
> mysql -u root -p
Enter password: ***
MariaDB[(none)] > #login successful
```

### OAK

A middleware framework inspired on KOA.

### Mod.ts

The module file, present in every script Deno lib/project.

### Validasaur

It's a Deno third-party module that help us validate user input, slightly inspired by Laravel Validation.
