const test = require('ava') // eslint-disable-line
const sass = require('node-sass')

const render = code => sass.renderSync({
    data: `
    @import 'thejungle';
    ${code}`,
    includePaths: ['./thejungle.scss'],
    outputStyle: 'compressed',
    precision: 3
}).css.toString()

module.exports = (desc, ipt, expected) => test(desc, t => t.is(render(ipt), render(expected)))
