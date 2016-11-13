const last_one_of = require('./libs/last_one_of')

function lastLine(string) {
	return last_one_of(string.split('\n'))
}

String.prototype.__defineGetter__('lastLine', function () {
	return lastLine(this)
})
