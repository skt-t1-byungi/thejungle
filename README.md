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
@use 'thejungle' as *;

// or
@use 'thejungle' as tj;
```

## API

### functions

#### em(px [, base=16px])
```scss
.a {
    font-size: em(12px); // => 0.75em

    .b {
        font-size: em(10px, 12px); // => 0.833em
    }
}
```

#### rem(px [, base])
```scss
.a {
    font-size: rem(12px); // => 0.75rem

    .b {
        font-size: em(10px, 12px); // => 0.833rem
    }
}
```

#### between(from, to [, from-screen=320px, to-screen=1200px])
Returns a formula that satisfies values ​​at each screen.

```scss
.a {
    font-size: between(10px, 100px, 400px, 1000px); // => calc(15vw - 50px);
}
```


### mixins

#### size(width [, height=width])
```scss
.a {
    @include size(50px) // => width: 50px; height: 50px;
}

.b {
    @include size(50px, 100px) // => width: 50px; height: 100px;
}
```

#### text-hide()
##### input
```scss
.a {
    @include text-hide()
}
```
##### output
```css
.a {
    overflow: hidden;
    text-indent: -9999px;
}
```

#### ellipsis(width)
##### input
```scss
.a {
    @include ellipsis(100px)
}
```
##### output
```css
.a {
    max-width: 100px;
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
```

#### clearfix
##### input
```scss
.a {
    @include clearfix
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
##### input
```scss
.a {
    @include stretch
}
```
##### output
```css
.a {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}
```
###### Support shorthand.
```scss
.a {
    @include stretch(10px)
    // => top: 10px; right: 10px; bottom: 10px; left: 10px;

    @include stretch(10px, 50px)
    // => top: 10px; right: 50px; bottom: 10px; left: 50px;

    @include stretch(10px, 50px, 100px)
    // => top: 10px; right: 50px; bottom: 100px; left: 50px;

    @include stretch(10px, 50px, 100px, 200px)
    // => top: 10px; right: 50px; bottom: 100px; left: 200px;
}
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

##### input
```scss
.a {
    @include triangle(top, #000, 30px)
}
```
##### output
```css
.a {
    border-style: solid;
    height: 0;
    width: 0;
    border-color: transparent transparent #000 transparent;
    border-width: 0 15px 15px 15px;
}
```


#### column(count, gap[, fix=0])
##### input
```scss
.column {
    @include column(4, 10px)
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
##### input
```scss
.a {
    @include animate(1s infinite) {
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
