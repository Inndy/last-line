require('.')

const s = `This
is
a
multi-line
string!`

if (s.lastLine === 'string!') {
	console.log('Test passed! (1/1)')
} else {
	console.log('Test case #1 failed (0/1)')
}
