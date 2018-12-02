const test = require('./helpers')

test('em',
    `.a{ 
        font-size: em(12px);
        .b{
            font-size: em(10px, 12px);
        }
    }`,
    `.a{ font-size:  .75em }
    .a .b{ font-size: .833em}`
)

test('rem',
    `.a{ 
        font-size: rem(12px);
        .b{
            font-size: rem(10px, 12px);
        }
    }`,
    `.a{ font-size:  .75rem }
    .a .b{ font-size: .833rem}`
)

test('between',
    `.a{ font-size: between(10px, 100px, 400px, 1000px) }`,
    `.a{ font-size: calc(15vw - 50px)}`
)

test('size #1',
    `.a{ @include size(50px) }`,
    `.a{ width: 50px; height: 50px }`
)

test('size #2',
    `.a{ @include size(50px, 100px) }`,
    `.a{ width: 50px; height: 100px }`
)

test('text-hide',
    `.a{ @include text-hide() }`,
    `.a{ overflow: hidden; text-indent: -9999px }`
)

test('ellipsis',
    `.a{ @include ellipsis(100px) }`,
    `.a{
        display: inline-block;
        max-width: 100px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }`
)

test('clearfix',
    `.a{ @include clearfix }`,
    `.a::after{
        content: '';
        display: block;
        clear: both;
    }`
)

test('stretch',
    `.a{ @include stretch }`,
    `.a{
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }`
)

test('stretch #shorthand - 1',
    `.a{ @include stretch(10px) }`,
    `.a{
        position: absolute;
        top: 10px;
        right: 10px;
        bottom: 10px;
        left: 10px;
    }`
)

test('stretch #shorthand - 2',
    `.a{ @include stretch(10px, 50px) }`,
    `.a{
        position: absolute;
        top: 10px;
        right: 50px;
        bottom: 10px;
        left: 50px;
    }`
)

test('stretch #shorthand - 3',
    `.a{ @include stretch(10px, 50px, 100px) }`,
    `.a{
        position: absolute;
        top: 10px;
        right: 50px;
        bottom: 100px;
        left: 50px;
    }`
)

test('stretch #shorthand - 4',
    `.a{ @include stretch(10px, 50px, 100px, 200px) }`,
    `.a{
        position: absolute;
        top: 10px;
        right: 50px;
        bottom: 100px;
        left: 200px;
    }`
)

test('triangle #top',
    `.a{ @include triangle(top, #000, 30px) }`,
    `.a{
        border-style: solid;
        height: 0;
        width: 0;
        border-color: transparent transparent #000 transparent;
        border-width: 0 15px 15px 15px;
    }`
)

test('column',
    `.a{ @include column(4, 10px) }`,
    `.a {
        width: calc(25% - 7.5px);
    }
    .a:not(:nth-child(4n)) {
        margin-right: 10px;
    }`
)

test.regex('animate',
    `.a{ 
        @include animate(1s infinite){
            from{width: 0}
            to{width: 100%}
        }
    }`,
    /\.a{animation:__ANIMATE__(\S+?) 1s infinite}@keyframes __ANIMATE__\1{from{width:0}to{width:100%}}/)
