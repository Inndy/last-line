require('..') // last-line module

module.exports = {
    easy: function (test) {
        test.equals('foo\nbar'.lastLine, 'bar')
		const s = `This
		is
		a
		multi-line
xxxxxxxxstring!`
        test.equals(s.lastLine, 'xxxxxxxxstring!')
        test.done()
    },
	single_line: function (test) {
		test.equals('aaaa'.lastLine, 'aaaa')
		test.equals('aaaa\0bbbb'.lastLine, 'aaaa\0bbbb')
        test.done()
	},
	cjk_characters: function (test) {
		test.equals('aaaa中文字'.lastLine, 'aaaa中文字')
        test.done()
	},
	unprintable: function (test) {
		test.equals('\0\u0001\u0087\n\t\n\u0011'.lastLine, '\u0011')
		test.done()
	},
	empty_string: function (test) {
		test.equals(''.lastLine, '')
		test.done()
	},
	long_line: function (test) {
		var long_string = new Array(1025).join('A')
		long_string += long_string // 2048
		long_string += long_string // 4096
		long_string += long_string // 8192
		long_string += long_string // 16384

		test.ok(long_string.lastLine.match(/^A{16384}$/m) != null)
		test.done()
	}
}
