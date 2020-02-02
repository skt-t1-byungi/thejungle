const test = require('ava') // eslint-disable-line
const sass = require('node-sass')

const render = code => sass.renderSync({
    data: `@import 'thejungle';${code}`,
    includePaths: ['./thejungle.scss'],
    outputStyle: 'compressed',
    precision: 3
}).css.toString()

const t = module.exports = (desc, ipt, expected) => test(desc, t => { t.is(render(ipt), render(expected)) })
t.regex = (desc, ipt, regex) => test(desc, t => { t.regex(render(ipt), regex) })
