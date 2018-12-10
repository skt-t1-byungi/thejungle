# thejungle

![bengi](./thejungle.png)

scss utility functions and mixins

[![npm](https://img.shields.io/npm/v/thejungle.svg?style=flat-square)](https://www.npmjs.com/package/thejungle)
[![npm](https://img.shields.io/npm/dt/thejungle.svg?style=flat-square)](https://www.npmjs.com/package/thejungle)


## Install
```sh
yarn add thejungle
```

```scss
// If use sass-loader,
@import '~thejungle';

// others
@import 'node_modules/thejungle/thejungle';
```
---

## Loader
### minireset
[minireset](https://jgthms.com/minireset.css/) - A tiny modern CSS reset

```scss
@import '~thejungle/reset';
// or
@import 'node_modules/thejungle/reset';
```

### include-media
[include-media](https://include-media.com/) - Simple, elegant and maintainable media queries in Sass

```scss
@import '~thejungle/media';
// or
@import 'node_modules/thejungle/media';
```

### easings-css
[easings-css](https://github.com/jacobbuck/easings-css) -Easing functions for CSS.

```scss
@import '~thejungle/easings';
// or
@import 'node_modules/thejungle/easings';
```

## Function
### em(size [, base=16px])
Convert size to em.
```scss
.a{
    font-size: em(12px); // => 0.75em

    .b{
        font-size: em(10px, 12px); // => 0.833em
    }
}
```

### rem(size [, base])
Convert size to rem.
```scss
.a{
    font-size: rem(12px); // => 0.75rem

    .b{
        font-size: em(10px, 12px); // => 0.833rem
    }
}
```

### between(from, to [, from-screen=320px, to-screen=1200px])
Convert a formula that satisfy between the two values.
```scss
.a{
    font-size: between(10px, 100px, 400px, 1000px); // => calc(15vw - 50px);
}
```

## Mixin
### size(width [, height=width])
Set a size.
```scss
.a{
    @include size(50px) // => width: 50px; height: 50px;
}
.b{
    @include size(50px, 100px) // => width: 50px; height: 100px;
}
```

### text-hide()
Hide text.
```scss
// input
.a{
    @include text-hide()
}

// output
.a{
    overflow: hidden;
    text-indent: -9999px;
}
```

### ellipsis(width)
Set an ellipsis effect.
```scss
// input
.a{
    @include ellipsis(100px)
}

// output
.a{
    max-width: 100px;
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
```

### clearfix
Set a clearfix.
```scss
// input
.a{
    @include clearfix
}

// output
.a::after{
    content: '';
    display: block;
    clear: both;
}
```

### stretch([top=0, right=top, bottom=top, left=top])
Stretch a block.
```scss
// input
.a{
    @include stretch
}

// output
.a{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}
```

Support shorthand.
```scss
.a{
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

### triangle(direction, color, width [, height=width/2])
Apply a triangle shape.
```scss
// input
.a{
    @include triangle(top, #000, 30px)
}

// output
.a{
    border-style: solid;
    height: 0;
    width: 0;
    border-color: transparent transparent #000 transparent;
    border-width: 0 15px 15px 15px;
}
```
#### direction
- top - ▲
- right - ►
- bottom - ▼
- left - ◄
- top-left - ◤
- top-right - ◥
- bottom-left - ◣
- bottom-right - ◢


### column(count, gap[, fix=0])
Set a column.
```scss
// input
.column{
    @include column(4, 10px, -0.001px)
}

// output
.column {
    width: calc(25% - 7.5px);
}
.column:not(:nth-child(4n)) {
    margin-right: 9.999px;
}
```

### animate(options)
Sets a one-time keyframe animation.

```scss
// input
.a{ 
    @include animate(1s infinite){
        from{ width: 0 }
        to{ width: 100% }
    }
}

// output
.a{ 
    animation: __ANIMATE__u0bd4b920 1s infinite; // Create unique keyframe ID.
}
@keyframes __ANIMATE__u0bd4b920 {
    from{ width: 0 }
    to{ width: 100% }
}
```

## License
MIT
