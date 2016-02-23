# elastic-client-generator
A node command line tool that operates on client and dsl spec and can generate code

# Here be dragons

This is still very rough, the spec for the dsl is a straight up export from NEST and hasn't gone through all the touchups yet.

The goal is to be able to do:

```shell
$ elastic-client-gen <version|sha> <lang-repos> <out-directory>
```

Different lang-repos can write their own logic but will be passed the same object model of the rest and dsl specification.

# interesting projects that could be utilized at a later stage

https://github.com/angelozerr/typescript.java

https://github.com/BestSolution-at/java2typescript
