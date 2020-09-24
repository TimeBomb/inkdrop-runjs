Execute javascript in your Inkdrop notes. Leverages npm's vm2 module to act as a secure sandbox when executing your javascript.

## Install

```
ipm install runjs
```

## Usage

    ```runjs
    [1,2,3].map(number => number + 1)
    ```

Will be executed in a secure sandbox and rendered as:

```
[2, 3, 4]
```
