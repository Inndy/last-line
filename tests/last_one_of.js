const last_one_of = require('../libs/last_one_of')

module.exports = {
	empty: function (test) {
		test.equals(last_one_of([]), undefined)
		test.done()
	},
	single_element: function (test) {
		test.equals(last_one_of([689]), 689)
		test.equals(last_one_of([87]), 87)
		test.equals(last_one_of([71.22]), 71.22)
		test.done()
	},
	easy: function (test) {
		test.equals(last_one_of([1,2,3,4]), 4)
		test.done()
	},
	arguments: function (test) {
		test.equals(last_one_of(arguments), test)
		test.done()
	},
	buffer: function (test) {
		const buff = new Buffer(66666666)
		test.equals(last_one_of(buff), buff[66666665])
		test.done()
	},
	string_ascii: function (test) {
		test.equals(last_one_of('68987'), '7')
		test.equals(last_one_of('...---...'), '.')
		test.done()
	},
	string_cjk: function (test) {
		test.equals(last_one_of('948794狂'), '狂')
		test.done()
	}
}
