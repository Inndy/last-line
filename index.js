String.prototype.__defineGetter__('lastLine', function () {
	var lines = this.split('\n')
	return lines[lines.length - 1]
})
