const boxen = require('boxen')
const project = require('../package.json');

console.log(
    boxen(
        project.name + ' v' + project.version + '\n' + project.description, {
        padding: {
            left: 20,
            right: 20,
            top: 1,
            bottom: 1
        },
        margin: 1,
        borderStyle: 'round',
        align: 'center'
    })
)

console.log(' - Author: ' + project.author)
console.log(' - License: ' + project.license)
console.log(' - Repository: ' + project.homepage)
console.log('\n')


