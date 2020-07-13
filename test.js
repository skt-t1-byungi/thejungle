const { renderSync } = require('node-sass')
const { diff } = require('css-isolate')

const parse = scss => renderSync({
    data: `@import 'thejungle'; ${scss}`,
    includePaths: ['./thejungle.scss'],
    outputStyle: 'compressed',
    precision: 3
}).css.toString()

test.each([
    ['em',
        `.a{
            font-size: em(12px);
            .b{
                font-size: em(10px, 12px);
            }
        }`,
        `.a{ font-size:  .75em }
        .a .b{ font-size: .833em}`],
    ['rem',
        `.a{
            font-size: rem(12px);
            .b{
                font-size: rem(10px, 12px);
            }
        }`,
        `.a{ font-size:  .75rem }
        .a .b{ font-size: .833rem}`],
    ['between',
        '.a{ font-size: between(10px, 100px, 400px, 1000px) }',
        '.a{ font-size: calc(15vw - 50px)}'],
    ['size #1',
        '.a{ @include size(50px) }',
        '.a{ width: 50px; height: 50px }'],
    ['size #2',
        '.a{ @include size(50px, 100px) }',
        '.a{ width: 50px; height: 100px }'],
    ['text-hide',
        '.a{ @include text-hide() }',
        '.a{ overflow: hidden; text-indent: -9999px }'],
    ['ellipsis',
        '.a{ @include ellipsis(100px) }',
        `.a{
                display: inline-block;
                max-width: 100px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }`],
    ['clearfix',
        '.a{ @include clearfix }',
        `.a::after{
            content: '';
            display: block;
            clear: both;
        }`],
    ['stretch',
        '.a{ @include stretch }',
        `.a{
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
        }`],
    ['stretch #shorthand - 1',
        '.a{ @include stretch(10px) }',
        `.a{
            position: absolute;
            top: 10px;
            right: 10px;
            bottom: 10px;
            left: 10px;
        }`],
    ['stretch #shorthand - 2',
        '.a{ @include stretch(10px, 50px) }',
        `.a{
            position: absolute;
            top: 10px;
            right: 50px;
            bottom: 10px;
            left: 50px;
        }`],
    ['stretch #shorthand - 3',
        '.a{ @include stretch(10px, 50px, 100px) }',
        `.a{
            position: absolute;
            top: 10px;
            right: 50px;
            bottom: 100px;
            left: 50px;
        }`],
    ['stretch #shorthand - 4',
        '.a{ @include stretch(10px, 50px, 100px, 200px) }',
        `.a{
            position: absolute;
            top: 10px;
            right: 50px;
            bottom: 100px;
            left: 200px;
        }`],
    ['triangle #top',
        '.a{ @include triangle(top, #000, 30px) }',
        `.a{
            border-style: solid;
            height: 0;
            width: 0;
            border-color: transparent transparent #000 transparent;
            border-width: 0 15px 15px 15px;
        }`],
    ['column',
        '.a{ @include column(4, 10px) }',
        `.a { width: calc(25% - 7.5px); }
        .a:not(:nth-child(4n)) { margin-right: 10px; }`],
    ['column #fixed',
        '.a{ @include column(4, 10px, -0.001px) }',
        `.a { width: calc(25% - 7.5px); }
        .a:not(:nth-child(4n)) { margin-right: 9.999px; }`]
])('%s', (_, scss, expected) => {
    expect(diff(parse(scss), expected)).toBeFalsy()
})

test('animate', () => {
    const scss = `
    .a{
        @include animate(1s infinite){
            from{width: 0}
            to{width: 100%}
        }
    }`
    expect(parse(scss)).toMatch(/\.a{animation:THE_JUNGLE__ANIMATE__(\S+?) 1s infinite}@keyframes THE_JUNGLE__ANIMATE__\1{from{width:0}to{width:100%}}/)
})
