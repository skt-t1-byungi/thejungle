# thejungle

![bengi](./thejungle.png)

scss utility functions and mixins.

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
## Usage

### Function
#### em(px[, base = 16px])
Convert pixel to em.
```scss
.a{
  font-size: em(12px); // => 0.75em

  .b{
    font-size: em(10px, 12px); // => 0.833em
  }
}
```

#### rem(px[, base])
Convert pixel to rem.
```scss
.a{
  font-size: rem(12px); // => 0.75rem

  .b{
    font-size: em(10px, 12px); // => 0.833rem
  }
}
```

### Mixin
#### size(width[, height = width])
Set a size.
```scss
.a{
  @include size(50px) // => width: 50px; height: 50px;
}
.b{
  @include size(50px, 100px) // => width: 50px; height: 100px;
}
```

#### ellipsis([max-width])
Set an ellipsis effect.
```scss
// input
.a{
  @include ellipsis(100px)
}

// output
.a{
  max-width: 100px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
```

If no max-width
```scss
.a{
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
```

#### clearfix
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

#### stretch(top, right, bottom, left)
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

#### triangle(direction, color, width[, height = width/2])
Apply a triangle shape.
```scss
// input
.a{
  @include triangle(top, #000, 30px)
}

// output
.a{
  height: 0;
  width: 0;
  border-bottom: 30px solid #000;
  border-left: 15px solid #000;
  border-right: 15px solid #000;
}
```

### Importer
#### [minireset](https://github.com/jgthms/minireset.css/)
```scss
@import '~thejungle/reset';
```
#### [include-media](https://github.com/eduardoboucas/include-media/)
```scss
@import '~thejungle/media';
```

## License
MIT
