# thejungle

![bengi](./thejungle.png)

scss utility functions and mixins

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

## Function
### em(px [, base=16px])
Convert pixel to em.
```scss
.a{
  font-size: em(12px); // => 0.75em

  .b{
    font-size: em(10px, 12px); // => 0.833em
  }
}
```

### rem(px [, base])
Convert pixel to rem.
```scss
.a{
  font-size: rem(12px); // => 0.75rem

  .b{
    font-size: em(10px, 12px); // => 0.833rem
  }
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
- right - 🞂
- bottom - 🞃
- left - 🞀
- top-left - ◤
- top-right - ◥
- bottom-left - ◣
- bottom-right - ◢

---

## License
MIT
