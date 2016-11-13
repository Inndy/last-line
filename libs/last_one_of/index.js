module.exports = function (list) {
	if (list.length > 0) {
		return list[list.length - 1]
	} else {
		return null
	}
}
