# thejungle
scss utility collection

![bengi](./sig.png)


[![npm](https://img.shields.io/npm/v/thejungle.svg?style=flat-square)](https://www.npmjs.com/package/thejungle)
[![npm](https://img.shields.io/npm/dt/thejungle.svg?style=flat-square)](https://www.npmjs.com/package/thejungle)


<details>
<summary>Why is the name thejungle?</summary>
<p></p>

![bengi](./god.jpg)
</details>

## Install
```sh
npm install thejungle
```

```scss
@use 'thejungle' as tj;
```

## API

### functions
#### strip-unit(number)
```scss
@debug tj.strip-unit(3em); // => 3

@debug tj.strip-unit(4pt); // => 4
```

#### em(value [, base=16px])
```scss
@debug tj.em(12px); // => 0.75em

@debug tj.em(12px, 12px); // => 1em
```

##### Override default base
```scss
@use 'thejungle' as tj with (
    $default-base-size: 12px
)

@debug tj.em(12px); // => 1em
```

#### rem(value [, base])
```scss
@debug tj.rem(12px); // => 0.75.rem

@debug tj.rem(12px, 12px); // => 1rem
```

##### Override default base
```scss
@use 'thejungle' as tj with (
    $default-base-size: 12px
)

@debug tj.rem(12px); // => 1em
```

#### between(from-value, to-value [, from-screen=320px, to-screen=1200px])
Returns a formula that satisfies values ​​at each screen.

```scss
@debug tj.between(10px, 100px, 400px, 1000px); // => calc(15vw - 50px);
```

##### Override default screen size
```scss
@use 'thejungle' as tj with (
    $default-from-screen: 400px,
    $default-to-screen: 1800px
)

@debug tj.between(10px, 100px); // => tj.between(10px, 100px, 400px, 1800px);
```

#### pos-shorthand(args [, default])
```scss
@function fn1($args...) {
    @debug tj.pos-shorthand($args);
}
@function fn2($args...) {
    @debug tj.pos-shorthand($args, (top: 10px, left: 10px));
}

// empty arguments
fn1(); // => ()
fn2(); // => (top: 10px, left: 10px;)

// unnamed arguments
fn1(1px); // => (top: 1px; right: 1px; bottom: 1px; left:1px)
fn1(1px, 2px); // => (top: 1px; right: 2px; bottom: 1px; left:2px)
fn1(1px, 2px, 3px); // => (top: 1px; right: 2px; bottom: 3px; left:2px)
fn1(1px, 2px, 3px, 4px); // => (top: 1px; right: 2px; bottom: 3px; left:4px)

// named arguments
fn1($top: 5px); // => (top: 5px;)
fn2($top: 5px); // => (top: 5px; left:10px)
```

##### Override default position
```scss
@use 'thejungle' as tj with (
    $default-pos-shorthand: (top: 30px; left: 100px)
)
```

### mixins

#### size(width [, height=width])
```scss
@include tj.size(50px); // => width: 50px; height: 50px;

@include tj.size(50px, 100px); // => width: 50px; height: 100px;
```

#### text-hide()
##### source
```scss
@include tj.text-hide();
```
##### output
```scss
overflow: hidden;
text-indent: -9999px;
```

#### ellipsis(max-width)
##### source
```scss
@include tj.ellipsis(100px);
```
##### output
```scss
max-width: 100px;
display: inline-block;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
```

#### clearfix
##### source
```scss
.a {
    @include tj.clearfix;
}
```
##### output
```css
.a::after {
    content: '';
    display: block;
    clear: both;
}
```

#### stretch([top=0, right=top, bottom=top, left=top])
##### source
```scss
@include tj.stretch;
```
##### output
```scss
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
```
###### Support shorthand.
```scss
@include tj.stretch(10px);
// => top: 10px; right: 10px; bottom: 10px; left: 10px;

@include tj.stretch(10px, 50px);
// => top: 10px; right: 50px; bottom: 10px; left: 50px;

@include tj.stretch(10px, 50px, 100px);
// => top: 10px; right: 50px; bottom: 100px; left: 50px;

@include tj.stretch(10px, 50px, 100px, 200px);
// => top: 10px; right: 50px; bottom: 100px; left: 200px;
```

#### triangle(direction, color, width [, height=width/2])
###### direction
- top
- right
- bottom
- left
- top-left
- top-right
- bottom-left
- bottom-right

##### source
```scss
@include tj.triangle(top, #000, 30px);
```
##### output
```scss
border-style: solid;
height: 0;
width: 0;
border-color: transparent transparent #000 transparent;
border-width: 0 15px 15px 15px;
```

#### column(count, gap[, fix=0])
##### source
```scss
.column {
    @include tj.column(4, 10px);
}
```
##### output
```css
.column {
    width: calc(25% - 7.5px);
}
.column:not(:nth-child(4n)) {
    margin-right: 10px;
}
```

#### animate(options)
##### source
```scss
.a {
    @include tj.animate(1s infinite) {
        from{ width: 0 }
        to{ width: 100% }
    }
}
```
##### output
```css
.a {
    animation: __ANIMATE__u0bd4b920 1s infinite; /* 👈 "__ANIMATE__u0bd4b920" is unique. */
}

@keyframes __ANIMATE__u0bd4b920 {
    from{ width: 0 }
    to{ width: 100% }
}
```

### module alias

#### [minireset](https://jgthms.com/minireset.css/) - A tiny modern CSS reset
```scss
@use 'thejungle/reset';
```
#### [include-media](https://eduardoboucas.github.io/include-media/) - Simple, elegant and maintainable media queries in Sass
```scss
@use 'thejungle/media';
```
#### [easings-css](https://github.com/jacobbuck/easings-css) - Easing functions for CSS.
```scss
@use 'thejungle/easings';
```

## License
MIT
