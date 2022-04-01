# Deno Installation

Open a new terminal:

```bash
$ curl -fsSL https://deno.land/x/install/install.sh | sh
```

Alternatively, if you already have Cargo installed you can use the following:

```bash
$ cargo install deno --locked
```

Turns out that in my local debian 10 I got:

```text
cargo:  build failure
        
        Caused by:   feature `edition2021` is required  
```

Updating the update channel list:

```bash
$ rustup default beta && rustup update
```

To verify the installation run:

```bash
$ deno --version
```

To upgrade the installation run, use `--version x.y.z` to specify the desired version:

```bash
$ deno upgrade
```
